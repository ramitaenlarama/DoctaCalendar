/*
https://github.com/ramitaenlarama/DoctaCalendar

Nos pidieron para un sistema un módulo que funcione de forma similar
a google calendar. El mismo contara con un calendario por mes, y sus 
repectivos días. Al hacerle click al día, tendremos que ver en pantalla
el o los eventos que están agendados para esa fecha. 
Esos eventos serán provistos en forma de un array de objetos.

1 - Utilizando Javascript crear el calendario correspondiente al mes de septiembre. 
Tener en cuenta que la etiquéta HTML que tenga cada día tiene que tener el valor
completo de la fecha con el siguiente formato "año-mes-día por ejemplo 2020-09-17"

2 - Al hacer click sobre una fecha tenemos que visualizar los eventos que tenemos
para ese día, mostrando nombre, descripción, fecha y hora del o los eventos.


3 - Crear un formulario que nos permita cagar eventos nuevos;

4 - Agregar a cada evento cuando se muestre un botón para poder eliminarlos.

*/


let eventos = [
    {
        nombre: 'Pagar sueldos',
        descripcion: 'Realizar tranferecias para pagos de sueldos',
        fecha: '2020-09-05',
        hora: '09:00'
    },
    {
        nombre: 'Reunión de Marketing',
        descripcion: 'Hablar sobre las publicaciones de septiembre',
        fecha: '2020-09-09',
        hora: '14:00'
    },
    {
        nombre: 'Verificar estado de la obra',
        descripcion: 'Contactar al arquitecto para saber el estado de la obra',
        fecha: '2020-09-19',
        hora: '10:00'
    },
    {
        nombre: 'Programar pautas',
        descripcion: 'Programar pautas publicitarias para el fin de semana',
        fecha: '2020-09-19',
        hora: '17:00'
    }
];


/*

    <span dato-fecha='2020-09-01'>1</span>
    <span dato-fecha='2020-09-02'>2</span>
    <span dato-fecha='2020-09-03'>3</span>
    ......

*/

let $septiembre = document.querySelector('#mesSeptiembre');

function crearMes(mes){
    for(let i = 1; i <= 30; i++){
        let $span = document.createElement('span');
        
        if(i<10){
            $span.setAttribute('dato-fecha',`2020-09-0${i}`);
        }else{
            $span.setAttribute('dato-fecha',`2020-09-${i}`);
        }

        $span.innerHTML = i;

        mes.appendChild($span);
    }
}



crearMes($septiembre);


let $dias = document.querySelectorAll('.mes span');
let $listaEventos = document.querySelector('#listaEventos');
console.log($listaEventos)
$dias.forEach(function(dia){
    dia.addEventListener('click', function(){
        let eventosSeleccionado = eventos.filter(function(evento){
            return dia.getAttribute('dato-fecha') == evento.fecha 
        })

        
        $listaEventos.innerHTML = '';

        eventosSeleccionado.forEach(function(evento){
            let $nombre = document.createElement('h3');
            $nombre.innerHTML = evento.nombre;
            let $descripcion = document.createElement('p');
            $descripcion.innerHTML = evento.descripcion;
            let $fecha = document.createElement('p');
            let dateFecha = new Date(`${evento.fecha} 00:00`);
            $fecha.innerHTML = `${dateFecha.getDate()}/${dateFecha.getMonth()+1}/${dateFecha.getFullYear()}`;
            let $hora = document.createElement('p');
            $hora.innerHTML = `${evento.hora} Hs`;

            $listaEventos.appendChild($nombre);
            $listaEventos.appendChild($descripcion);
            $listaEventos.appendChild($fecha);
            $listaEventos.appendChild($hora);

        })

    })
})



