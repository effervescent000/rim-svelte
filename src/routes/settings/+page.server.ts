import { redirect } from '@sveltejs/kit';
import { config } from '../../stores.js';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const reducedData = [...data.entries()].reduce(
			(acc, cur) => ({ ...acc, [cur[0]]: cur[1].toString() }),
			{}
		);

		config.set(reducedData);
		throw redirect(303, '/settings');
	}
};
