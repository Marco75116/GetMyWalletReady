"use client";
import { Token } from "@/lib/types/global.types";
import React, { useMemo } from "react";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useWalletClient } from "@/lib/store/walletClient.store";

type RowTokensProps = {
	token: Token;
};
const RowTokens = ({ token }: RowTokensProps) => {
	const { walletClient } = useWalletClient();

	const addTokenCell = useMemo(() => {
		return (
			<Button
				variant={"default"}
				onClick={() => {
					walletClient.watchAsset({
						type: "ERC20",
						options: {
							address: token.address,
							decimals: token.decimals,
							symbol: token.symbol,
						},
					});
				}}
			>
				Add <Plus />
			</Button>
		);
	}, [walletClient, token]);

	return (
		<TableRow>
			<TableCell className="font-medium">{token.address}</TableCell>
			<TableCell className="">{token.name}</TableCell>
			<TableCell className="">{token.symbol}</TableCell>
			<TableCell className="text-right">{addTokenCell}</TableCell>
		</TableRow>
	);
};

export default RowTokens;
