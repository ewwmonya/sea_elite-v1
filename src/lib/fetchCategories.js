import { client } from '@/sanity/client';

const query = `*[_type == "category"]{ categoryName }`;

export async function fetchCategories() {
	try {
		const cats = await client.fetch(query);
		console.log(cats);
		return cats;
	} catch (error) {
		console.log(error);
	}
}
fetchCategories();
