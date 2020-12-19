$(function () {

    var box2 = 0;

    var button = $('#add');
    var box2 = $('#box2')

    $(document).on('click', function () {
        document.getElementById('box2').textContent = ++box2;
    });

    button.on('click', function() {

    });

});