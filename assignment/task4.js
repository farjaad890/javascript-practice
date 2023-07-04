const users = [
  {
    name: "Alice",
    age: 30,
    reference: "00D_qwertyha",
    bankDetails: [
      {
        IBAN: "DE123456789",
        accountNumber: 123456,
        balance: 1000,
      },
    ],
  },
  {
    name: "Bob",
    age: 28,
    reference: "01Q_sharxyha",
    bankDetails: [
      {
        IBAN: "DE123456789",
        accountNumber: 124389,
        balance: 970,
      },
    ],
  },
  {
    name: "John",
    age: 25,
    reference: "01X_1sharxyha",
    bankDetails: [
      {
        IBAN: "DE123456789",
        accountNumber: 1243019,
        balance: 970,
      },
    ],
  },
  {
    name: "Smith",
    age: 28,
    reference: "01Q_s98u0kyha",
    bankDetails: [
      {
        IBAN: "DE123456789",
        accountNumber: 1249099,
        balance: 850,
      },
    ],
  },
];
/*conversion rates
 usd to eur = amount * 10
 usd to aud = amount * 20
 eur to usd = amount * 5.7
 eur to aud = amount * 7.5
 aud to usd = amount * 2.5
 aud to eur = amount * 1.5
*/
const currencies = [
  {
    currency: "USD",
    code: "00D",
    exchange_rate_fee: 2.0,
  },
  {
    currency: "EUR",
    code: "01Q",
    exchange_rate_fee: 1.5,
  },
  {
    currency: "AUD",
    code: "01X",
    exchange_rate_fee: 0.75,
  },
];
const transactions = [];

//function to generate a random string id
function randomStringgenerator() {
  let randomstr = "";
  let characstr = "123456789abcdefghijklmnopqrstuvwxyz";
  for (let str of characstr) {
    randomstr += characstr.charAt(Math.random() * characstr.length);
  }
  return randomstr;
}
//function to find the sender and receiver
function findUser(userId) {
  let foundUser;
  foundUser = users.filter(function (currentUser) {
    return currentUser.reference === userId;
  });
  return foundUser;
}
//function to deduct amount from the sender and add amount in receiver

