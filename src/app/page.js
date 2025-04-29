import {
	Card,
	CardDescription,
	CardTitle,
	CardHeader,
	CardFooter,
	CardContent,
} from '@/components/ui/card';
import { Hero } from './../components/homePage/hero';
const items = [
	{ id: 1, name: 'scout BCD' },
	{ id: 2, name: 'scout BCD' },
	{ id: 3, name: 'scout BCD' },
];
export default function Home() {
	return (
		<div className=''>
			<Hero />
			{/* Cards Prob Top Gear */}
			<section tabIndex={5}>
				<div className='cardContainer md:max-w-4xl my-0 mx-auto max-w-5xl'>
					<div className='grid grid-cols-3 m-4 gap-x-2 md:gap-x-2 '>
						{items.map((item) => {
							return (
								<Card key={item.id} className='md:max-w-60'>
									{/* Img here */}
									<CardHeader>
										<div className='w-24 h-24 md:w-48 md:h-48 bg-gray-200 border-2 border-gray-100'></div>
									</CardHeader>
									<CardContent>
										<CardTitle>{item.name}</CardTitle>
									</CardContent>
									{/* bottom of card */}
									<CardFooter>
										<CardDescription>
											{/* price below */}
											<p>$99.99</p>
										</CardDescription>
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
