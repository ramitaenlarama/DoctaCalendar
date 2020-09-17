/*

Nos pidieron para un sistema un módulo que funcione de forma similar
a google calendar. El mismo contara con un calendario por mes, y sus 
repectivos días. Al hacerle click al día, tendremos que ver en pantalla
el o los eventos que están agendados para esa fecha. 
Esos eventos serán provistos en forma de un array de objetos.

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