'use client';

import { Users, MessageSquare, Settings, Activity } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-2.5 bg-blue-50 text-blue-700 rounded-lg font-medium">
            <Activity className="w-5 h-5" />
            Dashboard
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium transition-colors">
            <Users className="w-5 h-5" />
            Users
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium transition-colors">
            <MessageSquare className="w-5 h-5" />
            Chats
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            &larr; Back to App
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
