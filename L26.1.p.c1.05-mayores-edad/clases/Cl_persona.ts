// Clase Persona - Representa a una persona individual
export class Cl_persona {
    private nombre: string;
    private edad: number;
    
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // Método para obtener la edad
    getEdad(): number {
        return this.edad;
    }
    
    // Método para obtener el nombre
    getNombre(): string {
        return this.nombre;
    }
}