"use client";
import { useState } from "react";

const findNumberOfLetters = (text) => {
    let trimmedText = text.trim();
    if(trimmedText === "") return 0;
    
    const words = trimmedText.split(/\s+/).filter((word) => word !== "");

    const letters = words.join("").split("");

    return letters.length;
}

export default function WordsCounter() {
    const [textValue, setTextValue] = useState("");
    const [numberOfLetters, setNumberOfLetters] = useState(0);

    const calculateNumberOfLetters = () => setNumberOfLetters(findNumberOfLetters(textValue));


    return (
        <main>
            <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold p-5 bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100 bg-clip-text text-transparent">Letter Counter</h1>
            <section className="flex flex-col gap-3 p-7 md:px-14 lg:px-20 xl:px-24">
                <p className="text-[1rem] md:text-[1.25rem] lg:text=[1.5rem] xl:text-[1.75rem]">
                    Letter Counter is an utility tool used to count the number of letters in a given word, sentence, paragraph, essay, or text.
                </p>
                <p className="bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100 bg-clip-text text-transparent">- Letter Counter by Essential Toolkit</p>
            </section>
            {/* input */}
            <section className="p-7 md:px-14 lg:px-20 xl:px-24 flex-center flex-col md:flex-row w-full">
                <div className="m-7 w-full h-80 flex-center flex-col gap-5 min-w-5/12">
                    <textarea 
                        name="input" 
                        placeholder="Enter your text here..." 
                        id="input"
                        className="border border-neutral-600 rounded w-full p-3 h-80"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                    />
                </div>
                <div className="m-7 border border-neutral-600 rounded p-3 w-full h-80 flex justify-center items-center flex-col gap-5 min-h-5/12">
                    <p>
                        Number of letters: {numberOfLetters}
                    </p>
                    <button 
                        onClick={calculateNumberOfLetters}
                        className="bg-cyan-700 text-white px-4 py-2 w-fit rounded cursor-pointer"
                    >
                        Count Letters
                    </button>
                </div>
            </section>
        </main>
    );
}