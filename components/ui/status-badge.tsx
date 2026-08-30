type Status =
    | "active"
    | "pending"
    | "processing"
    | "completed"
    | "warning"
    | "error";

type StatusBadgeProps = {
    status: Status;
};

const styles: Record<Status, string> = {
    active:
        "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
    
    pending:
        "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",

    processing:
        "border-pink-400/30 bg-pink-400/10 text-pink-300",
    
    completed:
        "border-indigo-300/30 bg-indigo-300/10 text-indigo-200",
    
    warning:
        "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
    
    error:
        "border-red-400/30 bg-red-400/10 text-red-300",
};

export default function StatusBadge({
    status,
}: StatusBadgeProps) {
    return (
        <span
            className={`inline-flex border px-2 py-1 text-[10px] font-medium tracking-widest ${styles[status]}`}
            >
                {status.toUpperCase()}
            </span>
    );
}