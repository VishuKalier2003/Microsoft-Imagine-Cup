import { Search, Send, User, ShieldCheck } from "lucide-react";

const chats = [
    { id: "1", name: "Sarah Miller", lastMsg: "Thank you for the prescription advice, Dr.", time: "12:45 PM", unread: 2, online: true },
    { id: "2", name: "Cardiology Dept.", lastMsg: "The lab results for patient #9021 are ready.", time: "11:20 AM", unread: 0, online: true },
    { id: "3", name: "James Wilson", lastMsg: "I'm feeling much better today.", time: "Yesterday", unread: 0, online: false },
    { id: "4", name: "Medical Board", lastMsg: "Your certification renewal is coming up.", time: "Jan 1", unread: 1, online: false },
];

export function DoctorMessages() {
    return (
        <div className="flex bg-[#0A0A0A] border border-white/5 rounded-2xl h-[calc(100vh-250px)] overflow-hidden">
            {/* Sidebar */}
            <div className="w-80 border-r border-white/5 flex flex-col">
                <div className="p-4 border-b border-white/5">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full bg-[#121212] border border-white/5 rounded-xl py-2 pl-9 pr-4 text-sm text-white focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {chats.map((chat) => (
                        <div key={chat.id} className="p-4 flex gap-3 hover:bg-white/5 cursor-pointer border-b border-white/5 transition-colors">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <User className="w-5 h-5 text-gray-500" />
                                </div>
                                {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary border-2 border-black rounded-full" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="text-sm font-bold text-white truncate">{chat.name}</h4>
                                    <span className="text-[10px] text-gray-500">{chat.time}</span>
                                </div>
                                <p className="text-xs text-gray-500 truncate">{chat.lastMsg}</p>
                            </div>
                            {chat.unread > 0 && (
                                <div className="flex items-center">
                                    <div className="bg-primary text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                        {chat.unread}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area placeholder */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-black/40">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase italic">Secure Messaging</h3>
                <p className="text-sm text-gray-500 max-w-sm">
                    Select a conversation to view and send messages. All communications are HIPPA compliant and end-to-end encrypted.
                </p>
                <button className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-primary text-black rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                    <Send className="w-4 h-4" />
                    <span>Start New Chat</span>
                </button>
            </div>
        </div>
    );
}
