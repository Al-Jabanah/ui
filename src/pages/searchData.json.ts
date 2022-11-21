import type { APIRoute } from 'astro';
import fetch from 'node-fetch';
import fastJsonStringify from 'fast-json-stringify';

const { NODE_ENV = 'development' } = process.env;

const stringify = fastJsonStringify({
	type: 'object',
	properties: {
		success: { type: 'boolean' },
		message: { type: 'string' },
		data: {
			type: 'object',
			properties: {
				categories: {
					type: 'array',
					items: { type: 'string' },
				},
			},
		},
	},
});

type SearchData = {
	categories: Array<string>;
};

const BASE_URL =
	NODE_ENV !== 'production'
		? 'http://localhost:3000/'
		: 'https://api.aljabanah.com';

export const get: APIRoute = async () => {
	try {
		const searchDataRequest = await fetch(`${BASE_URL}/v1/searchData`, {
			headers: { Accepts: 'application/json' },
		});

		const searchData = (await searchDataRequest.json()) as SearchData;

		return new Response(
			stringify({
				success: true,
				message: 'Successfully fetched search data.',
				data: searchData,
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
	} catch (error) {
		console.error(error);
		return new Response(
			stringify({
				success: false,
				message: 'Failed to fetch search data. Please try again.',
				data: [],
			}),
		);
	}
};
