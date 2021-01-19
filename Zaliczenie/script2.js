 $(function () {

     var buttonAdd = $('.add');
     var buttonRemoveAll = $('#removeAll');
     var box2 = $('#box2');
     var buttonBuy = $('#buy');
     var basket = $('.basket');
     var name = $('.name');
     var price = $('.price');
     var basketPrice = $('.basketPrice');
     var buttonDelete = $('.delete');

    buttonAdd.on('click', function () {
         var newElement = $('<div class="box2">' + $(this).parents('.box3').children('.name').text() + " " + '<button class="delete">Usuń</button>' + '<p>' + $(this).next().text() + '</div>');
         basket.append(newElement);
         basketPrice = 0;
         basketPrice = basketPrice + parseInt('.price');
     });

    $('body').on('click', '.delete', function () {
        $(this).closest('div').remove();
    });

    buttonBuy.on('click', function () {
        window.alert('Dokonałeś zakupu w kwocie ' + basketPrice + " zł.");
    });

    $('body').on('click', '#removeAll', function () {
        $('.box2').remove();
    });

    $('.basket').ready(function() {
        newElement.attr('maxlength','8');
    });

 });
