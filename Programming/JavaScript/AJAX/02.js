console.dir(document);
console.log(document.URL);

const hTag = document.querySelector("h1");
// console.log(hTag);
hTag.textContent = "Hello World";
// console.log(hTag.textContent);

const divTag = document.querySelector("div");
// console.log(divTag);

divs.forEach(function (ele) {
  console.log(ele);
});

divs.forEach((ele) => console.log(ele));

divs.forEach((ele, index, arr) => {
  console.log(ele);
  ele.textContent = "NEW " + index;
  // console.log(arr);
});

divs[0].textContent = "Hello 1";
divs[1].textContent = "Hello 2";
