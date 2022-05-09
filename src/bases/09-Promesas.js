import {getHeroeById} from './bases/08-imp-exp'
//import heroes from './data/heroes'

/*const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        // Tarea
        // importen el
        const p2 = getHeroeById(2)
        resolve(p2)
        //resolve();
    }, 2000 )
})

promesa.then( (heroe) => {
    console.log('heroe', heroe)
})*/

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
    setTimeout( () => {
        // Tarea
        // importen el
        const p2 = getHeroeById(id)
        if (p2) {
            resolve(p2)
        }

        else{
             reject('No se pudo encontrar al heroe');
        }
        
        }, 2000 )
    })

}

getHeroeByIdAsync(13)
    .then( heroe => console.log('Heroe', heroe))
    .catch(err => console.warn(err))