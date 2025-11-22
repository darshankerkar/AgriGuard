import React from 'react';

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 relative">
            {/* Background Blobs */}
            <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 -left-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-40 right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <section className="relative z-10 max-w-4xl mx-auto p-6 mt-8">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">User Profile & Settings</h1>

                    {/* User Info */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-700">Account Information</h2>
                            <p className="text-gray-600">Name: <span className="font-medium">John Doe</span></p>
                            <p className="text-gray-600">Email: <span className="font-medium">john.doe@example.com</span></p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-700">Preferences</h2>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Theme</span>
                                <select className="bg-white/80 backdrop-blur-md border border-gray-200 rounded px-2 py-1">
                                    <option>Light</option>
                                    <option>Dark</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Notifications</span>
                                <select className="bg-white/80 backdrop-blur-md border border-gray-200 rounded px-2 py-1">
                                    <option>All</option>
                                    <option>Important Only</option>
                                    <option>None</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Insights Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-700">Insights & Activity</h2>
                        <p className="text-gray-600">Your recent diagnoses, saved reports, and personalized recommendations will appear here.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfilePage;
