import React from 'react';
// in slots in next js  make asure to use the same name as the layout file  not page file
export default function NotificationDashboardLayout({ children, notification, user, post }) {
  return (
    <div className="min-h-screen bg-red-50 text-amber-900 p-6 space-y-6">
      
      {/* Notification */}
      <section className="bg-white rounded-xl shadow-md p-4 border-l-4 border-amber-500">
        <h2 className="text-lg font-semibold mb-2">Notification</h2>
        <div>{notification || 'No notification available'}</div>
      </section>

      {/* User Info */}
      <section className="bg-white rounded-xl shadow-md p-4 border-l-4 border-amber-500">
        <h2 className="text-lg font-semibold mb-2">User</h2>
        <div>{user || 'No user data available'}</div>
      </section>

      {/* Post Info */}
      <section className="bg-white rounded-xl shadow-md p-4 border-l-4 border-amber-500">
        <h2 className="text-lg font-semibold mb-2">Post</h2>
        <div>{post || 'No post content available'}</div>
      </section>

      {/* Main Content (Children) */}
      <section className="bg-white rounded-xl shadow-md p-4 border-l-4 border-amber-500">
        <h2 className="text-lg font-semibold mb-2">Dashboard Content</h2>
        <div>{children || 'No additional content'}</div>
      </section>

    </div>
  );
}

