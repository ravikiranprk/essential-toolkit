import Link from "next/link";

export default function ComingSoon() {
    return (
        <main className="p-7 min-h-screen flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 via-cyan-500 to-cyan-900">Coming soon...</h1>
            <p><Link href="/" className="underline text-blue-400">Back to home</Link></p>
        </main>
    )
}