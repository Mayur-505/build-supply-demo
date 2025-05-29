import RootLayout from "@/components/layouts/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import QuoteDetailPage from "./pages/QuoteDetailPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/quote-detail/:id",
				element: <QuoteDetailPage />,
			}
		],
	},
]);


function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
