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
      }
    }
  },
  methods: {
    addToOrderHandler() {
      const data = [];
      const noodle = {
        id: 0,
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
      // data.concat(souses, toppings);

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


      // console.log(JSON.stringify(this.wokObject, '', 2));




      // Костика



      if (typeof $.cookie('cart') == 'undefined') {
        //Если cookie не задана
        //объявляем массив для cookie
        // var d = [];
        //добавляем в него data (лапша + соусы + топпинги) в формате *:
        // id:
        // name:
        // cover:
        // size:
        // price:
        // count:
        // d.push(this.wokObject); // прежный вариант (нужен другой формат, не wok, a *)
        $.cookie('cart', JSON.stringify(resultData, '', 2), {
          expires: 365,
          path: '/'
        });
      } else {
        //Если cookie задана

        // var data = this.wokObject; // прежный вариант (нужен другой формат, не wok, a *)
        //парсим cookie
        var d = JSON.parse($.cookie('cart'));
        var is_find = false;

        var overlap = [];


        for (let i = 0; i < resultData.length; i++) {
          for (let j = 0; j < d.length; j++) {
            if (d[j].name == resultData[i].name && d[j].cover == resultData[i].cover) {
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


        //обходим данные из cookie
        // for (var i in d) {
        //   //console.log(d[i].id, data.id, d[i].size, data.size);
        //   // TODO: переписать старый вариант под другую структуру
        //   if (d[i].noodle != null) {



        //     if (d[i].name == resultData.name && d[i].cover == resultData.cover) {
        //       d[i].count = parseInt(d[i].count) + parseInt(resultData.count);
        //       // console.log(d[i].count, data.count);
        //       is_find = true;
        //     }

        //     // //souses
        //     // for (var j = 0; j < d[i].souses.length; j++) {
        //     //   for (var k = 0; k < data.souses.length; k++) {
        //     //     if(d[i].souses[j].name == data.souses[k].name)
        //     //     {
        //     //       //если товар уже есть, увеличиваем количество
        //     //       d[i].souses[j].piece =  parseInt(data.souses[k].piece);
        //     //       //d[i].souses[j].price = parseInt(d[i].souses[j].price) + parseInt(data.souses[k].price);
        //     //     }
        //     //     else if (!d[i].souses.includes(data.souses[k])) {
        //     //       d[i].souses.push(data.souses[k]);
        //     //     }
        //     //   }
        //     // }

        //     // //toppings
        //     // for (var j = 0; j < d[i].toppings.length; j++) {
        //     //   for (var k = 0; k < data.toppings.length; k++) {
        //     //     if(d[i].toppings[j].name == data.toppings[k].name)
        //     //     {
        //     //       //если товар уже есть, увеличиваем количество
        //     //       d[i].toppings[j].piece =  parseInt(data.toppings[k].piece);
        //     //       //d[i].toppings[j].price = parseInt(d[i].toppings[j].price) + parseInt(data.toppings[k].price);
        //     //     }
        //     //     else if (!d[i].toppings.includes(data.toppings[k])) {
        //     //       d[i].toppings.push(data.toppings[k]);
        //     //     }
        //     //   }
        //     // }
        //   }
        // }
        //надо переписать, т.к. там добавляется не 1 объект
        // if (is_find) {
        //   console.log(d);
        // } else {
        //   d.push(data);
        //
        // }
        console.log(d);
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
