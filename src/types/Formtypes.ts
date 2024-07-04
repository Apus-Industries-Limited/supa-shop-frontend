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
    name: string;
    email: string;
    phone_number: string;
    username: string;
    password: string;
    confirmpassword: string;
}



