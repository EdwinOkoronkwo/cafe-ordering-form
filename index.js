const name = document.getElementById("name").value;

coffee = document.querySelector("input[name='coffee']:checked").value;

let extra = [];
let checkboxes = document.getElementsByName("extra[]");
for (let check of checkboxes) {
  if (check.checked) {
    extra.push(check.value);
  }
}

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("p1").innerHTML = name;
  document.getElementById("p2").innerHTML = coffee;
  document.getElementById("p3").innerHTML = extra;
});

coffee = Array(coffee);
totalCoffee = extra.concat(coffee);
console.log(totalCoffee);
let totalPrice = 0;
for (let coffee of totalCoffee) {
  let arr = coffee.split(",");
  let arr2 = parseFloat(arr[1]);
  totalPrice += arr2;
}
console.log(totalPrice);

// let coffeeType = coffee.split(",");

let coffeeType = [];
for (let type of totalCoffee) {
  coffeeType.push(type.split(",")[0]);
}

console.log(coffeeType);

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("p1").innerHTML = name;
  document.getElementById("p2").innerHTML = coffeeType.at(-1);
  document.getElementById("p3").innerHTML = coffeeType.slice(0, -1);
  document.getElementById("p4").innerHTML = totalPrice;
});
