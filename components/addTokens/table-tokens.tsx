"use client";
import React, { useMemo } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import TableHeaderTokens from "./table-header";
import RowTokens from "./row-tokens";
import { allTokens } from "@/lib/constants/tokens.constans";

const TableTokens = () => {
	const tokensSelection = useMemo(() => {
		return allTokens.mainnet;
	}, []);

	return (
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
	);
};

export default TableTokens;
