"use client"

import Image from "next/image";
import Link from "next/link";
import { SubmitEvent } from "react";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";

export default function signin() {
    const router = useRouter();
    async function handleSignin(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = String(formData.get("user-email"));
        const password = String(formData.get("user-password"));

        const {error} = await authClient.signIn.email({
            email,
            password,
        })

        if(error) {
            return alert(error.message)
        }

        router.push("/")
        
    }
    
    return (
        <main className="relative isolate min-h-dvh w-full grid place-items-center items-center overflow-hidden bg-[url(/login-waves.png)] bg-no-repeat bg-cover bg-center">
            <div className="w-4/12 h-8/12 bg-white rounded-xl">
                <form
                    className="w-full h-full p-4 flex flex-col gap-2 justify-center items-center"
                    onSubmit={handleSignin}
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
                    >Acessar</button>

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
                            Continue com o Google</button>
                    </div>

                    <div className="w-full mt-4 flex justify-center items-center">
                        <h6 className="text-black">Novo por aqui? <Link href="/signup" className="text-blue-500">Crie uma conta</Link></h6>
                    </div>
                </form>
            </div>
        </main>
    );
}
