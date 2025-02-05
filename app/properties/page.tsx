import { NavBar } from "@/components/nav-bar";
import PropertyFooter from "@/components/property-footer";
import PropertyHeader from "@/components/property-header";
import PropertyListing from "@/components/property-listing";

export default function Page() {
  return (
    <div>
      <PropertyHeader>
        <NavBar />
      </PropertyHeader>
      <PropertyListing />
      <PropertyFooter />
    </div>
  );
}
