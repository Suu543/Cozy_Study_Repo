let dummy_data = [
  {
    name: {
      first: "Laurence",
      last: "Svekis",
    },
    age: 40,
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    name: {
      first: "Lisa",
      last: "Suekis",
    },
    age: 30,
    location: {
      city: "New York",
      country: "USA",
    },
  },
  {
    name: {
      first: "Johyn",
      last: "Sekis",
    },
    age: 50,
    location: {
      city: "New York",
      country: "USA",
    },
  },
];

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((json) => buildSkeletonHtml(json));
}

for (let i = 0; i < dummy_data.length; i++) {
  // 1. Whole Object
  console.log(dummy_data[i]);
  // 2. Extract Name
  console.log(dummy_data[i]["name"]);
  // ...
  // 4. Extract Location
  console.log(dummy_data[i]["location"]);
}

const output = document.querySelector(".output");

function buildSkeletonHtml(data) {
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    div.classList.add("dummy");
    div.innerText = data[i]["name"]["first"];
    output.append(div);
  }
}

buildSkeletonHtml(dummy_data);
