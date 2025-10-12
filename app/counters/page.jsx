import { counters } from "@/constants";

export default function Counters() {
    return (
        <main className="flex flex-col gap-4 bg-gradient-to-r from-cyan-300 via-amber-200 to-red-300 p-5 min-h-[25rem]">
            <h1 className="text-center font-bold counters-h1">Counters</h1>
            <p className="font-semibold counters-p">Explore the counters for counting different things such as number of words, number letters, and more.</p>
            <section className="flex flex-col justify-center items-start counters-list">
                {counters.map((item) => (
                    <ul key={item.id}>
                        <li className="hover:underline hover:underline-offset-2 hover:text-cyan-600"><a href={item.url}>{item.name}</a></li>
                    </ul>
                ))}
            </section>
        </main>
    );
}