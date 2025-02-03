import PropertyFooter from '@/components/property-footer';
import PropertyHeader from '@/components/property-header';
import PropertyListing from '@/components/property-listing';
import React from 'react';

const Property = () => {
  return (
    <div>
      <PropertyHeader />
      <PropertyListing />
      <PropertyFooter />
    </div>
  );
};

export default Property;
