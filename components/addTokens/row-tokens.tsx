"use client";
import { Token } from "@/lib/types/global.types";
import React, { useMemo } from "react";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { useTokensSelection } from "@/lib/stores/tokensSelection.store";
import { addTokenToWallet } from "@/lib/helpers/global.helper";
import { useAccount, useChainId, useWalletClient, useWriteContract } from "wagmi";
import useWindow from "@/lib/hooks/useWindow";
import { abiERC20Testnet } from "@/lib/constants/abi/abiTokensTestnet"

type RowTokensProps = {
	token: Token;
};
const RowTokens = ({ token }: RowTokensProps) => {
	const { writeContract } = useWriteContract()

	const { isConnected, address } = useAccount();
	const { tokensSelection, addTokenToSelection, removeTokenToSelection } =
		useTokensSelection();
	const { data: walletClient } = useWalletClient();

	const windowWidthPx = useWindow();
	const chainId = useChainId();

	const addTokenCell = useMemo(() => {
		return (
			<div className="space-x-2">
				<Button
					variant={"default"}
					onClick={() => {
						addTokenToWallet(token, walletClient);
					}}
					disabled={!isConnected}
				>
					Add <Plus />
				</Button>
				{chainId === 1444673419 && (

					<Button variant={"outline"} onClick={() =>
						writeContract({
							abi: abiERC20Testnet,
							address: token.address as `0x${string}`,
							functionName: 'mint',
							args: [
								address,
								100 * 10 ** token.decimals
							],
						})}>MINT</Button>

				)}
			</div>
		);
	}, [walletClient, token, isConnected, chainId, address, writeContract]);

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

	const tokenAddressCell = useMemo(() => {
		if (windowWidthPx !== undefined && windowWidthPx > 900) {
			return token.address;
		}
		return `${token.address.slice(0, 4)}...${token.address.slice(-4)}`;
	}, [windowWidthPx, token.address]);

	return (
		<TableRow>
			<TableCell className="font-medium">{checkboxCell}</TableCell>
			<TableCell className="font-medium">{tokenAddressCell}</TableCell>
			<TableCell className="">{token.name}</TableCell>
			<TableCell className="">{token.symbol}</TableCell>
			<TableCell className="text-right">{addTokenCell}</TableCell>
		</TableRow>
	);
};

export default RowTokens;
