"use server"

import { authClient } from "../lib/auth-client";

export async function signUpAction(
    email:string,
    name:string,
    password:string
):Promise<void> {
    const {error} = await authClient.signUp.email({
        email,
        name,
        password,
        callbackURL: "/"
    })

    if(error) {
        console.log(error.message)
    }

    if(!error) {
        console.log("Deu tudo certo")
    }
}