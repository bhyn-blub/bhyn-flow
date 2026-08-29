export default function Topbar () {
    return (
        <header className="flex h-16 items-center justify-between border-b border-indigo-500/20 bg-black/50 px-6 backdrop-blur">
            <div>
                <div className="text-xs tracking-[0.3em]  text-indigo-400/60">
                    BHYN FLOW / DASHBOARD
                </div>

                <div className="mt-1 text-sm text-slate-300">
                    Operations Control
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden text-right sm:block">
                    <div className="text-xs text-slate-400">
                        SYSTEM STATUS
                    </div>

                    <div className="text-sm text-pink-300">
                        ● ONLINE
                    </div>
                </div>

                <div className="grid h-9 w-9 place-items-center border border-pink-500/30 bg-pink-500/10 text-sm text-pink-300">
                    BF
                </div>
            </div>
        </header>
    );
}