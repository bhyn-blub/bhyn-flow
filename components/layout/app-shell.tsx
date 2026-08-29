import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function AppShell({
    children,
    }: {
        children:React.ReactNode;
    }) {
        return (
            <div className="flex min-h-screen bg-[#05070a] text-white">
                <Sidebar />

                <div className="flex min-w-0 flex-1 flex-col">
                    <Topbar />

                    <main className="flex-1 overflow-auto p-6">
                        {children}
                    </main>
                </div>
            </div>
        );
    }