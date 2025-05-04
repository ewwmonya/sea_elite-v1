import {
	Card,
	CardDescription,
	CardTitle,
	CardHeader,
	CardFooter,
	CardContent,
} from '@/components/ui/card';
import { Hero } from './../components/homePage/hero';
import { Button } from '@/components/ui/button';
import products from '../lib/products';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
	return (
		<div className=''>
			<Hero />
			{/* Cards Prob Top Gear */}
			<section
				tabIndex={5}
				className=' mt-12 cardContainer md:max-w-4xl my-0 md:mx-auto max-w-5xl mx-4'
			>
				<h5 className=' text-2xl font-bold tracking-wide'>Featured Gear</h5>
				<div className=''>
					<div className='grid md:grid-cols-3 grid-cols-2 m-4 gap-4 md:gap-x-2 justify-center'>
						{products.map((item) => {
							return (
								<Card key={item.id} className='md:max-w-60  flex flex-col'>
									{/* Img here */}
									<CardHeader className='flex-col justify-center'>
										<div className='w-24 h-24 md:w-48 md:h-48 bg-gray-200 border-2 border-gray-100'>
											<Image
												src={item.image}
												width={200}
												height={200}
												alt={item.name}
											/>
										</div>
									</CardHeader>
									<CardContent>
										<CardTitle>{item.name}</CardTitle>
										<CardDescription className=''>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Voluptatum, odio!
										</CardDescription>
									</CardContent>
									{/* bottom of card */}
									<CardFooter className='justify-around md:flex-nowrap flex-col md:flex-row'>
										{/* price below */}
										<p>$99.99</p>
										<Link href={`products/${item.slug}`}>
											<Button className='bg-sky-700 hover:bg-sky-50 hover:text-sky-700 hover:border-[2px] hover:border-sky-700'>
												Learn More
											</Button>
										</Link>
									</CardFooter>
								</Card>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}
