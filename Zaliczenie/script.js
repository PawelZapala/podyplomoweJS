$(function () {

    var nameB = $('.name');
    var button = $('.add');
    var box2 = $('#box2')
    var buy = $('#buy');
    var basket = $('.basket');

    box2 = 0;

    $('.add').on('click', function () {
        document.getElementById('box2').textContent = ++box2;
    });


    var box1 = 0;

    button.on('click', function() {
        box1++;
        var newElement = $('#box2');
        basket.append(newElement);
    });

    basket.on('click', '#delete', function (){
        $(box2).remove();
    });

    basket.on('click', '#remove', function (){
        $(box1).remove();
    });

     $('#buy').on('click', function () {
            windows.alert('Dokonujesz zakupu' + name + '. Cena: ' + price);
        });

});