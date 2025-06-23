import Home from "@/home/page";
import About from "@/about/page";
import Services from "@/services/page";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <Home />
      <About />
      <Services />
    </div>
  );
}
