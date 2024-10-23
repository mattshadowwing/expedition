import {Menu} from "@/components/menu";
import {TabsMusic} from "@/components/tabs";
import {SideMenu} from "@/components/sidemenu";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto p-10">
      <main className="grid border border-neutral-900 rounded-xl">
        <div className="flex border-b border-b-neutral-900 px-4">
            <Menu />
        </div>
        <div className="grid grid-cols-[285px_1fr]">
            <div className="p-4">
                <SideMenu />
            </div>
            <div className="border-l border-l-neutral-900 p-4">
                <TabsMusic />
            </div>
        </div>
      </main>
    </div>
  );
}
