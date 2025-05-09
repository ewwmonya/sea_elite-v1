import { createClient } from 'next-sanity';

export const client = createClient({
	projectId: '9cm3s73k',
	dataset: 'production',
	apiVersion: '2024-01-01',
	useCdn: true,
});
