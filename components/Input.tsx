/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* This Code is for frontend Auth pages Improvement */

const Input = ({ icon: Icon, ...props }:{icon:any}) => {
	return (
  <div className='relative mb-6'>
    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
      <Icon className='size-5 text-green-500' />
    </div>
    <input
		{...props}
		className='w-full rounded-lg border border-gray-700 bg-gray-800 bg-opacity-50 py-2 pl-10 pr-3 text-white transition duration-200 placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500'
	/>
  </div>
	);
};
export default Input;
