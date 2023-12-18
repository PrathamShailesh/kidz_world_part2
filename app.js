const carts = document.querySelectorAll(".button");
const value = document.getElementById("cart-value");

let cartCount = 0;
let totalPrice = 0;
let finalDollars = 0;
let finalCents = 0;

var itemname = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];

function updateCart() {
  let cartnumber = 0;
  for (i = 0; i < itemname.length; i++) {
    cartnumber = cartnumber + itemname[i].quantity;
  }
  value.innerHTML = cartnumber;
}

for (let i = 0; i < carts.length; i++) {
  carts[i].onclick = (e) => {
    itemname[i].quantity++;
    updateCart();
  };
  // console.log(itemname[i].quantity++)
}


function price() {
  let totalPriceInCents = 0;
  for (i = 0; i < itemname.length; i++) {
    totalPriceInCents =
      totalPriceInCents +
      itemname[i].quantity * (itemname[i].dollars * 100 + itemname[i].cents);
  }
  finalDollars = Math.floor(totalPriceInCents / 100);
  finalCents = totalPriceInCents % 100;
}

value.onclick = () => {
  price();
  for (let i = 0; i < itemname.length; i++) {
    if (itemname[i].quantity != 0) {
      console.log(
        "Item name: " +
          itemname[i].name +
          " - Quantity: " +
          itemname[i].quantity
      );
    }
  }
  console.log(
    "The total amount is"+finalDollars+"$ and "+finalCents+"cents"
  );
  let message =
    "The total amount is"+finalDollars+"$ and "+finalCents+" cents";
  const encodedMessage = encodeURIComponent(message);
  const phone = 9876543210;
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`,"_blank");
};

