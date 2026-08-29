type StateCardProps = {
    label: string;
    value: string;
    detail: string;
};

export default function StateCard({
    label,
    value,
    detail,
}: StateCardProps) {
    return (
        <div className="group border border-indigo-500/20 bg-white/[0.02] p-5 transition hover:border-indigo-400/50 hover:bg-indigo-500/[0.04]">
            <div className="text-[10px] font-medium tracking-[0.25em] text-indigo-400/70">
                {label}
            </div>

            <div className="mt-4 text-4xl font-black tracking-tight text-white">
                {value}
            </div>

            <div className="mt-2 text-xs text-slate-500">
                {detail}
            </div>
        </div>
    );
}