/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, HelpCircle } from 'lucide-react';
import { UserProfile, ChatMessage } from '../types';

interface CareerChatProps {
  userProfile: UserProfile;
}

export default function CareerChat({ userProfile }: CareerChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hello! I am your AI Career Advisor. I have analyzed your profile (${userProfile.gender}, ${userProfile.age} yrs from ${userProfile.state || 'West Bengal'}). \n\nAsk me anything about eligibility criteria, preparation tips, global teaching certifications, language pathways, or competitive business exams! I provide direct, clear answers tailored to your specific parameters.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          userProfile
        })
      });

      if (!response.ok) {
        throw new Error('Chat gateway error');
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: Math.random().toString(),
        role: 'assistant',
        content: data.response || "I apologize, I am experiencing a small connection gap. Please try compiling my guidance again.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch {
      // Graceful fallback for demo
      const fallbackMsg: ChatMessage = {
        id: Math.random().toString(),
        role: 'assistant',
        content: `I'm currently running in local demonstration mode. To get real-time dynamic AI career consulting powered by Gemini, make sure your **GEMINI_API_KEY** is configured in AI Studio's Secrets settings! \n\nBased on your selected state (${userProfile.state}), you should look closely at **WBCS Executive** and **WBPSC Clerkship** which has an accommodating age limit up to 40, and the **UPSC CSE** or **SSC CGL** which are absolutely Rs.0 free for all female applicants!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="ai_chat_section" className="flex flex-col h-[580px] bg-white border-2 border-slate-900 rounded-xs shadow-xs overflow-hidden font-sans">
      {/* Advisor Header */}
      <div className="bg-slate-900 px-5 py-3 flex items-center justify-between text-white border-b border-slate-900">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-500/20 p-1.5 rounded-xs border border-indigo-400/30 text-indigo-300">
            <Sparkles className="h-4.5 w-4.5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#818cf8]">Aegis Advisor Node</h3>
            <p className="text-[10px] text-slate-400">Contextual Compliance Brain</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] uppercase tracking-wide font-mono rounded-xs font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          SYS.ADVISOR_READY
        </div>
      </div>

      {/* Messages Scrolling Grid */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50 border-b border-slate-200">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3.5 max-w-[90%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
          >
            <div className={`p-1.5 rounded-xs shrink-0 h-8 w-8 flex items-center justify-center border ${
              msg.role === 'user' 
                ? 'bg-slate-200 text-slate-800 border-slate-400' 
                : 'bg-indigo-100 text-indigo-800 border-indigo-200'
            }`}>
              {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
            </div>
            
            <div className={`rounded-xs px-3.5 py-2.5 text-xs leading-relaxed shadow-xs whitespace-pre-wrap select-text border ${
              msg.role === 'user'
                ? 'bg-slate-900 border-slate-950 text-white'
                : 'bg-white border-slate-300 text-slate-800'
            }`}>
              {msg.content}
              <div className={`text-[9px] mt-1.5 block text-right font-mono ${msg.role === 'user' ? 'text-indigo-300' : 'text-slate-400'}`}>
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3 max-w-[80%] mr-auto items-center">
            <div className="p-1.5 rounded-xs shrink-0 h-8 w-8 flex items-center justify-center bg-indigo-100 text-indigo-800 border border-indigo-200">
              <Bot className="h-4 w-4" />
            </div>
            <div className="bg-white border border-slate-300 rounded-xs px-4 py-2 shadow-xs flex items-center gap-2">
              <Loader2 className="h-3.5 w-3.5 animate-spin text-indigo-500" />
              <span className="text-[11px] text-slate-500 font-mono">ADVISOR_COMPUTING_MATRIX_LOGIC...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Core Form Input */}
      <form
        id="chat_form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(input);
        }}
        className="p-3 bg-white flex gap-2 border-t border-slate-200"
      >
        <input
          id="chat_input_field"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask about system eligibility indices, SC/ST waivers...`}
          disabled={isLoading}
          className="flex-1 px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:bg-white text-xs"
        />
        <button
          id="chat_send_button"
          type="submit"
          disabled={!input.trim() || isLoading}
          className="px-4 py-2 bg-slate-900 border border-transparent text-white text-xs rounded-xs font-black uppercase tracking-tight hover:bg-slate-800 transition-all disabled:opacity-50 flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>Send</span>
          <Send className="h-3 w-3" />
        </button>
      </form>
    </div>
  );
}
