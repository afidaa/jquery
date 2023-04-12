"use strict";

$('img').click(function () {
    let imgPath = $(this).attr('src');
    $('.image img').attr('src',imgPath);
});