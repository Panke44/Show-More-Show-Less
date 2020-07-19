'use strict';

function Show(){
    let button = document.getElementById("button");

    if(button.value == "Show More"){
        button.value = "Show Less";
    }
    else{
        button.value = "Show More";
    }
}

$(document).ready(function(){
    $("#button").click(function(){
        $("#hidden").slideToggle(500);
    });
});