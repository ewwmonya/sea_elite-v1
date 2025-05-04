import Image from 'next/image';
import products from '../../../lib/products';

export default async function ProductPage({ params }) {
	const urlSlug = params.slug;

	const prod = products.find((product) => {
		return product.slug === urlSlug;
	});
	if (!prod) return <div className=''>no matching products</div>;

	const { id, name, price, description, image, category, sku } = prod;
	return (
		<main key={id} className='grid grid-cols-1 md:grid-cols-2'>
			<Image tabIndex={1} src={image} width={500} height={500} alt={name} />
			<section tabIndex={2}>
				<h1>{name}</h1>
				{/* brand */}
				<p>Sea Elite</p>
				<p>{sku}</p>
				<p>{description}</p>
				<p>${price}</p>
			</section>
		</main>
	);
}
