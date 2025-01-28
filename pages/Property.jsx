import PropertyFooter from '@/Components/PropertyFooter';
import PropertyHeader from '@/Components/PropertyHeader';
import PropertyListing from '@/Components/PropertyListing';
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
