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

+    buttonAdd.on('click', function () {
/*+        // tutaj logika dodająca produkty do koszyka, aktualizująca cenę koszyka*/
         /*document.getElementById('box2').textContent = ++box2;*/
         productCounter = document.getElementByClass('name');
/*
+        // tutaj tworzenie nowego elementu do koszyka (cena, nazwa i przycisk usuń)
*/
         var newElement = $('<div id="box2">' + productCounter + '</div>');
         basket.append(newElement);
     });

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