"use client";

import Image from "next/image";
import Link from "next/link";
import { SubmitEvent } from "react";
import { signUp } from "../actions/sign-up";

export default function signup() {
    async function onSubmit(event:SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        await signUp(
            formData.get("user-email") as string,
            formData.get("user-email") as string,
            formData.get("user-password") as string
        );
    }

    return (
        <main className="relative isolate min-h-dvh w-full grid place-items-center items-center overflow-hidden bg-[url(/login-waves.png)] bg-no-repeat bg-cover bg-center">
            <div className="w-4/12 h-8/12 bg-white rounded-xl">
                <form
                    className="w-full h-full p-4 flex flex-col gap-2 justify-center items-center"
                    onSubmit={onSubmit}
                >
                    <div className="w-full flex flex-col">
                        <label
                            htmlFor="email"
                            className="mb-2 text-black"
                        >E-mail</label>
                        <input
                            type="email"
                            name="user-email"
                            id="email"
                            className="w-full p-4 border border-green-500 rounded-lg text-black outline-none"
                        />
                    </div>
                    <div className="w-full flex flex-col">
                        <label
                            htmlFor="name"
                            className="mb-2 text-black"
                        >Nome Completo</label>
                        <input
                            type="text"
                            name="user-name"
                            id="name"
                            className="w-full p-4 border border-green-500 rounded-lg text-black outline-none"
                        />
                    </div>
                    <div className="w-full flex flex-col">
                        <label
                            htmlFor="password"
                            className="mb-2 text-black"
                        >Senha</label>
                        <input
                            type="password"
                            name="user-password"
                            id="password"
                            className="w-full p-4 border border-green-500 rounded-lg text-black outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full m-4 p-4 bg-green-500 rounded-lg text-white cursor-pointer"
                    >Cadastrar</button>

                    <div className="w-full flex gap-2 justify-center items-center text-black">
                        <span className="w-6/12 h-0.5 bg-black"></span>
                        <span>ou</span>
                        <span className="w-6/12 h-0.5 bg-black"></span>
                    </div>

                    <div className="w-full">
                        <button
                            type="submit"
                            className="w-full p-3 flex justify-center gap-4 bg-black rounded-lg text-white cursor-pointer"
                        >
                            <Image
                                width={24}
                                height={24}
                                alt="ícone do google"
                                src="/icons/google.png" />
                            Registre-se com o Google</button>
                    </div>

                    <div className="w-full mt-4 flex justify-center items-center">
                        <h6 className="text-black">Já possuí conta? <Link href="/signin" className="text-blue-500">Entrar</Link></h6>
                    </div>
                </form>
            </div>
        </main>
    );
}
