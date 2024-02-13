"use client";
import React, { useMemo } from "react";
import { TableHead, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { useTokensSelection } from "@/lib/stores/tokensSelection.store";
import { allTokens } from "@/lib/constants/tokens.constant";
import { useChainId } from "wagmi";

const TableHeaderTokens = () => {
	const { tokensSelection, setTokensSelection } = useTokensSelection();
	const chainId = useChainId();

	const checkBoxCell = useMemo(() => {
		return (
			<Checkbox
				checked={
					allTokens[chainId]
						? tokensSelection.length === allTokens[chainId].length
						: false
				}
				onCheckedChange={(value) => {
					if (value) {
						setTokensSelection(allTokens[chainId]);
					} else {
						setTokensSelection([]);
					}
				}}
			/>
		);
	}, [setTokensSelection, allTokens[chainId], chainId, tokensSelection]);

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
