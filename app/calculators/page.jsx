import { calculators } from "@/constants";

export default function Calculators() {
    return (
        <main className="flex flex-col gap-4 bg-gradient-to-r from-cyan-300 via-amber-200 to-red-300 p-5 min-h-[25rem]">
            <h1 className="text-center font-bold calculators-h1">Calculators</h1>
            <p className="font-semibold calculators-p">Explore the calculators for calculating different things such as Age, BMI, GPA, and more.</p>
            <section className="flex flex-col justify-center items-start calculators-list">
                {calculators.map((item) => (
                    <ul key={item.id}>
                        <li className="hover:underline hover:underline-offset-2 hover:text-cyan-600 cursor-pointer"><a href={item.url}>{item.name}</a></li>
                    </ul>
                ))}
            </section>
        </main>
    );
}