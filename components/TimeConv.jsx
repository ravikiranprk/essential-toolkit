"use client";

import { useMemo, useState } from "react"
import Converter from "./Converter";
import { timeConverterOptions } from "@/constants";

const secondsToMinutes = (seconds) => Number(seconds) / 60;
const secondsToMilliseconds = (seconds) => Number(seconds) * 1000;
const secondsToHours = (seconds) => Number(seconds) / (60 * 60);
const secondsToDays = (seconds) => Number(seconds) / (60 * 60 * 24);
const secondsToWeeks = (seconds) => Number(seconds) / (60 * 60 * 24 * 7);
const secondsToMonths = (seconds) => Math.round(Number(seconds) / (60 * 60 * 24 * 30.44));
const secondsToYears = (seconds) => Number(seconds) / (60 * 60 * 24 * 365);
const secondsToSeconds = (seconds) => Number(seconds);

const minutesToSeconds = (minutes) => Number(minutes) * 60;
const minutesToMilliseconds = (minutes) => Number(minutes) * 60 * 1000;
const minutesToHours = (minutes) => Number(minutes) / 60;
const minutesToDays = (minutes) => Number(minutes) / (60 * 24);
const minutesToWeeks = (minutes) => Number(minutes) / (60 * 24 * 7);
const minutesToMonths = (minutes) => Number(minutes) / (60 * 24 * 30.44);
const minutesToYears = (minutes) => Number(minutes) / (60 * 24 * 365);
const minutesToMinutes = (minutes) => Number(minutes);

const millisecondsToSeconds = (milliseconds) => Number(milliseconds) / 1000;
const millisecondsToMinutes = (milliseconds) => Number(milliseconds) / (60 * 1000);
const millisecondsToHours = (milliseconds) => Number(milliseconds) / (60 * 60 * 1000);
const millisecondsToDays = (milliseconds) => Number(milliseconds) / (60 * 60 * 24 * 1000);
const millisecondsToWeeks = (milliseconds) => Number(milliseconds) / (60 * 60 * 24 * 7 * 1000);
const millisecondsToMonths = (milliseconds) => Number(milliseconds) / (60 * 60 * 24 * 30.44 * 1000);
const millisecondsToYears = (milliseconds) => Number(milliseconds) / (60 * 60 * 24 * 365 * 1000);
const millisecondsToMilliseconds = (milliseconds) => Number(milliseconds);

const hoursToMinutes = (hours) => Number(hours) * 60;
const hoursToSeconds = (hours) => Number(hours) * 60 * 60;
const hoursToMilliseconds = (hours) => Number(hours) * 60 * 60 * 1000;
const hoursToDays = (hours) => Number(hours) / 24;
const hoursToWeeks = (hours) => Number(hours) / (24 * 7);
const hoursToMonths = (hours) => Number(hours) / (24 * 30.44);
const hoursToYears = (hours) => Number(hours) / (24 * 365);
const hoursToHours = (hours) => Number(hours);

const daysToMinutes = (days) => Number(days) * 24 * 60;
const daysToSeconds = (days) => Number(days) * 24 * 60 * 60;
const daysToMilliseconds = (days) => Number(days) * 24 * 60 * 60 * 1000;
const daysToHours = (days) => Number(days) * 24;
const daysToWeeks = (days) => Number(days) / 7;
const daysToMonths = (days) => Number(days) / 30.44;
const daysToYears = (days) => Number(days) / 365;
const daysToDays = (days) => Number(days);

const weeksToMinutes = (weeks) => Number(weeks) * 7 * 24 * 60;
const weeksToSeconds = (weeks) => Number(weeks) * 7 * 24 * 60 * 60;
const weeksToMilliseconds = (weeks) => Number(weeks) * 7 * 24 * 60 * 60 * 1000;
const weeksToHours = (weeks) => Number(weeks) * 7 * 24;
const weeksToDays = (weeks) => Number(weeks) * 7;
const weeksToMonths = (weeks) => Number(weeks) / 4.345;
const weeksToYears = (weeks) => Number(weeks) / 52.177;
const weeksToWeeks = (weeks) => Number(weeks);

const monthsToMinutes = (months) => Number(months) * 30.44 * 24 * 60;
const monthsToSeconds = (months) => Number(months) * 30.44 * 24 * 60 * 60;
const monthsToMilliseconds = (months) => Number(months) * 30.44 * 24 * 60 * 60 * 1000;
const monthsToHours = (months) => Number(months) * 30.44 * 24;
const monthsToDays = (months) => Math.round(Number(months) * 30.44);
const monthsToWeeks = (months) => Number(months) * 4.345;
const monthsToYears = (months) => Number(months) / 12;
const monthsToMonths = (months) => Number(months);

