pragma solidity >=0.5.0 <0.6.0;

/**
* @title Ownable
* @dev The Ownable contract has an owner address, and provides basic authorization control
* functions, this simplifies the implementation of "user permissions".
*/
contract Ownable ***REMOVED***
  address private _owner;

  event OwnershipTransferred(
    address indexed previousOwner,
    address indexed newOwner
  );

  /**
  * @dev The Ownable constructor sets the original `owner` of the contract to the sender
  * account.
  */
  constructor() internal ***REMOVED***
    _owner = msg.sender;
    emit OwnershipTransferred(address(0), _owner);
***REMOVED***

  /**
  * @return the address of the owner.
  */
  function owner() public view returns(address) ***REMOVED***
    return _owner;
***REMOVED***

  /**
  * @dev Throws if called by any account other than the owner.
  */
  modifier onlyOwner() ***REMOVED***
    require(isOwner());
    _;
***REMOVED***

  /**
  * @return true if `msg.sender` is the owner of the contract.
  */
  function isOwner() public view returns(bool) ***REMOVED***
    return msg.sender == _owner;
***REMOVED***

  /**
  * @dev Allows the current owner to relinquish control of the contract.
  * @notice Renouncing to ownership will leave the contract without an owner.
  * It will not be possible to call the functions with the `onlyOwner`
  * modifier anymore.
  */
  function renounceOwnership() public onlyOwner ***REMOVED***
    emit OwnershipTransferred(_owner, address(0));
    _owner = address(0);
***REMOVED***

  /**
  * @dev Allows the current owner to transfer control of the contract to a newOwner.
  * @param newOwner The address to transfer ownership to.
  */
  function transferOwnership(address newOwner) public onlyOwner ***REMOVED***
    _transferOwnership(newOwner);
***REMOVED***

  /**
  * @dev Transfers control of the contract to a newOwner.
  * @param newOwner The address to transfer ownership to.
  */
  function _transferOwnership(address newOwner) internal ***REMOVED***
    require(newOwner != address(0));
    emit OwnershipTransferred(_owner, newOwner);
    _owner = newOwner;
***REMOVED***
***REMOVED***
