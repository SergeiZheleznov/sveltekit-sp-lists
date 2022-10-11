import type { PageServerLoad } from './$types';
import { SITE_ID, LIST_ID } from '$env/static/private';

type Item = {
	key: string;
	value: string;
};

export const load: PageServerLoad = async ({ locals }) => {
	const { msGraphClient } = locals;

	// const response = await msGraphClient.api('/sites/<tenant>.sharepoint.com:/sites/<site>').get();
	// console.log({ response });

	const response = await msGraphClient
		.api(`sites/${SITE_ID}/lists/${LIST_ID}/items?expand=fields(select=Title,szValue)`)
		.get();

	return {
		items: response?.value.map((el: any) => ({
			key: el?.fields?.['Title'],
			value: el?.fields?.['szValue']
		})) as Item[]
	};
};
