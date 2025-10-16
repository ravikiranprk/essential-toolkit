"use client";

import { useMemo, useState } from "react";
import Converter from "./Converter";
import { temperatureConverterOptions } from "@/constants";

const celsiusToFahrenheit = (celsius) => (Number(celsius) * 9 / 5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (Number(fahrenheit) - 32) * (5/9);

const celsiusToKelvin = (celsius) => Number(celsius) + 273.15;
const kelvinToCelsius = (kelvin) => Number(kelvin) - 273.15;

const fahrenheitToKelvin = (fahrenheit) => ((Number(fahrenheit) - 32) * (5/9)) + 273.15;
const kelvinToFahrenheit = (kelvin) => ((Number(kelvin) - 273.15) * (9/5)) + 32;

const celsiusToRankine = (celsius) => (Number(celsius) * 1.8) + 491.67;
const rankineToCelsius = (rankine) => (Number(rankine) - 491.67) / 1.8;

const fahrenheitToRankine = (fahrenheit) => Number(fahrenheit) + 459.67;
const rankineToFahrenheit = (rankine) => Number(rankine) - 459.67;

const kelivinToRankine = (kelvin) => Number(kelvin) * 1.8;
const rankineToKelvin = (rankine) => Number(rankine) / 1.8;

const celsiusToCelsius = (celsius) => Number(celsius);
const fahrenheitToFahrenheit = (fahrenheit) => Number(fahrenheit);
const kelvinToKelvin = (kelvin) => Number(kelvin);
const rankineToRankine = (rankine) => Number(rankine);

export default function TemperatureConv() {
    const [currentTempType, setCurrentTempType] = useState("celsius" || "fahrenheit" || "kelvin" || "rankine");
    const [currentTemp, setCurrentTemp] = useState(0);
    const [convertedTempType, setConvertedTempType] = useState("fahrenheit" || "kelvin" || "rankine" || "celsius");
    const [convertedTemp, setConvertedTemp] = useState(0);

    const cToF = useMemo(() => celsiusToFahrenheit(currentTemp), [currentTemp]);
    const fToC = useMemo(() => fahrenheitToCelsius(currentTemp), [currentTemp]);
    const cToK = useMemo(() => celsiusToKelvin(currentTemp), [currentTemp]);
    const kToC = useMemo(() => kelvinToCelsius(currentTemp), [currentTemp]);
    const fToK = useMemo(() => fahrenheitToKelvin(currentTemp), [currentTemp]);
    const kToF = useMemo(() => kelvinToFahrenheit(currentTemp), [currentTemp]);
    const cToR = useMemo(() => celsiusToRankine(currentTemp), [currentTemp]);
    const rToC = useMemo(() => rankineToCelsius(currentTemp), [currentTemp]);
    const fToR = useMemo(() => fahrenheitToRankine(currentTemp), [currentTemp]);
    const rToF = useMemo(() => rankineToFahrenheit(currentTemp), [currentTemp]);
    const kToR = useMemo(() => kelivinToRankine(currentTemp), [currentTemp]);
    const rToK = useMemo(() => rankineToKelvin(currentTemp), [currentTemp]);

    const cToC = useMemo(() => celsiusToCelsius(currentTemp), [currentTemp]);
    const fToF = useMemo(() => fahrenheitToFahrenheit(currentTemp), [currentTemp]);
    const kToK = useMemo(() => kelvinToKelvin(currentTemp), [currentTemp]);
    const rToR = useMemo(() => rankineToRankine(currentTemp), [currentTemp]);


    const convertTemperature = (base, target) => {
        setCurrentTempType(base);
        setConvertedTempType(target);
        switch (base) {
            case "celsius":
                switch (target) {
                    case "fahrenheit":
                        setConvertedTemp(cToF);
                        break;
                    case "kelvin":
                        setConvertedTemp(cToK);
                        break;
                    case "rankine":
                        setConvertedTemp(cToR);
                        break;
                    case "celsius":
                        setConvertedTemp(cToC);
                    default:
                        break;
                }
                break;
            case "fahrenheit":
                switch(target) {
                    case "celsius":
                        setConvertedTemp(fToC);
                        break;
                    case "kelvin":
                        setConvertedTemp(fToK);
                        break;
                    case "rankine":
                        setConvertedTemp(fToR);
                        break;
                    case "fahrenheit":
                        setConvertedTemp(fToF);
                        break;
                    default:
                        break;
                }
                break;
            case "kelvin":
                switch(target) {
                    case "celsius":
                        setConvertedTemp(kToC);
                        break;
                    case "fahrenheit":
                        setConvertedTemp(kToF);
                        break;
                    case "rankine":
                        setConvertedTemp(kToR);
                        break;
                    case "kelvin":
                        setConvertedTemp(kToK);
                    default:
                        break;
                }
                break;
            case "rankine":
                switch(target) {
                    case "celsius":
                        setConvertedTemp(rToC);
                        break;
                    case "fahrenheit":
                        setConvertedTemp(rToF);
                        break;
                    case "kelvin":
                        setConvertedTemp(rToK);
                        break;
                    case "rankine":
                        setConvertedTemp(rToR);
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
            title="Temperature Converter" 
            description="Temperature is an online utility tool that allows you to convert different units of temperature such as Celsius, Fahrenheit, Kelvin, and Rankine."
            options={temperatureConverterOptions} 
            converterFunction={convertTemperature}
            currentValue={currentTemp}
            setCurrentValue={setCurrentTemp}
            convertedValue={convertedTemp}
            setConvertedValue={setConvertedTemp}
            currentType={currentTempType}
            setCurrentType={setCurrentTempType}
            convertedType={convertedTempType}
            setConvertedType={setConvertedTempType}
        />
    )
}