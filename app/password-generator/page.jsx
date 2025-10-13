"use client";

import { useState } from "react";

const generateSecurePassword = (passwordLength, includeUppercase, includeNumbers, includeSpecial) => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "  !@#$%^&*()_+-=[]{}|;:,.<>?";

    let availableChars = lowercaseChars;

    if (includeUppercase) availableChars += uppercaseChars;
    if (includeNumbers) availableChars += numbers;
    if (includeSpecial) availableChars += specialChars;
    if (availableChars.length === 0) return "";

    let password = "";

    const random = new Uint32Array(passwordLength);
    window.crypto.getRandomValues(random);

    for (let i = 0; i < passwordLength; i++) {
        password += availableChars.charAt(random[i] % availableChars.length);
    }
    return password;
}

export default function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSpecial, setIncludeSpecial] = useState(false);

    const generatePassword = () => setPassword(generateSecurePassword(passwordLength, includeUppercase, includeNumbers, includeSpecial));

    return (
        <div className="p-7 min-h-screen flex justify-center items-center flex-col">
            <h1 className="text-center font-bold text-3xl md:text-4xl xl:text-5xl mb-10">Generate Password</h1>
            <section className="p-7 flex-center flex-col">
                <p className="text-center">
                    Password Generator is an online utility tool that helps users generate strong and secure passwords for various online accounts and services.
                </p>
                <p className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 via-cyan-500 to-cyan-700">
                    - Password Generator by Essential Toolkit
                </p>
            </section>
            <section className="border border-neutral-500 rounded p-7">
                <div className="flex gap-5">
                    <label htmlFor="passwordLength">Password Length:</label>
                    <input 
                        type="number" 
                        id="passwordLength" 
                        name="passwordLength" 
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(e.target.value)}
                        className="border border-neutral-500 rounded p-0.5"
                    />
                </div>
                <div className="flex gap-2">
                    <input 
                        type="checkbox" 
                        id="includeUppercase" 
                        name="includeUppercase"
                        className=""
                        value={includeUppercase}
                        onChange={(e) => setIncludeUppercase(!includeUppercase)}
                    />
                    <label htmlFor="includeUppercase">Include Uppercase Letters: </label>
                </div>
                <div className="flex gap-2">
                    <input 
                        type="checkbox" 
                        id="includeNumbers" 
                        name="includeNumbers"
                        className=""
                        value={includeNumbers}
                        onChange={(e) => setIncludeNumbers(!includeNumbers)}
                    />
                    <label htmlFor="includeNumbers">Include Numbers: </label>
                </div>
                <div className="flex gap-2">
                    <input 
                        type="checkbox" 
                        id="includeSpecial" 
                        name="includeSpecial"
                        className=""
                        value={includeSpecial}
                        onChange={(e) => setIncludeSpecial(!includeSpecial)} 
                    />
                    <label htmlFor="includeSpecial">Include Special Characters: </label>
                </div>
                <div className="mt-5">
                    <p className="text-lg md:text-2xl">
                        Generated Password: <span className="font-semibold">{password}</span>
                    </p>
                </div>
                <button
                    onClick={generatePassword}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-4 md:text-lg lg:text-xl xl:text-2xl cursor-pointer"
                >
                    Generate Password
                </button>
            </section>
        </div>
    )
}