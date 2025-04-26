import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='flex flex-nowrap mx-7 items-center justify-between md:justify-between md:mx-32'>
			<h1 className='text-2xl font-black'>
				Sea <span className='text-sky-700'>Elite</span>
			</h1>
			<div className='flex justify-between gap-3 '>
				<Link href={'#'}>
					<button className='capitalize pointer text-lg text-gray-700'>
						products
					</button>
				</Link>
				<Link href={'#'}>
					<button className='capitalize pointer text-lg text-gray-700'>
						catagories
					</button>
				</Link>
			</div>
		</div>
	);
};
export default Navbar;
