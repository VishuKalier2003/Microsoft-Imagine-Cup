import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import { Heart, Activity, Moon, Zap, ShieldAlert, Thermometer, UserCheck, MessageSquare, Stethoscope } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const heartData = [
    { time: "00:00", bpm: 62 },
    { time: "04:00", bpm: 58 },
    { time: "08:00", bpm: 75 },
    { time: "12:00", bpm: 82 },
    { time: "16:00", bpm: 78 },
    { time: "20:00", bpm: 72 },
    { time: "23:59", bpm: 65 },
];

const diseaseRisk = [
    { name: "Influenza", risk: 85, color: "#ef4444" },
    { name: "Dengue", risk: 45, color: "#f97316" },
    { name: "Malaria", risk: 20, color: "#10b981" },
    { name: "COVID-19", risk: 65, color: "#ef4444" },
];

export default function UserDashboard() {
    return (
        <DashboardLayout type="user">
            <div className="space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white underline decoration-blue-500/30 underline-offset-8">Health Overview</h1>
                        <p className="text-zinc-500 text-sm mt-2">Personal vitals synced from Apple Watch Series 9</p>
                    </div>
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 rounded-full flex items-center gap-2">
                        <UserCheck size={14} />
                        Data Verified
                    </Badge>
                </div>

                {/* Vital Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-zinc-950 border-white/5 hover:border-blue-500/30 transition-all group">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Heart Rate</p>
                                    <h3 className="text-2xl font-bold text-white flex items-baseline gap-1">
                                        72 <span className="text-sm font-normal text-zinc-500">BPM</span>
                                    </h3>
                                </div>
                                <div className="p-2 rounded-lg bg-red-500/10 text-red-500 group-hover:scale-110 transition-transform">
                                    <Heart size={20} fill="currentColor" />
                                </div>
                            </div>
                            <div className="mt-4 h-[40px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={heartData}>
                                        <Area type="monotone" dataKey="bpm" stroke="#ef4444" fill="transparent" strokeWidth={2} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-950 border-white/5 hover:border-blue-500/30 transition-all group">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Body Temp</p>
                                    <h3 className="text-2xl font-bold text-white flex items-baseline gap-1">
                                        98.6 <span className="text-sm font-normal text-zinc-500">°F</span>
                                    </h3>
                                </div>
                                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform">
                                    <Thermometer size={20} />
                                </div>
                            </div>
                            <p className="text-[10px] text-emerald-500 mt-2 font-medium">Stable Range</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-950 border-white/5 hover:border-blue-500/30 transition-all group">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Sleep Quality</p>
                                    <h3 className="text-2xl font-bold text-white flex items-baseline gap-1">
                                        8h 12m <span className="text-sm font-normal text-zinc-500">Efficiency 92%</span>
                                    </h3>
                                </div>
                                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 group-hover:scale-110 transition-transform">
                                    <Moon size={20} fill="currentColor" />
                                </div>
                            </div>
                            <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[92%]"></div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-950 border-white/5 hover:border-blue-500/30 transition-all group">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Activity</p>
                                    <h3 className="text-2xl font-bold text-white flex items-baseline gap-1">
                                        8,432 <span className="text-sm font-normal text-zinc-500">Steps</span>
                                    </h3>
                                </div>
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                            </div>
                            <p className="text-[10px] text-zinc-500 mt-2 font-medium">84% of daily goal</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* AI Insights & Risk Analysis */}
                    <Card className="lg:col-span-2 bg-gradient-to-br from-zinc-900 to-black border-white/5 rounded-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <ShieldAlert size={120} />
                        </div>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Activity className="text-blue-500" />
                                AI Epidemic Exposure Risk
                            </CardTitle>
                            <CardDescription>Based on your current location and real-time disease spread data.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="h-[200px] w-full mt-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={diseaseRisk} layout="vertical">
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} />
                                        <Tooltip
                                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                            contentStyle={{ background: '#09090b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                        />
                                        <Bar dataKey="risk" radius={[0, 4, 4, 0]}>
                                            {diseaseRisk.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.6} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl flex gap-4 items-start">
                                <div className="p-2 rounded-lg bg-red-500/20 text-red-500 shrink-0">
                                    <ShieldAlert size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">Critical Alert: Influenza Outbreak</h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        High concentration of Influenza cases detected within 2km of your location. Your current body temperature is normal,
                                        but we recommend avoiding crowded spaces and sanitizing frequently.
                                    </p>
                                    <Button variant="outline" size="sm" className="mt-3 text-[10px] h-7 border-red-500/30 hover:bg-red-500/10 text-red-400">
                                        View Precautions
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recommendations & Consultation */}
                    <div className="space-y-6">
                        <Card className="bg-zinc-950 border-white/5 rounded-2xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Medical Advice</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-sm font-medium text-white">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs">AI</div>
                                        Dr. Gemini (Digital Specialist)
                                    </div>
                                    <p className="text-xs text-zinc-400 leading-relaxed italic">
                                        "Your recovery heart rate has improved by 4% this week. Keep up the 20-minute morning walks."
                                    </p>
                                </div>

                                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-6 flex items-center justify-center gap-2 font-bold">
                                    <Stethoscope size={18} />
                                    Consult Specialist
                                </Button>
                                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-zinc-400 rounded-xl py-6 flex items-center justify-center gap-2 font-medium">
                                    <MessageSquare size={18} />
                                    Chat with AI Assistant
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                                <Zap size={24} fill="currentColor" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Daily Readiness</h4>
                                <p className="text-xs text-zinc-500">Your body is 88% ready for high-intensity activity today.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