const yearsToMinutes = (years) => Number(years) * 365 * 24 * 60;
const yearsToSeconds = (years) => Number(years) * 365 * 24 * 60 * 60;
const yearsToMilliseconds = (years) => Number(years) * 365 * 24 * 60 * 60 * 1000;
const yearsToHours = (years) => Number(years) * 365 * 24;
const yearsToDays = (years) => Number(years) * 365;
const yearsToWeeks = (years) => Number(years) * 52.177;
const yearsToMonths = (years) => Number(years) * 12;
const yearsToYears = (years) => Number(years);

export default function TimeConv() {
    const [currentTime, setCurrentTime] = useState(0);
    const [convertedTime, setConvertedTime] = useState(0);
    const [currentTimeType, setCurrentTimeType] = useState("minutes");
    const [convertedTimeType, setConvertedTimeType] = useState("seconds");

    const minToMilli = useMemo(() => minutesToMilliseconds(currentTime), [currentTime]);
    const minToSec = useMemo(() => minutesToSeconds(currentTime), [currentTime]);
    const minToMin = useMemo(() => minutesToMinutes(currentTime), [currentTime]);
    const minToHour = useMemo(() => minutesToHours(currentTime), [currentTime]);
    const minToDay = useMemo(() => minutesToDays(currentTime), [currentTime]);
    const minToWeek = useMemo(() => minutesToWeeks(currentTime), [currentTime]);
    const minToMonth = useMemo(() => minutesToMonths(currentTime), [currentTime]);
    const minToYear = useMemo(() => minutesToYears(currentTime), [currentTime]);

    const milliToMin = useMemo(() => millisecondsToMinutes(currentTime), [currentTime]);
    const milliToSec = useMemo(() => millisecondsToSeconds(currentTime), [currentTime]);
    const milliToMilli = useMemo(() => millisecondsToMilliseconds(currentTime), [currentTime]);
    const milliToHour = useMemo(() => millisecondsToHours(currentTime), [currentTime]);
    const milliToDay = useMemo(() => millisecondsToDays(currentTime), [currentTime]);
    const milliToWeek = useMemo(() => millisecondsToWeeks(currentTime), [currentTime]);
    const milliToMonth = useMemo(() => millisecondsToMonths(currentTime), [currentTime]);
    const milliToYear = useMemo(() => millisecondsToYears(currentTime), [currentTime]);

    const secToMin = useMemo(() => secondsToMinutes(currentTime), [currentTime]);
    const secToSec = useMemo(() => secondsToSeconds(currentTime), [currentTime]);
    const secToMilli = useMemo(() => secondsToMilliseconds(currentTime), [currentTime]);
    const secToHour = useMemo(() => secondsToHours(currentTime), [currentTime]);
    const secToDay = useMemo(() => secondsToDays(currentTime), [currentTime]);
    const secToWeek = useMemo(() => secondsToWeeks(currentTime), [currentTime]);
    const secToMonth = useMemo(() => secondsToMonths(currentTime), [currentTime]);
    const secToYear = useMemo(() => secondsToYears(currentTime), [currentTime]);

    const hourToMin = useMemo(() => hoursToMinutes(currentTime), [currentTime]);
    const hourToSec = useMemo(() => hoursToSeconds(currentTime), [currentTime]);
    const hourToMilli = useMemo(() => hoursToMilliseconds(currentTime), [currentTime]);
    const hourToHour = useMemo(() => hoursToHours(currentTime), [currentTime]);
    const hourToDay = useMemo(() => hoursToDays(currentTime), [currentTime]);
    const hourToWeek = useMemo(() => hoursToWeeks(currentTime), [currentTime]);
    const hourToMonth = useMemo(() => hoursToMonths(currentTime), [currentTime]);
    const hourToYear = useMemo(() => hoursToYears(currentTime), [currentTime]);

    const dayToMin = useMemo(() => daysToMinutes(currentTime), [currentTime]);
    const dayToSec = useMemo(() => daysToSeconds(currentTime), [currentTime]);
    const dayToMilli = useMemo(() => daysToMilliseconds(currentTime), [currentTime]);
    const dayToHour = useMemo(() => daysToHours(currentTime), [currentTime]);
    const dayToDay = useMemo(() => daysToDays(currentTime), [currentTime]);
    const dayToWeek = useMemo(() => daysToWeeks(currentTime), [currentTime]);
    const dayToMonth = useMemo(() => daysToMonths(currentTime), [currentTime]);
    const dayToYear = useMemo(() => daysToYears(currentTime), [currentTime]);

    const weekToMin = useMemo(() => weeksToMinutes(currentTime), [currentTime]);
    const weekToSec = useMemo(() => weeksToSeconds(currentTime), [currentTime]);
    const weekToMilli = useMemo(() => weeksToMilliseconds(currentTime), [currentTime]);
    const weekToHour = useMemo(() => weeksToHours(currentTime), [currentTime]);
    const weekToDay = useMemo(() => weeksToDays(currentTime), [currentTime]);
    const weekToWeek = useMemo(() => weeksToWeeks(currentTime), [currentTime]);
    const weekToMonth = useMemo(() => weeksToMonths(currentTime), [currentTime]);
    const weekToYear = useMemo(() => weeksToYears(currentTime), [currentTime]);

    const monthToMin = useMemo(() => monthsToMinutes(currentTime), [currentTime]);
    const monthToSec = useMemo(() => monthsToSeconds(currentTime), [currentTime]);
    const monthToMilli = useMemo(() => monthsToMilliseconds(currentTime), [currentTime]);
    const monthToHour = useMemo(() => monthsToHours(currentTime), [currentTime]);
    const monthToDay = useMemo(() => monthsToDays(currentTime), [currentTime]);
    const monthToWeek = useMemo(() => monthsToWeeks(currentTime), [currentTime]);
    const monthToMonth = useMemo(() => monthsToMonths(currentTime), [currentTime]);
    const monthToYear = useMemo(() => monthsToYears(currentTime), [currentTime]);

    const yearToMin = useMemo(() => yearsToMinutes(currentTime), [currentTime]);
    const yearToSec = useMemo(() => yearsToSeconds(currentTime), [currentTime]);
    const yearToMilli = useMemo(() => yearsToMilliseconds(currentTime), [currentTime]);
    const yearToHour = useMemo(() => yearsToHours(currentTime), [currentTime]);
    const yearToDay = useMemo(() => yearsToDays(currentTime), [currentTime]);
    const yearToWeek = useMemo(() => yearsToWeeks(currentTime), [currentTime]);
    const yearToMonth = useMemo(() => yearsToMonths(currentTime), [currentTime]);
    const yearToYear = useMemo(() => yearsToYears(currentTime), [currentTime]);

    const convertTime = (base, target) => {
        setCurrentTimeType(base);
        setConvertedTimeType(target);

        switch(base) {
            case "minutes":
                switch(target) {
                    case "milliseconds":
                        setConvertedTime(minToMilli);
                        break;
                    case "seconds":
                        setConvertedTime(minToSec);
                        break;
                    case "minutes":
                        setConvertedTime(minToMin);
                        break;
                    case "hours":
                        setConvertedTime(minToHour);
                        break;
                    case "days":
                        setConvertedTime(minToDay);
                        break;
                    case "weeks":
                        setConvertedTime(minToWeek);
                        break;
                    case "months":
                        setConvertedTime(minToMonth);
                        break;
                    case "years":
                        setConvertedTime(minToYear);
                        break;
                    default:
                        break;
                }
                break;
            case "milliseconds":
                switch(target) {
                    case "minutes":
                        setConvertedTime(milliToMin);
                        break;
                    case "seconds":
                        setConvertedTime(milliToSec);
                        break;
                    case "milliseconds":
                        setConvertedTime(milliToMilli);
                        break;
                    case "hours":
                        setConvertedTime(milliToHour);
                        break;
                    case "days":
                        setConvertedTime(milliToDay);
                        break;
                    case "weeks":
                        setConvertedTime(milliToWeek);
                        break;
                    case "months":
                        setConvertedTime(milliToMonth);
                        break;
                    case "years":
                        setConvertedTime(milliToYear);
                        break;
                    default:
                        break;
                }
                break;
            case "seconds":
                switch(target) {
                    case "minutes":
                        setConvertedTime(secToMin);
                        break;
                    case "seconds":
                        setConvertedTime(secToSec);
                        break;
                    case "milliseconds":
                        setConvertedTime(secToMilli);
                        break;
                    case "hours":
                        setConvertedTime(secToHour);
                        break;
                    case "days":
                        setConvertedTime(secToDay);
                        break;
                    case "weeks":
                        setConvertedTime(secToWeek);
                        break;
                    case "months":
                        setConvertedTime(secToMonth);
                        break;
                    case "years":
                        setConvertedTime(secToYear);
                        break;
                    default:
                        break;
                }
                break;
            case "hours":
                switch(target) {
                    case "minutes":
                        setConvertedTime(hourToMin);
                        break;
                    case "seconds":
                        setConvertedTime(hourToSec);
                        break;
                    case "milliseconds":
                        setConvertedTime(hourToMilli);
                        break;
                    case "hours":
                        setConvertedTime(hourToHour);
                        break;
                    case "days":
                        setConvertedTime(hourToDay);
                        break;
                    case "weeks":
                        setConvertedTime(hourToWeek);
                        break;
                    case "months":
                        setConvertedTime(hourToMonth);
                        break;
                    case "years":
                        setConvertedTime(hourToYear);
                        break;
                    default:
                        break;
                }
                break;
            case "days":
                switch(target) {
                    case "minutes":
                        setConvertedTime(dayToMin);
                        break;
                    case "seconds":
                        setConvertedTime(dayToSec);
                        break;
                    case "milliseconds":
                        setConvertedTime(dayToMilli);
                        break;
                    case "hours":
                        setConvertedTime(dayToHour);
                        break;
                    case "days":
                        setConvertedTime(dayToDay);
                        break;
                    case "weeks":
                        setConvertedTime(dayToWeek);
                        break;
                    case "months":
                        setConvertedTime(dayToMonth);
                        break;
                    case "years":
                        setConvertedTime(dayToYear);
                        break;
                    default:
                        break;
                }
                break;
            case "weeks":
                switch(target) {
                    case "minutes":
                        setConvertedTime(weekToMin);
                        break;
                    case "seconds":
                        setConvertedTime(weekToSec);
                        break;
                    case "milliseconds":
                        setConvertedTime(weekToMilli);
                        break;
                    case "hours":
                        setConvertedTime(weekToHour);
                        break;
                    case "days":
                        setConvertedTime(weekToDay);
                        break;
                    case "weeks":
                        setConvertedTime(weekToWeek);
                        break;
                    case "months":
                        setConvertedTime(weekToMonth);
                        break;
                    case "years":
                        setConvertedTime(weekToYear);
                        break;
                    default:
                        break;
                }
                break;
            case "months":
                switch(target) {
                    case "minutes":
                        setConvertedTime(monthToMin);
                        break;
                    case "seconds":
                        setConvertedTime(monthToSec);
                        break;
                    case "milliseconds":
                        setConvertedTime(monthToMilli);
                        break;
                    case "hours":
                        setConvertedTime(monthToHour);
                        break;
                    case "days":
                        setConvertedTime(monthToDay);
                        break;
                    case "weeks":
                        setConvertedTime(monthToWeek);
                        break;
                    case "months":
                        setConvertedTime(monthToMonth);
                        break;
                    case "years":
                        setConvertedTime(monthToYear);
                        break;
                    default:
                        break;
                }
                break;
            case "years":
                switch(target) {
                    case "minutes":
                        setConvertedTime(yearToMin);
                        break;
                    case "seconds":
                        setConvertedTime(yearToSec);
                        break;
                    case "milliseconds":
                        setConvertedTime(yearToMilli);
                        break;
                    case "hours":
                        setConvertedTime(yearToHour);
                        break;
                    case "days":
                        setConvertedTime(yearToDay);
                        break;
                    case "weeks":
                        setConvertedTime(yearToWeek);
                        break;
                    case "months":
                        setConvertedTime(yearToMonth);
                        break;
                    case "years":
                        setConvertedTime(yearToYear);
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
            title="Time Converter"
            description="Time Converter is an online utility tool that allows you to convert time units from one unit to another. You can convert time from seconds to minutes, hours, days, weeks, months, and years, and vice versa."
            options={timeConverterOptions}
            converterFunction={convertTime}
            currentType={currentTimeType}
            setCurrentType={setCurrentTimeType}
            convertedType={convertedTimeType}
            setConvertedType={setConvertedTimeType}
            currentValue={currentTime}
            setCurrentValue={setCurrentTime}
            convertedValue={convertedTime}
            setConvertedValue={setConvertedTime}
        />  
    )
}