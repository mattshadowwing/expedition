"use client"

import Form from "next/form";
import {PlusCircledIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {FormAction} from "@/components/actions/formAction";
import {useActionState, useOptimistic, useState, useEffect} from "react"
import {Suspend} from "@/components/ui/suspend";

const Loader = () => (
    <div role="status">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"/>
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
)

export default function Optimistic() {
    const controller = new AbortController()
    const { signal } = controller
    const [error1, setError1] = useState(false)
    const [done1, setDone1] = useState(false)
    const [error2, setError2] = useState(false)
    const [done2, setDone2] = useState(false)
    const [error3, setError3] = useState(false)
    const [done3, setDone3] = useState(false)
    const [text1, submitAction, isPending1] = useActionState(
        async (prev, formData) => {
            setError1(false)
            setDone1(false)
            const newText = await FormAction(formData.get('text'))
            if (!newText) {
                setError1(true)
                return null
            }
            setDone1(true)
            return newText
        },
        '',
    )
    const [text2, submitActionOptimistic, isPending2] = useActionState(
        async (prev, formData) => {
            setOptimisticText(formData.get('text'))
            setError2(false)
            setDone2(false)
            const newText = await FormAction(formData.get('text'))
            if (!newText) {
                setError2(true)
                return null
            }
            setDone2(true)
            return newText
        },
        '',
    )
    const [text3, submitActionTransition, isPending3] = useActionState(
        async (prev, formData) => {
            setOptimisticTextTransition(formData.get('text'))
            setError3(false)
            setDone3(false)
            const newText = await fetch(`/api?text=${formData.get('text')}`, { signal })
            if (!newText) {
                setError3(true)
                return null
            }
            setDone3(true)
            return newText.toString()
        },
        '',
    )
    const [optimisticText, setOptimisticText] = useOptimistic(text2);
    const [optimisticTextTransition, setOptimisticTextTransition] = useOptimistic(text3);

    useEffect(() => {
        console.log('use effect')
        return () => {
            console.log('use effect abort')
            controller.abort()
        }
    }, [])

    return (
        <div className="container relative py-5">
            <main className="grid grid-cols-4 gap-4">
                <div className="border border-neutral-900 rounded-xl p-5 grid gap-4">
                    <h2>Suspense</h2>
                    <Suspend className="w-full h-[40px]"/>
                    <Suspend className="w-full h-[40px]"/>
                    <Suspend className="w-full h-[20px]"/>
                </div>
                <div className="border border-neutral-900 rounded-xl p-5 grid gap-4">
                    <h2>Synchronous response</h2>
                    <Form action={submitAction} className="grid gap-8">
                        <Input name="text" placeholder="text" />
                        <div>
                            <Button disabled={isPending1}>
                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                Add text
                            </Button>
                        </div>
                        <div className="flex gap-4 text-lg">
                            <p className="font-semibold">{text1}</p>
                            {isPending1 && (<Loader />)}
                            {!isPending1 && error1 && (<p className="text-red-700">Error!</p>)}
                            {!isPending1 && done1 && (<p className="text-green-700">Done!</p>)}
                        </div>
                    </Form>
                </div>
                <div className="border border-neutral-900 rounded-xl p-5 grid gap-4">
                    <h2>Optimistic response</h2>
                    <Form action={submitActionOptimistic} className="grid gap-8">
                        <Input name="text" placeholder="text" />
                        <div>
                            <Button disabled={isPending2}>
                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                Add text
                            </Button>
                        </div>
                        <div className="flex gap-4 text-lg">
                            <p className="font-semibold">{optimisticText}</p>
                            {isPending2 && (<Loader />)}
                            {!isPending2 && error2 && (<p className="text-red-700">Error!</p>)}
                            {!isPending2 && done2 && (<p className="text-green-700">Done!</p>)}
                        </div>
                    </Form>
                </div>
                <div className="border border-neutral-900 rounded-xl p-5 grid gap-4">
                    <h2>Cancellable Optimistic response</h2>
                    <Form action={submitActionTransition} className="grid gap-8">
                        <Input name="text" placeholder="text" />
                        <div>
                            <Button>
                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                Add text
                            </Button>
                        </div>
                        <div className="flex gap-4 text-lg">
                            <p className="font-semibold">{optimisticTextTransition}</p>
                            {isPending3 && (<Loader />)}
                            {!isPending3 && error3 && (<p className="text-red-700">Error!</p>)}
                            {!isPending3 && done3 && (<p className="text-green-700">Done!</p>)}
                        </div>
                    </Form>
                </div>
            </main>
        </div>
    )
}