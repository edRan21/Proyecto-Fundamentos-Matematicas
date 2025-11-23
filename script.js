document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de Fundamentos Matemáticos Iniciado");

    // Identificar en qué página estamos
    const path = window.location.pathname;

    // --- LÓGICA PARA PÁGINA DE RAZONAMIENTO ---
    if (path.includes('razonamiento.html')) {
        iniciarCalculadoraLogica();
    }
});

function iniciarCalculadoraLogica() {
    const display = document.getElementById('resultado-logico');
    
    // Función que se llama desde los botones HTML
    window.evaluarLogica = (operador) => {
        // Simulamos valores aleatorios para p y q para probar
        // O podrías poner inputs reales. Aquí haremos un demo visual.
        
        let p = true; // Imagina que el usuario puso verdadero
        let q = false; // Imagina que el usuario puso falso
        let res = "";
        let explicacion = "";

        switch(operador) {
            case 'AND':
                res = "FALSO";
                explicacion = "Conjunción (∧): Ambas deben ser verdaderas.";
                break;
            case 'OR':
                res = "VERDADERO";
                explicacion = "Disyunción (∨): Basta con que una sea verdadera.";
                break;
            case 'IMP':
                res = "FALSO";
                explicacion = "Condicional (→): V → F es el único caso Falso.";
                break;
            default:
                res = "...";
        }

        display.innerHTML = `<span style="color:cyan">${operador}</span> con (V, F) = ${res}<br><small>${explicacion}</small>`;
        
        // Animación simple
        display.style.transform = "scale(1.1)";
        setTimeout(() => display.style.transform = "scale(1)", 200);
    };
}