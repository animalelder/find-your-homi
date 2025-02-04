import FindHome from "@/components/find-home";
import { Footer } from "@/components/footer";
import HomiMatch from "@/components/homi-match";
import HomiMessage from "@/components/homi-message";
import LandingTop from "@/components/landing-top";
import LandlordTestimonial from "@/components/landlord-testimonial";

export default function Home() {
  return (
    <div className="relative">
      <LandingTop />
      <FindHome />
      <HomiMessage />
      <HomiMatch />
      <LandlordTestimonial />
      <Footer />
    </div>
  );
}
