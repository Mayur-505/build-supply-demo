import type { IQuote } from "@/lib/types/quote";
import { api } from "./api";

export const getAllQuotes = async () : Promise<IQuote[]> => {
	const response = await api({
		url: "/shopify/quote/quotes",
		method: "get",
	});
	return response.data.data;
};

export const getQuoteById = async (id: string): Promise<IQuote> => {
	const response = await api({
		url: `/shopify/quote/quotes/${id}`,
		method: "get",
	});
	return response.data.data;
};
