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

        },

        onSuccess: (ctx) => {
            console.log(data)
        }, 

        onError: (ctx) => {
            alert(ctx.error.message)
            alert(error?.message)
        }
    })
}