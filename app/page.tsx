import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GalleryPreview from "@/components/home/GalleryPreview";
import OurStory from "@/components/home/OurStory";
import Testimonials from "@/components/home/Testimonial";


export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <GalleryPreview />

      <OurStory />

      <Testimonials />

    </div>
  );
}