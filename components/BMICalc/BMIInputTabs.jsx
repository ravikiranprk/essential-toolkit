"use client";

import { useMemo, useState } from "react";

const feetOptions = [
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
];
const inchesOptions = [
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
];

const bmiCalculatorStd = (feet, inches, weight) => {
    const heightInInches = feet * 12 + inches;
    const heightInMeters = heightInInches * 0.0254;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
};

const bmiCalculatorMetric = (cm, kg) => {
    const heightInMeters = cm * 0.01;
    const bmi = kg / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
}

export default function BMIInputTabs() {
    const [activeTab, setActiveTab] = useState(1);
    const [selectedFeet, setSelectedFeet] = useState(6);
    const [selectedInches, setSelectedInches] = useState(2);
    const [weight, setWeight] = useState(85);
    const [cm, setCm] = useState(187.96);
    const [weightMetric, setWeightMetric] = useState(85);

    let [standardBmi, setStandardBmi] = useState();
    let [metricBmi, setMetricBmi] = useState();

    standardBmi = useMemo(() => bmiCalculatorStd(selectedFeet, selectedInches, weight), [selectedFeet, selectedInches, weight]);
    metricBmi = useMemo(() => bmiCalculatorMetric(cm, weightMetric), [cm, weightMetric]);

    const calculateStdBmi = (e) => {
        e.preventDefault();
        const bmi = standardBmi;
        if (selectedFeet && selectedInches && weight) {
            setStandardBmi(bmi);
        }
    }
    const calculateMetricBmi = (e) => {
        e.preventDefault();
        const bmi = metricBmi;
        if (cm && weightMetric) {
            setMetricBmi(bmi);
        }
    }

    return (
        <div className="bg-white text-gray-950 p-8 flex flex-col md:flex-row justify-between">
            <div className="flex-center flex-col mt-5 gap-5 border border-zinc-500 m-5 p-8 min-w-5/12">
                {/* tab buttons */}
                <div className="flex-center">
                    <button className={activeTab === 1 ? "activeTab tab-btn rounded-s-sm bmi-btn" : "tab-btn bg-cyan-800 text-white rounded-s-sm bmi-btn"} onClick={() => setActiveTab(1)}>
                        Standard
                    </button>
                    <button className={activeTab === 2 ? "activeTab tab-btn rounded-e-sm bmi-btn" : "rounded-e-sm tab-btn bg-cyan-800 text-white bmi-btn"} onClick={() => setActiveTab(2)}>
                        Metric
                    </button>
                </div>
                {activeTab === 1 && (
                    // bmi calculation form
                    <div className="flex-center flex-col gap-4">
                        <div className="flex gap-4">
                            {/* height */}
                            <div className="flex flex-col">
                                <h3 className="text-left font-semibold mb-3 bmi-h3">Height</h3>
                                <label htmlFor="feet">
                                    <select name="feet" id="feet" value={selectedFeet} onChange={(e) => setSelectedFeet(e.target.value)}>
                                        {feetOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    Feet
                                </label>

                                <label htmlFor="inches">
                                    <select name="inches" id="inches" value={selectedInches} onChange={(e) => setSelectedInches(e.target.value)}>
                                        {inchesOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    Inches
                                </label>
                            </div>
                            {/* weight */}
                            <div className="flex flex-col">
                                <h3 className="text-left font-semibold mb-3 bmi-h3">Weight</h3>
                                <label htmlFor="weight" className="flex gap-1">
                                    <input type="number" name="weight" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="40" className="weight" />
                                    kg
                                </label>
                            </div>
                        </div>
                        <div>
                            <button
                                className="bmi-calc-btn"
                                onClick={calculateStdBmi}
                            >
                                Calculate BMI
                            </button>
                            <div className="mt-4 bmi-result">
                                <p>
                                    <span className="font-semibold">BMI: </span> {activeTab === 1 ? (isNaN(standardBmi) ? "" : standardBmi) : (isNaN(metricBmi) ? "" : metricBmi)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                {/* ------------------------------------------------------------- */}
                {activeTab === 2 && (
                    <div className="flex-center flex-col gap-4">
                        <div className="flex-center gap-4">
                            {/* height */}
                            <div className="">
                                <h3 className="text-left font-semibold mb-3 bmi-h3">Height</h3>
                                <label htmlFor="height" className="flex gap-1">
                                    <input type="number" name="height" id="height" value={cm} onChange={(e) => setCm(e.target.value)} placeholder="170" className="weight" />
                                    cm
                                </label>
                            </div>
                            {/* weight */}
                            <div className="flex-center flex-col">
                                <h3 className="text-left font-semibold mb-3 bmi-h3">Weight</h3>
                                <label htmlFor="weight" className="flex gap-1">
                                    <input type="number" name="weight" id="weight" value={weightMetric} onChange={(e) => setWeightMetric(e.target.value)} placeholder="40" className="weight" />
                                    kg
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <button
                                className="bmi-calc-btn"
                                onClick={calculateMetricBmi}
                            >
                                Calculate BMI
                            </button>
                            <div className="mt-4 bmi-result">
                                <p>
                                    <span className="font-semibold">BMI: </span> {activeTab === 1 ? standardBmi : metricBmi}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* ------------------------------------------------------------- */}
            {/* bmi table */}
            <div className="flex flex-col m-5 bmi-table-container min-w-5/12">
                <div className="flex flex-col">
                    <h3 className="text-center text-2xl font-semibold p-5 md:p-6 bg-cyan-800 text-white">BMI Table</h3>
                    <table className="bmi-table">
                        <tbody>
                            <tr>
                                <th>Underweight</th>
                                <td>Below 18.5</td>
                            </tr>
                            <tr>
                                <th>Healthy</th>
                                <td>18.5 - 24.9</td>
                            </tr>
                            <tr>
                                <th>Overweight</th>
                                <td>25 - 29.9</td>
                            </tr>
                            <tr>
                                <th>Obese</th>
                                <td>30.0 or above</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}