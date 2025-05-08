'use client';

import ProductCard from '@/components/ProductCard';
import { useCategories } from '@/context/CategoryContext';

const page = () => {
	const { state } = useCategories();
	console.log(state);
	const categories = Object.keys(state.categories);

	return (
		<main className='grid grid-cols-4 border-2 border-sky-950'>
			<div className='h-screen bg-gray-200'></div>
			<div className='h-screen bg-sky-200 col-span-3'>
				<section className='grid grid-cols-4'>
					<ProductCard />
				</section>
			</div>
		</main>
	);
};
export default page;
