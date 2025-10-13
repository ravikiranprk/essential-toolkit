"use client";

import { useMemo, useState } from "react";

const metersToMeters = (meters) => Number(meters);
const metersToCentimeters = (meters) => Number(meters) * 100;
const metersToMillimeters = (meters) => Number(meters) * 1000;
const metersToDecimeters = (meters) => Number(meters) * 10;
const metersToHectometers = (meters) => Number(meters) / 100;
const metersToDecameters = (meters) => Number(meters) / 10;
const metersToKilometers = (meters) => Number(meters) / 1000;
const metersToInches = (meters) => Number(meters) * 39.3701;
const metersToFeet = (meters) => Number(meters) * 3.28084;
const metersToYards = (meters) => Number(meters) * 1.09361;
const metersToMiles = (meters) => Number(meters) * 0.000621371;

const centimetersToCentimeters = (centimeters) => Number(centimeters);
const centimetersToMeters = (centimeters) => Number(centimeters) / 100;
const centimetersToMillimeters = (centimeters) => Number(centimeters) * 10;
const centimetersToDecimeters = (centimeters) => Number(centimeters) / 10;
const centimetersToHectometers = (centimeters) => Number(centimeters) / 10000;
const centimetersToDecameters = (centimeters) => Number(centimeters) / 1000;
const centimetersToKilometers = (centimeters) => Number(centimeters) / 100000;
const centimetersToInches = (centimeters) => Number(centimeters) * 0.393701;
const centimetersToFeet = (centimeters) => Number(centimeters) * 0.0328084;
const centimetersToYards = (centimeters) => Number(centimeters) * 0.0109361;
const centimetersToMiles = (centimeters) => Number(centimeters) * 0.00000621371;

const millimetersToMillimeters = (millimeters) => Number(millimeters);
const millimetersToMeters = (millimeters) => Number(millimeters) / 1000;
const millimetersToCentimeters = (millimeters) => Number(millimeters) / 10;
const millimetersToDecimeters = (millimeters) => Number(millimeters) / 100;
const millimetersToHectometers = (millimeters) => Number(millimeters) / 100000;
const millimetersToDecameters = (millimeters) => Number(millimeters) / 10000;
const millimetersToKilometers = (millimeters) => Number(millimeters) / 1000000;
const millimetersToInches = (millimeters) => Number(millimeters) * 0.0393701;
const millimetersToFeet = (millimeters) => Number(millimeters) * 0.00328084;
const millimetersToYards = (millimeters) => Number(millimeters) * 0.00109361;
const millimetersToMiles = (millimeters) => Number(millimeters) * 0.000000621371;

const decimetersToDecimeters = (decimeters) => Number(decimeters);
const decimetersToMeters = (decimeters) => Number(decimeters) / 10;
const decimetersToCentimeters = (decimeters) => Number(decimeters) * 10;
const decimetersToMillimeters = (decimeters) => Number(decimeters) * 100;
const decimetersToHectometers = (decimeters) => Number(decimeters) / 1000;
const decimetersToDecameters = (decimeters) => Number(decimeters) / 100;
const decimetersToKilometers = (decimeters) => Number(decimeters) / 10000;
const decimetersToInches = (decimeters) => Number(decimeters) * 3.93701;
const decimetersToFeet = (decimeters) => Number(decimeters) * 0.328084;
const decimetersToYards = (decimeters) => Number(decimeters) * 0.109361;
const decimetersToMiles = (decimeters) => Number(decimeters) * 0.0000621371;

const hectometersToHectometers = (hectometers) => Number(hectometers);
const hectometersToMeters = (hectometers) => Number(hectometers) * 100;
const hectometersToCentimeters = (hectometers) => Number(hectometers) * 10000;
const hectometersToMillimeters = (hectometers) => Number(hectometers) * 1000000;
const hectometersToDecimeters = (hectometers) => Number(hectometers) * 1000;
const hectometersToDecameters = (hectometers) => Number(hectometers) * 10;
const hectometersToKilometers = (hectometers) => Number(hectometers) / 10;
const hectometersToInches = (hectometers) => Number(hectometers) * 3937.01;
const hectometersToFeet = (hectometers) => Number(hectometers) * 328.084;
const hectometersToYards = (hectometers) => Number(hectometers) * 109.361;
const hectometersToMiles = (hectometers) => Number(hectometers) * 0.0621371;

