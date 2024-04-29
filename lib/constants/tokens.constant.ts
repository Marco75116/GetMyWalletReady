import { AllTokens } from "../types/global.types";
import { mainnetTokens } from "./networkTokens/mainnetTokens";
import { optimismTokens } from "./networkTokens/optimismTokens";
import { arbitrumTokens } from "./networkTokens/arbitrumTokens";
import { polygonTokens } from "./networkTokens/polygonTokens";
import { bscTokens } from "./networkTokens/bscTokens";
import { baseTokens } from "./networkTokens/baseTokens";
import { avalancheTokens } from "./networkTokens/avalancheTokens";
import { moonriverTokens } from "./networkTokens/moonriverTokens";
import { moonbeamTokens } from "./networkTokens/moonbeamTokens";
import { lineaTokens } from "./networkTokens/lineaTokens";
import { celoTokens } from "./networkTokens/celoTokens";
import { etherlinkTestnetTokens } from "./networkTokens/etherlinkTestnetTokens";
import { europaLiquidityHubTokens } from "./networkTokens/europaLiquidityHubTokens";

export const allTokens: AllTokens = {
	...mainnetTokens,
	...optimismTokens,
	...arbitrumTokens,
	...polygonTokens,
	...bscTokens,
	...baseTokens,
	...avalancheTokens,
	...moonriverTokens,
	...moonbeamTokens,
	...lineaTokens,
	...celoTokens,
	...etherlinkTestnetTokens,
	...europaLiquidityHubTokens
};
