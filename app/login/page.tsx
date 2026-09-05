import Link from "next/link";
import { login } from "@/app/auth/actions";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-md">
                <div className="mb-8">
                    <div className=" text-xs tracking-[0.35em] text-pink-400">
                        BHYN SYSTEM
                    </div>

                    <h1 className="mt-3 text-sx1 font-black text-white">
                        ACCESS SYSTEM
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Sign in to your Bhyn Flow workspace.
                    </p>
                </div>

                <form 
                    action={login}
                    className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-xs tracking-widest text-slate-400"
                        >
                            EMAIL
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full border border-indigo-500/20 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-xs tracking-widest text-slate-400"
                        >
                            PASSWORD
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-3 text-xs font-bold tracking-[0.2em] text-indigo-300 transition hover:bg-indigo-500/20"
                            placeholder="Your Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-3 text-xs font-bold tracking-[0.2em] text-indigo-300 transition hover:bg-indigo-500/20"
                    >
                        CONNECT
                    </button>
                </form>

                <p className="mt-6 text-center text-xs text-slate-500">
                    New to Bhyn Flow?{" "}
                    <Link
                        href="/signup"
                        className="text-pink-300 hover:text-indigo-300"
                    >
                        CREATE ACCOUNT
                    </Link>
                </p>
            </div>
        </main>
    );
}