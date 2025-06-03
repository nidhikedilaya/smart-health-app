"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function UserDashboard() {
  // Mock data for recent diagnoses
  const recentDiagnoses = [
    {
      id: 1,
      date: "2024-03-15",
      symptoms: "Fever, Cough, Fatigue",
      diagnosis: "Common Cold",
      confidence: 0.95,
    },
    {
      id: 2,
      date: "2024-03-10",
      symptoms: "Headache, Nausea",
      diagnosis: "Migraine",
      confidence: 0.88,
    },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <Navigation />

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Quick Actions */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Quick Actions
                  </h3>
                  <div className="mt-4 space-y-4">
                    <Link
                      href="/diagnosis"
                      className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                      New Diagnosis
                    </Link>
                    <Link
                      href="/history"
                      className="block w-full text-center bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                    >
                      View History
                    </Link>
                  </div>
                </div>
              </div>

              {/* Recent Diagnoses */}
              <div className="bg-white overflow-hidden shadow rounded-lg sm:col-span-2">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Recent Diagnoses
                  </h3>
                  <div className="mt-4">
                    <div className="flow-root">
                      <ul className="-my-5 divide-y divide-gray-200">
                        {recentDiagnoses.map((diagnosis) => (
                          <li key={diagnosis.id} className="py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {diagnosis.diagnosis}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {diagnosis.symptoms}
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  {Math.round(diagnosis.confidence * 100)}%
                                  confidence
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/history"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View all diagnoses
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
