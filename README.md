# Indian Crypto Rupee
A Stable and Reliable Crypto for Digital India

## Inspiration
- Cryptocurrencies are volatile
- It’s not practical to pay rent or buy groceries in Cryptocurrency
- Most of the people avoid crypto because of risk And due to that they can’t get benefits of amazing DApps like Golem, Augur etc.

## What it does?
- Unlike Bitcoin, ICR is fully collateralized by fiat Currency. In simple terms 1 ICR = 1 ₹
- Seamlessly converts between fiat and virtual currency.
- Automatically mint and burn money as per demand and supply

## How we built it?
- We have used truffle suite for smart contract development.
- We have used ERC20 standard interface to build our ICR token so that any DApp supporting ERC20 standard can access our tokens.
- We have used PayTM SDK to send fiat currency to us and in turn we are sending tokens to the user.
- We have provide an admin panel for time when user wants to liquidish our tokens he can request us and we will burn tokens of the user and send fiat money in his PayTM wallet or Bank Account.

## Challenges we faced?
- We have to develop a mechanism to safely mint and burn tokens as needed.
- It was easy to get money from user by PayTM but PayTM only provides business to user transaction for Enterprise users. So, we have create an admin panel to manually send fiat currency to user and burn tokens from the user account

## What we learned?
- We learned how to make our own token on ethereum blockchain.
- We also has to study some concepts of banking and economics to better understand problem  requirements.
- We also learned how to deploy contract on ropsten testnet.

## What's next?
- We are going to provide web interface to access and use our smart token on ropsten test net.
- We also want to deploy our contract to  ethereum mainnet.
- We are going to deploy our website on internet using cloud services like Heroku.
- We are going to find a solution to efficiently convert out token to fiat currency. 

## Note
- contract address on ropsten test net is 0x0329206C18BC90B873A42156cfAe6a2D3e5B178c
- Watch our contract on [etherscan](https://ropsten.etherscan.io/address/0x0329206C18BC90B873A42156cfAe6a2D3e5B178c)
  

## Built With
- truffle suite
- solidity
- PayTM SDK
- Web3.js
