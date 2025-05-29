import copyIcon from "@/assets/copy.svg"
import editIcon from "@/assets/editIcon.svg"
import fileIcon from "@/assets/file.svg"
import { QuoteDetailTable } from "../QuoteDetailTable"
import { Button } from "../ui/button"
import { useParams } from "react-router"
import { getQuoteById } from "@/services/quoteService"
import { useQuery } from "@tanstack/react-query"
import moment from "moment"


const QuoteDetail = () => {
	const { id } = useParams()

	const { data: quote } = useQuery({
		queryKey: ["quote", id],
		queryFn: () => getQuoteById(id!),
		enabled: !!id
	});
	console.log("🚀 ~ QuoteDetail ~ quote:", quote)

	return (
		<div className="custom-container">
			<div className="flex justify-between items-start mb-6">
				<div>
					<div className="flex items-center gap-2 mb-[23px]">
						<div className="text-2xl font-bold">{quote?.quote_name}</div>
						<div><img src={editIcon} alt="editIcon" /></div>
					</div>
					<div className="text-sm font-normal text-secondary">Quote #{quote?.shopify_draft_order_id} | Created: {moment(quote?.created_at).format("MMM DD, YYYY")} | Last updated: {moment(quote?.updated_at).format("MMM DD, YYYY")}</div>
				</div>
				<div className="flex items-center gap-4">
					<Button variant={"outline"} className="bg-white py-[10px] px-[17px] border-[#E3E3E3] rounded-[4px] gap-2"><img src={fileIcon} alt="fileIcon" /> Save as Template</Button>
					<Button variant={"outline"} className="bg-white py-[10px] px-[17px] border-[#E3E3E3] rounded-[4px] gap-2"><img src={copyIcon} alt="fileIcon" />Copy To New Quote</Button>
				</div>
			</div>
			<div className="mb-6">
				<QuoteDetailTable />
			</div>
			<div className="flex gap-6 justify-center items-start">
				<div className='w-[401px] shrink-0 rounded-[8px] bg-white shadow-[0_2px_4px_0px_rgba(0,0,0,0.05)]'>
					<div className='p-4 flex justify-between items-center text-[16px] font-medium leading-6 rounded-ss-[8px] rounded-se-[8px] bg-[#E3E3E3]'>
						Client Information
						<span className='flex justify-center items-center gap-1 text-[16px] font-medium leading-6 text-[#637381]'>
							Edit
							<img src={editIcon} alt='editIcon' width={14} height={14} className='cursor-pointer' />
						</span>
					</div>
					<div className='p-4 bg-white'>
						<span className='text-[16px] leading-6 font-semibold mb-2'>East Wing Development LLC</span>
						<span className='text-sm leading-5 font-normal'>
							<p>4800 Eastwood Boulevard</p>
							<p>Portland, OR 97209</p>
							<p>Contact: John Smith</p>
							<p>Phone: (555) 987-6543</p>
							<p>Email: john.smith@eastwingdev.com</p>

						</span>
					</div>
				</div>
				<div className='w-full rounded-[8px] bg-white shadow-[0_2px_4px_0px_rgba(0,0,0,0.05)]'>
					<div className='p-4 flex justify-between items-center text-[16px] font-medium leading-6 rounded-ss-[8px] rounded-se-[8px] bg-[#E3E3E3]'>
						Quote Details
					</div>
					<div className='p-4 bg-white'>
						<h5 className='text-base leading-4 font-normal mb-2'>Quote Notes</h5>
						<div className="h-[130px] text-sm border border-[#E3E3E3] p-3 rounded-sm mb-4">
							Please ensure all materials are delivered by March 15th for the East Wing renovation project. Contact John Smith (555-
							123-4567) for delivery coordination.
						</div>
						<h5 className='text-base leading-4 font-normal mb-2'>Internal Notes</h5>
						<div className="h-[115px] border text-sm border-[#E3E3E3] p-3 rounded-sm">
							Customer is price sensitive. May need to discuss volume discount on future orders.
						</div>
					</div>
				</div>
				<div className='w-[350px] shrink-0 rounded-[8px] bg-white shadow-[0_2px_4px_0px_rgba(0,0,0,0.05)]'>
					<div className='p-4 flex justify-between items-center text-[16px] font-medium leading-6 rounded-ss-[8px] rounded-se-[8px] bg-[#E3E3E3]'>
						Quote Summary
					</div>
					<div className='p-4 bg-white'>
						<div className='mb-4 flex flex-col gap-3'>
							<div className='text-base font-normal leading-6 flex justify-between items-center'>
								<span>Subtotal ({Number(quote?.total_qty)?.toFixed(0) || 0} items)</span>
								<span>$809.86</span>
							</div>
							<div className='text-base font-normal leading-6 flex justify-between items-center'>
								<span>Estimated Tax</span>
								<span>$64.78</span>
							</div>
							<div className='text-base font-normal leading-6 flex justify-between items-center'>
								<span>Estimated Shipping</span>
								<span>$75.00</span>
							</div>
						</div>
						<div className='flex justify-between items-center pt-[17px] text-lg font-bold leading-[27px] border-t border-[#E3E3E3] mb-7'>
							<span>Estimated Total</span>
							<span className='text-[#008060]'>${Number(quote?.total_amount)?.toFixed(2)}</span>
						</div>
						<div>
							<button className='w-full bg-white h-[42px] mb-4 text-[#008060] cursor-pointer border flex justify-center items-center text-sm font-bold border-[#008060] py-[13px] rounded-[4px]'>Export Quote</button>
							<button className='w-full bg-[#008060] h-[42px] text-white border cursor-pointer border-[#008060] py-[13px] flex justify-center items-center rounded-[4px]'>Export Quote</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default QuoteDetail