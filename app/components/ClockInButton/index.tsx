"use client";

export function ClockInButton() {
    return (
        <section className="p-8 col-start-2 col-end-5 flex justify-center items-center gap-8 bg-purple-500 rounded-4xl">
            <button className="w-6/12 p-16 bg-blue-900 text-2xl rounded-4xl">Bater Ponto</button>
            <button className="w-6/12 p-16 bg-rose-800 text-2xl rounded-4xl">Editar Ponto</button>
        </section>
    )
}