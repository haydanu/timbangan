class Cart {
  constructor() {
    this.cart_product = Array();
  }

  addProduct(product_code, qty) {
    let exist = false;
    {
      let addGoods = this.cart_product;

      for (let key in addGoods) {
        let row = addGoods[key];

        if (row.code == product_code) {
          exist = true;
          row.qty += qty;
          break;
        }
      }
    }

    if (!exist) {
      this.cart_product.push(Object({code: product_code, qty: qty}));
    }
  }

  removeProduct(product_code) {
    {
      let removeGoods = this.cart_product;

      for (let key in removeGoods) {
        let row = removeGoods[key];

        if (row.code == product_code) {
          delete this.cart_product[key];
          break;
        }
      }
    }
  }

  showCart() {
    for (let row of Object.values(this.cart_product)) {
      console.log(row.code + " (" + row.qty + ")");
    }
  }

};

let cart = new Cart();
cart.addProduct("Baju Merah Mantap", 1);
cart.addProduct("Baju Merah Mantap", 1);
cart.addProduct("Bukuku", 3);
cart.removeProduct("Bukuku");
cart.addProduct("Singlet Hijau", 1);
cart.removeProduct("ProdukBohongan");
cart.showCart();
