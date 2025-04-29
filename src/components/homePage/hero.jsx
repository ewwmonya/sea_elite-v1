import React from 'react';
export function Hero({}) {
	return (
		<main className='bg-sky-700 w-screen min-h-80 text-white flex flex-col justify-center items-center'>
			<div className='flex flex-nowrap border-2 border-accent m-4 rounded-md font-bold'>
				<h2 className='text-6xl p-2 '>Sea</h2>
				<h2 className='text-6xl p-2 bg-accent text-sky-700'>Elite</h2>
			</div>

			<h3 className='text-2xl tracking-[10px] font-san'>
				Gear For All Skill Levels
			</h3>
			<h4 className='text-2xl tracking-[10px] font-san'>Gear that lasts</h4>
		</main>
	);
}
