import HomeCard from "@/components/HomeCard";
import { calculators, converters, counters, generators } from "@/constants";

export default function Home() {
  return (
    <main className="flex flex-col p-5 gap-5">
      <h1 className="text-4xl font-bold mb-5">Essential Toolkit</h1>
      <HomeCard 
        title="Calculators" 
        url="/Calculators.png" 
        currentItems={calculators} 
        className="flex flex-col gap-12 md:flex-row p-8 md:p-16 items-center justify-center bg-cyan-100" 
        sectionUrl="/calculators"
      />
      <HomeCard 
        title="Converters" 
        url="/Converters.png" 
        currentItems={converters} 
        className="flex flex-col gap-12 md:flex-row-reverse p-8 md:p-16 items-center justify-center bg-cyan-100" 
        sectionUrl="/converters"
      />
      <HomeCard 
        title="Counters" 
        url="/Counters.png" 
        currentItems={counters} 
        className="flex flex-col gap-12 md:flex-row p-8 md:p-16 items-center justify-center bg-cyan-100" 
        sectionUrl="/counters"
      />
      <HomeCard 
        title="Generators"
        url="/Generators.png"
        currentItems={generators}
        className="flex flex-col gap-12 md:flex-row-reverse p-8 md:p-16 items-center justify-center bg-cyan-100"
        sectionUrl="/generators"
      />
    </main>
  );
}
