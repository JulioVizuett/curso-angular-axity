export interface ContactRequest {
    name: string
    email: string;
    message: string;
}

export interface ContactResponse {
    token: string;
}