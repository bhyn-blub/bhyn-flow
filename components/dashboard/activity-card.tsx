type ActivityCardProps = {
    order: string;
    client: string;
    status: string;
    time: string;
};

export default function ActivityCard({
    order,
    client,
    status,
    time
}: ActivityCardProps) {
    return (
        <div className="flex items-center justify-between border border-indigo-500/15 bg-white/[0.02] p-4">
            <div>
                <div className="text-sm font-semibold text-white">
                    {order}
                </div>

                <div className="mt-1 text-xs text-slate -500">
                    Client: {client}
                </div>
            </div>

            <div className="text-right">
                <div className="inline-block border border-pink-400/30 bg-pink-400/5 px-2 py-1 text-[10px] tracking-widest text-pink-300">
                    {status}
                </div>

                <div className="mt-2 text-[10px] text-slate-600">
                    {time}
                </div>
            </div>
        </div>
    );
}