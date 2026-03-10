// Importar la clase Persona
import { Cl_persona } from './Cl_persona.js';

// Clase Oficina - Procesa las personas y calcula mayores de edad
export class Cl_oficina {
    private contPersonas: number;
    private contMayores: number;
    
    constructor() {
        this.contPersonas = 0;
        this.contMayores = 0;
    }
    
    // Procesa una persona: cuenta total y verifica si es mayor de edad (>=18)
    procesarPersona(persona: Cl_persona): void {
        this.contPersonas++;
        if (persona.getEdad() >= 18) {
            this.contMayores++;
        }
    }
    
    // Getters
    getTotalPersonas(): number {
        return this.contPersonas;
    }
    
    getTotalMayores(): number {
        return this.contMayores;
    }
    
    // Calcula el porcentaje de mayores de edad
    getPorcentajeMayores(): string {
        if (this.contPersonas === 0) return "0.00";
        return ((this.contMayores * 100) / this.contPersonas).toFixed(2);
    }
    getTotalMenores(): number {
    return this.contPersonas - this.contMayores;
}
}