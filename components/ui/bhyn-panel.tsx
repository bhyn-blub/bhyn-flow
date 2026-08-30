type BhynPanelProps = {
    children: React.ReactNode;
    title?: string;
    accent?: "indigo" | "pink";
};

export default function BhynPanel({
    children,
    title,
    accent = "indigo",
}: BhynPanelProps) {
    const accentStyles = {
        indigo: "border-indigo-500/20",
        pink: "border-pink-500/20",
    };

    return (
        <section
            className={`border bg-white/[0.02] ${accentStyles[accent]}`}
            >
                {title && (
                    <div className="border-b border-white/5 px-5 py-4">
                        <div className="text-[10px] tracking-[0.3em] text-slate-500">
                            BHYN MODULE
                        </div>

                        <h2 className="mt-1 text-sm font-bold text-white">
                            {title}
                        </h2>
                    </div>
                    )}

                <div className="p-5">
                    {children}
                </div>
            </section>
    );
}