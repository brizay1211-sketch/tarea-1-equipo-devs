// Clase Oficina - Procesa las personas y calcula mayores de edad
export class Cl_oficina {
    constructor() {
        this.contPersonas = 0;
        this.contMayores = 0;
    }
    // Procesa una persona: cuenta total y verifica si es mayor de edad (>=18)
    procesarPersona(persona) {
        this.contPersonas++;
        if (persona.getEdad() >= 18) {
            this.contMayores++;
        }
    }
    // Getters
    getTotalPersonas() {
        return this.contPersonas;
    }
    getTotalMayores() {
        return this.contMayores;
    }
    // Calcula el porcentaje de mayores de edad
    getPorcentajeMayores() {
        if (this.contPersonas === 0)
            return "0.00";
        return ((this.contMayores * 100) / this.contPersonas).toFixed(2);
    }
    getTotalMenores() {
        return this.contPersonas - this.contMayores;
    }
}
