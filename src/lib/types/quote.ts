export interface IQuote {
	quote_id: number
	shopify_shop_id: number
	shopify_order_id: string | null
	shopify_draft_order_id: string
	company_id: number
	customer_id: string | null
	is_active: boolean
	hide_quote_number: boolean
	is_purchased: boolean
	status: string
	quote_name: string
	total_qty: string
	total_amount: string
	started_at: string
	expired_at: string
	created_at: string
	updated_at: string
}