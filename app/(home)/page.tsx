import Image from "next/image";
import Hero from "./_components/hero";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
      </main>
      
  );
}