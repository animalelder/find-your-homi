import FindHome from "@/components/find-home";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import HomiMatch from "@/components/homi-match";
import HomiMessage from "@/components/homi-message";
import LandlordTestimonial from "@/components/landlord-testimonial";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <FindHome />
      <HomiMessage />
      <HomiMatch />
      <LandlordTestimonial />
      <Footer />
    </div>
  );
}
