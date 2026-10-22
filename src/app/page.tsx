'use client';

import Sidebar from '@/components/Sidebar';
import ChatArea from '@/components/ChatArea';
import { useState } from 'react';

export default function Home() {
  const [activeChatId, setActiveChatId] = useState<number | null>(null);

  return (
    <main className="flex h-screen w-full overflow-hidden bg-gray-100">
      <div className="flex w-full max-w-[1600px] mx-auto shadow-xl">
        <Sidebar onSelectChat={setActiveChatId} activeChatId={activeChatId} />
        <ChatArea chatId={activeChatId} />
      </div>
    </main>
  );
}
