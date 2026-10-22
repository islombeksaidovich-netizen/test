'use client';

import { Menu, Search } from 'lucide-react';
import { useState } from 'react';

const MOCK_CHATS = [
  { id: 1, name: 'Saved Messages', lastMessage: 'document.pdf', time: '10:42', unread: 0 },
  { id: 2, name: 'Alice', lastMessage: 'Hey, how are you?', time: '09:15', unread: 2 },
  { id: 3, name: 'React Developers', lastMessage: 'Has anyone tried Next.js 15?', time: 'Yesterday', unread: 15 },
  { id: 4, name: 'Bob', lastMessage: 'Ok, see you later', time: 'Yesterday', unread: 0 },
];

export default function Sidebar({ onSelectChat, activeChatId }: { onSelectChat: (id: number) => void, activeChatId: number | null }) {
  const [search, setSearch] = useState('');

  return (
    <div className="w-80 h-screen bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
      {/* Header */}
      <div className="p-3 flex items-center gap-4 border-b border-gray-100">
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-100 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3390ec] focus:bg-white transition-colors"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {MOCK_CHATS.filter(c => c.name.toLowerCase().includes(search.toLowerCase())).map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`flex items-center gap-3 p-2.5 cursor-pointer hover:bg-gray-50 transition-colors ${activeChatId === chat.id ? 'bg-[#3390ec] text-white hover:bg-[#3390ec]' : ''}`}
          >
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
              {chat.name.charAt(0)}
            </div>

            {/* Chat Info */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className={`font-semibold text-sm truncate ${activeChatId === chat.id ? 'text-white' : 'text-gray-900'}`}>{chat.name}</h3>
                <span className={`text-xs ${activeChatId === chat.id ? 'text-blue-100' : 'text-gray-500'}`}>{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className={`text-sm truncate ${activeChatId === chat.id ? 'text-blue-100' : 'text-gray-500'}`}>
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center ${activeChatId === chat.id ? 'bg-white text-[#3390ec]' : 'bg-[#3390ec] text-white'}`}>
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