const decametersToDecameters = (decameters) => Number(decameters);
const decametersToMeters = (decameters) => Number(decameters) * 10;
const decametersToCentimeters = (decameters) => Number(decameters) * 1000;
const decametersToMillimeters = (decameters) => Number(decameters) * 10000;
const decametersToDecimeters = (decameters) => Number(decameters) * 100;
const decametersToHectometers = (decameters) => Number(decameters) / 10;
const decametersToKilometers = (decameters) => Number(decameters) * 100;
const decametersToInches = (decameters) => Number(decameters) * 393.701;
const decametersToFeet = (decameters) => Number(decameters) * 32.8084;
const decametersToYards = (decameters) => Number(decameters) * 10.9361;
const decametersToMiles = (decameters) => Number(decameters) * 0.00621371;

const kilometersToKilometers = (kilometers) => Number(kilometers);
const kilometersToMeters = (kilometers) => Number(kilometers) * 1000;
const kilometersToCentimeters = (kilometers) => Number(kilometers) * 100000;
const kilometersToMillimeters = (kilometers) => Number(kilometers) * 1000000;
const kilometersToDecimeters = (kilometers) => Number(kilometers) * 10000;
const kilometersToHectometers = (kilometers) => Number(kilometers) * 10;
const kilometersToDecameters = (kilometers) => Number(kilometers) * 100;
const kilometersToInches = (kilometers) => Number(kilometers) * 39370.1;
const kilometersToFeet = (kilometers) => Number(kilometers) * 3280.84;
const kilometersToYards = (kilometers) => Number(kilometers) * 1093.61;
const kilometersToMiles = (kilometers) => Number(kilometers) * 0.621371;

const inchesToInches = (inches) => Number(inches);
const inchesToMeters = (inches) => Number(inches) * 0.0254;
const inchesToCentimeters = (inches) => Number(inches) * 2.54;
const inchesToMillimeters = (inches) => Number(inches) * 25.4;
const inchesToDecimeters = (inches) => Number(inches) * 0.254;
const inchesToHectometers = (inches) => Number(inches) * 0.000254;
const inchesToDecameters = (inches) => Number(inches) * 0.00254;
const inchesToKilometers = (inches) => Number(inches) * 0.0000254;
const inchesToFeet = (inches) => Number(inches) * 0.0833333;
const inchesToYards = (inches) => Number(inches) * 0.0277778;
const inchesToMiles = (inches) => Number(inches) * 0.0000157828;

const feetToFeet = (feet) => Number(feet);
const feetToMeters = (feet) => Number(feet) * 0.3048;
const feetToCentimeters = (feet) => Number(feet) * 30.48;
const feetToMillimeters = (feet) => Number(feet) * 304.8;
const feetToDecimeters = (feet) => Number(feet) * 3.048;
const feetToHectometers = (feet) => Number(feet) * 0.003048;
const feetToDecameters = (feet) => Number(feet) * 0.03048;
const feetToKilometers = (feet) => Number(feet) * 0.0003048;
const feetToInches = (feet) => Number(feet) * 12;
const feetToYards = (feet) => Number(feet) * 0.333333;
const feetToMiles = (feet) => Number(feet) * 0.000189394;

const yardsToYards = (yards) => Number(yards);
const yardsToMeters = (yards) => Number(yards) * 0.9144;
const yardsToCentimeters = (yards) => Number(yards) * 91.44;
const yardsToMillimeters = (yards) => Number(yards) * 914.4;
const yardsToDecimeters = (yards) => Number(yards) * 9.144;
const yardsToHectometers = (yards) => Number(yards) * 0.009144;
const yardsToDecameters = (yards) => Number(yards) * 0.09144;
const yardsToKilometers = (yards) => Number(yards) * 0.0009144;
const yardsToInches = (yards) => Number(yards) * 36;
const yardsToFeet = (yards) => Number(yards) * 3;
const yardsToMiles = (yards) => Number(yards) * 0.000568182;

