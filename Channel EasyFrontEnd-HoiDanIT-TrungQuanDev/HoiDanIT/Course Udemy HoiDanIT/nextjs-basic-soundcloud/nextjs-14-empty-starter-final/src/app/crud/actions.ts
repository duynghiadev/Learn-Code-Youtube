'use server'
import { revalidateTag } from 'next/cache'

export const createUserAction = async (data: any, access_token: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(
        "http://localhost:8000/api/v1/users",
        {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${access_token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    const d = await res.json();
    revalidateTag('listUsers')

    return d;
}

export const updateUserAction = async (data: any, access_token: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(
        "http://localhost:8000/api/v1/users",
        {
            method: "PATCH",
            headers: {
                'Authorization': `Bearer ${access_token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    const d = await res.json();
    revalidateTag('listUsers')

    return d;
}

export const deleteUserAction = async (user: any, access_token: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(
        `http://localhost:8000/api/v1/users/${user._id}`,
        {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${access_token}`,
                "Content-Type": "application/json",
            },
        })

    const d = await res.json();
    revalidateTag('listUsers')

    return d;
}