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
  template: `
  <span class="counter">
    <button
      class="counter__control counter__control--decrease"
      type="button"
      aria-label="Уменьшить на 1"
      @click.prevent="decreaseValue"
    >&nbsp;</button>
    <input
      class="counter__input input"
      name="stories"
      type="number"
      min="0"
      placeholder="0"
      :step="step"
      v-bind:value="value"
      @input.number="inputValue"
    >
    <button
      class="counter__control counter__control--increase"
      type="button"
      aria-label="Увеличить на 1"
      @click.prevent="increaseValue"
    >&nbsp;</button>
  </span>
  `,
  data() {
    return {
      // value: this.value
    };
  },
  methods: {
    inputValue() {
      var newVal = parseInt(event.target.value);
      if (newVal <= this.min) {
        newVal = this.min;
      } else if (newVal >= this.max) {
        newVal = this.max;
      }
      event.target.value = newVal;
      this.$emit('input', newVal);
    },
    decreaseValue() {
      var newVal = this.value - this.step;

      if (newVal <= this.min) {
        newVal = this.min;
      }
      this.$emit('input', newVal);
    },
    increaseValue() {
      var newVal = this.value + this.step;

      if (newVal >= this.max) {
        newVal = this.max;
      }

      this.$emit('input', newVal);
    },
  }
});

