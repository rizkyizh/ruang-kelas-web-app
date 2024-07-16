import { TokenForValidateOTPModel } from "@core/models/auth";
import { atomWithReset } from "jotai/utils";

interface TokenEmailForValidateOTPModel extends TokenForValidateOTPModel  {
    email: string
}
export const tokenForValidateOtpStateAtom = atomWithReset<TokenEmailForValidateOTPModel>({
    email: '',
    token: ''
})