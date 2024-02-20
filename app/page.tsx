import AddTokens from "@/components/addTokens/add-tokens";
import { Wallet } from "@/components/connect-wallet";
import Links from "@/components/links";

export default function Home() {
	return (
		<div className="container mx-auto py-10">
			<div className="flex justify-between">
				<Wallet />
				<Links />
			</div>
			<AddTokens />
		</div>
	);
}
