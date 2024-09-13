interface Alumno {
    nombre: string;
    apellido: string;
    edad: number;
    genero: string;
    calificacion?: number;
}


const alumno = {
    nombre: 'Juan',
    apellido : 'Perez',
    edad: 25,
    genero: 'M',
    calificacion: 10
    }

console.table(alumno)


let mascotas= ['perro', 'gato', 'pez']
console.log(mascotas[1])
mascotas[1]= 'nuevo perro'
console.log(mascotas[1])
mascotas.push('hamster')
console.log(mascotas)

let tem:(string|number)[]=[];

tem.push(11)
tem.push('mario')
console.log(tem)
