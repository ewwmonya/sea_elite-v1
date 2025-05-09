'use client';
import { useCategories } from '../context/category/CategoryContext';
import { XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { fetchCategories } from '../lib/fetchCategories';
fetchCategories();

export function CatsOnHomePage() {
	const { state } = useCategories();
	const categories = Object.keys(state.categories);

	const [open, setOpen] = useState(false);

	return (
		<div className='relative'>
			{/* Trigger Button */}
			<div className='flex justify-between gap-3'>
				<button
					onClick={() => setOpen(true)}
					className='capitalize pointer text-lg text-gray-700 mr-2'
				>
					Categories
				</button>
			</div>

			{/* Drawer */}
			{open && (
				<div className='absolute right-0 top-0 bg-white h-screen w-64 shadow-lg border-l z-50 p-4 space-y-4'>
					<div className='flex items-center justify-between border-b pb-3'>
						<p className='tracking-wide text-lg font-bold'>Gear By Category</p>
						<button
							onClick={() => setOpen(false)}
							className='hover:cursor-pointer'
						>
							<XIcon className='text-gray-500 w-5 h-5' />
						</button>
					</div>

					{/* Categories */}
					<ul className='space-y-2 pt-4'>
						{categories.map((category) => (
							<li key={category}>
								<Link
									href={`/category/${category.toLowerCase()}`}
									className='block px-4 py-2 text-gray-700 hover:bg-sky-600 hover:text-white transition rounded text-xl'
									onClick={() => setOpen(false)}
								>
									{category}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
