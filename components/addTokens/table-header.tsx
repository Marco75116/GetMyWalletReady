"use client";
import React, { useMemo } from "react";
import { TableHead, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { useTokensSelection } from "@/lib/stores/tokensSelection.store";
import { Token } from "@/lib/types/global.types";

type TableHeaderTokensProps = {
	tokensDisplayed: Token[];
};

const TableHeaderTokens = ({ tokensDisplayed }: TableHeaderTokensProps) => {
	const { tokensSelection, setTokensSelection } = useTokensSelection();

	const checkBoxCell = useMemo(() => {
		return (
			<Checkbox
				checked={
					tokensDisplayed
						? tokensSelection.length === tokensDisplayed.length &&
						  tokensSelection.length !== 0
						: false
				}
				onCheckedChange={(value) => {
					if (value) {
						setTokensSelection(tokensDisplayed);
					} else {
						setTokensSelection([]);
					}
				}}
			/>
		);
	}, [setTokensSelection, tokensDisplayed, tokensSelection]);

	return (
		<TableRow>
			<TableHead className="w-[20px]">{checkBoxCell}</TableHead>
			<TableHead className="w-[200px]">Address</TableHead>
			<TableHead className="w-[200px] ">Name</TableHead>
			<TableHead className="w-[200px] ">Symbol</TableHead>
			<TableHead className="w-[200px] text-right">Actions</TableHead>
		</TableRow>
	);
};

export default TableHeaderTokens;
