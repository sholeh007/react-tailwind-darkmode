import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div
      id="home"
      className="h-[50vh] overflow-hidden relative lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900"
    >
      <Navbar />
      {/* hero section */}
      <Hero />
    </div>
  );
}
