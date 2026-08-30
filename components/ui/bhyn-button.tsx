type BhynButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "pink";
    type?: "button" | "submit";
};

export default function BhynButton({
    children,
    variant = "primary",
    type = "button",
}: BhynButtonProps) {
    const variants = {
        primary:
            "border-indigo-400/50 bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 hover:border-indigo-300",
        
        secondary:
            "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06] hover:border-white/20",

        pink:
            "border-pink-400/50 bg-pink-500/15 text-pink-200 hover:bg-pink-500/25 hover:border-pink-300",
    };

    return (
        <button
            type={type}
            className={`border px-4 py-2 text-xs tracking-[0.15em] transition ${variants[variant]}`}
            >
                {children}
            </button>
    );
}