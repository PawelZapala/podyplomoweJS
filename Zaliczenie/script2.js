 $(function () {

     var buttonAdd = $('.add');
     var buttonDelete = $('#delete');
     var buttonRemove = $('#remove');
     var box2 = $('#box2');
     var buttonBuy = $('#buy');
     var basket = $('.basket');
     var name = $('.name');
     var price = $('.price');
     var basketPrice = $('.basketPrice')
     /*var delete = $('#delete');*/

    basketPrice = 0;

+    buttonAdd.on('click', function () {
         basketPrice = price++;
         var newElement = $('<div id="box2">' + $(this).next().text() + $(this).parents('.box3').children('.name').text() + '</div>');
         basket.append(newElement);
     });

+    buttonRemove.on('click', '#box2', function () {
         $(this).remove();
     });

 });

  function remove(id) {
  	console.log(id);
  	$("#"+id).remove();
  };