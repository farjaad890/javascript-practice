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
function checkAmount(amount) {
  return new Promise((resolve, reject) => {
    if (amount > 0) {
      resolve("Valid amount");
    } else {
      reject("invalid amount");
    }
  });
}
function checkBalance(sender, amount, fee) {
  return new Promise((resolve, reject) => {
    if (sender.bankDetails[0].balance > amount) {
    }
  });
}
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
function fetcCurrency(currenciCode) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let currencyObject = currencies.find(function (currency) {
        return currency.code === currenciCode;
      });
      if (currencyObject) {
        resolve(currencyObject);
      } else {
        reject("Currency not found");
      }
    }, 2000);
  });
}
// fetch a sender and receiver from the users array
function fetchSenderandReceiver(userID) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let user = users.find(function (currentUser) {
        return currentUser.reference === userID;
      });
      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
}
//the main transfer money function
function tranferMoneymain(senderUserref, receiverUserref, amount) {
  let sender;
  let receiver;
  let senderCurrencyobj;
  let receiverCurrencyobj;
  console.log("Fetching sender......");
  fetchSenderandReceiver(senderUserref)
    .then(function (data) {
      sender = data;
      console.log(sender);
      console.log("Fetching receiver.......");
      return fetchSenderandReceiver(receiverUserref);
    })
    .then(function (data) {
      receiver = data;
      console.log(receiver);
      return checkAmount(amount);
    })
    .then(function (message) {
      console.log(message);
      console.log("Fetching sender currency");
      return fetcCurrency(senderUserref.substring(0, 3));
    })
    .then(function (currency) {
      senderCurrencyobj = currency;
      console.log(senderCurrencyobj);
      console.log("fetching receiver currency");
      return fetcCurrency(receiverUserref.substring(0, 3));
    })
    .then(function (currency) {
      receiverCurrencyobj = currency;
      console.log(receiverCurrencyobj);
      if (senderCurrencyobj.currency === receiverCurrencyobj.currency) {
        checkBalance(sender, amount, 0)
          .then(function (message) {
            console.log(message);
          })
          .catch(function (message) {
            console.log(message);
          });
      } else {
        checkBalance(sender, amount, senderCurrencyobj.exchange_rate_fee)
          .then(function (message) {
            console.log(message);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    })
    .catch(function (message) {
      console.log(message);
    });
}
tranferMoneymain("00D_qwertyha", "01X_1sharxyha", 120);
