"use client";

import Converter from "@/components/Converter";
import { weightConverterOptions } from "@/constants";
import { useMemo, useState } from "react";

const gramsToKilograms = (grams) => Number(grams) / 1000;
const gramsToMilligrams = (grams) => Number(grams) * 1000;
const gramsToPounds = (grams) => Number(grams) / 453.592;
const gramsToOunces = (grams) => Number(grams) / 28.3495;
const gramsToGrams = (grams) => Number(grams);

const kilogramsToGrams = (kilograms) => Number(kilograms) * 1000;
const kilogramsToMilligrams = (kilograms) => Number(kilograms) * 1000000;
const kilogramsToPounds = (kilograms) => Number(kilograms) * 2.20462;
const kilogramsToOunces = (kilograms) => Number(kilograms) * 35.274;
const kilogramsToKilograms = (kilograms) => Number(kilograms);

const milligramsToGrams = (grams) => Number(grams) / 1000;
const milligramsToKilograms = (milligrams) => Number(milligrams) / 1000000;
const milligramsToPounds = (milligrams) => Number(milligrams) / 453592;
const milligramsToOunces = (milligrams) => Number(milligrams) / 28349.5;
const milligramsToMilligrams = (milligrams) => Number(milligrams);

const poundsToGrams = (pounds) => Number(pounds) * 453.592;
const poundsToKilograms = (pounds) => Number(pounds) / 2.20462;
const poundsToMilligrams = (pounds) => Number(pounds) * 453592;
const poundsToOunces = (pounds) => Number(pounds) * 16;
const poundsToPounds = (pounds) => Number(pounds);

const ouncesToGrams = (ounces) => Number(ounces) * 28.3495;
const ouncesToKilograms = (ounces) => Number(ounces) / 35.274;
const ouncesToMilligrams = (ounces) => Number(ounces) * 28349.5;
const ouncesToPounds = (ounces) => Number(ounces) / 16;
const ouncesToOunces = (ounces) => Number(ounces);


