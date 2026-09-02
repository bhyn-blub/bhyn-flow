import { createClient } from "@/lib/supabase/server";

export default async function TestDatabasePage() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("test_items")
        .select("*");

    if (error) {
        return (
            <main className="p-8">
                <h1 className="text-2x1 font-bold text-red-400">
                    Database
                </h1>

                <p className="mt-4 text-sm text-slate-400">
                    {error.message}
                </p>
            </main>
        );
    }

    return (
        <main className="p-8">
            <h1 className="text-2x1 font-bold">
                Bhyn Flow Database Test
            </h1>

            <div className="mt-6 space-y-3">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="border border-indigo-500/20 p-4"
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </main>
    );
}