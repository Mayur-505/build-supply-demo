import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import plusIcon from "../assets/addPrimaryIcon.png"
import dropdownIcon from "../assets/dropdownIcon.png"
import { Button } from "./ui/button"

const FavoritesDropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="py-[10px] border-[#637381] rounded-[4px] gap-4">Add to Favorites <img src={dropdownIcon} alt="dropdownIcon" /></Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-[250px] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.1)] rounded-[4px]">
				<DropdownMenuLabel className="text-base py-2 px-4 bg-[#F0F0F0]">My Favorites Lists</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem className="px-4 py-2 text-base cursor-pointer">
						Frequently Purchased
						Items
					</DropdownMenuItem>
					<DropdownMenuItem className="px-4 py-2 text-base cursor-pointer">
						East Wing Materials
					</DropdownMenuItem>
					<DropdownMenuItem className="px-4 py-2 text-base cursor-pointer">
						Adhesives & Sealants
					</DropdownMenuItem >
					<DropdownMenuItem className="px-4 py-2 text-base text-primary cursor-pointer">
						View All
					</DropdownMenuItem>
					<DropdownMenuSeparator className="border-t border-[#F0F0F0]" />
					<DropdownMenuItem className="px-4 py-2 text-base text-primary  cursor-pointer flex items-center gap-2">
						<img src={plusIcon} alt="plusIcon" />Create New List
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default FavoritesDropdown