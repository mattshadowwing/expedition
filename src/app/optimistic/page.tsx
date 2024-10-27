"use client"

import Form from "next/form";
import {PlusCircledIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {FormAction} from "@/components/actions/formAction";
import { useActionState, useOptimistic, useState } from "react"
import {Suspend} from "@/components/ui/suspend";

export default function Optimistic() {
    const [error, setError] = useState(false)
    const [done, setDone] = useState(false)
    const [text, submitAction, isPending] = useActionState(
        async (prev, formData) => {
            setOptimisticText(formData.get('text'))
            setError(false)
            setDone(false)
            const newText = await FormAction(formData.get('text'))
            if (!newText) {
                setError(true)
                return prev
            }
            setDone(true)
            return newText
        },
        '',
    )
    const [optimisticText, setOptimisticText] = useOptimistic(text, (_, update) => update);

    return (
        <div className="container relative py-5">
            <main className="grid border border-neutral-900 rounded-xl p-5">
                <Form action={submitAction} className="grid gap-8">
                    <Input name="text" placeholder="text" />
                    <div>
                        <Button disabled={isPending}>
                            <PlusCircledIcon className="mr-2 h-4 w-4" />
                            Add text
                        </Button>
                    </div>
                    <div className="flex gap-4 text-lg">
                        <p className="font-semibold">{optimisticText}</p>
                        {isPending && (<Suspend className="w-[60px]" />)}
                        {!isPending && error && (<p className="text-red-700">Error!</p>)}
                        {!isPending && done && (<p className="text-green-700">Done!</p>)}
                    </div>
                </Form>
            </main>
        </div>
    )
}