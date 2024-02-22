'use server'

export const handleLogin = async (prevState: any, formData: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(
        "http://localhost:8000/api/v1/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password')
            })
        })
    return await res.json();
}