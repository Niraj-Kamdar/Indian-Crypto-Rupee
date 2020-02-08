pragma solidity >=0.5.0 <0.6.0;

/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */
library SafeMath ***REMOVED***

  /**
  * @dev Multiplies two numbers, throws on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) ***REMOVED***
    if (a == 0) ***REMOVED***
      return 0;
  ***REMOVED***
    uint256 c = a * b;
    assert(c / a == b);
    return c;
***REMOVED***

  /**
  * @dev Integer division of two numbers, truncating the quotient.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) ***REMOVED***
    uint256 c = a / b;
    return c;
***REMOVED***

  /**
  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) ***REMOVED***
    assert(b <= a);
    return a - b;
***REMOVED***

  /**
  * @dev Adds two numbers, throws on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) ***REMOVED***
    uint256 c = a + b;
    assert(c >= a);
    return c;
***REMOVED***
***REMOVED***

/**
 * @title SafeMath32
 * @dev SafeMath library implemented for uint32
 */
library SafeMath32 ***REMOVED***

  function mul(uint32 a, uint32 b) internal pure returns (uint32) ***REMOVED***
    if (a == 0) ***REMOVED***
      return 0;
  ***REMOVED***
    uint32 c = a * b;
    assert(c / a == b);
    return c;
***REMOVED***

  function div(uint32 a, uint32 b) internal pure returns (uint32) ***REMOVED***
    uint32 c = a / b;
    return c;
***REMOVED***

  function sub(uint32 a, uint32 b) internal pure returns (uint32) ***REMOVED***
    assert(b <= a);
    return a - b;
***REMOVED***

  function add(uint32 a, uint32 b) internal pure returns (uint32) ***REMOVED***
    uint32 c = a + b;
    assert(c >= a);
    return c;
***REMOVED***
***REMOVED***

/**
 * @title SafeMath16
 * @dev SafeMath library implemented for uint16
 */
library SafeMath16 ***REMOVED***

  function mul(uint16 a, uint16 b) internal pure returns (uint16) ***REMOVED***
    if (a == 0) ***REMOVED***
      return 0;
  ***REMOVED***
    uint16 c = a * b;
    assert(c / a == b);
    return c;
***REMOVED***

  function div(uint16 a, uint16 b) internal pure returns (uint16) ***REMOVED***
    uint16 c = a / b;
    return c;
***REMOVED***

  function sub(uint16 a, uint16 b) internal pure returns (uint16) ***REMOVED***
    assert(b <= a);
    return a - b;
***REMOVED***

  function add(uint16 a, uint16 b) internal pure returns (uint16) ***REMOVED***
    uint16 c = a + b;
    assert(c >= a);
    return c;
***REMOVED***
***REMOVED***

/**
 * @title SafeMath8
 * @dev SafeMath library implemented for uint8
 */
library SafeMath8 ***REMOVED***

  function mul(uint8 a, uint8 b) internal pure returns (uint8) ***REMOVED***
    if (a == 0) ***REMOVED***
      return 0;
  ***REMOVED***
    uint8 c = a * b;
    assert(c / a == b);
    return c;
***REMOVED***

  function div(uint8 a, uint8 b) internal pure returns (uint8) ***REMOVED***

    uint8 c = a / b;
    return c;
***REMOVED***

  function sub(uint8 a, uint8 b) internal pure returns (uint8) ***REMOVED***
    assert(b <= a);
    return a - b;
***REMOVED***

  function add(uint8 a, uint8 b) internal pure returns (uint8) ***REMOVED***
    uint8 c = a + b;
    assert(c >= a);
    return c;
***REMOVED***
***REMOVED***
