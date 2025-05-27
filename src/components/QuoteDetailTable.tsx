"use client"

import {
    type ColumnDef
} from "@tanstack/react-table";

import deleteIcon from "@/assets/deleteIcon.svg";
import editIcon from "@/assets/editIcon.svg";
import edit2Icon from "@/assets/editIcon2.svg";
import minus from "@/assets/minus.svg";
import percentIcon from "@/assets/percentage.svg";
import plus from "@/assets/plus.svg";
import starIcon from "@/assets/star.svg";
import { DataTable } from "./common/DataTable";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


export type Data = {
	img: string,
	name: string,
	sku: string,
	item: string,
	quantity: number,
	unitPrice: number,
	customerPrice: number,
	yourPrice: number
}

export function QuoteDetailTable() {

	const data1: Data[] = [
		{
			img: "",
			name: "Heavy-Duty Construction Adhesive (5 Gallon)",
			sku: "ADH-5G-HD",
			item: "4932876",
			quantity: 1,
			unitPrice: 124.99,
			customerPrice: 125.99,
			yourPrice: 124.99
		},
		{
			img: "",
			name: "Premium Interior Paint - Eggshell (1 Gallon)",
			sku: "PNT-EG-1G",
			item: "3578932",
			quantity: 10,
			unitPrice: 30.99,
			customerPrice: 32.99,
			yourPrice: 124.99
		},
		{
			img: "",
			name: "Commercial Grade Door Handle Set (Brushed Nickel)",
			sku: "HDW-DH-BN",
			item: "6723981",
			quantity: 2,
			unitPrice: 124.99,
			customerPrice: 126.99,
			yourPrice: 124.99
		},

	]

	const columns: ColumnDef<Data>[] = [
		{
			accessorKey: "img",
			header: "Product",
			cell: ({ row }) => (
				<div>
					{
						row.original.img === "" ? (
							<div className="w-[80px] h-[80px] bg-[#F0F0F0] rounded-[4px] flex items-center justify-center">Image</div>
						) : (
							<img src={row.original.img} alt={row.original.name} />
						)
					}
				</div>
			),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "name",
			header: "",
			cell: ({ row }) => (
				<div>
					<div className="text-base mb-1">{row.original.name}</div>
					<div className="text-secondary text-sm leading-[21px] mb-2">SKU: {row.original.sku} | Item #: {row.original.item}</div>
					<div><Input type="text" placeholder="Add a note about this item..." /></div>
				</div>
			),
		},
		{
			accessorKey: "Quantity",
			enableHiding: false,
			cell: ({ row }) => {

				return (
					<div>
						<div className="text-[13px] leading-4 font-normal gap-2 text-black inline-flex items-center p-[14px] border border-[#E3E3E3] mt-2 rounded-[4px]">
							<span><img src={minus} alt="plus" width={14} height={14} /></span>
							<span className="w-[44px] text-center text-[13.3px]">{row.original.quantity}</span>
							<span><img src={plus} alt="plus" width={14} height={14} /></span>
						</div>
					</div>
				)
			},
			meta: {
				className: "text-center"
			}
		},
		{
			accessorKey: "Unit Price",
			header: "Unit Price",
			enableHiding: false,
			cell: ({ row }) => {

				return (
					<div className="text-base">${row.original.unitPrice}</div>
				)
			},
		},
		{
			accessorKey: "Customer Price",
			header: "Customer Price",
			enableHiding: false,
			cell: ({ row }) => {

				return (
					<div className="flex items-center gap-2">
						<div className="w-[72px] text-base">${row.original.unitPrice}</div>
						<Button variant={"outline"} size={"icon"} className="size-[34px] border-[1.14px] border-[#E3E3E3] rounded-[4.55px]"><img src={editIcon} alt="editIcon" width={18} height={18} /></Button>
						<Button variant={"outline"} size={"icon"} className="size-[34px] border-[1.14px] border-[#E3E3E3] rounded-[4.55px]"><img src={edit2Icon} alt="edit2Icon" width={18} height={18} /></Button>
						<Button variant={"outline"} size={"icon"} className="size-[34px] border-[1.14px] border-[#E3E3E3] rounded-[4.55px]"><img src={percentIcon} alt="percentIcon" width={18} height={18} /></Button>
					</div>
				)
			},
			meta: {
				className: "text-center"
			}
		},
		{
			accessorKey: "Your Total",
			header: "Your Total",
			enableHiding: false,
			cell: ({ row }) => {

				return (
					<div className="text-base text-primary font-bold">${row.original.yourPrice}</div>
				)
			},
		},
		{
			header: "Favorite",
			enableHiding: false,
			cell: () => {

				return (
					<div className="flex items-center gap-2">
						<Button variant={"outline"} size={"icon"} className="size-[34px] border-[1.14px] border-[#E3E3E3] rounded-[4.55px]"><img src={starIcon} alt="starIcon" width={18} height={18} /></Button>
					</div>
				)
			},
		},
		{
			header: "Remove",
			enableHiding: false,
			cell: () => {

				return (
					<div className="flex items-center gap-2">
						<Button variant={"outline"} size={"icon"} className="size-[34px] border-[1.14px] border-[#E3E3E3] rounded-[4.55px]"><img src={deleteIcon} alt="deleteIcon" width={18} height={18} /></Button>
					</div>
				)
			},
		},
	]

	return (
		<div className="w-full">
			<DataTable columns={columns} data={data1} />
		</div>
	)
}
