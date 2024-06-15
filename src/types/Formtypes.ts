// src/types/formTypes.ts
export interface SignUpFormData {
    name: string;
    email: string;
    phoneNumber: string;
    username: string;
    password: string;
}

export interface SignInFormData {
    username: string;
    password: string;
}

export interface ForGetPasswordFormData {
    email: string;
    phonenumber: string;
}
export interface RestPasswordFormData {
    password: string;
    confirmpassword: string;
}

export interface FormData{
    name: string | null;
    email: string | null;
    phone_number: string | null;
    username: string | null;
    password: string | null;
    confirmpassword: string | null;
}



