
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
import cart from "../../assets/cart.svg";
import Logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import star from "../../assets/star.svg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
	const location = useLocation();
	return <header className="flex items-center justify-between px-[32px] py-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] mb-8">
		<Link to={"/"}>
			<img src={Logo} alt="Logo" />
		</Link>
		<div>
			<ul className="flex items-center gap-8 text-base text-[#637381]">
				<li className="cursor-pointer">
					<Link to={"/"}>Products</Link>
				</li>
				<li className="cursor-pointer">
					<Link to={"/"}>Categories</Link>
				</li>
				<li className="cursor-pointer">
					<Link to={"/quote-detail"} className={cn(location.pathname === "/quote-detail" && "text-primary")}>Quotes</Link>
				</li>
				<li className="cursor-pointer">
					<Link to={"/"}>Favorites</Link>
				</li>
				<li className="cursor-pointer">
					<Link to={"/"}>Order History</Link>
				</li>
			</ul>
		</div>
		<div className="flex gap-5">
			<img src={search} alt="search" />
			<img src={cart} alt="cart" />
			<img src={star} alt="star" />
			<div className="flex gap-2 items-center">
				<Avatar>
					<AvatarImage src="" alt="@shadcn" />
					<AvatarFallback>AC</AvatarFallback>
				</Avatar>
				<span className="underline">ABC Contracting</span>
			</div>
		</div>
	</header>;
};

export default Header;
