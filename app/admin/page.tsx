"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Calendar, MapPin, Phone, User, CheckCircle2, XCircle, ShieldAlert, Sparkles, Clock, RefreshCw } from "lucide-react";

type Booking = {
  _id: string;
  customer_name: string;
  customer_phone: string;
  customer_address: string;
  customer_area: string;
  device_id?: {
    name: string;
    brandId?: {
      name: string;
    };
  };
  selectedServices?: {
    hardware?: Array<{ name: string; price: number }>;
    software?: Array<{ name: string; price: number }>;
  };
  custom_issue_description?: string;
  booking_date?: string;
  booking_time?: string;
  status: string;
  payment_status: string;
  createdAt: string;
};

// Admin dashboard removed from public build (WhatsApp-only booking required).
export default function AdminDashboard() {

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const router = useRouter();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/bookings");
      if (!res.ok) {
        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }
        throw new Error("Failed to fetch bookings");
      }
      const data = await res.json();
      setBookings(data.bookings || []);
    } catch (err) {
      console.error(err);
      alert("Error loading bookings");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, updates: { status?: string; payment_status?: string }) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });

      if (!res.ok) throw new Error("Failed to update status");

      // Update local state
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, ...updates } : b))
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update booking");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredBookings = bookings.filter((b) => {
    if (filterStatus === "all") return true;
    return b.status === filterStatus;
  });

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    completed: bookings.filter((b) => b.status === "completed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  };

  const formatBookingDate = (dateStr?: string) => {
    if (!dateStr) return "N/A";
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
    } catch {
      return dateStr;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 font-bold text-black">
              CC
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Cell Custody Admin</h1>
              <p className="text-xs text-gray-500">Nagpur Doorstep Repair Management</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-red-50 hover:text-red-600"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Bookings" value={stats.total} icon={<Calendar className="text-blue-500" />} />
          <StatCard title="Pending Repairs" value={stats.pending} icon={<Clock className="text-yellow-500" />} />
          <StatCard title="Completed Repairs" value={stats.completed} icon={<CheckCircle2 className="text-green-500" />} />
          <StatCard title="Cancelled" value={stats.cancelled} icon={<XCircle className="text-red-500" />} />
        </div>

        {/* Filters and Table */}
        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-bold text-gray-900">Repair Orders</h2>
            
            <div className="flex items-center gap-3">
              <button
                onClick={fetchBookings}
                className="flex items-center justify-center rounded-xl border border-gray-200 p-2.5 text-gray-600 hover:bg-gray-50 transition"
                title="Refresh Bookings"
              >
                <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
              </button>
              
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-50"
              >
                <option value="all">All Orders</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Bookings List */}
          {loading ? (
            <div className="flex h-64 items-center justify-center text-sm text-gray-500">
              Loading booking records...
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="flex h-64 items-center justify-center text-sm text-gray-500">
              No bookings found matching filters.
            </div>
          ) : (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 pb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    <th className="py-3 pr-4">Customer</th>
                    <th className="py-3 px-4">Device / Issue</th>
                    <th className="py-3 px-4">Address / Slot</th>
                    <th className="py-3 px-4">Payment</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 pl-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredBookings.map((booking) => (
                    <tr key={booking._id} className="hover:bg-gray-50/50 transition duration-150">
                      {/* Customer Details */}
                      <td className="py-4 pr-4">
                        <div className="font-bold text-gray-900">{booking.customer_name}</div>
                        <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                          <Phone size={12} />
                          {booking.customer_phone}
                        </div>
                      </td>

                      {/* Device & Issue */}
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-900">
                          {booking.device_id?.brandId?.name || ""} {booking.device_id?.name || "Unknown Device"}
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          <span className="font-medium text-yellow-600">
                            {booking.selectedServices?.hardware?.[0]?.name || "General Repair"}
                          </span>
                          {booking.custom_issue_description && (
                            <p className="mt-0.5 text-gray-400 italic">
                              "{booking.custom_issue_description}"
                            </p>
                          )}
                        </div>
                      </td>

                      {/* Address & Slot */}
                      <td className="py-4 px-4">
                        <div className="flex items-start gap-1 max-w-[200px]">
                          <MapPin size={14} className="mt-0.5 text-gray-400 flex-shrink-0" />
                          <span className="text-xs text-gray-600">
                            <strong>{booking.customer_area}:</strong> {booking.customer_address}
                          </span>
                        </div>
                        <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-500">
                          <span className="rounded-full bg-slate-100 px-2 py-0.5">
                            {formatBookingDate(booking.booking_date)}
                          </span>
                          <span className="rounded-full bg-slate-100 px-2 py-0.5">
                            {booking.booking_time}
                          </span>
                        </div>
                      </td>

                      {/* Payment Status */}
                      <td className="py-4 px-4">
                        <span
                          onClick={() => {
                            if (updatingId) return;
                            const next = booking.payment_status === "paid" ? "unpaid" : "paid";
                            updateStatus(booking._id, { payment_status: next });
                          }}
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold cursor-pointer select-none transition ${
                            booking.payment_status === "paid"
                              ? "bg-green-100 text-green-700 hover:bg-green-200"
                              : "bg-red-100 text-red-700 hover:bg-red-200"
                          }`}
                        >
                          {booking.payment_status === "paid" ? "Paid" : "Unpaid"}
                        </span>
                      </td>

                      {/* Repair Status */}
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                            booking.status === "completed"
                              ? "bg-green-50 text-green-700"
                              : booking.status === "cancelled"
                              ? "bg-red-50 text-red-700"
                              : "bg-yellow-50 text-yellow-700"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>

                      {/* Status Action Buttons */}
                      <td className="py-4 pl-4 text-right">
                        <div className="flex justify-end gap-1.5">
                          {booking.status === "pending" && (
                            <>
                              <button
                                disabled={updatingId !== null}
                                onClick={() => updateStatus(booking._id, { status: "completed", payment_status: "paid" })}
                                className="rounded-lg bg-green-50 p-2 text-green-600 hover:bg-green-100 hover:text-green-700 transition disabled:opacity-50"
                                title="Mark Complete"
                              >
                                <CheckCircle2 size={16} />
                              </button>
                              <button
                                disabled={updatingId !== null}
                                onClick={() => updateStatus(booking._id, { status: "cancelled" })}
                                className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100 hover:text-red-700 transition disabled:opacity-50"
                                title="Cancel Order"
                              >
                                <XCircle size={16} />
                              </button>
                            </>
                          )}
                          {booking.status !== "pending" && (
                            <button
                              disabled={updatingId !== null}
                              onClick={() => updateStatus(booking._id, { status: "pending" })}
                              className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 hover:text-slate-700 transition disabled:opacity-50 text-xs font-semibold"
                            >
                              Re-open
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function StatCard({ title, value, icon }: { title: string; value: number; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 text-xl">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
    </div>
  );
}
