
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: 'Witaj! Jestem asystentem Kacpra Wielgusa. Chcesz zapytać o sesję, styl fotografii czy może o dostępny termin?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `Jesteś asystentem profesjonalnego fotografa (Kacpra Wielgusa). Odpowiadaj uprzejmie, profesjonalnie i po polsku. Skup się na pasji Kacpra do światła i autentyczności. Pytanie klienta: ${userMessage}` }] }
        ],
        config: {
            systemInstruction: "Działaj jako profesjonalny doradca klienta w studiu fotograficznym Kacpra Wielgusa. Zachęcaj do współpracy, podkreślając naturalny styl i dbałość o detale."
        }
      });

      const aiText = response.text || "Wystąpił problem z połączeniem. Proszę, napisz do Kacpra przez formularz kontaktowy!";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Obecnie mam trudności z odpowiedzią. Zapraszam do kontaktu mailowego!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-brand-dark border border-white/10 w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-brand-accent p-5 flex justify-between items-center">
            <div className="flex items-center gap-2 text-brand-dark">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-xs">Konsultant AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-brand-dark/70 hover:text-brand-dark">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-black/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-brand-accent text-brand-dark font-medium' : 'bg-white/10 text-white border border-white/5'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl">
                  <Loader2 className="w-4 h-4 animate-spin text-brand-accent" />
                </div>
              </div>
            )}
          </div>

          <div className="p-5 border-t border-white/10 bg-brand-dark">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Zadaj pytanie Kacprowi..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm focus:outline-none focus:border-brand-accent transition-colors"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-brand-accent hover:scale-110 transition-transform disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-brand-accent text-brand-dark p-5 rounded-full shadow-2xl hover:scale-110 transition-all group relative border-4 border-brand-dark"
        >
          <div className="absolute -top-14 right-0 bg-brand-dark text-white text-[10px] px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 font-bold uppercase tracking-widest">
            Porozmawiajmy?
          </div>
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default AiChat;
