import React from 'react';
import email_iconSmall from '/email_iconSmall.png';
import homi_logo from '/homi_logo.png';
import send_icon from '/send_icon.png';

const PropertyFooter = () => {
  return (
    <div className='p-6 mt-10'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div>
          <h3 className='text-deepBlue text-2xl font-medium mb-4'>Start Your Real Estate Journey Today</h3>
          <p className='text-gray-600 mb-6 w-[70%]'>
            Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or
            expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards
            your real estate goals and explore our available properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <div className='w-[30%]'>
          <button className='text-deepBlue bg-primary py-3 px-3  rounded-md shadow-md hover:bg-primaryBlue'>
            Explore Properties
          </button>
        </div>
      </div>
      <hr className='border-t border-gray-300 my-6' />
      <div className='flex flex-col md:flex-row items-start gap-32'>
        <div className='flex flex-col items-start gap-4'>
          <img src={homi_logo} alt='Homi Logo' className='w-20' />
          <div className='relative w-full max-w-sm'>
            <img
              src={email_iconSmall}
              alt='Email Icon'
              className='absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5'
            />
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
            />
            <img
              src={send_icon}
              alt='Send Icon'
              className='absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 cursor-pointer'
            />
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-5 gap-6 text-sm'>
          <div className='text-primary'>
            <p className='font-bold mb-2 '>Home</p>
            <ul className='space-y-1'>
              <li>Hero Section</li>
              <li>Features</li>
              <li>Properties</li>
              <li>Testimonials</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className='text-deepBlue'>
            <p className='text-gray-500  mb-2'>About Us</p>
            <ul className='space-y-1'>
              <li>Our Story</li>
              <li>Our Works</li>
              <li>How it Works</li>
              <li>Our Team</li>
              <li>Our Clients</li>
            </ul>
          </div>
          <div className='text-deepBlue'>
            <p className='text-gray-500 mb-2'>Properties</p>
            <ul className='space-y-1'>
              <li>Portfolio</li>
              <li>Categories</li>
            </ul>
          </div>
          <div className='text-deepBlue'>
            <p className='text-gray-500 mb-2'>Services</p>
            <ul className='space-y-1'>
              <li>Valuation Mastery</li>
              <li>Strategic Marketing</li>
              <li>Negotiation Wizardry</li>
              <li>Closing Success</li>
              <li>Property Management</li>
            </ul>
          </div>
          <div className='text-deepBlue'>
            <p className='text-gray-500 mb-2'>Contact Us</p>
            <ul className='space-y-1'>
              <li>Contact Form</li>
              <li>Our Offices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFooter;
