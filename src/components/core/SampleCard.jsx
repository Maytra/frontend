import React from "react";
import ReadMoreBtn from "../common/ReadMoreBtn";

// const SampleCard = styled.div`
// 	position: relative;
// 	height: 300px;
// 	width: 500px;
// 	background-color: #111f30;
// 	margin-right: 75px;
// 	flex-shrink: 0;
// `;

const SampleCard = (data) => {
	console.log("data", data);
	return (
		<div class="relative overflow-hidden max-w-sm bg-GreenLight border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[500px] h-[85vh] mr-[75px]">
			<img
				class="rounded-t-lg object-center h-[40%] "
				src={data.data.fig}
				alt=""
			/>
			<div class="p-5">
				<a href="#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-PBlue">
						{data.data.Sname}
					</h5>
				</a>
				<p class="mb-3 text-base font-thin text-black">{data.data.text}</p>
				<div className="w-[50%]">
					<ReadMoreBtn />
				</div>
			</div>
		</div>
	);
};

export default SampleCard;
