const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");

const contractAbi = require("../build/contracts/ICR.json").abi;
const conAddress = "0x663f843C08a9aE42a3B26F0b50e0B27F482C33e6";

const contract = new web3.eth.Contract(contractAbi, conAddress);

const acc = "0xF52b492a44481a8bAF7D67526Ed97f83309a86DB";

const burn = async (owner, user, price) => {
  try {
    const txObject = {
      from: owner,
      to: conAddress,
      data: contract.methods.burn(user, price).encodeABI()
    };
    await web3.eth.sendTransaction(txObject);
  } catch (e) {
    throw new Error(e);
  }
};

const addUser = async (owner, user) => {
  try {
    const txObject = {
      from: owner,
      to: conAddress,
      data: contract.methods.addUser(user).encodeABI()
    };
    await web3.eth.sendTransaction(txObject);
  } catch (e) {
    throw new Error(e);
  }
};

const mint = async (owner, user, amount) => {
  try {
    const txObject = {
      from: owner,
      to: conAddress,
      data: contract.methods.mint(user, amount).encodeABI()
    };
    await web3.eth.sendTransaction(txObject);
  } catch (e) {
    throw new Error(e);
  }
};

const total_Supply = async () => {
  let supply = 0;
  try {
    supply = await contract.methods.totalSupply().call();
  } catch (e) {
    throw new Error(e);
  }
  return supply;
};

const name = async () => {
  let name = "";
  try {
    name = await contract.methods.name().call();
  } catch (e) {
    throw new Error(e);
  } finally {
    return name;
  }
};

const symbol = async () => {
  let name = "";
  try {
    name = await contract.methods.symbol().call();
  } catch (e) {
    throw new Error(e);
  } finally {
    return name;
  }
};

const allowance = async (owner, user) => {
  let allowance = "";
  try {
    allowance = await contract.methods.allowance(owner, user).call();
  } catch (e) {
    throw new Error(e);
  } finally {
    return allowance;
  }
};

const approve = async (sender, user, amount) => {
  try {
    const txObject = {
      from: sender,
      to: conAddress,
      data: contract.methods.approve(user, amount).encodeABI()
    };
    await web3.eth.sendTransaction(txObject);
  } catch (e) {
    throw new Error(e);
  }
};

const balanceOf = async user => {
  let balance = "";
  try {
    balance = await contract.methods.balanceOf(user).call();
  } catch (e) {
    throw new Error(e);
  } finally {
    return balance;
  }
};

const decreaseAllowance = async (sender, spender, amount) => {
  try {
    const txObject = {
      from: sender,
      to: conAddress,
      data: contract.methods.decreaseAllowance(spender, amount).encodeABI()
    };
    await web3.eth.sendTransaction(txObject);
  } catch (e) {
    throw new Error(e);
  }
};

const increaseAllowance = async (sender, spender, amount) => {
  try {
    const txObject = {
      from: sender,
      to: conAddress,
      data: contract.methods.increaseAllowance(spender, amount).encodeABI()
    };
    await web3.eth.sendTransaction(txObject);
  } catch (e) {
    throw new Error(e);
  }
};

const transferFrom = async (sender, receiver, spender, amount) => {
  try {
    const txObject = {
      from: spender,
      to: conAddress,
      data: contract.methods.transferFrom(sender, receiver, amount).encodeABI()
    };
    await web3.eth.sendTransaction(txObject);
  } catch (e) {
    throw new Error(e);
  }
};

const transfer = async (sender, receiver, amount) => {
  try {
    const txObject = {
      from: sender,
      to: conAddress,
      data: contract.methods.transfer(receiver, amount).encodeABI()
    };
    await web3.eth.sendTransaction(txObject);
  } catch (e) {
    throw new Error(e);
  }
};

// export { web3 };

module.exports.web3Controls = {
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
};
