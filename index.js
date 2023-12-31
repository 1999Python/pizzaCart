function PizzaCart() {

  return {

    small: 0,
    medium: 0,
    large: 0,
    amount: 0,
    pay: 0,
    errorMessage : '',

    incrementSmall() {
      this.small += 99;
      this.amount += 99;
    },
    decrementSmall() {
      if (this.small > 0) {
        this.small -= 99;
        this.amount -= 99;
      }
    },

    incrementMedium() {
      this.medium += 120;
      this.amount += 120;
    },
    decrementMedium() {
      if (this.medium > 0) {
        this.medium -= 120;
        this.amount -= 120;
      }
    },

    incrementLarge() {
      this.large += 179;
      this.amount += 179;
    },
    decrementLarge() {
      if (this.large > 0) {
        this.large -= 179;
        this.amount -= 179;
      }
    },

    payAmount() {
      if (this.amount === this.pay) {
        this.errorMessage = 'Enjoy your meal :)'; 
      }
      else{
        this.errorMessage = 'Please pay the amount required';
      }
    }

  }
}
document.addEventListener('alpine:init', () => {
  Alpine.data("cartPizza", PizzaCart);
});
