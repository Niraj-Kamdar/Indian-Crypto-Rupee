pragma solidity >=0.4.22 <0.7.0;

contract Migrations ***REMOVED***
  address public owner;
  uint256 public last_completed_migration;

  modifier restricted() ***REMOVED***
    if (msg.sender == owner) _;
***REMOVED***

  constructor() public ***REMOVED***
    owner = msg.sender;
***REMOVED***

  function setCompleted(uint completed) public restricted ***REMOVED***
    last_completed_migration = completed;
***REMOVED***

  function upgrade(address new_address) public restricted ***REMOVED***
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
***REMOVED***
***REMOVED***
