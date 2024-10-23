import {Suspend} from "@/components/ui/suspend";

export function MusicSuspend() {
    return (
        <div className="grid grid-cols-4 gap-2">
            <div className="grid gap-2">
                <Suspend className="w-full h-[200px]"/>
                <Suspend className="w-full h-[20px]"/>
                <Suspend className="w-full h-[16px]"/>
            </div>
            <div className="grid gap-2">
                <Suspend className="w-full h-[200px]"/>
                <Suspend className="w-full h-[20px]"/>
                <Suspend className="w-full h-[16px]"/>
            </div>
            <div className="grid gap-2">
                <Suspend className="w-full h-[200px]"/>
                <Suspend className="w-full h-[20px]"/>
                <Suspend className="w-full h-[16px]"/>
            </div>
            <div className="grid gap-2">
                <Suspend className="w-full h-[200px]"/>
                <Suspend className="w-full h-[20px]"/>
                <Suspend className="w-full h-[16px]"/>
            </div>
        </div>
    )
}