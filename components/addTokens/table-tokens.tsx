"use client";
import React, { useEffect, useMemo } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import TableHeaderTokens from "./table-header";
import RowTokens from "./row-tokens";
import { allTokens } from "@/lib/constants/tokens.constant";
import TopTable from "./top-table";
import { useChainId } from "wagmi";
import { useTokensFilter } from "@/lib/stores/tokensFilter.store";
import { useTokensSelection } from "@/lib/stores/tokensSelection.store";

const TableTokens = () => {
	const chainId = useChainId();
	const { tokensSearch, tokensStableCoin } = useTokensFilter();
	const { tokensSelection, setTokensSelection } = useTokensSelection();

	const tokensDisplayed = useMemo(() => {
		const tokensDisplayed =
			allTokens[chainId]
				.filter((token) => {
					if (tokensStableCoin) {
						return token.isStableCoins === true;
					}
					return true;
				})
				.filter((token) => {
					if (tokensSearch === "") {
						return true;
					}
					return (
						token.name.includes(tokensSearch) ||
						token.symbol.includes(tokensSearch)
					);
				}) || [];

		const tokens = tokensSelection.filter((token) => {
			for (let i = 0; i < tokensDisplayed.length; i++) {
				if (token.address === tokensDisplayed[i].address) return true;
			}
			return false;
		});

		setTokensSelection(tokens);

		return tokensDisplayed;
	}, [allTokens[chainId], tokensSearch, tokensStableCoin]);

	return (
		<>
			<TopTable />
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableHeaderTokens tokensDisplayed={tokensDisplayed} />
					</TableHeader>
					<TableBody>
						{tokensDisplayed.length !== 0 ? (
							tokensDisplayed.map((token) => (
								<RowTokens token={token} key={token.address} />
							))
						) : (
							<TableRow>
								<TableCell colSpan={7} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</>
	);
};

export default TableTokens;
