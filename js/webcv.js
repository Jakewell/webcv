/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

$(function () {
    "use strict";
    
    $("#precision-bar").animate({
        width: "90%"
    }, { duration: 300, queue: false });
    
    $("#systematic-bar").animate({
        width: "94%"
    }, { duration: 300, queue: false });
    
    $("#fast-learning-bar").animate({
        width: "85%"
    }, { duration: 300, queue: false });
});