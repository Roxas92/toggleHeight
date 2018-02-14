function toggleHeight() {
  var bodyHeight = document.querySelector('.body').clientHeight;

  if ($('.element').height() == 0) {
    $('.element').css({'height': bodyHeight});
  } else {
    $('.element').css({'height': ''});
  }

}
