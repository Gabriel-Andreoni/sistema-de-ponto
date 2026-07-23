"use client";

import {useState, useEffect} from 'react';

export function ClockIn() {
    const [timer, setTimer] = useState<Date>();

    useEffect(() => {
        setTimer(new Date());

        const timer = setInterval(() => {
            setTimer(new Date())
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="h-full bg-white/20 flex flex-col justify-center items-center gap-8 rounded-4xl ring-1 ring-white/80">
            <span className="text-8xl">{timer?.getHours()}</span>
            <span className="text-8xl">{timer?.getMinutes()}</span>
            <span className="text-8xl">{timer?.getSeconds() != undefined && timer?.getSeconds() <= 9 ? "0" + timer?.getSeconds() : timer?.getSeconds()}</span>
        </section>
    )
}