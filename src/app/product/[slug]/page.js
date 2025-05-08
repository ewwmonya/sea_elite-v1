import Image from 'next/image';
import products from '../../../lib/products';
import { Button } from '@/components/ui/button';

export default async function ProductPage({ params }) {
	const urlSlug = params.slug;

	const prod = products.find((product) => {
		return product.slug === urlSlug;
	});
	if (!prod) return <div className=''>no matching products</div>;

	const { id, name, price, description, image, category, sku } = prod;
	return (
		<main
			key={id}
			className='grid grid-cols-1 md:items-start md:grid-cols-6 mx-4  border-8'
		>
			<section className='md:col-span-4 border-2 border-amber-200 mx-auto'>
				<Image tabIndex={1} src={image} width={900} height={900} alt={name} />
			</section>
			<div tabIndex={2} className='p-2 md:col-span-2'>
				<section className='border-2'>
					<p className='font-bold text-lg'>Sea Elite</p>
					<h1 className='text-2xl md:text-4xl tracking-widest'>{name}</h1>
					{/* brand */}
					<p className='uppercase tracking-wider'>
						SKU: <span className='font-medium'>{sku}</span>
					</p>
					<p>${price}</p>
					<div className='flex flex-col mx-18 gap-4 my-4'>
						{/* add swatches and sizes later */}
						<Button>Buy From Divers Supply</Button>
						<Button>Buy From Amazon</Button>
					</div>
				</section>
				<section>
					<p>{description}</p>
					<ul>
						<li>Spec 1</li>
						<li>Spec 2</li>
					</ul>
				</section>
			</div>
		</main>
	);
}
