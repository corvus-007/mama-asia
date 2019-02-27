"use strict";

Vue.component('app-counter', {
  props: {
    'value': Number,
    'step': {
      type: Number,
      default: 1
    },
    'min': {
      type: Number,
      default: 0
    },
    'max': {
      type: Number,
      default: Infinity
    }
  },
  template: "\n  <span class=\"counter\">\n    <button\n      class=\"counter__control counter__control--decrease\"\n      type=\"button\"\n      aria-label=\"Уменьшить на 1\"\n      @click.prevent=\"decreaseValue\"\n    >&nbsp;</button>\n    <input\n      class=\"counter__input input\"\n      name=\"stories\"\n      type=\"number\"\n      min=\"0\"\n      placeholder=\"0\"\n      :step=\"step\"\n      v-bind:value=\"value\"\n      @input.number=\"inputValue\"\n    >\n    <button\n      class=\"counter__control counter__control--increase\"\n      type=\"button\"\n      aria-label=\"Увеличить на 1\"\n      @click.prevent=\"increaseValue\"\n    >&nbsp;</button>\n  </span>\n  ",
  data: function data() {
    return {// value: this.value
    };
  },
  methods: {
    inputValue: function inputValue() {
      var newVal = parseInt(event.target.value);

      if (newVal <= this.min) {
        newVal = this.min;
      } else if (newVal >= this.max) {
        newVal = this.max;
      }

      event.target.value = newVal;
      this.$emit('input', newVal);
    },
    decreaseValue: function decreaseValue() {
      var newVal = this.value - this.step;

      if (newVal <= this.min) {
        newVal = this.min;
      }

      this.$emit('input', newVal);
    },
    increaseValue: function increaseValue() {
      var newVal = this.value + this.step;

      if (newVal >= this.max) {
        newVal = this.max;
      }

      this.$emit('input', newVal);
    }
  }
});
var app = new Vue({
  el: '#wok-designer',
  data: {
    selectedNoodlesCount: 1,
    baseComponent: "Фунчоза (крахмальная) + овощи",
    fillerComponent: "Свинина по-китайски",
    components: {
      base: [{
        name: "Фунчоза (крахмальная) + овощи",
        price: 95,
        imgName: "lapsha_risovaya.jpg"
      }, {
        name: "Харусамэ (рисовая) + овощи",
        price: 95,
        imgName: "lapsha_grechnevaya.jpg"
      }, {
        name: "Удон (пшеничная) + овощи",
        price: 95,
        imgName: "lapsha_udon.jpg"
      }, {
        name: "Соба (гречневая)+ овощи",
        price: 95,
        imgName: "lapsha_yaichnaya.jpg"
      }, {
        name: "Лапша яична + овощи",
        price: 95,
        imgName: "lapsha_yaichnaya.jpg"
      }, {
        name: "Рис  \"Тепаньяки\"",
        price: 50,
        imgName: "ris.jpg"
      }],
      filler: [{
        name: "Свинина по-китайски",
        price: 60,
        imgName: "s_ovoshchami.jpg"
      }, {
        name: "Говядина",
        price: 95,
        imgName: "so_svininoj_i_ovoshchami.jpg"
      }, {
        name: "Курица",
        price: 50,
        imgName: "s_kuricej_i_ovoshchami.jpg"
      }, {
        name: "Утка",
        price: 95,
        imgName: "s_moreproduktami_i_ovoshchami.jpg"
      }, {
        name: "Ветчина жареная",
        price: 60,
        imgName: "s_lososem.jpg"
      }, {
        name: "Бекон жареный",
        price: 95,
        imgName: "s_krevetkami_i_sladkim_sousom_chili.jpg"
      }, {
        name: "Кальмары",
        price: 90,
        imgName: "s_kuricej_i_sladkim_sousom_chili.jpg"
      }, {
        name: "Лосось с/с",
        price: 155,
        imgName: "s_kuricej_i_gribami.jpg"
      }, {
        name: "Креветки",
        price: 155,
        imgName: "s_krevetkami_ananasom_i_sladkim_sousom_chili.jpg"
      }],
      souse: [{
        name: "Устричный",
        price: 45,
        piece: 0,
        imgName: "sous_teriyaki.jpg"
      }, {
        name: "Сливочный",
        price: 45,
        piece: 0,
        imgName: "sous_kimchi_bejs.jpg"
      }, {
        name: "Соевый",
        price: 45,
        piece: 0,
        imgName: "sous_spajs.jpg"
      }, {
        name: "Острый \"Спайси\"",
        price: 45,
        piece: 0,
        imgName: "majonez.jpg"
      }, {
        name: "Кисло-сладкий",
        price: 45,
        piece: 0,
        imgName: "sous_unagi.jpg"
      }, {
        name: "Терияки",
        price: 45,
        piece: 0,
        imgName: "sous_unagi.jpg"
      }, {
        name: "Ореховый",
        price: 50,
        piece: 0,
        imgName: "sous_unagi.jpg"
      }, {
        name: "Тонкацу",
        price: 45,
        piece: 0,
        imgName: "sous_unagi.jpg"
      }, {
        name: "ХойСин",
        price: 50,
        piece: 0,
        imgName: "sous_unagi.jpg"
      }, {
        name: "Кимчи",
        price: 50,
        piece: 0,
        imgName: "sous_unagi.jpg"
      }, {
        name: "Чили",
        price: 45,
        piece: 0,
        imgName: "sous_unagi.jpg"
      }],
      topping: [{
        name: "Капуста цветная и брокколи",
        price: 30,
        piece: 0,
        imgName: "sous_teriyaki.jpg"
      }, {
        name: "Фасоль стручковая",
        price: 30,
        piece: 0,
        imgName: "sous_teriyaki.jpg"
      }, {
        name: "Грибы шитаки жареные",
        price: 30,
        piece: 0,
        imgName: "sous_teriyaki.jpg"
      }, {
        name: "Сыр моцарелла",
        price: 50,
        piece: 0,
        imgName: "sous_teriyaki.jpg"
      }, {
        name: "Кунжут",
        price: 5,
        piece: 0,
        imgName: "sous_teriyaki.jpg"
      }, {
        name: "Шампиньоны жареные",
        price: 40,
        piece: 0,
        imgName: "sous_teriyaki.jpg"
      }]
    }
  },
  computed: {
    selectedBaseComponentObj: function selectedBaseComponentObj() {
      var _this = this;

      return this.components.base.find(function (it) {
        return it.name === _this.baseComponent;
      });
    },
    selectedFillerComponentObj: function selectedFillerComponentObj() {
      var _this2 = this;

      return this.components.filler.find(function (it) {
        return it.name === _this2.fillerComponent;
      });
    },
    selectedNoodlesName: function selectedNoodlesName() {
      return "".concat(this.baseComponent.charAt(0).toUpperCase()).concat(this.baseComponent.slice(1).toLowerCase(), " и ").concat(this.fillerComponent.toLowerCase());
    },
    slectedNoodlesImageName: function slectedNoodlesImageName() {
      return "".concat(getImageName(this.selectedBaseComponentObj.imgName), "-").concat(getImageName(this.selectedFillerComponentObj.imgName), ".jpg");
    },
    selectedNoodlesPrice: function selectedNoodlesPrice() {
      return this.selectedBaseComponentObj.price + this.selectedFillerComponentObj.price;
    },
    selectedNoodlesCost: function selectedNoodlesCost() {
      return this.selectedNoodlesPrice * this.selectedNoodlesCount;
    },
    selectedSouses: function selectedSouses() {
      return this.components.souse.filter(function (it) {
        return it.piece > 0;
      });
    },
    selectedToppings: function selectedToppings() {
      return this.components.topping.filter(function (it) {
        return it.piece > 0;
      });
    },
    totalPriceSouses: function totalPriceSouses() {
      return this.selectedSouses.reduce(function (summ, it) {
        return summ += it.price * it.piece;
      }, 0);
    },
    totalPriceToppings: function totalPriceToppings() {
      return this.selectedToppings.reduce(function (summ, it) {
        return summ += it.price * it.piece;
      }, 0);
    },
    totalPrice: function totalPrice() {
      return this.selectedNoodlesCost + this.totalPriceSouses + this.totalPriceToppings;
    },
    wokObject: function wokObject() {
      return {
        noodle: {
          components: {
            base: this.selectedBaseComponentObj,
            filler: this.selectedFillerComponentObj
          },
          count: this.selectedNoodlesCount
        },
        souses: this.selectedSouses,
        toppings: this.selectedToppings
      };
    }
  },
  methods: {
    addToOrderHandler: function addToOrderHandler() {
      console.log(JSON.stringify(this.wokObject, '', 2));
    }
  }
});

function getImageName(string) {
  var extensionIndex = string.lastIndexOf('.');
  return string.slice(0, extensionIndex);
}