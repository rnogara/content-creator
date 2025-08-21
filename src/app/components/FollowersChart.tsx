"use client";

import { followersChartData } from "./Stats";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	ResponsiveContainer,
	Tooltip as RechartsTooltip,
	XAxis,
	YAxis,
	type TooltipProps,
} from "recharts";

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
	if (active && payload && payload.length) {
		const data = payload[0].payload;
		return (
			<div className="bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-amber-200/30">
				<p className="text-white font-bold">
					{data.socialMedia}:{" "}
					<span className="text-amber-300">
						{data.followers.toLocaleString()} followers
					</span>
				</p>
			</div>
		);
	}
	return null;
};

const FollowersChart = () => {
	return (
		<div className="h-[20rem] w-[70%]">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={followersChartData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid
						strokeDasharray="3 3"
						stroke="rgba(253, 230, 138, 0.5)"
						vertical={false}
					/>
					<YAxis
						dataKey="followers"
						tick={{
							fill: "rgb(253, 230, 138)",
							fontSize: "1rem",
							fontWeight: "bold",
							fontFamily: "sans-serif",
						}}
						tickLine={false}
						axisLine={false}
						width={60}
						tickMargin={10}
						tickFormatter={(value) => value.toLocaleString()}
					/>
					<XAxis
						dataKey="socialMedia"
						axisLine={false}
						tickLine={false}
						tickMargin={10}
						tick={(props) => {
							const { x, y, payload } = props;
							const entry = followersChartData.find(
								(item) => item.socialMedia === payload.value,
							);
							return (
								<g transform={`translate(${x},${y + 10})`}>
									<text
										x={0}
										y={0}
										dy={0}
										textAnchor="middle"
										fill={entry?.color || "#000000"}
										style={{
											fontSize: "1.25rem",
											fontWeight: "bold",
										}}
									>
										{payload.value}
									</text>
								</g>
							);
						}}
					/>
					<RechartsTooltip
						content={<CustomTooltip />}
						cursor={{ fill: "rgba(0, 0, 0, 0)" }}
					/>
					<Bar
						dataKey="followers"
						radius={4}
						barSize={60}
						fill="rgb(253, 230, 138)"
					>
						{followersChartData.map((entry) => (
							<Cell key={`cell-${entry.socialMedia}`} fill={entry.color} />
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default FollowersChart;
