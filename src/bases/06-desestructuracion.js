// Destructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Royer',
    edad: 42,
    clave: 'Capitan America'
  }
  
  //const { edad, clave, nombre } = persona;
  
  //console.log( nombre );
  //console.log(edad)
  //console.log(clave)
  
  const useContext = ({ nombre, edad, clave, rango = 'Thork' }) => {
    // console.log(nombre, edad, clave, rango)
  
    return {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.43224,
        lng: -12.34212
      }
    };
  }
  
  const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona)
  
  console.log(nombreClave, anios)
  console.log(lat, lng)