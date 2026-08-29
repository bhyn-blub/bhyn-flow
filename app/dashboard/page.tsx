import AppShell from "@/components/layout/app-shell";
import StatCard from "@/components/dashboard/stat-card";
import ActivityCard from "@/components/dashboard/activity-card";
import AutomationCard from "@/components/dashboard/automation-card";

export default function DashboardPage() {
    return (
        <AppShell>
            <div className="mx-auto max-w-7x1 space-y-8">
                {/* Page Heading */}
                <section>
                    <div className="text-xs tracking-[0.35em] text-indigo-400">
                        SYSTEM OVERVIEW
                    </div>

                    <h1 className="mt-2 text-3x1 font-black tracking-tight text-white">
                        GOOD EVENING
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Welcome back to the Bhyn Flow control deck.
                    </p>
                </section>

                {/* Statistics */}
                <section className="grid gap-4 md:grid-cols-3">
                    <StatCard
                        label="CLIENTS"
                        value="128"
                        detail="+12 this month"
                    />

                    <StatCard
                        label="ORDERS"
                        value="47"
                        detail="8 awaiting action"
                    />

                    <StatCard
                        label="STOCK UNITS"
                        value="392"
                        detail="14 low-stock items"
                    />
                </section>

                {/* Main Content */}
                <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">

                    {/* Recent Activity */}
                    <div className="space-y-4">
                        <div>
                            <div className="text-xs tracking-[0.3em] text-indigo-400">
                                RECENT ACTIVITY
                            </div>

                            <h2 className="mt-1 text-xl font-bold text-white">
                                Latest Operations
                            </h2>
                        </div>

                        <div className="space-y-3">
                            <ActivityCard
                                order="ORDER #2048"
                                client="Alex"
                                status="PROCESSING"
                                time="2 min ago"
                            />

                            <ActivityCard
                                order="ORDER #2047"
                                client="Jamie"
                                status="READY"
                                time="18 min ago"
                            />

                            <ActivityCard
                                order="ORDER #2046"
                                client="Morgan"
                                status="COMPLETED"
                                time="42 min ago"
                            />
                        </div>
                    </div>

                    {/* System Panel*/}
                    <div className="space-y-4">
                        <div>
                            <div className="text-xs tracking-[0.3em] text-pink-400">
                                SYSTEM STATUS
                            </div>

                            <h2 className="mt-1 text-xl font-bold text-white">
                                Network Pulse
                            </h2>
                        </div>

                        <div className="border border-pink-500/20 bg-pink-500/[0.03] p-6">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-400">
                                    PLATFORM
                                </span>

                                <span className="text-sm text-pink-300">
                                    ● ONLINE
                                </span>
                            </div>

                            <div className="mt-4 h-2 overflow-hidden bg-white/5">
                                <div className="h-full w-[87%] bg-gradient-to-r from-indigo-500 to-pink-500" />
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-3">
                                <div className="border border-white/10 p-3">
                                    <div className="text-[10px] text-slate-600">
                                        API
                                    </div>

                                    <div className="mt-1 text-sm text-indigo-300">
                                        99.9%
                                    </div>
                                </div>

                                <div className="border border-white/10 p-3">
                                    <div className="text-[10px] text-slate-600">
                                        AUTOMATIONS
                                    </div>

                                    <div className="mt-1 text-sm text-pink-300">
                                        24 ACTIVE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Automation */}
                <section>
                    <AutomationCard />
                </section>

            </div>
        </AppShell>
    );
}