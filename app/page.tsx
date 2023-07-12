import Section from "@/components/Section/Section";
import HeroCarousel from "@/components/HeroCarousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  return (
    <main>
      <div className="h-fit w-full">
        <HeroCarousel />
        <Section title={"Recommended"} />
        <Section title={"Action"} />
        <Section title={"Adventure"} />
        <Section title={"Horror"} />
        <Section title={"Romance"} />
      </div>
    </main>
  );
}