export default function WeightConverter() {
    const [currentWeightType, setCurrentWeightType] = useState("grams" || "milligrams" || "kilograms" || "pounds" || "ounces");
    const [convertedWeightType, setConvertedWeightType] = useState("milligrams" || "kilograms" || "pounds" || "ounces" || "grams");

    const [currentWeight, setCurrentWeight] = useState(0);
    const [convertedWeight, setConvertedWeight] = useState(0);

    const gToKg = useMemo(() => gramsToKilograms(currentWeight), [currentWeight]);
    const gToMg = useMemo(() => gramsToMilligrams(currentWeight), [currentWeight]);
    const gToP = useMemo(() => gramsToPounds(currentWeight), [currentWeight]);
    const gToO = useMemo(() => gramsToOunces(currentWeight), [currentWeight]);
    const gToG = useMemo(() => gramsToGrams(currentWeight), [currentWeight]);

    const kgToG = useMemo(() => kilogramsToGrams(currentWeight), [currentWeight]);
    const kgToMg = useMemo(() => kilogramsToMilligrams(currentWeight), [currentWeight]);
    const kgToP = useMemo(() => kilogramsToPounds(currentWeight), [currentWeight]);
    const kgToO = useMemo(() => kilogramsToOunces(currentWeight), [currentWeight]);
    const kgToKg = useMemo(() => kilogramsToKilograms(currentWeight), [currentWeight]);

    const mgToG = useMemo(() => milligramsToGrams(currentWeight), [currentWeight]);
    const mgToKg = useMemo(() => milligramsToKilograms(currentWeight), [currentWeight]);
    const mgToP = useMemo(() => milligramsToPounds(currentWeight), [currentWeight]);
    const mgToO = useMemo(() => milligramsToOunces(currentWeight), [currentWeight]);
    const mgToMg = useMemo(() => milligramsToMilligrams(currentWeight), [currentWeight]);

    const pToG = useMemo(() => poundsToGrams(currentWeight), [currentWeight]);
    const pToKg = useMemo(() => poundsToKilograms(currentWeight), [currentWeight]);
    const pToMg = useMemo(() => poundsToMilligrams(currentWeight), [currentWeight]);
    const pToO = useMemo(() => poundsToOunces(currentWeight), [currentWeight]);
    const pToP = useMemo(() => poundsToPounds(currentWeight), [currentWeight]);

    const oToG = useMemo(() => ouncesToGrams(currentWeight), [currentWeight]);
    const oToKg = useMemo(() => ouncesToKilograms(currentWeight), [currentWeight]);
    const oToMg = useMemo(() => ouncesToMilligrams(currentWeight), [currentWeight]);
    const oToP = useMemo(() => ouncesToPounds(currentWeight), [currentWeight]);
    const oToO = useMemo(() => ouncesToOunces(currentWeight), [currentWeight]);

    const convertWeight = (base, target) => {
        switch(base) {
            case "grams":
                switch(target) {
                    case "kilograms":
                        setConvertedWeight(gToKg);
                        break;
                    case "milligrams":
                        setConvertedWeight(gToMg);
                        break;
                    case "pounds":
                        setConvertedWeight(gToP);
                        break;
                    case "ounces":
                        setConvertedWeight(gToO);
                        break;
                    case "grams":
                        setConvertedWeight(gToG);
                        break;
                    default:
                        break;
                }
                break;
            case "kilograms":
                switch(target) {
                    case "grams":
                        setConvertedWeight(kgToG);
                        break;
                    case "milligrams":
                        setConvertedWeight(kgToMg);
                        break;
                    case "pounds":
                        setConvertedWeight(kgToP);
                        break;
                    case "ounces":
                        setConvertedWeight(kgToO);
                        break;
                    case "kilograms":
                        setConvertedWeight(kgToKg);
                        break;
                    default:
                        break;
                }
                break;
            case "milligrams":
                switch(target) {
                    case "grams":
                        setConvertedWeight(mgToG);
                        break;
                    case "kilograms":
                        setConvertedWeight(mgToKg);
                        break;
                    case "pounds":
                        setConvertedWeight(mgToP);
                        break;
                    case "ounces":
                        setConvertedWeight(mgToO);
                        break;
                    case "milligrams":
                        setConvertedWeight(mgToMg);
                        break;
                    default:
                        break;
                }
                break;
            case "pounds":
                switch(target) {
                    case "grams":
                        setConvertedWeight(pToG);
                        break;
                    case "kilograms":
                        setConvertedWeight(pToKg);
                        break;
                    case "milligrams":
                        setConvertedWeight(pToMg);
                        break;
                    case "ounces":
                        setConvertedWeight(pToO);
                        break;
                    case "pounds":
                        setConvertedWeight(pToP);
                        break;
                    default:
                        break;
                }
                break;
            case "ounces":
                switch(target) {
                    case "grams":
                        setConvertedWeight(oToG);
                        break;
                    case "kilograms":
                        setConvertedWeight(oToKg);
                        break;
                    case "milligrams":
                        setConvertedWeight(oToMg);
                        break;
                    case "pounds":
                        setConvertedWeight(oToP);
                        break;
                    case "ounces":
                        setConvertedWeight(oToO);
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
        <Converter 
            title="Weight Converter"
            description="Weight Converter is an utility tool used to convert different weights into other types of weights. This can be used for converting kilograms, grams, milligrams, pounds, and mounces. This is used for learning and practice."
            options={weightConverterOptions}
            currentValue={currentWeight}
            setCurrentValue={setCurrentWeight}
            convertedValue={convertedWeight}
            setConvertedValue={setConvertedWeight}
            currentType={currentWeightType}
            setCurrentType={setCurrentWeightType}
            convertedType={convertedWeightType}
            setConvertedType={setConvertedWeightType}
            converterFunction={convertWeight}
        />
    );
}