const milesToMiles = (miles) => Number(miles);
const milesToMeters = (miles) => Number(miles) * 1609.34;
const milesToCentimeters = (miles) => Number(miles) * 160934;
const milesToMillimeters = (miles) => Number(miles) * 1609340;
const milesToDecimeters = (miles) => Number(miles) * 16093.4;
const milesToHectometers = (miles) => Number(miles) * 16.093;
const milesToDecameters = (miles) => Number(miles) * 160.934;
const milesToKilometers = (miles) => Number(miles) * 1.60934;
const milesToInches = (miles) => Number(miles) * 63360;
const milesToFeet = (miles) => Number(miles) * 5280;
const milesToYards = (miles) => Number(miles) * 1760;

export default function UnitsConverter() {
    const [currentUnitType, setCurrentUnitType] = useState("meters" || "kilometers" || "centimeters" || "millimeters" || "decimeters" || "hectometers" || "decameters" || "inches" || "feet" || "yards" || "miles");
    const [convertedUnitType, setConvertedUnitType] = useState("kilometers" || "centimeters" || "millimeters" || "decimeters" || "hectometers" || "decameters" || "inches" || "feet" || "yards" || "miles" || "meters");

    const [currentUnit, setCurrentUnit] = useState(0);
    const [convertedUnit, setConvertedUnit] = useState(0);

    const mToM = useMemo(() => metersToMeters(currentUnit), [currentUnit]);
    const mToKm = useMemo(() => metersToKilometers(currentUnit), [currentUnit]);
    const mToCm = useMemo(() => metersToCentimeters(currentUnit), [currentUnit]);
    const mToMm = useMemo(() => metersToMillimeters(currentUnit), [currentUnit]);
    const mToD = useMemo(() => metersToDecimeters(currentUnit), [currentUnit]);
    const mToH = useMemo(() => metersToHectometers(currentUnit), [currentUnit]);
    const mToDa = useMemo(() => metersToDecameters(currentUnit), [currentUnit]);
    const mToI = useMemo(() => metersToInches(currentUnit), [currentUnit]);
    const mToF = useMemo(() => metersToFeet(currentUnit), [currentUnit]);
    const mToY = useMemo(() => metersToYards(currentUnit), [currentUnit]);
    const mToMi = useMemo(() => metersToMiles(currentUnit), [currentUnit]);

    const cmToM = useMemo(() => centimetersToMeters(currentUnit), [currentUnit]);
    const cmToKm = useMemo(() => centimetersToKilometers(currentUnit), [currentUnit]);
    const cmToCm = useMemo(() => centimetersToCentimeters(currentUnit), [currentUnit]);
    const cmToMm = useMemo(() => centimetersToMillimeters(currentUnit), [currentUnit]);
    const cmToD = useMemo(() => centimetersToDecimeters(currentUnit), [currentUnit]);
    const cmToH = useMemo(() => centimetersToHectometers(currentUnit), [currentUnit]);
    const cmToDa = useMemo(() => centimetersToDecameters(currentUnit), [currentUnit]);
    const cmToI = useMemo(() => centimetersToInches(currentUnit), [currentUnit]);
    const cmToF = useMemo(() => centimetersToFeet(currentUnit), [currentUnit]);
    const cmToY = useMemo(() => centimetersToYards(currentUnit), [currentUnit]);
    const cmToMi = useMemo(() => centimetersToMiles(currentUnit), [currentUnit]);

    const mmToM = useMemo(() => millimetersToMeters(currentUnit), [currentUnit]);
    const mmToKm = useMemo(() => millimetersToKilometers(currentUnit), [currentUnit]);
    const mmToCm = useMemo(() => millimetersToCentimeters(currentUnit), [currentUnit]);
    const mmToMm = useMemo(() => millimetersToMillimeters(currentUnit), [currentUnit]);
    const mmToD = useMemo(() => millimetersToDecimeters(currentUnit), [currentUnit]);
    const mmToH = useMemo(() => millimetersToHectometers(currentUnit), [currentUnit]);
    const mmToDa = useMemo(() => millimetersToDecameters(currentUnit), [currentUnit]);
    const mmToI = useMemo(() => millimetersToInches(currentUnit), [currentUnit]);
    const mmToF = useMemo(() => millimetersToFeet(currentUnit), [currentUnit]);
    const mmToY = useMemo(() => millimetersToYards(currentUnit), [currentUnit]);
    const mmToMi = useMemo(() => millimetersToMiles(currentUnit), [currentUnit]);

    const kmToM = useMemo(() => kilometersToMeters(currentUnit), [currentUnit]);
    const kmToKm = useMemo(() => kilometersToKilometers(currentUnit), [currentUnit]);
    const kmToCm = useMemo(() => kilometersToCentimeters(currentUnit), [currentUnit]);
    const kmToMm = useMemo(() => kilometersToMillimeters(currentUnit), [currentUnit]);
    const kmToD = useMemo(() => kilometersToDecimeters(currentUnit), [currentUnit]);
    const kmToH = useMemo(() => kilometersToHectometers(currentUnit), [currentUnit]);
    const kmToDa = useMemo(() => kilometersToDecameters(currentUnit), [currentUnit]);
    const kmToI = useMemo(() => kilometersToInches(currentUnit), [currentUnit]);
    const kmToF = useMemo(() => kilometersToFeet(currentUnit), [currentUnit]);
    const kmToY = useMemo(() => kilometersToYards(currentUnit), [currentUnit]);
    const kmToMi = useMemo(() => kilometersToMiles(currentUnit), [currentUnit]);

    const dToM = useMemo(() => decimetersToMeters(currentUnit), [currentUnit]);
    const dToKm = useMemo(() => decimetersToKilometers(currentUnit), [currentUnit]);
    const dToCm = useMemo(() => decimetersToCentimeters(currentUnit), [currentUnit]);
    const dToMm = useMemo(() => decimetersToMillimeters(currentUnit), [currentUnit]);
    const dToD = useMemo(() => decimetersToDecimeters(currentUnit), [currentUnit]);
    const dToH = useMemo(() => decimetersToHectometers(currentUnit), [currentUnit]);
    const dToDa = useMemo(() => decimetersToDecameters(currentUnit), [currentUnit]);
    const dToI = useMemo(() => decimetersToInches(currentUnit), [currentUnit]);
    const dToF = useMemo(() => decimetersToFeet(currentUnit), [currentUnit]);
    const dToY = useMemo(() => decimetersToYards(currentUnit), [currentUnit]);
    const dToMi = useMemo(() => decimetersToMiles(currentUnit), [currentUnit]);


    const hToM = useMemo(() => hectometersToMeters(currentUnit), [currentUnit]);
    const hToKm = useMemo(() => hectometersToKilometers(currentUnit), [currentUnit]);
    const hToCm = useMemo(() => hectometersToCentimeters(currentUnit), [currentUnit]);
    const hToMm = useMemo(() => hectometersToMillimeters(currentUnit), [currentUnit]);
    const hToD = useMemo(() => hectometersToDecimeters(currentUnit), [currentUnit]);
    const hToH = useMemo(() => hectometersToHectometers(currentUnit), [currentUnit]);
    const hToDa = useMemo(() => hectometersToDecameters(currentUnit), [currentUnit]);
    const hToI = useMemo(() => hectometersToInches(currentUnit), [currentUnit]);
    const hToF = useMemo(() => hectometersToFeet(currentUnit), [currentUnit]);
    const hToY = useMemo(() => hectometersToYards(currentUnit), [currentUnit]);
    const hToMi = useMemo(() => hectometersToMiles(currentUnit), [currentUnit]);

    const daToM = useMemo(() => decametersToMeters(currentUnit), [currentUnit]);
    const daToKm = useMemo(() => decametersToKilometers(currentUnit), [currentUnit]);
    const daToCm = useMemo(() => decametersToCentimeters(currentUnit), [currentUnit]);
    const daToMm = useMemo(() => decametersToMillimeters(currentUnit), [currentUnit]);
    const daToD = useMemo(() => decametersToDecimeters(currentUnit), [currentUnit]);
    const daToH = useMemo(() => decametersToHectometers(currentUnit), [currentUnit]);
    const daToDa = useMemo(() => decametersToDecameters(currentUnit), [currentUnit]);
    const daToI = useMemo(() => decametersToInches(currentUnit), [currentUnit]);
    const daToF = useMemo(() => decametersToFeet(currentUnit), [currentUnit]);
    const daToY = useMemo(() => decametersToYards(currentUnit), [currentUnit]);
    const daToMi = useMemo(() => decametersToMiles(currentUnit), [currentUnit]);

    const miToM = useMemo(() => milesToMeters(currentUnit), [currentUnit]);
    const miToKm = useMemo(() => milesToKilometers(currentUnit), [currentUnit]);
    const miToCm = useMemo(() => milesToCentimeters(currentUnit), [currentUnit]);
    const miToMm = useMemo(() => milesToMillimeters(currentUnit), [currentUnit]);
    const miToD = useMemo(() => milesToDecimeters(currentUnit), [currentUnit]);
    const miToH = useMemo(() => milesToHectometers(currentUnit), [currentUnit]);
    const miToDa = useMemo(() => milesToDecameters(currentUnit), [currentUnit]);
    const miToI = useMemo(() => milesToInches(currentUnit), [currentUnit]);
    const miToF = useMemo(() => milesToFeet(currentUnit), [currentUnit]);
    const miToY = useMemo(() => milesToYards(currentUnit), [currentUnit]);
    const miToMi = useMemo(() => milesToMiles(currentUnit), [currentUnit]);

    const yToM = useMemo(() => yardsToMeters(currentUnit), [currentUnit]);
    const yToKm = useMemo(() => yardsToKilometers(currentUnit), [currentUnit]);
    const yToCm = useMemo(() => yardsToCentimeters(currentUnit), [currentUnit]);
    const yToMm = useMemo(() => yardsToMillimeters(currentUnit), [currentUnit]);
    const yToD = useMemo(() => yardsToDecimeters(currentUnit), [currentUnit]);
    const yToH = useMemo(() => yardsToHectometers(currentUnit), [currentUnit]);
    const yToDa = useMemo(() => yardsToDecameters(currentUnit), [currentUnit]);
    const yToI = useMemo(() => yardsToInches(currentUnit), [currentUnit]);
    const yToF = useMemo(() => yardsToFeet(currentUnit), [currentUnit]);
    const yToY = useMemo(() => yardsToYards(currentUnit), [currentUnit]);
    const yToMi = useMemo(() => yardsToMiles(currentUnit), [currentUnit]);

    const iToM = useMemo(() => inchesToMeters(currentUnit), [currentUnit]);
    const iToKm = useMemo(() => inchesToKilometers(currentUnit), [currentUnit]);
    const iToCm = useMemo(() => inchesToCentimeters(currentUnit), [currentUnit]);
    const iToMm = useMemo(() => inchesToMillimeters(currentUnit), [currentUnit]);
    const iToD = useMemo(() => inchesToDecimeters(currentUnit), [currentUnit]);
    const iToH = useMemo(() => inchesToHectometers(currentUnit), [currentUnit]);
    const iToDa = useMemo(() => inchesToDecameters(currentUnit), [currentUnit]);
    const iToI = useMemo(() => inchesToInches(currentUnit), [currentUnit]);
    const iToF = useMemo(() => inchesToFeet(currentUnit), [currentUnit]);
    const iToY = useMemo(() => inchesToYards(currentUnit), [currentUnit]);
    const iToMi = useMemo(() => inchesToMiles(currentUnit), [currentUnit]);

    const fToM = useMemo(() => feetToMeters(currentUnit), [currentUnit]);
    const fToKm = useMemo(() => feetToKilometers(currentUnit), [currentUnit]);
    const fToCm = useMemo(() => feetToCentimeters(currentUnit), [currentUnit]);
    const fToMm = useMemo(() => feetToMillimeters(currentUnit), [currentUnit]);
    const fToD = useMemo(() => feetToDecimeters(currentUnit), [currentUnit]);
    const fToH = useMemo(() => feetToHectometers(currentUnit), [currentUnit]);
    const fToDa = useMemo(() => feetToDecameters(currentUnit), [currentUnit]);
    const fToI = useMemo(() => feetToInches(currentUnit), [currentUnit]);
    const fToF = useMemo(() => feetToFeet(currentUnit), [currentUnit]);
    const fToY = useMemo(() => feetToYards(currentUnit), [currentUnit]);
    const fToMi = useMemo(() => feetToMiles(currentUnit), [currentUnit]);

    const convertLength = (base, target) => {
        setCurrentUnitType(base);
        setConvertedUnitType(target);

        switch (base) {
            case "meters":
                switch (target) {
                    case "centimeters":
                        setConvertedUnit(mToCm);
                        break;
                    case "millimeters":
                        setConvertedUnit(mToMm);
                        break;
                    case "kilometers":
                        setConvertedUnit(mToKm);
                        break;
                    case "decimeters":
                        setConvertedUnit(mToD);
                        break;
                    case "meters":
                        setConvertedUnit(mToM);
                        break;
                    case "hectometers":
                        setConvertedUnit(mToH);
                        break;
                    case "decameters":
                        setConvertedUnit(mToDa);
                        break;
                    case "inches":
                        setConvertedUnit(mToI);
                        break;
                    case "feet":
                        setConvertedUnit(mToF);
                        break;
                    case "yards":
                        setConvertedUnit(mToY);
                        break;
                    case "miles":
                        setConvertedUnit(mToMi);
                        break;
                    default:
                        break;
                }
                break;
            case "centimeters":
                switch (target) {
                    case "meters":
                        setConvertedUnit(cmToM);
                        break;
                    case "millimeters":
                        setConvertedUnit(cmToMm);
                        break;
                    case "kilometers":
                        setConvertedUnit(cmToKm);
                        break;
                    case "decimeters":
                        setConvertedUnit(cmToD);
                        break;
                    case "hectometers":
                        setConvertedUnit(cmToH);
                        break;
                    case "decameters":
                        setConvertedUnit(cmToDa);
                        break;
                    case "inches":
                        setConvertedUnit(cmToI);
                        break;
                    case "feet":
                        setConvertedUnit(cmToF);
                        break;
                    case "yards":
                        setConvertedUnit(cmToY);
                        break;
                    case "miles":
                        setConvertedUnit(cmToMi);
                        break;
                    case "centimeters":
                        setConvertedUnit(cmToCm);
                        break;
                    default:
                        break;
                }
                break;
            case "inches":
                switch (target) {
                    case "meters":
                        setConvertedUnit(iToM);
                        break;
                    case "millimeters":
                        setConvertedUnit(iToMm);
                        break;
                    case "kilometers":
                        setConvertedUnit(iToKm);
                        break;
                    case "decimeters":
                        setConvertedUnit(iToD);
                        break;
                    case "hectometers":
                        setConvertedUnit(iToH);
                        break;
                    case "decameters":
                        setConvertedUnit(iToDa);
                        break;
                    case "inches":
                        setConvertedUnit(iToI);
                        break;
                    case "feet":
                        setConvertedUnit(iToF);
                        break;
                    case "yards":
                        setConvertedUnit(iToY);
                        break;
                    case "miles":
                        setConvertedUnit(iToMi);
                        break;
                    case "centimeters":
                        setConvertedUnit(iToCm);
                        break;
                    default:
                        break;
                }
                break;
            case "feet":
                switch (target) {
                    case "meters":
                        setConvertedUnit(fToM);
                        break;
                    case "centimeters":
                        setConvertedUnit(fToCm);
                        break;
                    case "millimeters":
                        setConvertedUnit(fToMm);
                        break;
                    case "kilometers":
                        setConvertedUnit(fToKm);
                        break;
                    case "decimeters":
                        setConvertedUnit(fToD);
                        break;
                    case "hectometers":
                        setConvertedUnit(fToH);
                        break;
                    case "decameters":
                        setConvertedUnit(fToDa);
                        break;
                    case "inches":
                        setConvertedUnit(fToI);
                        break;
                    case "feet":
                        setConvertedUnit(fToF);
                        break;
                    case "yards":
                        setConvertedUnit(fToY);
                        break;
                    case "miles":
                        setConvertedUnit(fToMi);
                        break;
                    default:
                        break;
                }
                break;
            case "yards":
                switch (target) {
                    case "meters":
                        setConvertedUnit(yToM);
                        break;
                    case "millimeters":
                        setConvertedUnit(yToMm);
                        break;
                    case "centimeters":
                        setConvertedUnit(yToCm);
                        break;
                    case "kilometers":
                        setConvertedUnit(yToKm);
                        break;
                    case "decimeters":
                        setConvertedUnit(yToD);
                        break;
                    case "hectometers":
                        setConvertedUnit(yToH);
                        break;
                    case "decameters":
                        setConvertedUnit(yToDa);
                        break;
                    case "inches":
                        setConvertedUnit(yToI);
                        break;
                    case "feet":
                        setConvertedUnit(yToF);
                        break;
                    case "yards":
                        setConvertedUnit(yToY);
                        break;
                    case "miles":
                        setConvertedUnit(yToMi);
                        break;
                    default:
                        break;
                }
                break;
            case "miles":
                switch (target) {
                    case "meters":
                        setConvertedUnit(miToM);
                        break;
                    case "millimeters":
                        setConvertedUnit(miToMm);
                        break;
                    case "centimeters":
                        setConvertedUnit(miToCm);
                        break;
                    case "kilometers":
                        setConvertedUnit(miToKm);
                        break;
                    case "decimeters":
                        setConvertedUnit(miToD);
                        break;
                    case "hectometers":
                        setConvertedUnit(miToH);
                        break;
                    case "decameters":
                        setConvertedUnit(miToDa);
                        break;
                    case "inches":
                        setConvertedUnit(miToI);
                        break;
                    case "feet":
                        setConvertedUnit(miToF);
                        break;
                    case "yards":
                        setConvertedUnit(miToY);
                        break;
                    case "miles":
                        setConvertedUnit(miToMi);
                        break;
                    default:
                        break;
                }
                break;
            case "millimeters":
                switch (target) {
                    case "meters":
                        setConvertedUnit(mmToM);
                        break;
                    case "millimeters":
                        setConvertedUnit(mmToMm);
                        break;
                    case "centimeters":
                        setConvertedUnit(mmToCm);
                        break;
                    case "kilometers":
                        setConvertedUnit(mmToKm);
                        break;
                    case "decimeters":
                        setConvertedUnit(mmToD);
                        break;
                    case "hectometers":
                        setConvertedUnit(mmToH);
                        break;
                    case "decameters":
                        setConvertedUnit(mmToDa);
                        break;
                    case "inches":
                        setConvertedUnit(mmToI);
                        break;
                    case "feet":
                        setConvertedUnit(mmToF);
                        break;
                    case "yards":
                        setConvertedUnit(mmToY);
                        break;
                    case "miles":
                        setConvertedUnit(mmToMi);
                        break;
                    default:
                        break;
                }
                break;
            case "decimeters":
                switch (target) {
                    case "meters":
                        setConvertedUnit(dToM);
                        break;
                    case "millimeters":
                        setConvertedUnit(dToMm);
                        break;
                    case "centimeters":
                        setConvertedUnit(dToCm);
                        break;
                    case "kilometers":
                        setConvertedUnit(dToKm);
                        break;
                    case "decimeters":
                        setConvertedUnit(dToD);
                        break;
                    case "hectometers":
                        setConvertedUnit(dToH);
                        break;
                    case "decameters":
                        setConvertedUnit(dToDa);
                        break;
                    case "inches":
                        setConvertedUnit(dToI);
                        break;
                    case "feet":
                        setConvertedUnit(dToF);
                        break;
                    case "yards":
                        setConvertedUnit(dToY);
                        break;
                    case "miles":
                        setConvertedUnit(dToMi);
                        break;
                }
                break;
            case "hectometers":
                switch(target) {
                    case "meters":
                        setConvertedUnit(hToM);
                        break;
                    case "millimeters":
                        setConvertedUnit(hToMm);
                        break;
                    case "centimeters":
                        setConvertedUnit(hToCm);
                        break;
                    case "kilometers":
                        setConvertedUnit(hToKm);
                        break;
                    case "decimeters":
                        setConvertedUnit(hToD);
                        break;
                    case "hectometers":
                        setConvertedUnit(hToH);
                        break;
                    case "decameters":
                        setConvertedUnit(hToDa);
                        break;
                    case "inches":
                        setConvertedUnit(hToI);
                        break;
                    case "feet":
                        setConvertedUnit(hToF);
                        break;
                    case "yards":
                        setConvertedUnit(hToY);
                        break;
                    case "miles":
                        setConvertedUnit(hToMi);
                        break;
                    default:
                        break;
                }
                break;
            case "decameters":
                switch(target) {
                    case "meters":
                        setConvertedUnit(daToM);
                        break;
                    case "millimeters":
                        setConvertedUnit(daToMm);
                        break;
                    case "centimeters":
                        setConvertedUnit(daToCm);
                        break;
                    case "kilometers":
                        setConvertedUnit(daToKm);
                        break;
                    case "decimeters":
                        setConvertedUnit(daToD);
                        break;
                    case "hectometers":
                        setConvertedUnit(daToH);
                        break;
                    case "decameters":
                        setConvertedUnit(daToDa);
                        break;
                    case "inches":
                        setConvertedUnit(daToI);
                        break;
                    case "feet":
                        setConvertedUnit(daToF);
                        break;
                    case "yards":
                        setConvertedUnit(daToY);
                        break;
                    case "miles":
                        setConvertedUnit(daToMi);
                        break;
                    default:
                        break;
                }
                break;
            case "kilometers":
                switch(target) {
                    case "meters":
                        setConvertedUnit(kmToM);
                        break;
                    case "millimeters":
                        setConvertedUnit(kmToMm);
                        break;
                    case "centimeters":
                        setConvertedUnit(kmToCm);
                        break;
                    case "kilometers":
                        setConvertedUnit(kmToKm);
                        break;
                    case "decimeters":
                        setConvertedUnit(kmToD);
                        break;
                    case "hectometers":
                        setConvertedUnit(kmToH);
                        break;
                    case "decameters":
                        setConvertedUnit(kmToDa);
                        break;
                    case "inches":
                        setConvertedUnit(kmToI);
                        break;
                    case "feet":
                        setConvertedUnit(kmToF);
                        break;
                    case "yards":
                        setConvertedUnit(kmToY);
                        break;
                    case "miles":
                        setConvertedUnit(kmToMi);
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
        <main className="p-7">
            <h1 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold p-5 bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100 bg-clip-text text-transparent">Length Converter</h1>
            <section className="flex flex-col gap-2">
                <p>Length Converter is an utility tool used to convert different units of length into other types of units. This can be used for converting meters, kilometers, centimeters, inches, and more. This is used for learning and practice.</p>
                <p className="bg-clip-text text-transparent bg-gradient-to-br from-sky-950 via-sky-500 to-sky-100">
                    - Length Converter by Essential Toolkit
                </p>
            </section>
            <section className="temp-conv-container">
                <div className="temp-conv-form-container">
                    <div className="temp-conv-input">
                        <select onChange={(e) => setCurrentUnitType(e.target.value)} value={currentUnitType}>
                            <option value="meters">Meters</option>
                            <option value="millimeters">Millimeters</option>
                            <option value="centimeters">Centimeters</option>
                            <option value="kilometers">Kilometers</option>
                            <option value="decimeters">Decimeters</option>
                            <option value="hectometers">Hectometers</option>
                            <option value="decameters">Decameters</option>
                            <option value="inches">Inches</option>
                            <option value="feet">Feet</option>
                            <option value="yards">Yards</option>
                            <option value="miles">Miles</option>
                        </select>
                        <input type="number" value={currentUnit} onChange={(e) => setCurrentUnit(e.target.value)} />
                    </div>
                    <div className="text-xl">To</div>
                    <div className="temp-conv-input">
                        <select onChange={(e) => setConvertedUnitType(e.target.value)} value={convertedUnitType}>
                            <option value="meters">Meters</option>
                            <option value="millimeters">Millimeters</option>
                            <option value="centimeters">Centimeters</option>
                            <option value="kilometers">Kilometers</option>
                            <option value="decimeters">Decimeters</option>
                            <option value="hectometers">Hectometers</option>
                            <option value="decameters">Decameters</option>
                            <option value="inches">Inches</option>
                            <option value="feet">Feet</option>
                            <option value="yards">Yards</option>
                            <option value="miles">Miles</option>
                        </select>
                        <input type="number" value={convertedUnit} onChange={(e) => setConvertedUnit(e.target.value)} disabled />
                    </div>
                    <div className="temp-conv-btn">
                        <button onClick={() => convertLength(currentUnitType, convertedUnitType)}>Convert</button>
                    </div>
                </div>
            </section>
        </main>
    );
}