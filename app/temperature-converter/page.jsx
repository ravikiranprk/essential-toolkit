import TemperatureConv from "@/components/TemperatureConv";

export default function TemperatureConverter() {
    return (
        <section>
            <h1 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold flex justify-center items-center p-6 bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100 bg-clip-text text-transparent">Temperature Converter</h1>
            <TemperatureConv />
        </section>
    );
}