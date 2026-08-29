import Link from "next/link";
import { navigationItems } from "@/lib/navigation";

export default function Sidebar() {
    return (
        <aside className="flex w-64 shrink-0 flex-col border-r border-indigo-500/20 bg-black/80 p-4">
            <div className="mb-8 border border-indigo-500/30 bg-indigo-500/5 p-4">
                <div className="text-xs tracking-[0.35em] text-indigo-300">
                    BHYN SYSTEM
                </div>

                <div className="mt-2 text-2xl font-black tracking-tight text-white">
                    BHYN FLOW
                </div>

                <div className="mt-2 text-[10px] tracking-[0.25em] text-pink-400/70">
                CONTROL DECK // 001
                </div>
            </div>

            <nav className="space-y-2">
                {navigationItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-3 border border-transparent px-3 py-3 text-sm text-slate-300 transition hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-300">
                            <span className="w-5 text-center text-pink-400">
                                {item.icon}
                            </span>

                            <span className="tracking-wide">
                                {item.label}
                            </span>
                        </Link>
                ))}
            </nav>

            <div className="mt-auto pt-8">
                <div className="border border-cyan-500/20 bg-pink-500/5 p-3 text-[10px] tracking-widest text-pink-400/60">
                    CONNECTION
                    <div className="mt-2 text-pink-300">
                        ● LOCAL SYSTEM
                    </div>
                </div>
            </div>
        </aside>
    );
}