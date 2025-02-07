import { NavBar } from "@/components/nav-bar";
import PropertyFooter from "@/components/property-footer";
import PropertyHeader from "@/components/property-header";
import PropertyResults from "@/components/property-results";

export default function Page() {
  return (
    <div>
      <PropertyHeader>
        <NavBar />
      </PropertyHeader>
      <PropertyResults />
      <PropertyFooter />
    </div>
  );
}
