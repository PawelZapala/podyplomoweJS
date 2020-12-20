 $(function () {

      var buttonAdd = $('.add');
      var buttonDelete = $('#delete');
      var buttonRemove = $('#remove');
      var box2 = $('#box2');
      var buttonBuy = $('#buy');
      var basket = $('.basket');
      var name = $('.name');
      var price = $('.price');


      box2 = 0;

     // to do usunięcia bo jest już na dole odwołanie do tego samego
 /*     $('.add').on('click', function () {
          document.getElementById('box2').textContent = ++box2;
      });*/


      var productCounter = 0;

 +    buttonRemove.on('click', '#box2', function () {
 /*
 +        // tutaj usuwanie wszystkich dzieci elementu blokowego o id box2
 */
          $(this).remove();
      });

 +    buttonDelete.on('click', '#box1', function () {
 /*
 +        // tutaj usuwamy element produkt który wywołał akcję czyli usuwamy produkt można wykorzystać $(this) i parent
 */
          $(this).remove();
      });

 /*+    buttonBuy.on('click', function () {
 +        window.alert('Dokonujesz zakupu o wartości: ' + price);
 +    });*/

  });
  var basketId = 0;

  function add(price, name) {
 	var basket = $('.basket');
 	basketId++;
 	 var newElement = $('<div id="' + basketId + '">' + name + ' ' + price + '<button onclick="remove(basketId)">remove</button>' + '</div>');
 	 basket.append(newElement);
 };

 function remove(id) {
 	console.log(id);
 	$("#"+id).remove();
 };