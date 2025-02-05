import Description from "@/components/description";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import PropertyDetailHeader from "@/components/property-detail-header";
import RentalDetail from "@/components/rental-detail";

export default function Page() {
  return (
    <div className="relative w-full">
      <PropertyDetailHeader>
        <NavBar />
      </PropertyDetailHeader>
      <Description />
      <RentalDetail />
      <Footer />
    </div>
  );
}
