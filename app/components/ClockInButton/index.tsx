"use client";

export function ClockInButton() {
    return (
        <section className="p-8 col-start-2 col-end-5 flex justify-center items-center gap-8 bg-white/10  rounded-4xl ring-1 ring-white/80">
            <button className="w-6/12 p-16 bg-[#0072f559] text-4xl font-bold rounded-4xl ring-1 ring-[#0f7bf7] cursor-pointer shadow-lg shadow-[#023877dc]">Bater Ponto</button>
            <button className="w-6/12 p-16 bg-yellow-500/40 text-4xl font-bold rounded-4xl ring-1 ring-yellow-500/80 shadow-lg shadow-yellow-700/20 cursor-pointer">Editar Ponto</button>
        </section>
    )
}