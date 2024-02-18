import { arbitrum, avalanche, base, bsc, mainnet, optimism, polygon } from "viem/chains";
import { AllTokens } from "../types/global.types";

export const allTokens: AllTokens = {
	[mainnet.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
		},
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
		},
	],
	[optimism.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
		},
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x4200000000000000000000000000000000000006",
		},
	],
	[arbitrum.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
		},
		{
			symbol: "USDT",
			name: "Tether USD",
			decimals: 6,
			address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
		},
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
		},
	],
	[polygon.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
		},
		{
			symbol: "USDT",
			name: "Tether USD",
			decimals: 6,
			address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
		},
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
		},
	],
	[bsc.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
		},
		{
			symbol: "USDT",
			name: "Tether USD",
			decimals: 6,
			address: "0x55d398326f99059fF775485246999027B3197955",
		},
		{
			symbol: "WBNB",
			name: "Wrapped BNB",
			decimals: 6,
			address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
		},	
	],
	[base.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		},
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x4200000000000000000000000000000000000006",
		},
	],
	[avalanche.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
		},
		{
			symbol: "USDC.e",
			name: "USD Coin",
			decimals: 6,
			address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
		},
		{
			symbol: "USDT",
			name: "Tether USD",
			decimals: 6,
			address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
		},
		{
			symbol: "USDT.e",
			name: "Tether USD",
			decimals: 6,
			address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
		},
		{
			symbol: "DAI.e",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
		},
		{
			symbol: "WETH.e",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
		},
	],
};
