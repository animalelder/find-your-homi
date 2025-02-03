import Description from "@/components/description";
import PropertyDetailHeader from "@/components/property-detail-header";
import RentalDetail from "@/components/rental-detail";

const PropertyDetail = () => {
  return (
    <div>
      <PropertyDetailHeader />
      <Description />
      <RentalDetail />
    </div>
  );
};

export default PropertyDetail;
