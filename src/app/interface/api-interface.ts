import { AuthOptions, ISODateString, User } from "next-auth";

export interface SignupQueryParams {
    assigned_to?: string;
    event_type_uuid?: string;
    event_type_name?: string;
    event_start_time?: string;
    event_end_time?: string;
    invitee_uuid?: string;
    invitee_full_name?: string;
    invitee_email?: string;
    answer_1?: string;
}


export type forgotPasswordPayload = {
    email: string
}


export type CustomSession = {
    user?: CustomUser;
    expires: ISODateString;
};

export type CustomUser = {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    avatar?: string | null;
};
