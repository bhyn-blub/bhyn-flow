export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 flex items-center justify-center">
      <div className="border-2 border-green-400 p-12 text-center">
        <p className="text-sm tracking-[0.3em]">
          BHYN SYSTEM
        </p>

        <h1 className="text-5xl font-bold mt-4">
          BHYN FLOW
        </h1>

        <p className="mt-4">
          SYSTEM ONLINE
        </p>

        <button className="mt-8 border-2 border-green-400 px-6 py-3 hover:bg-green-400 hover:text-black">
          ENTER
        </button>
      </div>
    </main>
  );
}