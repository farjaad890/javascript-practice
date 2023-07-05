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
//temporary object to store data
let tempObj = {};
//function to claculate currency conversion
function currencyClaculation(
  senderCurrobj,
  recCurrobj,
  amount,
  callbackCurrencycalculation
) {
  setTimeout(function () {
    var sendAmount = 0;
    if (senderCurrobj.currency === "USD" && recCurrobj.currency === "EUR") {
      sendAmount = amount * 10;
    } else if (
      senderCurrobj.currency === "USD" &&
      recCurrobj.currency === "AUD"
    ) {
      sendAmount = amount * 20;
    } else if (
      senderCurrobj.currency === "EUR" &&
      recCurrobj.currency === "USD"
    ) {
      sendAmount = amount * 5.7;
    } else if (
      senderCurrobj.currency === "EUR" &&
      recCurrobj.currency === "AUD"
    ) {
      sendAmount = amount * 7.5;
    } else if (
      senderCurrobj.currency === "AUD" &&
      recCurrobj.currency === "USD"
    ) {
      sendAmount = amount * 2.5;
    } else if (
      senderCurrobj.currency === "AUD" &&
      recCurrobj.currency === "EUR"
    ) {
      sendAmount = amount * 1.5;
    }
    callbackCurrencycalculation(sendAmount);
  }, 2000);
}
//function to store data
function storeData(data, callbackStoredata) {
  setTimeout(function () {
    transactions.push(data);
    callbackStoredata(true);
  }, 2000);
}
//function to generate a random string
function randomStringgenerator() {
  let randomstr = "";
  let characstr = "123456789abcdefghijklmnopqrstuvwxyz";
  for (let str of characstr) {
    randomstr += characstr.charAt(Math.random() * characstr.length);
  }
  return randomstr;
}
//function to fetch a specific currency object form currencies array
function fetcCurrency(currenciCode, callbackFetchcurrency) {
  setTimeout(function () {
    let currencyObject = currencies.find(function (currency) {
      return currency.code === currenciCode;
    });
    callbackFetchcurrency(currencyObject);
  }, 2000);
}
//fetch a sender and receiver from the users array
function fetchSenderandReceiver(userID, callbackFetchinguser) {
  setTimeout(function () {
    let user = users.find(function (currentUser) {
      return currentUser.reference === userID;
    });
    callbackFetchinguser(user);
  }, 2000);
}
//the main transfer money function
function tranferMoneymain(senderUserref, receiverUserref, amount) {
  fetchSenderandReceiver(senderUserref, function (sender) {
    console.log("Fetching Sender Data.......");
    if (sender) {
      console.log("Sender User found");
      console.log(sender);
      fetchSenderandReceiver(receiverUserref, function (receiver) {
        if (receiver) {
          console.log("receiver found");
          console.log(receiver);
          if (sender.reference != receiver.reference) {
            if (sender.bankDetails[0].balance > amount) {
              let senderCurrencycode = senderUserref.split("_");
              let receiverCurrencycode = receiverUserref.split("_");
              if (senderCurrencycode[0] != receiverCurrencycode[0]) {
                fetcCurrency(senderCurrencycode[0], function (senderCurrency) {
                  console.log("Fetching sender currency.....");
                  let exchangeFee =
                    (senderCurrency.exchange_rate_fee / 100) * amount;
                  if (exchangeFee + amount < sender.bankDetails[0].balance) {
                    fetcCurrency(
                      receiverCurrencycode[0],
                      function (receiverCurrency) {
                        console.log("Fetching receiver currency......");
                        currencyClaculation(
                          senderCurrency,
                          receiverCurrency,
                          amount,
                          function (finalAmount) {
                            console.log(
                              `Converting your money to ${receiverCurrency.currency}...... `
                            );
                            tempObj["sender_id"] = sender.reference;
                            sender.bankDetails[0].balance =
                              sender.bankDetails[0].balance -
                              (amount + exchangeFee);
                            tempObj["sender_updated_balance"] =
                              sender.bankDetails[0].balance;
                            receiver.bankDetails[0].balance =
                              receiver.bankDetails[0].balance + finalAmount;
                            tempObj["receviver_id"] = receiver.reference;
                            tempObj["receiver_updated_balance"] =
                              receiver.bankDetails[0].balance;
                            tempObj["amount"] = amount;
                            tempObj["Sender currency"] =
                              senderCurrency.currency;
                            tempObj["Receiver currency"] =
                              receiverCurrency.currency;
                            tempObj["exchange_rate"] = exchangeFee;
                            tempObj["transaction_id"] = randomStringgenerator();
                            console.log("Transaction successfull");
                            storeData(tempObj, function (check) {
                              console.log("Storing data.....");
                              if (check) {
                                console.log(
                                  "Data successfully stored in database"
                                );
                                console.log(transactions);
                              } else {
                                console.log(
                                  "error in storing data.Data not stored"
                                );
                              }
                            });
                          }
                        );
                      }
                    );
                  } else {
                    console.log(
                      "You donot have sufficient balance to send money to different currencies"
                    );
                  }
                });
              } else {
                fetcCurrency(senderCurrencycode[0], function (currentCurrency) {
                  console.log("Fetching currency.....");
                  tempObj["sender_id"] = sender.reference;
                  sender.bankDetails[0].balance =
                    sender.bankDetails[0].balance - amount;
                  tempObj["sender_updated_balance"] =
                    sender.bankDetails[0].balance;
                  receiver.bankDetails[0].balance =
                    receiver.bankDetails[0].balance + amount;
                  tempObj["receviver_id"] = receiver.reference;
                  tempObj["receiver_updated_balance"] =
                    receiver.bankDetails[0].balance;
                  tempObj["amount"] = amount;
                  tempObj["currency"] = currentCurrency.currency;
                  tempObj["exchange_rate"] = 0;
                  tempObj["transaction_id"] = randomStringgenerator();
                  console.log("Transaction successfull");
                  storeData(tempObj, function (check) {
                    console.log("Storing data.....");
                    if (check) {
                      console.log("Data successfully stored in database");
                      console.log(transactions);
                    } else {
                      console.log("error in storing data.Data not stored");
                    }
                  });
                });
              }
            } else {
              console.log("Insufficient balance");
            }
          } else {
            console.log("Sender and the receiver are the same invalid input");
          }
        } else {
          console.log("receiver not found");
        }
      });
    } else {
      console.log("Sender User not found");
    }
  });
}
tranferMoneymain("00D_qwertyha", "01X_1sharxyha", 120);
