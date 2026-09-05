import Link from "next/link";
import { signup } from "@/app/auth/actions";

export default function SignupPage() {
    return (
        <main className="flex min-h screen items-center justify-center px-6">
            <div className=" w-full max-w-md">
                <div className="mb-8">
                    <div className="text-xs tracking-[0.35em] text-indigo-400">
                        BHYN SYSTEM
                    </div>

                    <h1 className="mt-3 text-4x1 font-black text-white">
                        CREATE ACCOUNT
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Initialize your Bhyn Flow workspace.
                    </p>
                </div>

                <form 
                    action={signup}
                    className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-xs tracking-widest text-slate-400">
                                EMAIL
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full border border-indigo-500/20 bg-black/40 px-4 py-4 text-sm text-white outline-none transition focus:border-indigo-400"
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
                            minLength={8}
                            className="w-full border border-indigo-500/20 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-pink-400"
                            placeholder="Minimum 8 characters"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full border border-pink-500/40 bg-pink-500/10 px-4 py-3 text-xs font-bold tracking-[0.2em] text-pink-300 transition hover:bg-pink-500/20"
                        >
                            INITIALIZE ACCOUNT
                    </button>
                </form>

                <p className="mt-6 text-center text-xs text-slate-500">
                    Already registered?{" "}
                    <Link
                        href="/login"
                        className="text-indigo-300 hover:text-pink-300"
                    >
                        LOG IN
                    </Link>
                </p>
            </div>
        </main>
    );
}