"use client";
import { useMemo, useState } from "react";

const findNumberOfWords = (text) => {
    let trimmedText = text.trim();
    if(trimmedText === "") return 0;
    
    const words = trimmedText.split(/\s+/).filter((word) => word !== "");

    return words.length;
}

export default function WordsCounter() {
    const [textValue, setTextValue] = useState("");
    const [numberOfWords, setNumberOfWords] = useState(0);

    const calculateNumberOfWords = () => setNumberOfWords(findNumberOfWords(textValue));


    return (
        <main>
            <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold p-5 bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100 bg-clip-text text-transparent">Word Counter</h1>
            <section className="flex flex-col gap-3 p-7 md:px-14 lg:px-20 xl:px-24">
                <p className="text-[1rem] md:text-[1.25rem] lg:text=[1.5rem] xl:text-[1.75rem]">
                    Word Counter is an utility tool used to count the number of words in a given sentence, paragraph, essay, or text.
                </p>
                <p className="bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100 bg-clip-text text-transparent">- Word Counter by Essential Toolkit</p>
            </section>
            {/* input */}
            <section className="p-7 md:px-14 lg:px-20 xl:px-24 flex flex-col md:flex-row items-center justify-center w-full">
                <div className="m-7 w-full h-80 flex justify-center items-center flex-col gap-5 min-w-5/12">
                    <textarea 
                        name="input" 
                        placeholder="Enter your text here..." 
                        id="input"
                        className="border border-neutral-600 rounded w-full h-80 p-3"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                    />
                </div>
                <div className="m-7 border border-neutral-600 rounded p-3 w-full h-80 flex justify-center items-center flex-col gap-5 min-h-5/12">
                    <p>
                        Number of words: {numberOfWords}
                    </p>
                    <button 
                        onClick={calculateNumberOfWords}
                        className="bg-cyan-700 text-white px-4 py-2 w-fit rounded cursor-pointer"
                    >
                        Count Words
                    </button>
                </div>
            </section>
        </main>
    );
}