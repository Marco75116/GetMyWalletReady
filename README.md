# GetMyWalletReady - set up your wallet in seconds 

An EVM-based app that also allows you to batch-add tokens to your favorite Web3 wallet, simultaneously it also adds the chain.

## Adding tokens

ERC-20 compliant or compatible only, please. 

<b>No Shitcoins</b>. Quality Over Quantity our goal is to provide a quality user experience by incorporating reliable tokens. Therefore, we reserve the right to evaluate each submitted token against these criteria.

Edit by adding your Token to  [tokens.constant.ts](/lib/constants/tokens.constant.ts) and leave a PR.


### Token Fields :

-  `symbol`:    Short ticker style symbol of token.
-  `name`:      Longer human version of token.
-  `decimals`:  The decimals of the token. As Number and not String.
-  `address`:   Ethereum (or other chain) address of ERC-20 token.
-  `isStableCoins`: Stablecoin information, as Boolean.

## Questions & Improvements

Your feedback and contributions are highly valued! If you have any suggestions for improvement or new features you'd like to see in GetMyWalletReady, feel free to get in touch. There are two main ways you can contribute:

- <b>Open a Pull Request (PR) </b>: If you have a specific improvement or addition you'd like to make, please submit a pull request with your changes.

- <b>Open an Issue</b>: For feature requests, questions, or discussions about potential improvements, please open an issue in our GitHub repository. This allows us to track community feedback.

We're looking forward to your input and working together to make GetMyWalletReady even better!
