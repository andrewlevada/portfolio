import Hero from "@/components/hero";
import ImageSection from "@/components/image-section";
import { uiAndGraphics } from "@/content/ui-and-graphics";

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen items-center p-[20px] text-black bg-white">
      <div className="flex flex-col gap-[20px] w-full">
        <Hero/>
        <ImageSection images={uiAndGraphics}/>

        <div className="flex flex-row justify-between w-full pt-[160px]">
          <h1>это всё, спасибо</h1>
          <h1>👈(ﾟヮﾟ👈)</h1>
        </div>
      </div>
    </main>
  );
}
