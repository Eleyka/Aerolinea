//declara un array que representara los asientos de nuestro avion con false indicando que estos están vacios
var airlineSeasts = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
//contador que nos ayudara a rastrear el numero de asientos ocupados
var busySeats = 0;
//Esta función ayuda a pintar los asientos
var paintSeats = function (array) {
  var containerSeats = document.getElementById('seats');
  for (var i = 0; i < array.length; i++) {
    var seat = document.createElement('div');
    seat.className = 'seats';

    //del primer elemento al cuarto, en nuestro arreglo va a ser de primera clase, del indice 0 al indice 3
    if (i < 4) {
      seat.style.background = 'purple';
    } else {
      seat.style.background = 'yelow';
    }
    containerSeats.appendChild(seat);
  }
};
