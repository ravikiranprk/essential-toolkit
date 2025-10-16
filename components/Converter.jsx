import { useState } from "react"

export default function Converter({ title, description, options, converterFunction, currentValue, currentType, convertedType, convertedValue, setCurrentValue, setCurrentType, setConvertedType, setConvertedValue }) {
    return (
        <main className="conv-main">
            <h1 className="conv-h1">{title}</h1>
            <section className="flex flex-col gap-2">
                <p className="conv-description">{description}</p>
                <p className="bg-clip-text text-transparent bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100">
                    - {title} by Essential Toolkit
                </p>
            </section>
            <section className="conv-container">
                <div className="conv-form-container">
                    <div className="conv-input">
                        <select onChange={(e) => setCurrentType(e.target.value)} value={currentType}>
                            {options.map((option) => (
                                <option key={option} value={option} className="capitalize">{option}</option>
                            ))}
                        </select>
                        <input type="text" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} />
                    </div>
                    <div className="text-xl">To</div>
                    <div className="conv-input">
                        <select onChange={(e) => setConvertedType(e.target.value)} value={convertedType}>
                            {options.map((option) => (
                                <option key={option} value={option} className="capitalize">{option}</option>
                            ))}
                        </select>
                        <input type="text" value={convertedValue} onChange={(e) => setConvertedValue(e.target.value)} disabled />
                    </div>
                    <div className="conv-btn">
                        <button onClick={() => converterFunction(currentType, convertedType)}>Convert</button>
                    </div>
                </div>
            </section>
        </main>
    )
}