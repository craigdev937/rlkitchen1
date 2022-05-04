import React from "react";

export async function delayFn<Type>(
    fn: (...args: any[]) => Promise<Type> | Type
) {
    const delay = Number(sessionStorage.getItem("delay") ?? 0);
    const delayPromise = new Promise((res) => setTimeout(res, delay));
    const [response] = await Promise.all([fn(), delayPromise]);
    return response;
};

const URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchInvoices() {
    const res: Response = await fetch(URL);
    if (!res.ok) throw new Error(res.statusText);
    const data = await delayFn(() => res.json());
    return [...data.slice(0, 25)];
};

export async function fetchInvoiceById(id: string) {
    const res: Response = await fetch(`${URL}/${id}`);
    if (!res.ok) throw new Error(res.statusText);
    const data = await delayFn(() => res.json());
    return {
        ...data, body: data.body + " " + Date.now()
    };
};

export async function fetchUsers() {
    const res: Response = await fetch(URL);
    if (!res.ok) throw new Error(res.statusText);
    const data = await delayFn(() => res.json());
    return [...data];
};

export async function fetchUserById(id: string) {
    const res: Response = await fetch(`${URL}/${id}`);
    if (!res.ok) throw new Error(res.statusText);
    const data = await delayFn(() => res.json());
    return data;
};

export function useSessionStorage<Type>
(key: string, initialValue: Type) {
    const state = React.useState<Type>(() => {
        const stored = sessionStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    React.useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(state[0]));
    }, [state[0]]);
    return state;
};




