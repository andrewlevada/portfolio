import CasesSection from "@/components/cases-section";
import ContactButton from "@/components/contact-button";
import Hero from "@/components/hero";
import ImageSection from "@/components/image-section";

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen items-center p-[20px] text-[black] bg-white">
      <div className="flex flex-col gap-[20px] w-full">
        <Hero/>
        <ImageSection />
        <div className="h-[40px]"></div>
        <CasesSection />

        <div className="flex flex-row flex-wrap justify-between w-full pt-[160px]">
          <h1>это всё, спасибо</h1>
          <ContactButton />
        </div>
      </div>
    </main>
  );
}
