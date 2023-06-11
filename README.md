# HelpETH
Support NGOs with every transaction. When using any web3 app, donate to charities. Support impactful projects while swapping, lending, buying goods, and conducting transactions. Help it with HelpETH!

![Frame 1](https://github.com/microHoffman/helpeth/assets/78812784/a3ccb823-8c7b-412f-95db-91e51fbfdebc)

## The problem it solves
HelpETH enables users to support public goods effortlessly while engaging in their regular transactions. Whether you're swapping tokens or purchasing goods, HelpETH offers a convenient and secure way to donate to charity.

The primary use case of HelpETH is integrating philanthropy into everyday activities. Users can contribute to charitable causes simply by performing transactions. Whether purchasing items online or participating in decentralized exchanges, HelpETH empowers users to make a positive impact effortlessly.

HelpETH integrates easily into web3 applications with a few lines of code. Apps can import HelpETH and direct donations to a charity address of their choice, whether permanent or temporary for events like Earth Day.

Users can add $2.5 USD or a custom amount to each transaction, automatically supporting public goods without a second transaction. This aligns economic decisions with values.

HelpETH ensures secure and transparent donations deployed on Optimism. Donors can verify donation destinations immediately, boosting confidence and encouraging philanthropy.

In summary, HelpETH revolutionizes philanthropy by integrating it into everyday transactions. Supporting public goods while swapping tokens or engaging in web3 activities allows users to make a tangible difference. HelpETH empowers individuals to align their financial decisions with their values, fostering a culture of giving and accessible positive change.

## Contracts
Contracts are forked from [pimlicolabs/erc20-paymaster-contracts](https://github.com/pimlicolabs/erc20-paymaster-contracts).
We are overriding there a function that allows the remaining amount after paying of the gas to be sent to a different user (charity), than the original transaction sender.
