"use client";

import Converter from "@/components/Converter";
import { speedConverterOptions } from "@/constants";
import { useMemo, useState } from "react";

const metersPerSecondToKilometersPerHour = (metersPerSecond) => metersPerSecond * 3.6;
const metersPerSecondToMilesPerHour = (metersPerSecond) => metersPerSecond * 2.23694;
const kilometersPerHourToMetersPerSecond = (kilometersPerHour) => kilometersPerHour / 3.6;
const kilometersPerHourToMilesPerHour = (kilometersPerHour) => kilometersPerHour / 1.60934;
const milesPerHourToMetersPerSecond = (milesPerHour) => milesPerHour / 2.23694;
const milesPerHourToKilometersPerHour = (milesPerHour) => milesPerHour * 1.60934;

export default function SpeedConverter() {
    const [currentSpeed, setCurrentSpeed] = useState(0);
    const [convertedSpeed, setConvertedSpeed] = useState(0);
    const [currentSpeedType, setCurrentSpeedType] = useState("meters/second" || "kilometers/hour" || "miles/hour");
    const [convertedSpeedType, setConvertedSpeedType] = useState("kilometers/hour" || "meters/second" || "miles/hour");

    const mToKmH = useMemo(() => metersPerSecondToKilometersPerHour(currentSpeed), [currentSpeed]);
    const mToMph = useMemo(() => metersPerSecondToMilesPerHour(currentSpeed), [currentSpeed]);
    const mToMps = useMemo(() => currentSpeed, [currentSpeed]);
    const kmHToMps = useMemo(() => kilometersPerHourToMetersPerSecond(currentSpeed), [currentSpeed]);
    const kmHToMph = useMemo(() => kilometersPerHourToMilesPerHour(currentSpeed), [currentSpeed]);
    const kmHToKmH = useMemo(() => currentSpeed, [currentSpeed]);
    const mphToMps = useMemo(() => milesPerHourToMetersPerSecond(currentSpeed), [currentSpeed]);
    const mphToKmH = useMemo(() => milesPerHourToKilometersPerHour(currentSpeed), [currentSpeed]);
    const mphToMph = useMemo(() => currentSpeed, [currentSpeed]);

    const convertSpeed = (base, target) => {
        setCurrentSpeedType(base);
        setConvertedSpeedType(target);
        switch (base) {
            case "meters/second":
                switch (target) {
                    case "kilometers/hour":
                        setConvertedSpeed(mToKmH);
                        break;
                    case "miles/hour":
                        setConvertedSpeed(mToMph);
                        break;
                    case "meters/second":
                        setConvertedSpeed(mToMps);
                        break;
                    default:
                        break;
                }
                break;
            case "kilometers/hour":
                switch (target) {
                    case "meters/second":
                        setConvertedSpeed(kmHToMps);
                        break;
                    case "miles/hour":
                        setConvertedSpeed(kmHToMph);
                        break;
                    case "kilometers/hour":
                        setConvertedSpeed(kmHToKmH);
                        break;
                    default:
                        break;
                }
                break;
            case "miles/hour":
                switch (target) {
                    case "meters/second":
                        setConvertedSpeed(mphToMps);
                        break;
                    case "kilometers/hour":
                        setConvertedSpeed(mphToKmH);
                        break;
                    case "miles/hour":
                        setConvertedSpeed(mphToMph);
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
            title="Speed Converter"
            description="Speed Converter is an online utility tool that allows you to convert speeds between different units of measurement, such as meters per second (m/s), kilometers per hour (km/h), miles per hour (mph), and feet per second (ft/s)."
            options={speedConverterOptions}
            currentValue={currentSpeed}
            setCurrentValue={setCurrentSpeed}
            convertedValue={convertedSpeed}
            setConvertedValue={setConvertedSpeed}
            currentType={currentSpeedType}
            setCurrentType={setCurrentSpeedType}
            convertedType={convertedSpeedType}
            setConvertedType={setConvertedSpeedType}
            converterFunction={convertSpeed}
        />
    )
}