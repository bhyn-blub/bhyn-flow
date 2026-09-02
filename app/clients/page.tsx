import AppShell from "@/components/layout/app-shell";
import BhynButton from "@/components/ui/bhyn-button";
import BhynPanel from "@/components/ui/bhyn-panel";
import StatusBadge from "@/components/ui/status-badge";

const clients = [
    {
        id: "CL-001",
        name: "Alex Tan",
        email: "alex@example.com",
        status: "active" as const,
        joined: "30 Aug 2026",
    },
    {
        id: "CL-002",
        name: "Jamie Lee",
        email: "jamie@example.com",
        status: "active" as const,
        joined: "29 Aug 2026",
    },
    {
        id: "CL-003",
        name: "Morgan Lim",
        email: "morgan@example.com",
        status: "active" as const,
        joined: "28 Aug 2026"
    },
    {
        id: "CL-004",
        name: "Taylor Wong",
        email: "taylor@example.com",
        status: "pending" as const,
        joined: "27 Aug 2026"
    },
];

export default function ClientsPage() {
    return (
        <AppShell>
            <div className="mx-auto max-w-7x1 space-y-6">
                {/* Header */}
                <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="text-xs tracking-[0.35em] text-indigo-400">
                            CLIENT DATABASE
                        </div>

                        <h1 className="mt-2 text-3x1 font-black tracking-tight">
                            CLIENTS
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Manage customer records and client information.
                        </p>
                    </div>

                    <BhynButton variant="pink">
                        + ADD CLIENT
                    </BhynButton>
                </section>

                {/* Client Table */}
                <BhynPanel title="CLIENT DIRECTORY">
                    <div className="mb-5 flex flex-col gap-3 sm:flex-row">
                        <input
                            type="search"
                            placeholder="Search Clients..."
                            className="w-full border border-indigo-500/20 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-400 sm:max-w-sm"
                            />
                        
                        <button
                            type="button"
                            className="border border-white/10 px-4 py-3 text-xs tracking-widest text-slate-400 transition hover:border-pink-400/30 hover:text-pink-300"
                            >
                                FILTER
                            </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] text-left">
                            <thead>
                                <tr className="border-b border-white/10 text-[10px] tracking-[0.2em] text-slate-600">
                                    <th className="px-4 py-3">CLIENT ID</th>
                                    <th className="px-4 py-3">NAME</th>
                                    <th className="px-4 py-3">EMAIL</th>
                                    <th className="px-4 py-3">STATUS</th>
                                    <th className="px-4 py-3">JOINED</th>
                                    <th className="px-4 py-3">ACTION</th>
                                </tr>
                            </thead>

                            <tbody>
                                {clients.map((client) => (
                                    <tr
                                        key={client.id}
                                        className="border-b border-white/5 transition hover:bg-indigo-500/[0.0]"
                                        >
                                            <td className="px-4 py-4 text-xs text-indigo-300">
                                                {client.id}
                                            </td>

                                            <td className="px-4 py-4 text-sm font-semibold text-white">
                                                {client.name}
                                            </td>

                                            <td className="px-4 py-4 text-sm text-slate-400">
                                                {client.email}
                                            </td>

                                            <td className="px-4 py-4">
                                                <StatusBadge status={client.status} />
                                            </td>

                                            <td className="px-4 py-y text-xs text-slate-500">
                                                {client.joined}
                                            </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </BhynPanel>
            </div>
        </AppShell>
    );
}