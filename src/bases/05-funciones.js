/*function saludar( nombre, apellido ) {
    return `Hola, ${ nombre } ${apellido}`;
}*/

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
  };
  
  const saludar3 = (nombre) => `Hola, ${nombre}`;
  const saludar4 = () => `Hola mundo`;
  
  //console.log(saludar('Goku', 'kakaroto'))
  
  console.table(saludar2("Naruto"));
  console.table(saludar3("Sasuke"));
  console.table(saludar4());
  
  const getUser = () => ({
    uid: "ABC1234",
    username: "El_Z",
  });
  
  const user = getUser();
  console.table(user);
  
  // Tarea
  // 1. Transformen a una funcion de flecha
  // 2. Tiene que retornar a un objeto implicito
  // 3. Pruebas
  
  const getDelta = (nombre) => ({
      uid: "ABC542",
      username: nombre,
    })
  
  const userDelta = getDelta("Torres");
  console.table(userDelta);
  