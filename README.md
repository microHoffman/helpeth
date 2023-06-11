# HelpETH
Support NGOs with every transaction. When using any web3 app, donate to charities. Support impactful projects while swapping, lending, buying goods, and conducting transactions. Help it with HelpETH!

![Frame 1](https://github.com/microHoffman/helpeth/assets/78812784/a3ccb823-8c7b-412f-95db-91e51fbfdebc)

## The problem it solves
Regular small donations are much better for NGOs than larger one-offs. In fiat, we see a trend of adding small amounts to transactions and sending the extra bit to a good cause. In crypto, there was no good way of doing that.
HelpETH integrates easily into web3 applications with a few lines of Javascript. It gives developers an easy way to seamlessly integrate donations into their apps, without the need for extra transactions thanks to account abstraction.
Users of these apps can simply check a donation checkbox and select a charity they want to support from a verified list. The donated amount can be decided by the user or hardcoded in the app. (Our demo app has this set to 2.5 DAI).
HelpETH ensures secure and transparent donations deployed on Optimism. We also maintain a list of charities that have their own wallets, so that donors can verify them easily.
In the future, we’d like to see an ‘Aave Impact Fund’ included in our list of verified addresses. It would be a lending protocol that donors could support on the supply side, and the interest on the loans would be donated.

## The technical part
- Forked Pimlico's Paymaster contracts and overridden the function responsible for sending the remaining amount after paying the gas fee.
- This modification allowed the option to send the remaining amount to a different user (charity) than the original transaction sender.
- Initially we’ve also considered extending the ERC20 standard to split the amount among multiple recipients but realized it would limit usability with well-known tokens like DAI and WETH.
- Finally we’ve decided to opt in for an account abstraction approach, enabling users to use existing tokens and pay the gas fee in the token they are sending (e.g., DAI).
- Preferable UX would be to integrate this functionality directly into wallets, with usage of something similar like a Metamask Snap plugin. Users could utilize it when performing any ERC20 token transfer. This would eliminate the need for individual implementation by e-shops, charities, dApps, and others, making it globally available as a wallet feature.
- In the future to make the adoption easier, the team considered releasing a JavaScript package that simplifies the additional handling required to support this feature on external websites.
- The Unipass wallet was used for testing purposes due to its compatibility with creating and managing ERC4337-compatible wallets.
- However, Unipass did not support Optimism at the time, leading the team to deploy the project on Ethereum Goerli.
- Web3Modal was utilized on the frontend to manage wallet connections, while the Alchemy Account Abstraction SDK (@alchemy/aa-core) was used for sending user operations.
- From a contract perspective, an organization (such as the team) would need to run and maintain the Paymaster contract. It would ensure there is enough stake in ETH to cover gas fees in exchange for received tokens.
- Future improvements for the contracts involve supporting multiple ERC20 tokens within a single Paymaster contract, eliminating the need for separate contracts for different tokens (e.g., USDC Paymaster, DAI Paymaster).