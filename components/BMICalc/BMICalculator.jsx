"use client";

import BMIInputTabs from "./BMIInputTabs";

export default function BMICalculator() {
    return (
        <main className="bg-white text-gray-950">
            <section className="bg-cyan-100 p-8 md:px-20 md:py-8 max-w-11/12 bmi-home-text ml-auto mr-auto">
                Body mass index (BMI) is a measure of body fat based on weight and height that applies to adult men and women. You BMI based on height (in feet or centimeters) and weight (in kgs or pounds) but doesn't take your muscle mass, bone density, or body composition into account. Your healthcare provider will consider whether your BMI is too high, too low or healthy for you.
            </section>
            <BMIInputTabs />
        </main>
    )
}