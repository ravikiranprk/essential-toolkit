"use client";
import { useState } from "react";

const findNumberOfSentences = (text) => {
    if(!text || text.trim() === ""){
        return 0;
    }

    const sentences = text.split(/[.!?]+(?=["')]?\s|$)/g).filter(sentence => sentence.trim() !== "");

    return sentences.length;
}

export default function SentenceCounter() {
    const [textValue, setTextValue] = useState("");
    const [numberOfSentences, setNumberOfSentences] = useState(0);

    const calculateNumberOfSentences = () => setNumberOfSentences(findNumberOfSentences(textValue));


    return (
        <main>
            <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold p-5 bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100 bg-clip-text text-transparent">Sentence Counter</h1>
            <section className="flex flex-col gap-3 p-7 md:px-14 lg:px-20 xl:px-24">
                <p className="text-[1rem] md:text-[1.25rem] lg:text=[1.5rem] xl:text-[1.75rem]">
                    Sentence Counter is an utility tool used to count the number of sentences in a given paragraph, essay, or text.
                </p>
                <p className="bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100 bg-clip-text text-transparent">- Sentence Counter by Essential Toolkit</p>
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
                        Number of sentences: {numberOfSentences}
                    </p>
                    <button 
                        onClick={calculateNumberOfSentences}
                        className="bg-cyan-700 text-white px-4 py-2 w-fit rounded cursor-pointer"
                    >
                        Count Sentences
                    </button>
                </div>
            </section>
        </main>
    );
}