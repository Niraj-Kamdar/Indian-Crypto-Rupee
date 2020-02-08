pragma solidity >=0.4.22 <0.7.0;

import "./ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract MetaCoin ***REMOVED***
	mapping (address => uint) balances;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);

	constructor() public ***REMOVED***
		balances[tx.origin] = 10000;
	***REMOVED***

	function sendCoin(address receiver, uint amount) public returns(bool sufficient) ***REMOVED***
		if (balances[msg.sender] < amount) return false;
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		emit Transfer(msg.sender, receiver, amount);
		return true;
	***REMOVED***

	function getBalanceInEth(address addr) public view returns(uint)***REMOVED***
		return ConvertLib.convert(getBalance(addr),2);
	***REMOVED***

	function getBalance(address addr) public view returns(uint) ***REMOVED***
		return balances[addr];
	***REMOVED***
***REMOVED***