const app = new Vue({
  el: '#wok-designer',
  data: {
    selectedNoodlesCount: 1,
    baseComponent: `Фунчоза (крахмальная) + овощи`,
    fillerComponent: `Свинина по-китайски`,
    components: {
      base: [{
          name: `Фунчоза (крахмальная) + овощи`,
          price: 95,
          imgName: `lapsha_risovaya.jpg`
        },
        {
          name: `Харусамэ (рисовая) + овощи`,
          price: 95,
          imgName: `lapsha_grechnevaya.jpg`
        },
        {
          name: `Удон (пшеничная) + овощи`,
          price: 95,
          imgName: `lapsha_udon.jpg`
        },
        {
          name: `Соба (гречневая)+ овощи`,
          price: 95,
          imgName: `lapsha_yaichnaya.jpg`
        },
        {
          name: `Лапша яична + овощи`,
          price: 95,
          imgName: `lapsha_yaichnaya.jpg`
        },
        {
          name: `Рис  "Тепаньяки"`,
          price: 50,
          imgName: `ris.jpg`
        }
      ],
      filler: [{
          name: `Свинина по-китайски`,
          price: 60,
          imgName: `s_ovoshchami.jpg`
        },
        {
          name: `Говядина`,
          price: 95,
          imgName: `so_svininoj_i_ovoshchami.jpg`
        },
        {
          name: `Курица`,
          price: 50,
          imgName: `s_kuricej_i_ovoshchami.jpg`
        },
        {
          name: `Утка`,
          price: 95,
          imgName: `s_moreproduktami_i_ovoshchami.jpg`
        },
        {
          name: `Ветчина жареная`,
          price: 60,
          imgName: `s_lososem.jpg`
        },
        {
          name: `Бекон жареный`,
          price: 95,
          imgName: `s_krevetkami_i_sladkim_sousom_chili.jpg`
        },
        {
          name: `Кальмары`,
          price: 90,
          imgName: `s_kuricej_i_sladkim_sousom_chili.jpg`
        },
        {
          name: `Лосось с/с`,
          price: 155,
          imgName: `s_kuricej_i_gribami.jpg`
        },
        {
          name: `Креветки`,
          price: 155,
          imgName: `s_krevetkami_ananasom_i_sladkim_sousom_chili.jpg`
        }
      ],
      souse: [{
          name: `Устричный`,
          price: 45,
          piece: 0,
          imgName: `sous_teriyaki.jpg`
        },
        {
          name: `Сливочный`,
          price: 45,
          piece: 0,
          imgName: `sous_kimchi_bejs.jpg`
        },
        {
          name: `Соевый`,
          price: 45,
          piece: 0,
          imgName: `sous_spajs.jpg`
        },
        {
          name: `Острый "Спайси"`,
          price: 45,
          piece: 0,
          imgName: `majonez.jpg`
        },
        {
          name: `Кисло-сладкий`,
          price: 45,
          piece: 0,
          imgName: `sous_unagi.jpg`
        },
        {
          name: `Терияки`,
          price: 45,
          piece: 0,
          imgName: `sous_unagi.jpg`
        },
        {
          name: `Ореховый`,
          price: 50,
          piece: 0,
          imgName: `sous_unagi.jpg`
        },
        {
          name: `Тонкацу`,
          price: 45,
          piece: 0,
          imgName: `sous_unagi.jpg`
        },
        {
          name: `ХойСин`,
          price: 50,
          piece: 0,
          imgName: `sous_unagi.jpg`
        },
        {
          name: `Кимчи`,
          price: 50,
          piece: 0,
          imgName: `sous_unagi.jpg`
        },
        {
          name: `Чили`,
          price: 45,
          piece: 0,
          imgName: `sous_unagi.jpg`
        }
      ],
      topping: [{
          name: `Капуста цветная и брокколи`,
          price: 30,
          piece: 0,
          imgName: `sous_teriyaki.jpg`
        },
        {
          name: `Фасоль стручковая`,
          price: 30,
          piece: 0,
          imgName: `sous_teriyaki.jpg`
        },
        {
          name: `Грибы шитаки жареные`,
          price: 30,
          piece: 0,
          imgName: `sous_teriyaki.jpg`
        },
        {
          name: `Сыр моцарелла`,
          price: 50,
          piece: 0,
          imgName: `sous_teriyaki.jpg`
        },
        {
          name: `Кунжут`,
          price: 5,
          piece: 0,
          imgName: `sous_teriyaki.jpg`
        },
        {
          name: `Шампиньоны жареные`,
          price: 40,
          piece: 0,
          imgName: `sous_teriyaki.jpg`
        }
      ]
    }
  },
  computed: {
    selectedBaseComponentObj() {
      return this.components.base.find((it) => {
        return it.name === this.baseComponent;
      });
    },
    selectedFillerComponentObj() {
      return this.components.filler.find((it) => {
        return it.name === this.fillerComponent;
      });
    },
    selectedNoodlesName() {
      return `${this.baseComponent.charAt(0).toUpperCase()}${this.baseComponent.slice(1).toLowerCase()} и ${this.fillerComponent.toLowerCase()}`;
    },
    slectedNoodlesImageName() {
      return `${getImageName(this.selectedBaseComponentObj.imgName)}-${getImageName(this.selectedFillerComponentObj.imgName)}.jpg`;
    },
    selectedNoodlesPrice() {
      return this.selectedBaseComponentObj.price + this.selectedFillerComponentObj.price;
    },
    selectedNoodlesCost() {
      return this.selectedNoodlesPrice * this.selectedNoodlesCount
    },
    selectedSouses() {
      return this.components.souse.filter((it) => {
        return it.piece > 0;
      });
    },
    selectedToppings() {
      return this.components.topping.filter((it) => {
        return it.piece > 0;
      });
    },
    totalPriceSouses() {
      return this.selectedSouses.reduce((summ, it) => summ += it.price * it.piece, 0);
    },
    totalPriceToppings() {
      return this.selectedToppings.reduce((summ, it) => summ += it.price * it.piece, 0);
    },
    totalPrice() {
      return this.selectedNoodlesCost + this.totalPriceSouses + this.totalPriceToppings;
    }
  },
  methods: {
    addToOrderHandler() {
      alert(`Отправляем данные`);
    }
  }
});

function getImageName(string) {
  const extensionIndex = string.lastIndexOf('.');
  return string.slice(0, extensionIndex);
}
