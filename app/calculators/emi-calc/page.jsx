"use client";

import { useState } from "react";

const calculateEMI = (loanAmount, interestRate, loanTerm) => {
    if(!loanAmount || !interestRate || !loanTerm) return 0;
    if(loanAmount <= 0 && interestRate <= 0 && loanTerm <= 0) return 0;
    if(interestRate === 0) return loanAmount / loanTerm;

    const monthlyInterestRate = (interestRate / 100) / 12;

    if(monthlyInterestRate === 0) return loanAmount / loanTerm;

    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) / (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);

    return emi.toFixed(2);
}

export default function EMICalc() {
    const [emi, setEmi] = useState(0);
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);

    return (
        <div className="flex-center flex-col py-10 px-6">
            <h1>EMI Calculator</h1>
            <section>
                <p className="p-7">
                    EMI (Every Month Installment) Calculator by Essential Toolkit is an online utility tool that helps users calculate the monthly installment amount for a loan based on the loan amount, interest rate, and loan term (number of months).
                </p>
                <p className="text-cyan-400 p-7">
                    - EMI Calculator by Essential Toolkit
                </p>
            </section>
            
            <section className="emi-form-container">
                <div className="emi-form-field">
                    <label htmlFor="loan-amount">Loan Amount: </label>
                    <input 
                        type="number" 
                        id="loan-amount" 
                        onChange={(e) => setLoanAmount(e.target.value)}
                        value={loanAmount}
                        className="emi-input"
                    />
                </div>
                <div className="emi-form-field">
                    <label htmlFor="interest-rate">Interest Rate: </label>
                    <input 
                        type="number" 
                        id="interest-rate" 
                        onChange={(e) => setInterestRate(e.target.value)}
                        value={interestRate}
                        className="emi-input"
                    />
                </div>
                <div className="emi-form-field">
                    <label htmlFor="loan-term">Loan Term (in months): </label>
                    <input 
                        type="number" 
                        id="loan-term" 
                        onChange={(e) => setLoanTerm(e.target.value)}
                        value={loanTerm}
                        className="emi-input"
                    />
                </div>
                <button 
                    onClick={() => setEmi(calculateEMI(loanAmount, interestRate, loanTerm))}
                    className="emi-btn"
                >
                    Calculate EMI
                </button>
                <p className="emi-result">EMI: {emi}</p>
            </section>
        </div>
    );
}