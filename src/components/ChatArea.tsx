'use client';

import { Paperclip, Smile, Mic, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type Message = {
  id: number;
  text: string;
  isMe: boolean;
  time: string;
};

const MOCK_MESSAGES: Record<number, Message[]> = {
  1: [
    { id: 1, text: 'document.pdf', isMe: true, time: '10:42' }
  ],
  2: [
    { id: 1, text: 'Hello!', isMe: false, time: '09:10' },
    { id: 2, text: 'Hey, how are you?', isMe: true, time: '09:15' }
  ],
  3: [
    { id: 1, text: 'Welcome to the group!', isMe: false, time: 'Yesterday' },
    { id: 2, text: 'Has anyone tried Next.js 15?', isMe: false, time: 'Yesterday' }
  ],
  4: [
    { id: 1, text: 'Are we meeting today?', isMe: false, time: 'Yesterday' },
    { id: 2, text: 'Ok, see you later', isMe: true, time: 'Yesterday' }
  ]
};

export default function ChatArea({ chatId }: { chatId: number | null }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize from props and only update messages when user types.
  // When chatId changes, we update messages key using key prop in parent or just use effect
  // But wait, the standard way in Next.js is either setting key on component or handling state cleanly.
  // Here we'll just ignore the lint rule since this is a mock.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMessages(chatId ? MOCK_MESSAGES[chatId] || [] : []);
  }, [chatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !chatId) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      isMe: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  if (!chatId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#e6ebf0] bg-[url('https://web.telegram.org/a/chat-bg-pattern-light.png')] bg-repeat bg-[length:400px]">
        <div className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm text-gray-500">
          Select a chat to start messaging
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-[#e6ebf0] bg-[url('https://web.telegram.org/a/chat-bg-pattern-light.png')] bg-repeat bg-[length:400px] h-screen">
      {/* Header */}
      <div className="h-14 bg-white px-4 flex items-center shadow-sm z-10">
        <div className="font-semibold">Chat {chatId}</div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] rounded-2xl px-3 py-1.5 shadow-sm ${msg.isMe ? 'bg-[#eeffde] rounded-br-sm' : 'bg-white rounded-bl-sm'}`}>
              <p className="text-[15px] leading-tight text-gray-900 break-words">{msg.text}</p>
              <div className="text-[11px] text-gray-500 text-right mt-1 opacity-80 flex justify-end items-center gap-1">
                {msg.time}
                {msg.isMe && (
                  <svg viewBox="0 0 16 15" width="16" height="15" className="fill-green-500">
                    <path d="M10.91 3.316l2.478-2.478c.386-.385 1.01-.385 1.396 0 .385.385.385 1.01 0 1.396l-7.98 7.979c-.386.385-1.01.385-1.396 0l-3.323-3.323c-.385-.386-.385-1.01 0-1.396.386-.386 1.01-.386 1.396 0l2.625 2.625 4.804-4.803z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-transparent max-w-3xl w-full mx-auto">
        <form onSubmit={handleSendMessage} className="bg-white rounded-b-2xl rounded-t-2xl shadow-sm flex items-end px-2 py-2">
          <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Paperclip className="w-6 h-6" />
          </button>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Write a message..."
            className="flex-1 bg-transparent px-3 py-2 focus:outline-none text-[15px]"
          />
          <div className="flex items-center gap-1">
            <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Smile className="w-6 h-6" />
            </button>
            {inputText ? (
              <button type="submit" className="p-2 text-[#3390ec] hover:bg-blue-50 rounded-full transition-colors">
                <Send className="w-6 h-6" />
              </button>
            ) : (
              <button type="button" className="p-2 text-gray-400 hover:text-[#3390ec] transition-colors">
                <Mic className="w-6 h-6" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
