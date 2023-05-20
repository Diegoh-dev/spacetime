import { User } from "lucide-react";
import Copyright from "@/components/Copyright";
import Hero from "@/components/Hero";
import Signin from "@/components/Signin";
import EmptyMemories from "@/components/EmptyMemories";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* left */}
      <div className="px28 relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-start.svg)] p-16 ">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <Signin />

        <Hero />
{/* parei 21:00 */}
        <Copyright />
      </div>

      {/* right */}
      <div className="flex flex-col bg-[url(../assets/bg-start.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  );
}
