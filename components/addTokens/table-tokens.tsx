"use client";
import React, { useMemo } from "react";
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
import { useTokensSearch } from "@/lib/stores/tokenSearch.store";

const TableTokens = () => {
	const chainId = useChainId();
	const { tokensSearch } = useTokensSearch();

	const tokensSelection = useMemo(() => {
		if (tokensSearch === "") {
			return allTokens[chainId] || [];
		}
		return (
			allTokens[chainId].filter((token) => {
				return (
					token.name.includes(tokensSearch) ||
					token.symbol.includes(tokensSearch)
				);
			}) || []
		);
	}, [allTokens[chainId], chainId, tokensSearch]);

	return (
		<>
			<TopTable />
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableHeaderTokens />
					</TableHeader>
					<TableBody>
						{tokensSelection.length !== 0 ? (
							tokensSelection.map((token) => (
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
