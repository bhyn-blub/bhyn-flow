export default function AutomationCard() {
    return (
        <div className="border border-pink-500/20 bg-pink-500/[0.03] p-5">
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-[10px] tracking-[0.25em] text-pink-400/70">
                        AUTOMATION CORE
                    </div>

                    <div className="mt-2 text-lg font-bold text-white">
                        Order Completion Flow
                    </div>
                </div>

                <div className="border border-pink-400/30 px-2 py-1 text-[10px] text-pink-300">
                    ACTIVE
                </div>
            </div>

            <div className="mt-6 flex flex-wrap item-center gap-2 text-xs">
                <span className="border border-indigo-400/30 bg-indigo-400/5 px-3 py-2 text-indigo-300">
                    ORDER COMPLETED
                </span>

                <span className="text-pink-300">
                    →
                </span>

                <span className="border border-indigo-400/30 bg-indigo-400/5 px-3 py-2 text-indigo-300">
                    SEND EMAIL
                </span>

                <span className="text-pink-300">
                    →
                </span>

                <span className="border border-indigo-400/30 bg-indigo-400/5 px-3 py-2 text-indigo-300">
                LOG EVENT
                </span>
            </div>
        </div>
    );
}