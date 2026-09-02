import AppShell from "@/components/layout/app-shell";

export default function OrdersPage() {
    return (
        <AppShell>
            <div className="p-8">
                <p className="text-xs tracking-[0.3em] text-indigo-400">
                    MODULE
                </p>

                <h1 className="mt-2 text-3x1 font-black">
                    ORDERS
                </h1>

                <p className="mt-2 text-sm text-sm text-slate-500">
                    Orders module coming next.
                </p>
            </div>
        </AppShell>
    );
}