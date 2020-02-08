const MetaCoin = artifacts.require("MetaCoin");

contract('MetaCoin', function(accounts) ***REMOVED***
  it("should put 10000 MetaCoin in the first account", function() ***REMOVED***
    return MetaCoin.deployed().then(function(instance) ***REMOVED***
      return instance.getBalance.call(accounts[0]);
  ***REMOVED***).then(function(balance) ***REMOVED***
      assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  ***REMOVED***);
***REMOVED***);
  it("should call a function that depends on a linked library", function() ***REMOVED***
    var meta;
    var metaCoinBalance;
    var metaCoinEthBalance;

    return MetaCoin.deployed().then(function(instance) ***REMOVED***
      meta = instance;
      return meta.getBalance.call(accounts[0]);
  ***REMOVED***).then(function(outCoinBalance) ***REMOVED***
      metaCoinBalance = parseInt(outCoinBalance);
      return meta.getBalanceInEth.call(accounts[0]);
  ***REMOVED***).then(function(outCoinBalanceEth) ***REMOVED***
      metaCoinEthBalance = parseInt(outCoinBalanceEth);
  ***REMOVED***).then(function() ***REMOVED***
      assert.equal(metaCoinEthBalance, 2 * metaCoinBalance, "Library function returned unexpected function, linkage may be broken");
  ***REMOVED***);
***REMOVED***);
  it("should send coin correctly", function() ***REMOVED***
    var meta;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    return MetaCoin.deployed().then(function(instance) ***REMOVED***
      meta = instance;
      return meta.getBalance.call(account_one);
  ***REMOVED***).then(function(balance) ***REMOVED***
      account_one_starting_balance = parseInt(balance);
      return meta.getBalance.call(account_two);
  ***REMOVED***).then(function(balance) ***REMOVED***
      account_two_starting_balance = parseInt(balance);
      return meta.sendCoin(account_two, amount, ***REMOVED***from: account_one***REMOVED***);
  ***REMOVED***).then(function() ***REMOVED***
      return meta.getBalance.call(account_one);
  ***REMOVED***).then(function(balance) ***REMOVED***
      account_one_ending_balance = parseInt(balance);
      return meta.getBalance.call(account_two);
  ***REMOVED***).then(function(balance) ***REMOVED***
      account_two_ending_balance = parseInt(balance);

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
  ***REMOVED***);
***REMOVED***);
***REMOVED***);
