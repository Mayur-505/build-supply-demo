import { api } from "./api";

export const getAllQuotes = async () => {
	const response = await api({
		url: "/shopify/quote/quotes",
		method: "get",
	});
	return response.data;
};

export const getQuoteById = async (id: string) => {
	const response = await api({
		url: `/shopify/quote/quotes/${id}`,
		method: "get",
	});
	return response.data;
};
