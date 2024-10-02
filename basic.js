const promiseOne = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async task");
    resolve();
  }, 3000);
});

promiseOne
  .then(() => console.log("Promise resolve"))
  .catch((err) => console.log(err));
