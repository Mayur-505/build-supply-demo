import { cn } from "@/lib/utils";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";

const RootLayout = () => {
	const location = useLocation();
	return (
		<div className={cn("bg-grey min-h-screen overflow-auto pb-10", location.pathname === "/" && "bg-white")}>
			<Header />
			<Outlet />
		</div>
	);
};

export default RootLayout;
