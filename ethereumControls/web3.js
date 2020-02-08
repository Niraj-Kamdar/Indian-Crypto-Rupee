const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");

const contractAbi = require("../build/contracts/ICR.json").abi;
const conAddress = "0x663f843C08a9aE42a3B26F0b50e0B27F482C33e6";

const contract = new web3.eth.Contract(contractAbi, conAddress);

const acc = "0xF52b492a44481a8bAF7D67526Ed97f83309a86DB";

const burn = async (owner, user, price) => ***REMOVED***
  try ***REMOVED***
    const txObject = ***REMOVED***
      from: owner,
      to: conAddress,
      data: contract.methods.burn(user, price).encodeABI()
  ***REMOVED***;
    await web3.eth.sendTransaction(txObject);
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED***
***REMOVED***;

const addUser = async (owner, user) => ***REMOVED***
  try ***REMOVED***
    const txObject = ***REMOVED***
      from: owner,
      to: conAddress,
      data: contract.methods.addUser(user).encodeABI()
  ***REMOVED***;
    await web3.eth.sendTransaction(txObject);
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED***
***REMOVED***;

const mint = async (owner, user, amount) => ***REMOVED***
  try ***REMOVED***
    const txObject = ***REMOVED***
      from: owner,
      to: conAddress,
      data: contract.methods.mint(user, amount).encodeABI()
  ***REMOVED***;
    await web3.eth.sendTransaction(txObject);
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED***
***REMOVED***;

const total_Supply = async () => ***REMOVED***
  let supply = 0;
  try ***REMOVED***
    supply = await contract.methods.totalSupply().call();
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED***
  return supply;
***REMOVED***;

const name = async () => ***REMOVED***
  let name = "";
  try ***REMOVED***
    name = await contract.methods.name().call();
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED*** finally ***REMOVED***
    return name;
***REMOVED***
***REMOVED***;

const symbol = async () => ***REMOVED***
  let name = "";
  try ***REMOVED***
    name = await contract.methods.symbol().call();
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED*** finally ***REMOVED***
    return name;
***REMOVED***
***REMOVED***;

const allowance = async (owner, user) => ***REMOVED***
  let allowance = "";
  try ***REMOVED***
    allowance = await contract.methods.allowance(owner, user).call();
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED*** finally ***REMOVED***
    return allowance;
***REMOVED***
***REMOVED***;

const approve = async (sender, user, amount) => ***REMOVED***
  try ***REMOVED***
    const txObject = ***REMOVED***
      from: sender,
      to: conAddress,
      data: contract.methods.approve(user, amount).encodeABI()
  ***REMOVED***;
    await web3.eth.sendTransaction(txObject);
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED***
***REMOVED***;

const balanceOf = async user => ***REMOVED***
  let balance = "";
  try ***REMOVED***
    balance = await contract.methods.balanceOf(user).call();
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED*** finally ***REMOVED***
    return balance;
***REMOVED***
***REMOVED***;

const decreaseAllowance = async (sender, spender, amount) => ***REMOVED***
  try ***REMOVED***
    const txObject = ***REMOVED***
      from: sender,
      to: conAddress,
      data: contract.methods.decreaseAllowance(spender, amount).encodeABI()
  ***REMOVED***;
    await web3.eth.sendTransaction(txObject);
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED***
***REMOVED***;

const increaseAllowance = async (sender, spender, amount) => ***REMOVED***
  try ***REMOVED***
    const txObject = ***REMOVED***
      from: sender,
      to: conAddress,
      data: contract.methods.increaseAllowance(spender, amount).encodeABI()
  ***REMOVED***;
    await web3.eth.sendTransaction(txObject);
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED***
***REMOVED***;

const transferFrom = async (sender, receiver, spender, amount) => ***REMOVED***
  try ***REMOVED***
    const txObject = ***REMOVED***
      from: spender,
      to: conAddress,
      data: contract.methods.transferFrom(sender, receiver, amount).encodeABI()
  ***REMOVED***;
    await web3.eth.sendTransaction(txObject);
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED***
***REMOVED***;

const transfer = async (sender, receiver, amount) => ***REMOVED***
  try ***REMOVED***
    const txObject = ***REMOVED***
      from: sender,
      to: conAddress,
      data: contract.methods.transfer(receiver, amount).encodeABI()
  ***REMOVED***;
    await web3.eth.sendTransaction(txObject);
***REMOVED*** catch (e) ***REMOVED***
    throw new Error(e);
***REMOVED***
***REMOVED***;

// export ***REMOVED*** web3 ***REMOVED***;

module.exports.web3Controls = ***REMOVED***
  web3,
  transfer,
  transferFrom,
  increaseAllowance,
  decreaseAllowance,
  balanceOf,
  approve,
  allowance,
  symbol,
  name,
  total_Supply,
  mint,
  addUser,
  burn,
  acc,
  contract,
  conAddress
***REMOVED***;
