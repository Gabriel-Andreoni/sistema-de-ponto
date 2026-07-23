"use client";

export function ClockInButton() {
  return (
    <section className="p-8 col-start-2 col-end-5 flex justify-center items-center gap-8 bg-white/10  rounded-4xl ring-1 ring-white/80">
      <button className="w-6/12 p-16 relative overflow-hidden bg-zinc-900 text-white rounded-4xl">
        <span
          className="w-full h-full pointer-events-none absolute top-15 -left-145 rounded-full blur-3xl"
          style={{ background: "#0554f2" }}
        />
        <span
          className="w-full h-full pointer-events-none absolute -top-15 -right-145 rounded-full blur-3xl"
          style={{ background: "#276bf3" }}
        />
        <span className="relative z-10 text-4xl cursor-pointer">Bater Ponto</span>
      </button>
       <button className="w-6/12 p-16 relative overflow-hidden bg-zinc-900 text-white rounded-4xl">
        <span
          className="w-full h-full pointer-events-none absolute top-15 -left-145 rounded-full blur-3xl"
          style={{ background: "#0554f2" }}
        />
        <span
          className="w-full h-full pointer-events-none absolute -top-15 -right-145 rounded-full blur-3xl"
          style={{ background: "#276bf3" }}
        />
        <span className="relative z-10 text-4xl cursor-pointer">Editar Ponto</span>
      </button>
    </section>
  );
}
