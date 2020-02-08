const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");

const contractAbi = require("../build/contracts/ICR.json").abi;
const conAddress = "0x7A4A45435455CEB7Fa3f3e1F161e92e483f5D8d2";

const contract = new web3.eth.Contract(contractAbi, conAddress);

const acc = "0x1b4fFB74D58e7538C97e805eA8C33AB646A54CAF";

const burn = (owner, user, price) => ***REMOVED***
  const txObject = ***REMOVED***
    from: owner,
    to: conAddress,
    data: contract.methods.burn(user, price).encodeABI()
***REMOVED***;
  web3.eth.sendTransaction(txObject).catch(e => ***REMOVED***
    throw new Error(e);
***REMOVED***);
***REMOVED***;

const addUser = (owner, user) => ***REMOVED***
  const txObject = ***REMOVED***
    from: owner,
    to: conAddress,
    data: contract.methods.addUser(user).encodeABI()
***REMOVED***;
  web3.eth
    .sendTransaction(txObject)
    .then(tx => console.log(tx.logs))
    .catch(e => ***REMOVED***
      throw new Error(e);
  ***REMOVED***);
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

const approve = (sender, user, amount) => ***REMOVED***
  const txObject = ***REMOVED***
    from: sender,
    to: conAddress,
    data: contract.methods.approve(user, amount).encodeABI()
***REMOVED***;
  web3.eth.sendTransaction(txObject).catch(e => ***REMOVED***
    throw new Error(e);
***REMOVED***);
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
  const txObject = ***REMOVED***
    from: sender,
    to: conAddress,
    data: contract.methods.decreaseAllowance(spender, amount).encodeABI()
***REMOVED***;
  web3.eth.sendTransaction(txObject).catch(e => ***REMOVED***
    throw new Error(e);
***REMOVED***);
***REMOVED***;

const increaseAllowance = async (sender, spender, amount) => ***REMOVED***
  const txObject = ***REMOVED***
    from: sender,
    to: conAddress,
    data: contract.methods.increaseAllowance(spender, amount).encodeABI()
***REMOVED***;
  web3.eth.sendTransaction(txObject).catch(e => ***REMOVED***
    throw new Error(e);
***REMOVED***);
***REMOVED***;

const transferFrom = async (sender, receiver, spender, amount) => ***REMOVED***
  const txObject = ***REMOVED***
    from: spender,
    to: conAddress,
    data: contract.methods.transferFrom(sender, receiver, amount).encodeABI()
***REMOVED***;
  web3.eth.sendTransaction(txObject).catch(e => ***REMOVED***
    throw new Error(e);
***REMOVED***);
***REMOVED***;

const transfer = (sender, receiver, amount) => ***REMOVED***
  const txObject = ***REMOVED***
    from: sender,
    to: conAddress,
    data: contract.methods.transfer(receiver, amount).encodeABI()
***REMOVED***;
  web3.eth.sendTransaction(txObject).catch(e => ***REMOVED***
    throw new Error(e);
***REMOVED***);
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
