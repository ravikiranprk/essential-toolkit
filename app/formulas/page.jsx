import { formulas } from "@/constants";

export default function Formulas() {
    return (
        <main className="flex flex-col gap-4 bg-gradient-to-r from-cyan-300 via-amber-200 to-red-300 p-5 min-h-[25rem]">
            <h1 className="text-center font-bold converters-h1">Formulas</h1>
            <p className="font-semibold converters-p">Explore the formulas for formulas used for various calculations.</p>
            <section className="flex flex-col justify-center items-start converters-list">
                {formulas.map((item) => (
                    <ul key={item.id}>
                        <li className="hover:underline hover:underline-offset-2 hover:text-cyan-600"><a href={item.url}>{item.name}</a></li>
                    </ul>
                ))}
            </section>
        </main>
    );
}