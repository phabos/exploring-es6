import Calculette from "./calculette";
import $ from 'jquery';

let cal = new Calculette();

$(document).ready(function(){
  $('#' + cal.element).on('click', '.numbers a', function(e){
    e.preventDefault();
    cal.handleUserInputs( $(this).html() );
  });

  $('#' + cal.element).on('click', '.operators a', function(e){
    e.preventDefault();
    cal.handleUserInputs( $(this).html() );
  });
});
