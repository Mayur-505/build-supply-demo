import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { useNavigate } from "react-router"
import plusIcon from "../assets/addPrimaryIcon.png"
import dropdownIcon from "../assets/dropdownIcon.png"
import { Button } from "./ui/button"

const QuoteDropdown = () => {
	const navigate = useNavigate()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="py-[10px] border-[#637381] rounded-[4px] gap-4">Add to Quote <img src={dropdownIcon} alt="dropdownIcon" /></Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-[250px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.1)] rounded-[4px]">
				<DropdownMenuLabel className="text-base py-2 px-4 bg-[#F0F0F0]">Recent</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem className="px-4 py-2 text-base cursor-pointer" onClick={() => navigate("/quote-detail")}>
						Cool Project (3 items)
					</DropdownMenuItem>
					<DropdownMenuItem className="px-4 py-2 text-base cursor-pointer" onClick={() => navigate("/quote-detail")}>
						East Wing Project (Dec 2024)
					</DropdownMenuItem>
					<DropdownMenuItem className="px-4 py-2 text-base cursor-pointer" onClick={() => navigate("/quote-detail")}>
						Warehouse Renovation
					</DropdownMenuItem >
					<DropdownMenuItem className="px-4 py-2 text-base cursor-pointer" onClick={() => navigate("/quote-detail")}>
						Highwater Renovation
					</DropdownMenuItem>
					<DropdownMenuItem className="px-4 py-2 text-base text-primary cursor-pointer" onClick={() => navigate("/quote-detail")}>
						View All
					</DropdownMenuItem>
					<DropdownMenuSeparator className="border-t border-[#F0F0F0]" />
					<DropdownMenuItem className="px-4 py-2 text-base text-primary  cursor-pointer flex items-center gap-2" onClick={() => navigate("/quote-detail")}>
						<img src={plusIcon} alt="plusIcon" />Create New Quote
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default QuoteDropdown