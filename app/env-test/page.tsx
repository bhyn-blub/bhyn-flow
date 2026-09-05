export default function EnvTestPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="text-2xl font-bold">
        Bhyn Flow Environment Test
      </h1>

      <div className="mt-6 space-y-4">
        <div>
          SUPABASE URL:
          <strong className="ml-2">
            {supabaseUrl ? "LOADED" : "MISSING"}
          </strong>
        </div>

        <div>
          SUPABASE KEY:
          <strong className="ml-2">
            {supabaseKey ? "LOADED" : "MISSING"}
          </strong>
        </div>
      </div>
    </main>
  );
}