"use client";

import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const yearsCalculator = (dob, today) => {
    const years = today.getFullYear() - dob.getFullYear();
    return years;
};
const monthsCalculator = (dob, today) => {
    if (dob > today) [dob, today] = [today, dob];
    const months = today.getMonth() - dob.getMonth();

    if (today.getDate() < dob.getDate()) return months - 1;
    if (today.getDate() == dob.getDate()) return 0;

    return months;
}
const daysCalculator = (dob, today) => {
    const days = Math.abs(today.getDate() - dob.getDate() + 31);

    if (dob.getDate() == today.getDate()) return 0;

    return days;
}
const totalMonths = (dob, today) => {
    const months = monthsCalculator(dob, today);
    const years = yearsCalculator(dob, today);
    const total = years * 12 + months;

    return total;
}
const totalDays = (dob, today) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.round(Math.abs((dob - today) / oneDay));
    if (today.getDate() - dob.getDate()) return (days - 1);
    return days;
}
const weeks = (dob, today) => {
    let daysCount = 0;
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    let dateDiff = dob - today;
    while (dateDiff % 52 != 0) {
        daysCount++;
        dateDiff--;
    }
    const weeks = Math.round(Math.abs((dateDiff) / oneWeek));
    return [weeks, daysCount];
}
const totalHours = (dob, today) => {
    const days = totalDays(dob, today);
    const hours = days * 24;
    return hours;
}
const totalMiutes = (dob, today) => {
    const hours = totalHours(dob, today);
    const minutes = hours * 60;
    return minutes;
}
const totalSeconds = (dob, today) => {
    const minutes = totalMiutes(dob, today);
    const seconds = minutes * 60;
    return seconds;
}

export default function AgeCalculator() {
    const [today, setToday] = useState(new Date());
    const [dob, setDob] = useState(new Date());

    const years = useMemo(() => yearsCalculator(dob, today), [dob, today]);
    const months = useMemo(() => monthsCalculator(dob, today), [dob, today]);
    const days = useMemo(() => daysCalculator(dob, today), [dob, today]);
    const monthsTotal = useMemo(() => totalMonths(dob, today), [dob, today]);
    const daysTotal = useMemo(() => totalDays(dob, today), [dob, today]);
    const [weeksTotal, remDays] = useMemo(() => weeks(dob, today));
    const hoursTotal = useMemo(() => totalHours(dob, today), [dob, today]);
    const minutesTotal = useMemo(() => totalMiutes(dob, today), [dob, today]);
    const secondsTotal = useMemo(() => totalSeconds(dob, today), [dob, today]);

    return (
        <div className="p-6 m-4">
            <h1 className="text-center font-bold text-3xl md:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-900 via-cyan-400 to-red-500">Age Calculator</h1>
            <div className="flex md:flex-row flex-col gap-3 items-center justify-center p-5 mt-5">
                <Calendar value={dob} onChange={setDob} />
                <div className="flex items-center justify-center">To</div>
                <Calendar value={today} onChange={setToday} />
            </div>

            <div className="flex flex-col p-6 md:px-6 lg:px-26 xl:px-56">
                <h2 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-3">Age on {today.toDateString()}:</h2>
                <div>{years} years {months} months {days} days</div>
                <div>(or)</div>
                <div>{monthsTotal} months {days} days</div>
                <div>(or)</div>
                <div>{weeksTotal} weeks {remDays} days</div>
                <div>(or)</div>
                <div>{daysTotal.toLocaleString("en-US")} days</div>
                <div>(or)</div>
                <div>{hoursTotal.toLocaleString("en-US")} hours</div>
                <div>(or)</div>
                <div>{minutesTotal.toLocaleString("en-US")} minutes</div>
                <div>(or)</div>
                <div>{secondsTotal.toLocaleString("en-US")} seconds</div>
            </div>
        </div>
    );
}