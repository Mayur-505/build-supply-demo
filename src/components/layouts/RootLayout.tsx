import { Outlet } from "react-router";
import Header from "./Header";

const RootLayout = () => {
	return (
		<div className="min-h-screen overflow-auto">
			<Header />
			<Outlet />
		</div>
	);
};

export default RootLayout;
