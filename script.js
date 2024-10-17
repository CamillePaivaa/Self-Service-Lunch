var products = [
  {
    photo: "/img/bigmac.png",
    name: "Big Mac",
    active: false,
    price: "5.99",
    quantity: 1,
  },
  {
    photo: "/img/mcchiken.png",
    name: "Mc Chicken",
    active: false,
    price: "4.99",
    quantity: 1,
  },
  {
    photo: "/img/doublesalad.png",
    name: "Double Salad",
    active: false,
    price: "2.99",
    quantity: 1,
  },
  {
    photo: "/img/fries.png",
    name: "Fries",
    active: false,
    price: "2.99",
    quantity: 1,
  },
  {
    photo: "/img/nuggets.png",
    name: "Mc Nuggets",
    active: false,
    price: "3.49",
    quantity: 1,
  },
  {
    photo: "/img/salad.png",
    name: "Salad",
    active: false,
    price: "2.79",
    quantity: 1,
  },
  {
    photo: "/img/coke.png",
    name: "Coke",
    active: false,
    price: "1.99",
    quantity: 1,
  },
  {
    photo: "/img/icetea.png",
    name: "Ice Tea",
    active: false,
    price: "1.99",
    quantity: 1,
  },
  {
    photo: "/img/water.png",
    name: "Water",
    active: false,
    price: "1.49",
    quantity: 1,
  },
];

const SelfService = {
  data() {
    return {
      products: window.products,
    };
  },
  methods: {
    totalItens: function () {
      var total = 0;

      this.products.forEach(function (item) {
        if (item.active) {
          total += item.quantity * item.price;
        }
      });

      return total.toFixed(2);
    },
  },
};

Vue.createApp(SelfService).mount("#app");
