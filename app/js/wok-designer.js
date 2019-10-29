Vue.component('app-counter', {
  props: {
    value: Number,
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
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
    }
  }
});

const app = new Vue({
  el: '#wok-designer',
  data: {
    selectedNoodlesCount: 1,
    baseComponent: `Фунчоза (крахмальная) + овощи`,
    fillerComponent: `Свинина по-китайски`,
    components: {
      base: [
        {
          id: 'base_1',
          name: `Фунчоза (крахмальная) + овощи`,
          price: 95,
          imgName: `funchoza_krahmalnaya_ovoshchi.jpg`
        },
        {
          id: 'base_2',
          name: `Харусамэ (рисовая) + овощи`,
          price: 95,
          imgName: `harusameh_risovaya_ovoshchi.jpg`
        },
        {
          id: 'base_3',
          name: `Удон (пшеничная) + овощи`,
          price: 95,
          imgName: `udon_pshenichnaya_ovoshchi.jpg`
        },
        {
          id: 'base_4',
          name: `Соба (гречневая)+ овощи`,
          price: 95,
          imgName: `soba_grechnevaya_ovoshchi.jpg`
        },
        {
          id: 'base_5',
          name: `Лапша яична + овощи`,
          price: 95,
          imgName: `lapsha_yaichna_ovoshchi.jpg`
        },
        {
          id: 'base_6',
          name: `Рис  "Тепаньяки"`,
          price: 50,
          imgName: `ris_tepanyaki.jpg`
        }
      ],
      filler: [
        {
          id: 'filler_1',
          name: `Свинина по-китайски`,
          price: 60,
          imgName: `svinina_po_kitajski.jpg`
        },
        {
          id: 'filler_2',
          name: `Говядина`,
          price: 95,
          imgName: `govyadina.jpg`
        },
        {
          id: 'filler_3',
          name: `Курица`,
          price: 50,
          imgName: `kurica.jpg`
        },
        {
          id: 'filler_4',
          name: `Утка`,
          price: 95,
          imgName: `utka.jpg`
        },
        {
          id: 'filler_5',
          name: `Ветчина жареная`,
          price: 60,
          imgName: `vetchina_zharenaya.jpg`
        },
        {
          id: 'filler_6',
          name: `Бекон жареный`,
          price: 95,
          imgName: `bekon_zharenyj.jpg`
        },
        {
          id: 'filler_7',
          name: `Кальмары`,
          price: 90,
          imgName: `kalmary.jpg`
        },
        {
          id: 'filler_8',
          name: `Лосось с/с`,
          price: 155,
          imgName: `losos_s_s.jpg`
        },
        {
          id: 'filler_9',
          name: `Креветки`,
          price: 155,
          imgName: `krevetki.jpg`
        }
      ],
      souse: [
        {
          id: 'souse_1',
          name: `Устричный`,
          price: 45,
          piece: 0,
          imgName: `ustrichnyj.jpg`
        },
        {
          id: 'souse_2',
          name: `Сливочный`,
          price: 45,
          piece: 0,
          imgName: `slivochnyj.jpg`
        },
        {
          id: 'souse_3',
          name: `Соевый`,
          price: 45,
          piece: 0,
          imgName: `soevyj.jpg`
        },
        {
          id: 'souse_4',
          name: `Острый "Спайси"`,
          price: 45,
          piece: 0,
          imgName: `ostryj_spajsi.jpg`
        },
        {
          id: 'souse_5',
          name: `Кисло-сладкий`,
          price: 45,
          piece: 0,
          imgName: `kislo_sladkij.jpg`
        },
        {
          id: 'souse_6',
          name: `Терияки`,
          price: 45,
          piece: 0,
          imgName: `teriyaki.jpg`
        },
        {
          id: 'souse_7',
          name: `Ореховый`,
          price: 50,
          piece: 0,
          imgName: `orekhovyj.jpg`
        },
        {
          id: 'souse_8',
          name: `Тонкацу`,
          price: 45,
          piece: 0,
          imgName: `tonkacu.jpg`
        },
        {
          id: 'souse_9',
          name: `ХойСин`,
          price: 50,
          piece: 0,
          imgName: `hojsin.jpg`
        },
        {
          id: 'souse_10',
          name: `Кимчи`,
          price: 50,
          piece: 0,
          imgName: `kimchi.jpg`
        },
        {
          id: 'souse_11',
          name: `Чили`,
          price: 45,
          piece: 0,
          imgName: `chili.jpg`
        }
      ],
      topping: [
        {
          id: 'topping_1',
          name: `Капуста цветная и брокколи`,
          price: 30,
          piece: 0,
          imgName: `kapusta_cvetnaya_i_brokkoli.jpg`
        },
        {
          id: 'topping_2',
          name: `Фасоль стручковая`,
          price: 30,
          piece: 0,
          imgName: `fasol_struchkovaya.jpg`
        },
        {
          id: 'topping_3',
          name: `Грибы шитаки жареные`,
          price: 30,
          piece: 0,
          imgName: `griby_shitaki_zharenye.jpg`
        },
        {
          id: 'topping_4',
          name: `Сыр моцарелла`,
          price: 50,
          piece: 0,
          imgName: `syr_mocarella.jpg`
        },
        {
          id: 'topping_5',
          name: `Кунжут`,
          price: 5,
          piece: 0,
          imgName: `kunzhut.jpg`
        },
        {
          id: 'topping_6',
          name: `Шампиньоны жареные`,
          price: 40,
          piece: 0,
          imgName: `shampinony_zharenye.jpg`
        }
      ]
    }
  },
  computed: {
    selectedBaseComponentObj() {
      return this.components.base.find(it => {
        return it.name === this.baseComponent;
      });
    },
    selectedFillerComponentObj() {
      return this.components.filler.find(it => {
        return it.name === this.fillerComponent;
      });
    },
    createNoodleId() {
      return `${this.selectedBaseComponentObj.id}-${this.selectedFillerComponentObj.id}`;
    },
    selectedNoodlesName() {
      return `${this.baseComponent
        .charAt(0)
        .toUpperCase()}${this.baseComponent
        .slice(1)
        .toLowerCase()} и ${this.fillerComponent.toLowerCase()}`;
    },
    slectedNoodlesImageName() {
      return `${getImageName(
        this.selectedBaseComponentObj.imgName
      )}-${getImageName(this.selectedFillerComponentObj.imgName)}.jpg`;
    },
    selectedNoodlesPrice() {
      return (
        this.selectedBaseComponentObj.price +
        this.selectedFillerComponentObj.price
      );
    },
    selectedNoodlesCost() {
      return this.selectedNoodlesPrice * this.selectedNoodlesCount;
    },
    selectedSouses() {
      return this.components.souse.filter(it => {
        return it.piece > 0;
      });
    },
    selectedToppings() {
      return this.components.topping.filter(it => {
        return it.piece > 0;
      });
    },
    totalPriceSouses() {
      return this.selectedSouses.reduce(
        (summ, it) => (summ += it.price * it.piece),
        0
      );
    },
    totalPriceToppings() {
      return this.selectedToppings.reduce(
        (summ, it) => (summ += it.price * it.piece),
        0
      );
    },
    totalPrice() {
      return (
        this.selectedNoodlesCost +
        this.totalPriceSouses +
        this.totalPriceToppings
      );
    },
    wokObject() {
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
    addToOrderHandler() {
      const data = [];
      const noodle = {
        id: this.createNoodleId,
        name: this.selectedNoodlesName,
        cover: this.slectedNoodlesImageName,
        size: 0,
        price: this.selectedNoodlesPrice,
        count: this.selectedNoodlesCount
      };
      const souses = this.selectedSouses.map(convertObjForCookieSend);
      const toppings = this.selectedToppings.map(convertObjForCookieSend);

      data.push(noodle);
      data.push(souses);
      data.push(toppings);

      // добавить в куки data

      if (typeof cart != 'undefined') {
        var d = JSON.parse($.cookie('cart'));
        var cost = 0;
        var count = 0;
        for (var i in d) {
          cost += parseInt(d[i].price * d[i].count);
          count += parseInt(d[i].count);
        }
        $('.header-cart__tip').show();
        // $('.header-cart__count').text(Object.size(d));
        $('.header-cart__count').text(count);
        $('.header-cart__price-amount').text(cost);
      }

      const resultData = data.flat();

      console.log(resultData);

      // Костика

      if (typeof $.cookie('cart') == 'undefined') {
        //Если cookie не задана
        $.cookie('cart', JSON.stringify(resultData, '', 2), {
          expires: 365,
          path: '/'
        });
      } else {
        //Если cookie задана
        var d = JSON.parse($.cookie('cart'));
        var is_find = false;

        var overlap = [];

        for (let i = 0; i < resultData.length; i++) {
          for (let j = 0; j < d.length; j++) {
            if (
              d[j].name == resultData[i].name &&
              d[j].cover == resultData[i].cover
            ) {
              d[j].count = parseInt(d[j].count) + parseInt(resultData[i].count);

              is_find = true;
            }
          }
          if (!is_find) {
            overlap.push(resultData[i]);
          }
          is_find = false;
        }
        for (let k = 0; k < overlap.length; k++) {
          d.push(overlap[k]);
        }

        //по итогу берем значение d, и забиваем его в cookie
        $.cookie('cart', JSON.stringify(d), {
          expires: 365,
          path: '/'
        });
        console.log(d, 1);
      }
      alert('Добавлено в корзину!');
      //обновляем значение в отображении корзины

      var cart = $.cookie('cart');
      if (typeof cart != 'undefined') {
        var d = JSON.parse($.cookie('cart'));
        var cost = 0;
        var count = 0;
        for (var i in d) {
          cost += parseInt(d[i].price * d[i].count);
          count += parseInt(d[i].count);
        }
        $('.header-cart__tip').show();
        // $('.header-cart__count').text(Object.size(d));
        $('.header-cart__count').text(count);
        $('.header-cart__price-amount').text(cost);
      }
    }
  }
});

function getImageName(string) {
  const extensionIndex = string.lastIndexOf('.');
  return string.slice(0, extensionIndex);
}

function convertObjForCookieSend(product) {
  const id = product.id || 0;
  const name = product.name || '';
  const cover = product.imgName || '';
  const price = product.price || '';
  const size = product.size || 0;
  const count = product.piece || '';

  return {
    id,
    name,
    cover,
    size,
    price,
    count
  };
}
