var link=document.querySelector(".humburger");
var navigation=document.querySelector(".menu");
var orderIndex=document.querySelector(".week-product__button");
var orderCatalog=document.querySelectorAll(".catalog__cart-link");
var modal=document.querySelector(".modal-window");

link.classList.remove("visually-hidden");
navigation.classList.add("menu--close");
link.classList.add("humburger--close");

link.addEventListener ("click", function (evt) {
  evt.preventDefault();
  navigation.classList.toggle("menu--close");
  link.classList.toggle("humburger--close");
});

if (orderIndex) {
  orderIndex.addEventListener ("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-window--close");
  });
}

if (orderCatalog) {
  for (var i=0; i <= (orderCatalog.length-1); i++) {
    orderCatalog[i].addEventListener ("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-window--close");
    });
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modal.classList.add("modal-window--close");
  }
});
