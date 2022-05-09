// Objetos literales

const persona = {
    nombre: 'Jason',
    apellido: 'Hernandez',
    edad: '45',
    direccion: {
        ciudad: 'Inglaterra',
        zip: 559354,
        lat: 15.4563,
        lnj: 32.232561
    } 
};

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.table(persona);
console.table(persona2);