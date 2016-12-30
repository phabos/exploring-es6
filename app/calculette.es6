import $ from 'jquery';

class Calculette {

  constructor() {
    this.numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.operations = ['*', '+', '-', '/', '=', 'C'];
    this.element = 'calc-interface';

    this.createInterface();
  }

  createInterface() {
    let html = '';

    html += '<div class="col-sm-12 user-input">';
    html += '</div>';

    html += '<div class="col-sm-12 result">';
    html += '</div>';
    html += '<div class="clearfix"></div>';

    html += '<div class="col-sm-8 numbers">';
    for( let num of this.numbers ) {
      html += '<a class="btn">' + num + '</a>';
    }
    html += '</div>';

    html += '<div class="col-sm-4 operators">';
    for( let ope of this.operations ) {
      html += '<a class="btn">' + ope + '</a>';
    }
    html += '</div>';

    $('#' + this.element).append( html );
  }

  handleUserInputs( input ) {
    if( typeof( input ) === 'undefined' )
      return;

    if( input == '=' )
      return this.calculate();

    if( input == 'C' )
      return this.reset();

    $('.user-input').append( input );
  }

  calculate() {
    $('.result').html( eval( $('.user-input').html() ) );
  }

  reset() {
    $('.result').html('');
    $('.user-input').html('');
  }
}

export default Calculette;
