"use server"

export async function FormAction(text: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const rand = Boolean(Math.floor(Math.random() * 2))
    return rand ? text : ''
}