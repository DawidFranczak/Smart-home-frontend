import { TLoginForm } from "./TLoginForm"

export type TSignUpForm = TLoginForm & {
    password:string,
    password2:string
}