import { MakeGenerics } from "@tanstack/react-location";

export interface Geo {
    lat: string,
    lng: string
};

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
};

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
};

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
};

type UsersViewSortBy = "name" | "id" | "email";

export type Invoice = {
    id: string,
    title: string,
    body: string
};

export type LocationGenerics = MakeGenerics<{
    LoaderData: {
        invoice: Invoice,
        invoices: Invoice[],
        user: User,
        users: User[],
        expensiveTimestamp: number,
        reallyExpensiveTimestamp: number
    };

    Params: {
        invoiceId: string,
        userId: string
    };

    Search: {
        showNotes: boolean,
        notes: string,
        usersView: {
            sortBy?: UsersViewSortBy,
            filterBy?: string
        };
    };
}>;



