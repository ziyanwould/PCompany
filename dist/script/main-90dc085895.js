'use strict';

$(function () {
  var big = $('.use .mes');
  var use = $('.useImg');
  use.mouseenter(function () {
    big.show();
  });
  big.mouseleave(function () {
    big.hide();
  });
});