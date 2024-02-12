"use client";
import { Token } from "@/lib/types/global.types";
import React, { useMemo } from "react";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useWalletClient } from "@/lib/stores/walletClient.store";
import { Checkbox } from "../ui/checkbox";
import { useTokensSelection } from "@/lib/stores/tokensSelection.store";
import { addTokenToWallet } from "@/lib/helpers/global.helper";

type RowTokensProps = {
	token: Token;
};
const RowTokens = ({ token }: RowTokensProps) => {
	const { tokensSelection, addTokenToSelection, removeTokenToSelection } =
		useTokensSelection();
	const { walletClient } = useWalletClient();

	const addTokenCell = useMemo(() => {
		return (
			<Button
				variant={"default"}
				onClick={() => {
					addTokenToWallet(token, walletClient);
				}}
			>
				Add <Plus />
			</Button>
		);
	}, [walletClient, token]);

	const isSelected = useMemo(() => {
		return tokensSelection.includes(token);
	}, [tokensSelection, token]);

	const checkboxCell = useMemo(() => {
		return (
			<Checkbox
				checked={isSelected}
				onCheckedChange={(value) => {
					if (value) {
						addTokenToSelection(token);
					} else {
						removeTokenToSelection(token);
					}
				}}
			/>
		);
	}, [token, isSelected, addTokenToSelection, removeTokenToSelection]);

	return (
		<TableRow>
			<TableCell className="font-medium">{checkboxCell}</TableCell>
			<TableCell className="font-medium">{token.address}</TableCell>
			<TableCell className="">{token.name}</TableCell>
			<TableCell className="">{token.symbol}</TableCell>
			<TableCell className="text-right">{addTokenCell}</TableCell>
		</TableRow>
	);
};

export default RowTokens;
