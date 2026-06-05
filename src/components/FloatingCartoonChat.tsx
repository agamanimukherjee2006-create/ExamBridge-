/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Sparkles, HelpCircle, ArrowRight, Bot } from 'lucide-react';
import { UserProfile, ChatMessage } from '../types';

interface FloatingCartoonChatProps {
  userProfile: UserProfile;
}

export default function FloatingCartoonChat({ userProfile }: FloatingCartoonChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return [
      {
        id: 'optimus-init',
        role: 'assistant',
        content: `Hi there! 🤖✨ I'm OPTIMUS, your cartoon helper bot! Let's conquer those career mountains!\n\nI see you're starting as a ${userProfile.gender} (${userProfile.age} yrs) from ${userProfile.state}.\n\nAsk me anything about exams, language options, BBA, MBA, or global entrance frameworks! I'm here to translate complex regulations into clear steps!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [bellAlert, setBellAlert] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Turn off notification ping when opening
  useEffect(() => {
    if (isOpen) {
      setBellAlert(false);
    }
  }, [isOpen]);

  const handleSend = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        content: data.response || "Yahoo! I parsed that beautifully. Check out our dynamic matches or tweak your matric levels!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (e) {
      // Friendly cartoon fallback responses based on user keyword search
      let customFallback = `I'm in local demonstration mode, but here is my helper tip! For **B.Tech** graduates, direct entry as a DRDO Scientist 'B' (₹0 application for ladies!) or GATE and private SEO writing form a perfect target stack. For a **Doctor Degree**, CSIR HRDG Research Associateship is a match providing ₹58k stipend!`;
      
      const lower = messageText.toLowerCase();
      if (lower.includes('b.tech') || lower.includes('btech') || lower.includes('engineering')) {
        customFallback = `⚡ B.Tech Spot Alert! As an Engineering major, you have immediate access to the newly updated **DRDO Scientist B Recruitment** with top-tier central pay scales. Also, the GATE screening offers 50% discount registration for ladies!`;
      } else if (lower.includes('doctor') || lower.includes('phd') || lower.includes('doctoral')) {
        customFallback = `🎓 Doctor Degree Pathway: Outstanding choices! You meet or exceed constraints for the **CSIR Senior Research Associateship**, leading to premium positions in national labs. Check the "Higher Study" tab for scholarship networks!`;
      } else if (lower.includes('women') || lower.includes('lady') || lower.includes('female')) {
        customFallback = `🌸 Hey! Did you know UPSC Civil Services, Combined Defence Services (OTA track) and CSIR Associate exams are totally ₹0 (FREE) for all female candidates? Let's get registered!`;
      }

      const fallbackMsg: ChatMessage = {
        id: Math.random().toString(),
        role: 'assistant',
        content: `${customFallback}\n\n*(Tip: Connect your GEMINI_API_KEY in the Secrets setting of AI Studio to get fully custom AI responses here!)*`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Messenger Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-16 w-16 bg-yellow-400 text-slate-900 border-4 border-slate-900 rounded-full flex items-center justify-center cursor-pointer relative shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all ${
            isOpen ? 'rotate-90 bg-rose-400' : 'animate-bounce'
          }`}
          title="Chat with Optimus AI Agent"
        >
          {isOpen ? (
            <X className="h-7 w-7 stroke-[3]" />
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-[9.5px] font-black tracking-tighter uppercase text-slate-900 absolute -top-3.5 bg-yellow-300 border-2 border-slate-900 px-1 rounded-sm">
                OPTIMUS
              </span>
              <Bot className="h-6 w-6 stroke-[2.5]" />
              {bellAlert && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-rose-500 border-2 border-slate-900 rounded-full flex items-center justify-center text-[8px] font-bold text-white animate-pulse">
                  !
                </span>
              )}
            </div>
          )}
        </button>
      </div>

      {/* Floating Cartoon Conversation Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[340px] md:w-[380px] max-h-[500px] h-[500px] bg-amber-50 border-4 border-slate-900 rounded-lg shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] z-50 flex flex-col overflow-hidden font-sans">
          
          {/* Header */}
          <div className="bg-yellow-400 border-b-4 border-slate-900 p-3 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-slate-900 text-yellow-300 rounded-full border-2 border-slate-900 flex items-center justify-center font-black text-xl shadow-xs">
                🤖
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-black text-slate-950 uppercase tracking-tight">OPTIMUS CHATBOT</span>
                  <span className="text-[8px] font-mono px-1 bg-slate-900 text-yellow-400 rounded-xs uppercase leading-none py-0.5">
                    Cartoon v2
                  </span>
                </div>
                <p className="text-[10px] text-slate-800 font-bold">"Your Friendly Match advisor!"</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-900 hover:bg-slate-900/10 rounded-full cursor-pointer"
            >
              <X className="h-5 w-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Scrolling Cartoon Messages Block */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-amber-50/50">
            {messages.map((m) => {
              const isAssistant = m.role === 'assistant';
              return (
                <div key={m.id} className={`flex items-start gap-2 ${isAssistant ? '' : 'flex-row-reverse'}`}>
                  {/* Minified Face Placeholder */}
                  <div className={`h-8 w-8 rounded-full border-2 border-slate-900 flex items-center justify-center font-bold text-xs shrink-0 ${
                    isAssistant ? 'bg-yellow-300 text-slate-900' : 'bg-indigo-300 text-slate-900'
                  }`}>
                    {isAssistant ? '(•‿•)' : '🧑'}
                  </div>

                  {/* Bubble styling */}
                  <div className={`max-w-[75%] p-2.5 rounded-lg text-xs leading-relaxed border-2 border-slate-900 ${
                    isAssistant 
                      ? 'bg-white text-slate-900 rounded-tl-none shadow-[2px_2px_0px_rgba(15,23,42,1)]' 
                      : 'bg-indigo-100 text-slate-900 rounded-tr-none shadow-[2px_2px_0px_rgba(15,23,42,1)]'
                  }`}>
                    <p className="whitespace-pre-wrap font-sans font-medium">{m.content}</p>
                    <span className="block text-[8px] text-slate-500 text-right mt-1 font-mono">{m.timestamp}</span>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full border-2 border-slate-900 bg-yellow-300 flex items-center justify-center text-xs animate-spin font-black">
                  🌀
                </div>
                <div className="max-w-[75%] px-3 py-1.5 bg-white border-2 border-slate-900 text-[10px] font-bold font-mono rounded-lg rounded-tl-none shadow-[2px_2px_0px_rgba(15,23,42,1)] text-slate-700">
                  OPTIMUS_THINKING_MAX_POWER...
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* Form input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-2 bg-white border-t-2 border-slate-900 flex gap-1 items-center"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Optimus anything..."
              className="flex-1 min-w-0 bg-slate-50 border-2 border-slate-900 rounded-md py-1.5 px-2.5 text-xs font-semibold focus:outline-none focus:bg-white"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-3 py-2 bg-yellow-400 text-slate-900 border-2 border-slate-900 font-extrabold text-xs uppercase tracking-tight rounded-md hover:bg-yellow-300 disabled:opacity-50 transition-colors cursor-pointer shrink-0"
            >
              Send
            </button>
          </form>

        </div>
      )}
    </>
  );
}