function sendAndreceive(
  sender,
  senderCurrency,
  receiver,
  receiverCurrency,
  amount
) {
  //sender currency object
  let senderCurrobj;
  //receiver currence object
  let recCurrobj;
  //temporary object ot store data
  let tempObj = {};
  //to find the sender currency object
  senderCurrobj = currencies.find(function (currentcurrency) {
    return currentcurrency.code === senderCurrency;
  });
  //to find the receiver object
  recCurrobj = currencies.find(function (currentcurr) {
    return currentcurr.code === receiverCurrency;
  });
  //to check if sender and receiver currency is the same
  if (senderCurrobj.currency === recCurrobj.currency) {
    if (amount > sender.bankDetails[0].balance) {
      return false;
    } else {
      //storing data for successfull transaction
      //repeating for every condition below
      tempObj["sender_id"] = sender.reference;
      tempObj["receviver_id"] = receiver.reference;
      tempObj["amount"] = amount;
      tempObj["currency"] = recCurrobj.currency;
      tempObj["exchange_rate"] = senderCurrobj.exchange_rate_fee;
      tempObj["transaction_id"] = randomStringgenerator();
      tempObj["fee_in_amount"] = 0;
      //deduct the amount from the sender
      //repeating for every condition below
      sender.bankDetails[0].balance = sender.bankDetails[0].balance - amount;
      //adding the amount to the receiver
      //repeating for every condition below
      receiver.bankDetails[0].balance =
        receiver.bankDetails[0].balance + amount;
      transactions.push(tempObj);
      return true;
    }
  } else {
    if (senderCurrobj.currency === "USD" && recCurrobj.currency === "EUR") {
      let sendAmount = amount * 10;
      let exchangeRatefees = (senderCurrobj.exchange_rate_fee / 100) * amount;
      if (
        amount > sender.bankDetails[0].balance ||
        amount + exchangeRatefees > sender.bankDetails[0].balance
      ) {
        return false;
      } else {
        tempObj["sender_id"] = sender.reference;
        tempObj["receviver_id"] = receiver.reference;
        tempObj["amount"] = amount;
        tempObj["currency"] = recCurrobj.currency;
        tempObj["exchange_rate"] = senderCurrobj.exchange_rate_fee;
        tempObj["transaction_id"] = randomStringgenerator();
        tempObj["fee_in_amount"] = exchangeRatefees;
        sender.bankDetails[0].balance = sender.bankDetails[0].balance - amount;
        sender.bankDetails[0].balance =
          sender.bankDetails[0].balance - exchangeRatefees;
        receiver.bankDetails[0].balance =
          receiver.bankDetails[0].balance + sendAmount;
        transactions.push(tempObj);
        return true;
      }
    } else if (
      senderCurrobj.currency === "USD" &&
      recCurrobj.currency === "AUD"
    ) {
      let sendAmount = amount * 20;
      let exchangeRatefees = (senderCurrobj.exchange_rate_fee / 100) * amount;
      if (
        amount > sender.bankDetails[0].balance ||
        amount + exchangeRatefees > sender.bankDetails[0].balance
      ) {
        return false;
      } else {
        tempObj["sender_id"] = sender.reference;
        tempObj["receviver_id"] = receiver.reference;
        tempObj["amount"] = amount;
        tempObj["currency"] = recCurrobj.currency;
        tempObj["exchange_rate"] = senderCurrobj.exchange_rate_fee;
        tempObj["transaction_id"] = randomStringgenerator();
        tempObj["fee_in_amount"] = exchangeRatefees;
        sender.bankDetails[0].balance = sender.bankDetails[0].balance - amount;
        sender.bankDetails[0].balance =
          sender.bankDetails[0].balance - exchangeRatefees;
        receiver.bankDetails[0].balance =
          receiver.bankDetails[0].balance + sendAmount;
        transactions.push(tempObj);
        return true;
      }
    } else if (
      senderCurrobj.currency === "EUR" &&
      recCurrobj.currency === "USD"
    ) {
      let sendAmount = amount * 5.7;
      let exchangeRatefees = (senderCurrobj.exchange_rate_fee / 100) * amount;
      if (
        amount > sender.bankDetails[0].balance ||
        amount + exchangeRatefees > sender.bankDetails[0].balance
      ) {
        return false;
      } else {
        tempObj["sender_id"] = sender.reference;
        tempObj["receviver_id"] = receiver.reference;
        tempObj["amount"] = amount;
        tempObj["currency"] = recCurrobj.currency;
        tempObj["exchange_rate"] = senderCurrobj.exchange_rate_fee;
        tempObj["transaction_id"] = randomStringgenerator();
        tempObj["fee_in_amount"] = exchangeRatefees;
        sender.bankDetails[0].balance = sender.bankDetails[0].balance - amount;
        sender.bankDetails[0].balance =
          sender.bankDetails[0].balance - exchangeRatefees;
        receiver.bankDetails[0].balance =
          receiver.bankDetails[0].balance + sendAmount;
        transactions.push(tempObj);
        return true;
      }
    } else if (
      senderCurrobj.currency === "EUR" &&
      recCurrobj.currency === "AUD"
    ) {
      let sendAmount = amount * 7.5;
      let exchangeRatefees = (senderCurrobj.exchange_rate_fee / 100) * amount;
      if (
        amount > sender.bankDetails[0].balance ||
        amount + exchangeRatefees > sender.bankDetails[0].balance
      ) {
        return false;
      } else {
        tempObj["sender_id"] = sender.reference;
        tempObj["receviver_id"] = receiver.reference;
        tempObj["amount"] = amount;
        tempObj["currency"] = recCurrobj.currency;
        tempObj["exchange_rate"] = senderCurrobj.exchange_rate_fee;
        tempObj["transaction_id"] = randomStringgenerator();
        tempObj["fee_in_amount"] = exchangeRatefees;
        sender.bankDetails[0].balance = sender.bankDetails[0].balance - amount;
        sender.bankDetails[0].balance =
          sender.bankDetails[0].balance - exchangeRatefees;
        receiver.bankDetails[0].balance =
          receiver.bankDetails[0].balance + sendAmount;
        transactions.push(tempObj);
        return true;
      }
    } else if (
      senderCurrobj.currency === "AUD" &&
      recCurrobj.currency === "USD"
    ) {
      let sendAmount = amount * 2.5;
      let exchangeRatefees = (senderCurrobj.exchange_rate_fee / 100) * amount;
      if (
        amount > sender.bankDetails[0].balance ||
        amount + exchangeRatefees > sender.bankDetails[0].balance
      ) {
        return false;
      } else {
        tempObj["sender_id"] = sender.reference;
        tempObj["receviver_id"] = receiver.reference;
        tempObj["amount"] = amount;
        tempObj["currency"] = recCurrobj.currency;
        tempObj["exchange_rate"] = senderCurrobj.exchange_rate_fee;
        tempObj["transaction_id"] = randomStringgenerator();
        tempObj["fee_in_amount"] = exchangeRatefees;
        sender.bankDetails[0].balance = sender.bankDetails[0].balance - amount;
        sender.bankDetails[0].balance =
          sender.bankDetails[0].balance - exchangeRatefees;
        receiver.bankDetails[0].balance =
          receiver.bankDetails[0].balance + sendAmount;
        transactions.push(tempObj);
        return true;
      }
    } else if (
      senderCurrobj.currency === "AUD" &&
      recCurrobj.currency === "EUR"
    ) {
      let sendAmount = amount * 1.5;
      let exchangeRatefees = (senderCurrobj.exchange_rate_fee / 100) * amount;
      console.log(exchangeRatefees);
      if (
        amount > sender.bankDetails[0].balance ||
        amount + exchangeRatefees > sender.bankDetails[0].balance
      ) {
        return false;
      } else {
        tempObj["sender_id"] = sender.reference;
        tempObj["receviver_id"] = receiver.reference;
        tempObj["amount"] = amount;
        tempObj["currency"] = recCurrobj.currency;
        tempObj["exchange_rate"] = senderCurrobj.exchange_rate_fee;
        //generating a random string
        tempObj["transaction_id"] = randomStringgenerator();
        tempObj["fee_in_amount"] = exchangeRatefees;
        sender.bankDetails[0].balance = sender.bankDetails[0].balance - amount;
        sender.bankDetails[0].balance =
          sender.bankDetails[0].balance - exchangeRatefees;
        receiver.bankDetails[0].balance =
          receiver.bankDetails[0].balance + sendAmount;
        transactions.push(tempObj);
        return true;
      }
    }
  }
}
// function to transfer money
function transferMoney(sendrId, receiverId, amount) {
  let senderRef = sendrId.split("_");
  let receiverRef = receiverId.split("_");
  let senderUser;
  let receiverUser;
  //check for a valid amount
  if (amount <= 0) {
    console.log("Please enter correct amount");
  } else {
    // check for vald refrence id
    if (senderRef.length == 1 || receiverRef.length == 1) {
      console.log("incorrect Data received");
    } else {
      senderUser = findUser(sendrId);
      receiverUser = findUser(receiverId);
      //check if the user is found
      if (senderUser.length > 0 && receiverUser.length > 0) {
        //check for successfull transaction
        if (
          sendAndreceive(
            senderUser[0],
            senderRef[0],
            receiverUser[0],
            receiverRef[0],
            amount
          )
        ) {
          console.log("Transaction successful");
        } else {
          console.log("Transaction unsuccessfull");
        }
      } else {
        console.log("User not found");
      }
    }
  }
}

transferMoney("00D_qwertyha", "01Q_sharxyha", 150);
transferMoney("00D_qwertyha", "01Q_sharxyha", 299);
transferMoney("01X_1sharxyha", "01Q_sharxyha", 179);
console.log(transactions);
