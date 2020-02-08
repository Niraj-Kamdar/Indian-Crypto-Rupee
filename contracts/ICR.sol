pragma solidity >=0.4.22 <0.7.0;

import "./safemath.sol";
import "./ownable.sol";

contract ICR is Ownable***REMOVED***
    using SafeMath for uint256;

    event Transfer(address indexed _from, address indexed _to, uint256 indexed _value);
    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _value);
    event NewUser(address indexed _uname);

    mapping (address => uint256) private _balances;

    mapping (address => mapping (address => uint256)) private _allowances;

    mapping (address => bool) private _users;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;
    uint8 private _decimals;

    constructor () public ***REMOVED***
        _name = "IndianCryptoRupee";
        _symbol = "ICR";
  ***REMOVED***

    modifier onlyUser(address _uname) ***REMOVED***
        require(_users[_uname], "Not a Valid User");
        _;
  ***REMOVED***

    function name() public view returns (string memory) ***REMOVED***
        return _name;
  ***REMOVED***

    function symbol() public view returns (string memory) ***REMOVED***
        return _symbol;
  ***REMOVED***

    function addUser(address _uname) public onlyOwner***REMOVED***
        _users[_uname] = true;
        emit NewUser(_uname);
  ***REMOVED***

    function totalSupply() public view returns (uint256) ***REMOVED***
        return _totalSupply;
  ***REMOVED***

    function allowance(address owner, address spender) public view onlyUser(owner) onlyUser(spender) returns (uint256) ***REMOVED***
        return _allowances[owner][spender];
  ***REMOVED***

    function approve(address spender, uint256 amount) public onlyUser(spender) onlyUser(msg.sender) returns (bool) ***REMOVED***
        _approve(msg.sender, spender, amount);
        return true;
  ***REMOVED***

    /**
     * @dev converts fiat currency to token. (create token)
     */
    function mint(address account, uint256 amount) public onlyOwner onlyUser(account) ***REMOVED***
        require(account != address(0), "ERC20: mint to the zero address");

        _totalSupply = _totalSupply.add(amount);
        _balances[account] = _balances[account].add(amount);
        emit Transfer(address(0), account, amount);
  ***REMOVED***

    /**
     * @dev converts token to fiat currency. (burn token)
     */
    function burn(address account, uint256 amount) public onlyOwner onlyUser(account) ***REMOVED***
        require(account != address(0), "ERC20: burn from the zero address");

        _balances[account] = _balances[account].sub(amount);
        _totalSupply = _totalSupply.sub(amount);
        emit Transfer(account, address(0), amount);
  ***REMOVED***

    function balanceOf(address account) public view onlyUser(account) returns (uint256) ***REMOVED***
        return _balances[account];
  ***REMOVED***

    function transfer(address recipient, uint256 amount) public onlyUser(recipient) onlyUser(msg.sender) returns (bool) ***REMOVED***
        _transfer(msg.sender, recipient, amount);
        return true;
  ***REMOVED***

    function _transfer(address sender, address recipient, uint256 amount) internal onlyUser(recipient) onlyUser(sender) ***REMOVED***
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");

        _balances[sender] = _balances[sender].sub(amount);
        _balances[recipient] = _balances[recipient].add(amount);
        emit Transfer(sender, recipient, amount);
  ***REMOVED***

    function transferFrom(address sender, address recipient, uint256 amount) public onlyUser(recipient) onlyUser(sender) returns (bool) ***REMOVED***
        _approve(sender, msg.sender, _allowances[sender][msg.sender].sub(amount));
        _transfer(sender, recipient, amount);
        return true;
  ***REMOVED***

    function increaseAllowance(address spender, uint256 addedValue) public onlyUser(spender) onlyUser(msg.sender) returns (bool) ***REMOVED***
        _approve(msg.sender, spender, _allowances[msg.sender][spender].add(addedValue));
        return true;
  ***REMOVED***

    function decreaseAllowance(address spender, uint256 subtractedValue) public onlyUser(spender) onlyUser(msg.sender) returns (bool) ***REMOVED***
        _approve(msg.sender, spender, _allowances[msg.sender][spender].sub(subtractedValue));
        return true;
  ***REMOVED***

    function _approve(address owner, address spender, uint256 amount) internal onlyUser(spender) onlyUser(owner) ***REMOVED***
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
  ***REMOVED***

***REMOVED***