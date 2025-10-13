"use client";
import { useMemo, useState } from "react";

const decimalToBinary = (decimal) => Number(decimal).toString(2);
const decimalToOctal = (decimal) => Number(decimal).toString(8);
const decimalToHexadecimal = (decimal) => {const num = Number(decimal); return num.toString(16);}
const decimalToDecimal = (decimal) => Number(decimal);

const binaryToDecimal = (binary) => parseInt(Number(binary), 2);
const binaryToOctal = (binary) => parseInt(Number(binary), 2).toString(8);
const binaryToHexadecimal = (binary) => parseInt(Number(binary), 2).toString(16);
const binaryToBinary = (binary) => Number(binary);

const octalToDecimal = (octal) => parseInt(Number(octal), 8);
const octalToBinary = (octal) => parseInt(Number(octal), 8).toString(2);
const octalToHexadecimal = (octal) => parseInt(Number(octal), 8).toString(16);
const octalToOctal = (octal) => Number(octal);

const hexadecimalToDecimal = (hexadecimal) => parseInt(Number(hexadecimal), 16);
const hexadecimalToBinary = (hexadecimal) => parseInt(Number(hexadecimal), 16).toString(2);
const hexadecimalToOctal = (hexadecimal) => parseInt(Number(hexadecimal), 16).toString(8);
const hexadecimalToHexadecimal = (hexadecimal) => Number(hexadecimal);

export default function NumberConverter() {
    const [currentNumberType, setCurrentNumberType] = useState("decimal" || "binary" || "octal" || "hexadecimal");
    const [convertedNumberType, setConvertedNumberType] = useState("binary" || "octal" || "hexadecimal" || "decimal");

    const [currentNumber, setCurrentNumber] = useState(0);
    const [convertedNumber, setConvertedNumber] = useState(0 || "");

    const dToB = useMemo(() => decimalToBinary(currentNumber), [currentNumber]);
    const dToO = useMemo(() => decimalToOctal(currentNumber), [currentNumber]);
    const dToH = useMemo(() => decimalToHexadecimal(currentNumber), [currentNumber]);
    const dToD = useMemo(() => decimalToDecimal(currentNumber), [currentNumber]);

    const bToD = useMemo(() => binaryToDecimal(currentNumber), [currentNumber]);
    const bToO = useMemo(() => binaryToOctal(currentNumber), [currentNumber]);
    const bToH = useMemo(() => binaryToHexadecimal(currentNumber), [currentNumber]);
    const bToB = useMemo(() => binaryToBinary(currentNumber), [currentNumber]);

    const oToD = useMemo(() => octalToDecimal(currentNumber), [currentNumber]);
    const oToB = useMemo(() => octalToBinary(currentNumber), [currentNumber]);
    const oToH = useMemo(() => octalToHexadecimal(currentNumber), [currentNumber]);
    const oToO = useMemo(() => octalToOctal(currentNumber), [currentNumber]);

    const hToD = useMemo(() => hexadecimalToDecimal(currentNumber), [currentNumber]);
    const hToB = useMemo(() => hexadecimalToBinary(currentNumber), [currentNumber]);
    const hToO = useMemo(() => hexadecimalToOctal(currentNumber), [currentNumber]);
    const hToH = useMemo(() => hexadecimalToHexadecimal(currentNumber), [currentNumber]);

    const convertNumber = (base, target) => {
        switch(base) {
            case "decimal":
                switch(target) {
                    case "binary":
                        setConvertedNumber(dToB);
                        break;
                    case "octal":
                        setConvertedNumber(dToO);
                        break;
                    case "hexadecimal":
                        setConvertedNumber(dToH);
                        break;
                    case "decimal":
                        setConvertedNumber(dToD);
                        break;
                    default:
                        break;
                }
                break;
            case "binary":
                switch(target) {
                    case "decimal":
                        setConvertedNumber(bToD);
                        break;
                    case "octal":
                        setConvertedNumber(bToO);
                        break;
                    case "hexadecimal":
                        setConvertedNumber(bToH);
                        break;
                    case "binary":
                        setConvertedNumber(bToB);
                        break;
                    default:
                        break;
                }
                break;
            case "octal":
                switch(target) {
                    case "decimal":
                        setConvertedNumber(oToD);
                        break;
                    case "binary":
                        setConvertedNumber(oToB);
                        break;
                    case "hexadecimal":
                        setConvertedNumber(oToH);
                        break;
                    case "octal":
                        setConvertedNumber(oToO);
                        break;
                    default:
                        break;
                }
                break;
            case "hexadecimal":
                switch(target) {
                    case "decimal":
                        setConvertedNumber(hToD);
                        break;
                    case "binary":
                        setConvertedNumber(hToB);
                        break;
                    case "octal":
                        setConvertedNumber(hToO);
                        break;
                    case "hexadecimal":
                        setConvertedNumber(hToH);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }

    return (
        <main className="p-7 min-h-screen flex justify-center items-center flex-col">
            <h1 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold p-5 bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100 bg-clip-text text-transparent">Number Converter</h1>
            <section className="flex flex-col gap-2">
                <p>
                    Number Converter is an utility tool used to convert numbers from one unit to another, such as decimal to binary, octal to hexadecimal, and more.
                </p>
                <p className="bg-clip-text text-transparent bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100">
                    - Number Converter by Essential Toolkit
                </p>
            </section>
            <section className="temp-conv-container">
                <div className="temp-conv-form-container">
                    <div className="temp-conv-input">
                        <select onChange={(e) => setCurrentNumberType(e.target.value)} value={currentNumberType}>
                            <option value="decimal">Decimal</option>
                            <option value="binary">Binary</option>
                            <option value="octal">Octal</option>
                            <option value="hexadecimal">Hexa Decimal</option>
                        </select>
                        <input type="number" value={currentNumber} onChange={(e) => setCurrentNumber(e.target.value)} />
                    </div>
                    <div className="text-xl">To</div>
                    <div className="temp-conv-input">
                        <select onChange={(e) => setConvertedNumberType(e.target.value)} value={convertedNumberType}>
                            <option value="binary">Binary</option>
                            <option value="octal">Octal</option>
                            <option value="hexadecimal">Hexa Decimal</option>
                            <option value="decimal">Decimal</option>
                        </select>
                        <input type="number" value={convertedNumber} onChange={(e) => setConvertedNumber(e.target.value)} disabled />
                    </div>
                    <div className="temp-conv-btn">
                        <button onClick={() => convertNumber(currentNumberType, convertedNumberType)}>Convert</button>
                    </div>
                </div>
            </section>
        </main>
    )
}