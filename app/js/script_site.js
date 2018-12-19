Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

var w = {
  v: {},
  e: {
    'init': function () {
      w.f.cart_informer();
      if ($('.cart').length) {
        var d = JSON.parse($.cookie('cart'));
        d.forEach(function (item) {
          $('.cart__list').append('\
          <tr class="cart__item cart-product" data-id="' + item.id + '" data-size="' + item.size + '">\
            <td class="cart__list-cell">\
              <a class="cart-product__name" href="/product/' + item.id + '" target="_blank">\
                <span class="cart-product__picture">\
                  <img src="/uploads/' + item.cover + '" alt="' + item.name + '">\
                </span>' + item.name +
            '</a>\
            </td>\
            <td class="cart__list-cell">\
              <span class="cart-product__price">\
                <span class="cart-product__price-amount">' + item.price + '</span>\
                <span class="cart-product__price-currency">руб.</span>\
              </span>\
            </td>\
            <td class="cart__list-cell">\
              <span class="cart-product__quantity">\
                <input class="input cart-product__quantity-input" type="number" name="quantity" value="' + item.count + '" min="0" max="" step="1">\
              </span>\
            </td>\
            <td class="cart__list-cell">\
              <span class="cart-product__cost">\
                <span class="cart-product__cost-amount">' + (item.price * item.count) + '</span>\
                <span class="cart-product__cost-currency">руб.</span>\
              </span>\
            </td>\
            <td class="cart__list-cell cart__list-cell--delete">\
              <button class="cart-product__to-delete" type="button">\
                <span class="visually-hidden">Удалить товар</span>\
              </button>\
            </td>\
          </tr>\
          ');
        });
      }
    },
    'change_price': function () {
      $('select[name=size]').change(function () {
        w.f.change_price();
      });
      $('.product-form-cart__input').change(function () {
        w.f.change_price();
      });
      $('.product-form-cart__input').on('keyup', function () {
        w.f.change_price();
      });
    },
    'add_to_cart_from_category': function () {
      $('.product-card__add-to-cart').click(function (evt) {
        evt.preventDefault();
        var el = $(this).closest('.product-card');

        if (typeof $.cookie('cart') == 'undefined') {
          var data = [];
          data.push({
            id: el.attr('data-id'),
            name: el.find('.product-card__title a').text(),
            cover: el.attr('data-cover'),
            size: el.attr('data-size'),
            price: el.find('.product-price__amount').text().replace(/\s/g, ''),
            count: 1
          });
          // console.log(data);
          $.cookie('cart', JSON.stringify(data), {
            expires: 365,
            path: '/'
          });
        } else {
          var data = {
            id: el.attr('data-id'),
            name: el.find('.product-card__title').text(),
            cover: el.attr('data-cover'),
            size: el.attr('data-size'),
            price: el.find('.product-price__amount').text().replace(/\s/g, ''),
            count: 1
          };
          var d = JSON.parse($.cookie('cart'));
          var is_find = false;
          for (var i in d) {
            // console.log(d[i].id, data.id, d[i].size, data.size);
            if (d[i].id == data.id && d[i].size == data.size) {
              d[i].count = parseInt(d[i].count) + parseInt(data.count);
              // console.log(d[i].count, data.count);
              is_find = true;
            }
          }
          if (is_find) {

          } else {
            d.push(data);
          }
          $.cookie('cart', JSON.stringify(d), {
            expires: 365,
            path: '/'
          });
        }
        alert('Добавлено в корзину!');
        w.f.cart_informer();
      });
    },
    'add_to_cart': function () {
      $('[name=add-to-cart]').click(function () {
        if (isNaN(parseInt($('[name=quantity]').val()))) {
          alert('Введите количество!');
        } else {
          if (typeof $.cookie('cart') == 'undefined') {
            var data = [];
            data.push({
              id: $('[name=add-to-cart]').attr('data-id'),
              name: $('.product__title').text(),
              cover: $('.product-form-cart__submit-wrapper button').attr('data-cover'),
              size: $('select[name=size] option:selected').attr('data-size'),
              price: parseInt($('select[name=size]').val()),
              count: parseInt($('[name=quantity]').val())
            });
            console.log(data);
            $.cookie('cart', JSON.stringify(data), {
              expires: 365,
              path: '/'
            });
          } else {
            var data = {
              id: $('[name=add-to-cart]').attr('data-id'),
              name: $('.product__title').text(),
              cover: $('.product-form-cart__submit-wrapper button').attr('data-cover'),
              size: $('select[name=size] option:selected').attr('data-size'),
              price: $('select[name=size]').val(),
              count: parseInt($('[name=quantity]').val())
            };

            var d = JSON.parse($.cookie('cart'));
            var is_find = false;
            for (var i in d) {
              // console.log(d[i].id, data.id, d[i].size, data.size);
              if (d[i].id == data.id && d[i].size == data.size) {
                d[i].count = parseInt(d[i].count) + parseInt(data.count);
                // console.log(d[i].count, data.count);
                is_find = true;
              }
            }
            if (is_find) {

            } else {
              d.push(data);
            }
            $.cookie('cart', JSON.stringify(d), {
              expires: 365,
              path: '/'
            });
          }
          alert('Добавлено в корзину!');
          w.f.cart_informer();
        }
      });
    },
    'change_cart': function () {
      $('body').on('input', '.cart-product__quantity-input', function () {
        w.f.change_cart(this);
      });
      // $('body').on('change', '.cart .oneCart .info [type=number]', function () {
      //   w.f.change_cart(this);
      // });
      // $('body').on('keyup', '.cart .oneCart .info [type=number]', function () {
      //   w.f.change_cart(this);
      // });
    },
    'delete_from_cart': function () {
      $('body').on('click', '.cart-product__to-delete', function () {
        w.f.delete_from_cart({
          id: $(this).closest('.cart__item').data('id'),
          size: $(this).closest('.cart__item').data('size')
        });
      });
    },
    'submit_order': function () {
      $('#checkout-form').validate({
        submitHandler: function (form) {
          $.ajax({
            url: '/index.php?mode=ajax&f=order',
            // async: false,
            data: {
              v: {
                name: $('[name="user_name"]', form).val(),
                phone: $('[name="user_phone"]', form).val(),
                cart: $.cookie('cart')
              }
            },
            async: true,
            dataType: 'json'
          }).done(function (data) {
            if (data.status == 2) {
              alert('Ваш заказ успешно отправлен!');
              $.cookie('cart', {}, {
                expires: 0,
                path: '/'
              });
              window.location.href = '/';
            } else {
              alert('Произошла ошибка! Обновите страницу и попробуйте снова!');
            }
          }).fail(function () {
            alert('Произошла ошибка! Обновите страницу и попробуйте снова!');
          });
        },
        rules: {
          'user_phone': {
            checkPhoneMask: true
          }
        }
      });
      // $('#checkout-form').on('submit', function (evt) {
      //   evt.preventDefault();
      //   var form = this;

      //   if ($('[name="user_name"]', form).val() && $('[name="user_phone"]', form).val()) {
      //     $.ajax({
      //       url: '/index.php?mode=ajax&f=order',
      //       // async: false,
      //       data: {
      //         v: {
      //           name: $('[name="user_name"]', form).val(),
      //           phone: $('[name="user_phone"]', form).val(),
      //           cart: $.cookie('cart')
      //         }
      //       },
      //       async: false,
      //       dataType: 'json'
      //     }).done(function (data) {
      //       if (data.status == 2) {
      //         alert('Ваш заказ успешно отправлен!');
      //         $.cookie('cart', {}, {
      //           expires: 0,
      //           path: '/'
      //         });
      //         window.location.href = '/';
      //       } else {
      //         alert('Произошла ошибка! Обновите страницу и попробуйте снова!');
      //       }
      //     }).fail(function () {
      //       alert('Произошла ошибка! Обновите страницу и попробуйте снова!');
      //     });
      //   } else {
      //     alert('Введите имя и телефон!');
      //   }
      // });
    }
  },
  f: {
    'change_price': function () {
      // var price = $('select[name=size]').val() * $('[name=quantity]').val();
      var price = $('select[name=size]').attr('data-price');
      $('.product-price__amount').text(price);
      // $.cookie('name', $('#popUpName').val(), {expires: 365, path: '/'});
    },
    'cart_informer': function () {
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
    },
    'change_cart': function (el) {
      var id = $(el).closest('.cart__item').data('id');
      var size = $(el).closest('.cart__item').data('size');
      var count = $(el).val();
      var cart = $.cookie('cart');
      if (typeof cart != 'undefined') {
        if (parseInt(count) > 0) {
          var d = JSON.parse($.cookie('cart'));
          for (var i in d) {
            if (d[i].id == id && d[i].size == size) {
              d[i].count = count;
              $(el).closest('.cart__item').find('.cart-product__cost-amount').text(count * d[i].price);
              break;
            }
          }
          $.cookie('cart', JSON.stringify(d), {
            expires: 365,
            path: '/'
          });
          w.f.cart_informer();
        } else {
          w.f.delete_from_cart({
            id: id,
            size: size
          });
        }
      }
    },
    'delete_from_cart': function (data) {
      if (confirm('Удалить из заказа?')) {
        debugger;
        var cart = $.cookie('cart');
        if (typeof cart != 'undefined') {
          var d = JSON.parse($.cookie('cart'));
          var d_new = [];
          for (var i in d) {
            if (d[i].id == data.id && d[i].size == data.size) {

            } else {
              d_new.push(d[i]);
            }
          }
          $.cookie('cart', JSON.stringify(d_new), {
            expires: 365,
            path: '/'
          });
          w.f.cart_informer();
          $('.cart__item[data-id=' + data.id + '][data-size=' + data.size + ']').remove();
        }
      } else {
        $('.cart__item[data-id=' + data.id + '][data-size=' + data.size + '] .cart-product__quantity-input').val(1);
      }
    }
  }
}

var load_events = function (o, e) {
  if (typeof e == 'object' && e.length > 0) {
    for (var i in e) {
      if (typeof eval(o).e[e[i]] == 'function') {
        eval(o).e[e[i]]();
      }
    }
  }
}

$(function () {
  load_events('w', ['init', 'change_price', 'add_to_cart_from_category', 'add_to_cart', 'change_cart', 'delete_from_cart', 'submit_order']);
});
