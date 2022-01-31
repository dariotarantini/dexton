# Frontend of TON DEX

### [Live Demo](https://dexton.vercel.app/)
#### [Figma](https://www.figma.com/file/9Ala1uxnC5mai0LeTqJmR9/TON-Swap-Contest?node-id=0%3A1)

## Stack

- `React`
- `Redux Toolkit`
- `React Router`
- `TypeScript`
- `SCSS`

## Install and Start Locally

First, install the packages:

```bash
yarn install
```

Then run the local server:

```bash
yarn start
```
Open http://localhost:3000 to view it in the browser.

## Implemented Pages and Features

- Exchange page, with the ability to make an exchange. UI for all available modal windows when making an exchange.
- UI of the wallet status with transaction history.
- Liquidity page. Possibility to view the list of pools in which the liquidity was added. UI for liquidity is present.
- Liquidity adding page. Possibility to create liquidity for any pair, taking into account that such a pool didn't exist before.
- Charts page. It's possible to view the lists of all pools and transactions in the app.
- Pool page. Detailed information with pool statistics as well as pool transaction history.

## Description

The design is based on https://ton.org/, https://ton.app/, https://ton.sh/, https://ton.org/brand-assets/. From the solutions of Uniswap and PanckakeSwap. You can see prototypes of the interfaces at the following link: [https://www.figma.com/file/9Ala1uxnC5mai0LeTqJmR9/TON-Swap-Contest](https://www.figma.com/file/9Ala1uxnC5mai0LeTqJmR9/TON-Swap-Contest?node-id=0%3A1)
