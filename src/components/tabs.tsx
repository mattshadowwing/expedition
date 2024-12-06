import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {Suspense} from "react";
import {Suspend} from "@/components/ui/suspend";
import {MusicSuspend} from "@/components/musicSuspend";
import {Button} from "@/components/ui/button";
import {MusicFetch} from "@/components/musicFetch";

export function TabsMusic() {
    return (
        <Tabs defaultValue="music" className="w-full">
            <div className="space-between flex items-center">
                <TabsList>
                    <TabsTrigger value="music" className="relative">
                        Music
                    </TabsTrigger>
                    <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                    <TabsTrigger value="live" disabled>
                        Live
                    </TabsTrigger>
                </TabsList>
                <div className="ml-auto mr-4">
                    <Button>
                        + Add music
                    </Button>
                </div>
            </div>
            <TabsContent value="music">
                <Suspense fallback={<MusicSuspend />}>
                    <div className="py-3 border-b border-b-neutral-900 mb-3">
                        <h2 className="text-2xl font-semibold tracking-tight">Listen Now</h2>
                        <p className="text-sm text-muted-foreground">Top picks for you. Updated daily.</p>
                    </div>
                    <MusicFetch />
                </Suspense>
            </TabsContent>
            <TabsContent value="podcasts">
                <Suspense fallback={<div><Suspend /></div>}>
                    Podcasts
                </Suspense>
            </TabsContent>
        </Tabs>
    )
}
