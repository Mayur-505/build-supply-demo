import { useState } from "react";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import productImage from "../../assets/productImage.png";
import FavoritesDropdown from "../FavoritesDropdown";
import QuoteDropdown from "../QuoteDropdown";
import { Button } from "../ui/button";


const Home = () => {
	const [count, setCount] = useState(1);

	return <div className="custom-container">
		<div className="text-sm font-normal text-secondary mb-8">Top Level Category  {`>`}  Second Level Category  {`>`}   <span className="font-bold">Heavy-Duty Construction Adhesive (5 Gallon)</span></div>
		<div className="flex gap-12 items-start h-full">
			<div className="w-full">
				<img src={productImage} alt="productImage" />
			</div>
			<div className="w-full grid gap-6">
				<div>
					<div className="text-[28px] font-bold leading-[42px]">Heavy-Duty Construction Adhesive (5 Gallon)</div>
					<div className="text-sm font-normal leading-[21px] text-[#637381]">SKU: ADH-5G-HD | Item #: 4932876</div>
				</div>
				<div className="text-2xl font-bold leading-9">
					$124.99
				</div>
				<div className="flex gap-[6px] text-sm leading-[21px] items-center text-[#DC3545]">
					<span className="w-2 h-2 bg-[#DC3545] rounded-full inline-block"></span> Out of Stock
				</div>
				<div className="text-base font-normal leading-6 text-[#637381]">
					Professional-grade construction adhesive for heavy-duty applications.
					Weather-resistant and suitable for both interior and exterior use. Provides a
					strong, permanent bond on various construction materials including concrete,
					wood, metal, and more.
				</div>
				<div>
					<div className="text-[16px] leading-4 font-normal">Quantity:</div>
					<div className="text-[13px] leading-4 font-normal gap-2 text-black inline-flex items-center p-[14px] border border-[#E3E3E3] mt-2 rounded-[4px]">
						<span><img src={minus} alt="plus" width={14} height={14} onClick={() => setCount(count - 1)} /></span>
						<span className="w-[44px] text-center">{count}</span>
						<span><img src={plus} alt="plus" width={14} height={14} onClick={() => setCount(count + 1)} /></span>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Button className="py-[11px] max-w-[212px] w-full text-white text-base">Add to Cart Button</Button>
					<QuoteDropdown />
					<FavoritesDropdown />
				</div>
			</div>
		</div>
	</div>;
};

export default Home;
