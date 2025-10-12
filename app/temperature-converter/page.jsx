import TemperatureConv from "@/components/TemperatureConv";

export default function TemperatureConverter() {
    return (
        <section>
            <h1 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold bg-amber-100 flex justify-center items-center p-6 underline underline-offset-4">Temperature Converter</h1>
            <TemperatureConv />
        </section>
    );
}