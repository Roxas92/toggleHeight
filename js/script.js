function removeHeight(element) {
  element.css({'height': ''});
  alert('hi');
}

function toggleHeight() {
  var parentElement = $(this).parent();
  var toggleBody = parentElement.find('.toggle-body');
  var contentBody = parentElement.find('.body');
  var bodyHeight = contentBody.outerHeight();

  if (toggleBody.height() == 0) {
    toggleBody.css({'height': bodyHeight});
  } else {
    toggleBody.css({'height': ''});
  }

  toggleBody.on("click", $(this), removeHeight );
}

$('.js--toggleHeight').on("click", toggleHeight );

/* function toggleHeight() {
  var parentElement = $(this).parent();
  var toggleBody = parentElement.find('.toggle-body');

  toggleBody.slideToggle();

  toggleBody.on("click", function() {
    $(this).slideUp()
  });
}

$('.js--toggleHeight').on("click", toggleHeight ); */
