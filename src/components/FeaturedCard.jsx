export function FeaturedCard({ products }) {
	return (
		<div className='grid md:grid-cols-3 grid-cols-2 m-4 gap-4 md:gap-x-2 justify-center'>
			{products.map((item) => {
				return (
					<Card key={item.id} className='md:max-w-60  flex flex-col'>
						{/* Img here */}
						<CardHeader className='flex-col justify-center'>
							<div className='w-24 h-24 md:w-48 md:h-48 bg-gray-200 border-2 border-gray-100'></div>
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
							<Button className='bg-sky-700 hover:bg-sky-50 hover:text-sky-700 hover:border-[2px] hover:border-sky-700'>
								Learn More
							</Button>
						</CardFooter>
					</Card>
				);
			})}
		</div>
	);
}
