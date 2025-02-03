import Navbar from '@/components/navbar';

const Profile = () => {
  return (
    <div className='flex flex-col items-center'>
      <img src='/profile_bg.png' alt='Profile Background' className='w-full' />
      {/* Navbar */}
      <div className='absolute -top-5 left-0 w-full px-4 sm:px-12 flex items-center justify-center'>
        <Navbar />
      </div>
      <div className='flex flex-col lg:flex-row gap-4 p-4 w-full'>
        {/* Sidebar Icons */}
        <div className='hidden lg:flex lg:flex-col items-center lg:items-start gap-4 w-full justify-center lg:w-[250px]'>
          <img
            src='/home_icon.png'
            alt='Home'
            className='w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:bg-gray-100 hover:rounded-full'
          />
          <img
            src='/message_icon.png'
            alt='Message'
            className='w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:bg-primaryLight hover:rounded-3xl'
          />
          <img
            src='/add_icon.png'
            alt='Add'
            className='w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:bg-primaryLight hover:rounded-3xl'
          />
          <img
            src='/setting_icon.png'
            alt='Settings'
            className='w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:bg-primaryLight hover:rounded-3xl'
          />
          <img
            src="/profile_bg.png"
            alt='Profile'
            className='w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:bg-primaryLight hover:rounded-3xl'
          />
        </div>

        {/* Tenant Information */}
        <div className='relative -mt-10 md:-mt-40 mx-auto pt-16'>
          <div className='flex flex-col items-center text-center gap-4 rounded-tl-full rounded-tr-full shadow-sm border bg-white w-[260px] sm:w-[300px] min-h-[360px] sm:min-h-[400px] pt-7'>
            <div className='h-36 w-36 sm:h-40 sm:w-40 rounded-full'>
              <img src='/tenant_img.png' alt='Tenant' className='w-full h-full rounded-full' />
            </div>
            <h4 className='text-lg sm:text-xl font-semibold'>Amy Peters</h4>
            <p className='text-gray-700 text-sm'>Interior Designer</p>
            <div className='flex items-center gap-2 text-gray-500'>
              <img src='/location_icon.png' alt='Location' className='w-4 h-4 sm:w-5 sm:h-5' />
              <p className='text-xs sm:text-sm'>Toronto, Canada</p>
            </div>
            <div className='flex gap-4 w-full px-4'>
              <button className='bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-4 py-2 text-sm sm:text-base w-full'>
                Edit Profile
              </button>
              <button className='bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-4 py-2 text-sm sm:text-base w-full'>
                Add HOMI
              </button>
            </div>
          </div>
        </div>

        {/* Rental Images */}
        <div className='flex-2 w-full lg:w-auto'>
          <div className='flex gap-6 text-gray-600 mb-4 flex-wrap justify-between'>
            <p className='font-semibold'>Rental List</p>
            <p className='font-semibold text-gray-400'>FAVS</p>
          </div>
          <div className='grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4'>
            <img src='/rental1.png' alt='Rental 1' className='rounded-lg' />
            <img src='/rental2.png' alt='Rental 2' className='rounded-lg' />
            <img src='/rental3.png' alt='Rental 3' className='rounded-lg' />
            <img src='/rental4.png' alt='Rental 4' className='rounded-lg' />
            <img src='/rental5.png' alt='Rental 5' className='rounded-lg' />
            <img src='/rental6.png' alt='Rental 6' className='rounded-lg' />
            <img src='/rental7.png' alt='Rental 7' className='rounded-lg' />
            <img src='/rental8.png' alt='Rental 8' className='rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
