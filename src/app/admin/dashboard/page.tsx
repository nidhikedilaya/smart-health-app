"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function AdminDashboard() {
  // Mock data for system statistics
  const stats = [
    { name: "Total Patients", value: "1,234" },
    { name: "Active Diagnoses", value: "56" },
    { name: "ML Model Accuracy", value: "94.5%" },
    { name: "System Uptime", value: "99.9%" },
  ];

  // Mock data for recent activities
  const recentActivities = [
    {
      id: 1,
      type: "New Patient",
      description: "John Doe registered",
      timestamp: "2024-03-15 14:30",
    },
    {
      id: 2,
      type: "Model Update",
      description: "ML model accuracy improved to 94.5%",
      timestamp: "2024-03-15 13:15",
    },
    {
      id: 3,
      type: "Diagnosis",
      description: "New diagnosis completed for Jane Smith",
      timestamp: "2024-03-15 12:45",
    },
  ];

  return (
    <ProtectedRoute requireAdmin>
      <div className="min-h-screen bg-gray-100">
        <Navigation isAdmin />

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Quick Actions */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Quick Actions
                  </h3>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Link
                      href="/admin/patients"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Manage Patients
                    </Link>
                    <Link
                      href="/admin/models"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Manage ML Models
                    </Link>
                    <Link
                      href="/admin/settings"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      System Settings
                    </Link>
                    <Link
                      href="/admin/reports"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
                    >
                      View Reports
                    </Link>
                  </div>
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Recent Activities
                  </h3>
                  <div className="mt-4">
                    <div className="flow-root">
                      <ul className="-my-5 divide-y divide-gray-200">
                        {recentActivities.map((activity) => (
                          <li key={activity.id} className="py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {activity.type}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {activity.description}
                                </p>
                              </div>
                              <div className="flex-shrink-0 text-sm text-gray-500">
                                {activity.timestamp}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/admin/activities"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View all activities
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
