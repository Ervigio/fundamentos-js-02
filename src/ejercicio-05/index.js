// Escribe tu código aquí:
const miPrimerCoche={
    marca: "Opel",
    modelo: "Astra H",
    Color: "Plata Estelar",
    Año: "2004"
}
for (const clave in miPrimerCoche) {
    console.log(clave + ": " + miPrimerCoche[clave]);
}