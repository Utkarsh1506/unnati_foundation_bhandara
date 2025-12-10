import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Impact from "@/components/sections/Impact";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <GalleryPreview />
      <Impact />
      <Contact />
    </>
  );
}
