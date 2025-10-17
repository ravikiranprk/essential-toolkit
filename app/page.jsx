import HomeCard from "@/components/HomeCard";
import { calculators, converters, counters, formulas, generators } from "@/constants";
import { Playwrite_DE_Grund_Guides } from "next/font/google";

const playWrite = Playwrite_DE_Grund_Guides({ 
  subsets: ['latin'], 
  weight: '400',
  display: 'swap',
  adjustFontFallback: false,
});

export default function Home() {
  return (
    <main className="flex flex-col p-5 gap-5">
      <h1 className={`pl-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-5 ${playWrite.className} bg-clip-text text-transparent bg-gradient-to-tr from-cyan-800 via-cyan-600 to-cyan-300`}>Essential Toolkit</h1>
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
      <HomeCard 
        title="Formulas"
        url="/Formulas.png"
        currentItems={formulas}
        className="flex flex-col gap-12 md:flex-row p-8 md:p-16 items-center justify-center bg-cyan-100"
        sectionUrl="/formulas"
      />
    </main>
  );
}
