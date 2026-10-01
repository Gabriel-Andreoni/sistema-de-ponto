"use server"

import { authClient } from "../lib/auth-client";

export async function signUp(
    email:string,
    password:string,
    name:string
):Promise<void> {
    const {data, error} = await authClient.signUp.email({
        email: email,
        password: password,
        name: name,
        callbackURL: "/"
    }, {
        onRequest: (ctx) => {
            alert("Conferindo tudo...")
        },

        onSuccess: (ctx) => {
            console.log(data)
            alert("Deu certo")
        }, 

        onError: (ctx) => {
            alert("Algo deu errado")
        }
    })
}