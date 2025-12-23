import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Droplets, Pill, ShieldAlert, TrendingUp, Calendar, Filter } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const forecastData = [
    { day: "Mon", intake: 45, predicted: 48 },
    { day: "Tue", intake: 52, predicted: 55 },
    { day: "Wed", intake: 48, predicted: 62 },
    { day: "Thu", intake: 61, predicted: 75 },
    { day: "Fri", intake: 55, predicted: 82 },
    { day: "Sat", intake: 67, predicted: 90 },
    { day: "Sun", intake: 72, predicted: 95 },
];

const resourceData = [
    { name: "Antibiotics", stock: 120, status: "Normal" },
    { name: "IV Fluids", stock: 45, status: "Critically Low" },
    { name: "Vaccines", stock: 250, status: "Optimal" },
    { name: "Water Purifiers", stock: 85, status: "Moderate" },
];

export default function DoctorDashboard() {
    return (
        <DashboardLayout>
            <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-zinc-950/50 p-6 rounded-2xl border border-white/5">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white italic">Clinical Portal</h1>
                        <p className="text-zinc-500 text-sm mt-1">AI-driven epidemic forecasting & resource management for Greater London Area.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="border-white/10 text-zinc-400 gap-2">
                            <Calendar size={16} />
                            Weekly Forecast
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-500 text-white gap-2 font-bold">
                            <Filter size={16} />
                            Filter Dataset
                        </Button>
                    </div>
                </div>

                {/* Top Analytics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-zinc-950 border-white/5 rounded-2xl">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Incoming Patients (Simulated)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-baseline gap-2">
                                <h2 className="text-4xl font-bold text-white">1,200+</h2>
                                <span className="text-emerald-500 text-xs font-bold flex items-center gap-1">
                                    <TrendingUp size={12} />
                                    +12% this week
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-zinc-950 border-white/5 rounded-2xl">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Detected Pathogens</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Influenza A</Badge>
                                <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20">Dengue</Badge>
                                <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">Cholera</Badge>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-zinc-950 border-white/5 rounded-2xl">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Resource Readiness</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-baseline gap-2">
                                <h2 className="text-4xl font-bold text-white">82%</h2>
                                <span className="text-zinc-500 text-xs uppercase tracking-tighter">Overall Capacity</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Predictive Chart */}
                    <Card className="bg-zinc-950 border-white/5 rounded-2xl p-6">
                        <CardHeader className="px-0">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <TrendingUp size={20} className="text-blue-500" />
                                7-Day Intake Forecast
                            </CardTitle>
                            <CardDescription>AI prediction of patient surge based on regional density.</CardDescription>
                        </CardHeader>
                        <div className="h-[300px] w-full mt-6">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={forecastData}>
                                    <defs>
                                        <linearGradient id="colorIntake" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} />
                                    <Tooltip
                                        contentStyle={{ background: '#09090b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                    />
                                    <Area type="monotone" dataKey="intake" stroke="#3b82f6" fillOpacity={1} fill="url(#colorIntake)" strokeWidth={3} />
                                    <Area type="monotone" dataKey="predicted" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorPredicted)" strokeWidth={3} strokeDasharray="5 5" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Resource Management & Medicine Stock */}
                    <div className="space-y-8">
                        <Card className="bg-zinc-950 border-white/5 rounded-2xl overflow-hidden">
                            <CardHeader className="bg-white/5 border-b border-white/5">
                                <CardTitle className="text-sm flex items-center gap-2 uppercase tracking-widest font-bold">
                                    <Pill size={16} className="text-emerald-500" />
                                    Inventory Status
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <table className="w-full text-xs text-left">
                                    <tbody className="divide-y divide-white/5">
                                        {resourceData.map((res) => (
                                            <tr key={res.name} className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4 font-medium text-white">{res.name}</td>
                                                <td className="px-6 py-4 text-zinc-500 font-mono italic">{res.stock} Units</td>
                                                <td className="px-6 py-4 text-right">
                                                    <Badge className={
                                                        res.status === "Critically Low"
                                                            ? "bg-red-500/10 text-red-500 border-red-500/20"
                                                            : "bg-white/5 text-zinc-400 border-white/10"
                                                    }>
                                                        {res.status}
                                                    </Badge>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>

                        <Card className="bg-zinc-950 border-white/5 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                                    <Droplets size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-white">Water Quality Alert</h4>
                                    <p className="text-xs text-zinc-500">Bacterial count in West London reservoirs is rising. Pre-emptive action recommended.</p>
                                </div>
                                <Button variant="ghost" className="text-blue-500 text-xs font-bold hover:bg-blue-500/10">Action</Button>
                            </div>
                        </Card>

                        <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl flex items-center gap-4">
                            <ShieldAlert size={32} className="text-red-500 animate-pulse" />
                            <div>
                                <h4 className="text-sm font-bold text-red-500">Critical: Surge Predicted</h4>
                                <p className="text-xs text-zinc-500">AI predicts a 40% increase in emergency admissions due to viral spread over the next 48 hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
