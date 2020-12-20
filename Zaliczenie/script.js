$(function () {

    var nameB = 0;

    var button = $('.add');
    var box2 = $('#box2')

    $('.add').on('click', function () {
        document.getElementById('box2').textContent = ++box2;
    });

    var box1 = 0;

    button.on('click', function() {
        box1++;
        var newElement = $('#box2');
        basket.append(newElement);
    });

});