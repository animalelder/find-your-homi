import FindHome from "@/components/find-home";
import { Footer } from "@/components/footer";
import Header from "@/components/hero";
import HomiMatch from "@/components/homi-match";
import HomiMessage from "@/components/homi-message";
import LandlordTestimonial from "@/components/landlord-testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <FindHome />
      <HomiMessage />
      <HomiMatch />
      <LandlordTestimonial />
      <Footer />
    </div>
  );
}
