 $(function () {

     var buttonAdd = $('.add');
     var buttonDelete = $('#delete');
     var buttonRemove = $('#remove');
     var box2 = $('#box2');
     var buttonBuy = $('#buy');
     var basket = $('.basket');
     var name = $('.name');
     var price = $('.price');

     var productCounter = 0;

+    buttonAdd.on('click', function () {
         productCounter = name + delete + price;
         var newElement = $('<div id="box2">' + productCounter + '</div>');
         basket.append(newElement);
     });

+    buttonRemove.on('click', '#box2', function () {
         $(this).remove();
     });

+    buttonDelete.on('click', '#box1', function () {
         $(this).remove();
     });
 });