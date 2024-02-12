import React from "react";
import { TableHead, TableRow } from "../ui/table";

const TableHeaderTokens = () => {
	return (
		<TableRow>
			<TableHead className="w-[200px]">Address</TableHead>
			<TableHead className="w-[200px] ">Name</TableHead>
			<TableHead className="w-[200px] ">Symbol</TableHead>
			<TableHead className="w-[200px] text-right">Actions</TableHead>
		</TableRow>
	);
};

export default TableHeaderTokens;
