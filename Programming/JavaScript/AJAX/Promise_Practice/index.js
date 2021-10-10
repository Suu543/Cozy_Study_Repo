// 1. Get ingredients
// 2. Cook the beef
// 3. Get burger buns
// 4. Put the cooked beef between the buns
// 5. Serve the burger

// const makeBurger = () => {
//   const beef = getBeef();
//   const patty = cookBeef(beef);
//   const buns = getBuns();
//   const burger = putBeefBetweenBuns(buns, patty);
//   return burger;
// };

// function requestBeef(name) {
//   return "Beef";
// }

// const getBeef = (callback) => {
//   const beef = requestBeef();
//   try {
//     return callback(beef);
//   } catch (err) {
//     throw Error("고기가 도착하지 않았어요!!!");
//   }
// };

// const cookBeef = (beef, callback) => {
//   const cookedBeef = "cookedBeef";
//   return callback(cookBeef);
// };

// const makeBurger = (nextStep) => {
//   getBeef(function (beef) {
//     cookBeef(beef, function (cookedBeef) {
//       getBuns(function (buns) {
//         putBeefBetweenBuns(buns, cookedBeef, function (burger) {
//           nextStep(burger);
//         });
//       });
//     });
//   });
// };

// makeBurger(function (burger) {
//   serve(burger);
// });

// function serve(burger) {
//   console.log(`${burger} is delivering...`);
// }

// Promise
// - pending
// - fulfilled
// - rejected
const leftFright = "Freeze Beef";

function getBeefFromFridge(fridge) {
  return `${fridge}`;
}

function putBeefinOven(beef) {
  return `cookedBeef`;
}

function friedBuns(beef) {
  return `${beef} + friedBuns`;
}

const getBeef = (_) => {
  const fridge = leftFright;
  const beef = getBeefFromFridge();

  return new Promise((resolve, reject) => {
    if (beef) {
      resolve(beef);
    } else {
      reject(new Error("No More Beef!"));
    }
  });
};

const cookBeef = (beef) => {
  const workInProgress = putBeefinOven(beef);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(workInProgress);
    }, 1000);
  });
};

const getBuns = (beef) => {
  const friedBunsAndBeef = friedBuns(beef);

  return new Promise((resolve, reject) => {
    // reject(friedBunsAndBeef);
    resolve(friedBunsAndBeef);
  });
};

const putBeefBetweenBuns = (bunsAndBeef) => {
  return `Delicious Hamburger with ${bunsAndBeef}`;
};

const makeBurger = () => {
  return getBeef()
    .then((beef) => cookBeef(beef))
    .then((cookedBeef) => getBuns(cookedBeef))
    .then((bunsAndBeef) => putBeefBetweenBuns(bunsAndBeef))
    .catch((err) => console.log(`Hello, ${err}`));
};

function resolvePromise(promise) {
  promise.then((result) => {
    console.log(result);
  });
}

resolvePromise(makeBurger());
