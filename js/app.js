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
      seat.style.background = 'yellow';
    }
    containerSeats.appendChild(seat);
  }
};
var reserve = function(){
  var btn = document.getElementById('btn');
  btn.addEventListener('click',choosezone);
}
var choosezone = function(){
  var choice = prompt('En que zona quieres reservar \n 1. Primera clase \n 2. Clase económica \n Por favor ingresa el numero de tu preferencia');
  if(choice == 1){
    checkFirstClassZone();
  }else if(choice == 2){
    checkEconomicZone();
  }else{
    alert('Por favor ingresa un número válido');
  }
};
var checkFirstClassZone = function() {
  var zone = 'Primera clase';
  //recorre del elemento 0 al elemento 3 y verifica cuales estàn disponibles
  for (var index = 0; index < 4; index++){
    if(airlineSeasts [index]==false){
      airlineSeasts [index] = true;
      reserveSeat(index);
      paintTicket(index,zone);
      //al reservar un asiento no necesitamos seguir recorriendo nuestro arreglo
      //rompemos el for con el break
      break;
    }else if(index==3 &&airlineSeasts [index]== true){
      reasignEconomicZone();
    }
  }
};
var checkEconomicZone = function(){
  var zone ='Economica';
  for(var index = 4; index < 10; index++){
    if(airlineSeasts [index]==false){
      airlineSeasts [index] = true;
      reserveSeat(index);
      paintTicket(index,zone);
      //al reservar un asiento no necesitamos seguir recorriendo nuestro arreglo
      //rompemos el for con el break
      break;
  }else if(index==9 &&airlineSeasts [index]== true){
    reasignFirstClassZone(zone);
  }
}
};

var reserveSeat = function(indexToPaint){
var seat = document.getElementsByClassName('seats');
seat [indexToPaint].textContent = 'Ocupado';
};

var reasignEconomicZone = function(zone){
var reasing = confirm(
  'Ya no quedan asientos disponibles en' + zone +':( \n Quieres reservar en zona econòmica?'
);
if (reasing == true){
  checkEconomicZone();
}else{
  nextFlight();
}
};
var reasignFirstClassZone = function(zone){
  var reasing = confirm(
    'Ya no quedan asientos en'+zone+':( \n Quieres reservar en primera clase'
  );
  if (reasing == true){
    reasignFirstClassZone();
  }else{
    nextFlight();
  }
  };
  var paintTicket = function(index,zone){
  var containerTickets = document.getElementById('tickets');  
  var ticket = document.createElement('div');
  ticket.className ='seats';
  var title = document.createElement('p');
  var reserverdSeating = document.createElement('p');
  var zoneClass = document.createElement('p');
  title.textContent = 'PASE DE ABORDAR';
  reserverdSeating.textContent = 'Nº. de asientos'+(index+1);
  zoneClass.textContent =zone;
  ticket.appendChild(title);
  ticket.appendChild(reserverdSeating);
  ticket.appendChild(zoneClass);
  containerTickets.appendChild(ticket);
}
  var nextFlight = function(){
    alert('Nuestro pròximo vuelo sale en 3 horas')
  };
paintSeats(airlineSeasts);
reserve();