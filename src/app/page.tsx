import Hero from "@/components/hero";
import ImageSection from "@/components/image-section";
import { uiAndGraphics } from "@/content/ui-and-graphics";

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen items-center px-[60px] pb-[100px] text-[#452405] bg-white">
      <div className="flex flex-col gap-[80px] max-w-[1180px] items-center">
        <Hero/>
        <ImageSection title="интерфейсы и графика" images={uiAndGraphics}/>

        <div className="w-full h-[36px]">
          <h1 className="opacity-60">это всё, спасибо</h1>
        </div>
      </div>
    </main>
  );
}
