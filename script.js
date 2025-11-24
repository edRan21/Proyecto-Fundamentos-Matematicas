document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de Fundamentos Matemáticos Iniciado");
    
    const path = window.location.pathname;

    // Ruteador de herramientas según la página
    if (path.includes('razonamiento')) iniciarLogica();
    if (path.includes('conjuntos')) iniciarConjuntos();
    if (path.includes('orden-inecuaciones')) iniciarInecuaciones();
    if (path.includes('funciones')) iniciarTrigonometria();
    if (path.includes('campo-numeros-reales')) iniciarReales(); // ¡NUEVO!
});

// --- 1. RAZONAMIENTO ---
function iniciarLogica() {
    window.evaluarLogica = (operador) => {
        const display = document.getElementById('resultado-logico');
        let res = "", expl = "";
        if(operador === 'AND') { res = "FALSO"; expl = "V ∧ F = F (Ambas deben ser V)"; }
        if(operador === 'OR') { res = "VERDADERO"; expl = "V ∨ F = V (Basta una V)"; }
        if(operador === 'IMP') { res = "FALSO"; expl = "V → F = F (La única forma de ser falso)"; }
        display.innerHTML = `Resultado: <span style="color:#ffd700">${res}</span><br><small>${expl}</small>`;
    };
}

// --- 2. CONJUNTOS ---
function iniciarConjuntos() {
    const contenedor = document.querySelector('.zona-interactiva');
    if(!contenedor) return;
    
    contenedor.innerHTML = `
        <h3>🧮 Operador de Conjuntos</h3>
        <p>Dados A = {1, 2, 3, 4} y B = {3, 4, 5, 6}</p>
        <button class="btn-interactivo" onclick="operarConjunto('union')">Ver A ∪ B</button>
        <button class="btn-interactivo" onclick="operarConjunto('inter')">Ver A ∩ B</button>
        <button class="btn-interactivo" onclick="operarConjunto('dif')">Ver A - B</button>
        <div id="res-conjunto" class="resultado">Selecciona una operación</div>
    `;

    window.operarConjunto = (tipo) => {
        let txt = "";
        if(tipo === 'union') txt = "{1, 2, 3, 4, 5, 6} <br><small>Juntamos todo sin repetir.</small>";
        if(tipo === 'inter') txt = "{3, 4} <br><small>Solo los que están en ambos.</small>";
        if(tipo === 'dif') txt = "{1, 2} <br><small>Están en A, quitando los que están en B.</small>";
        document.getElementById('res-conjunto').innerHTML = txt;
    };
}

// --- 3. INECUACIONES ---
function iniciarInecuaciones() {
    const contenedor = document.querySelector('.zona-interactiva');
    if(!contenedor) return;

    contenedor.innerHTML = `
        <h3>⚖️ Verificador de Desigualdad</h3>
        <p>Inecuación: <b>2x - 5 < 3</b></p>
        <input type="number" id="input-ineq" placeholder="Prueba un valor para x" style="padding:5px; width:150px;">
        <button class="btn-interactivo" onclick="verificarIneq()">Probar</button>
        <div id="res-ineq" class="resultado"></div>
    `;

    window.verificarIneq = () => {
        const x = parseFloat(document.getElementById('input-ineq').value);
        if(isNaN(x)) return;
        const valor = (2 * x) - 5;
        const cumple = valor < 3;
        const color = cumple ? "#00ff00" : "red";
        const mensaje = cumple ? "CUMPLE (Verdadero)" : "NO CUMPLE (Falso)";
        document.getElementById('res-ineq').innerHTML = 
            `2(${x}) - 5 = <b>${valor}</b>. ¿Es menor que 3? <br> <span style="color:${color}">${mensaje}</span>`;
    };
}

// --- 4. FUNCIONES Y TRIGONOMETRÍA ---
function iniciarTrigonometria() {
    const contenedor = document.querySelector('.zona-interactiva');
    if(!contenedor) return;

    contenedor.innerHTML = `
        <h3>📐 Calculadora Trigonométrica</h3>
        <p>Ingresa un ángulo en grados:</p>
        <input type="number" id="input-angle" placeholder="Ej: 45, 90, 180" style="padding:5px;">
        <button class="btn-interactivo" onclick="calcTrig()">Calcular</button>
        <div id="res-trig" class="resultado" style="font-size:1rem; text-align:left; margin-left: 20px;"></div>
    `;

    window.calcTrig = () => {
        let ang = parseFloat(document.getElementById('input-angle').value);
        if(isNaN(ang)) return;
        let rad = ang * (Math.PI / 180);
        let s = Math.sin(rad).toFixed(2);
        let c = Math.cos(rad).toFixed(2);
        let t = Math.tan(rad).toFixed(2);
        
        document.getElementById('res-trig').innerHTML = `
            <ul>
                <li><b>Seno(${ang}°):</b> ${s}</li>
                <li><b>Coseno(${ang}°):</b> ${c}</li>
                <li><b>Tangente(${ang}°):</b> ${t}</li>
            </ul>
        `;
    };
}

// --- 5. AXIOMAS (REALES) - ¡ESTA ES LA NUEVA! ---
function iniciarReales() {
    const contenedor = document.querySelector('.zona-interactiva');
    if(!contenedor) return;

    contenedor.innerHTML = `
        <h3>🧪 Laboratorio de Axiomas</h3>
        <p>Prueba la <b>Propiedad Distributiva</b>: a(b + c) = ab + ac</p>
        <div style="display:flex; gap:5px; justify-content:center; margin-bottom:10px;">
            <input type="number" id="val-a" placeholder="a" style="width:50px">
            <input type="number" id="val-b" placeholder="b" style="width:50px">
            <input type="number" id="val-c" placeholder="c" style="width:50px">
        </div>
        <button class="btn-interactivo" onclick="probarAxioma()">Distribuir</button>
        <div id="res-axioma" class="resultado" style="font-size:1rem;">Esperando valores...</div>
    `;

    window.probarAxioma = () => {
        let a = parseFloat(document.getElementById('val-a').value) || 0;
        let b = parseFloat(document.getElementById('val-b').value) || 0;
        let c = parseFloat(document.getElementById('val-c').value) || 0;

        let ladoIzquierdo = a * (b + c);
        let ladoDerecho = (a * b) + (a * c);

        document.getElementById('res-axioma').innerHTML = `
            <p>1. Forma Agrupada: ${a}(${b} + ${c}) = <b>${ladoIzquierdo}</b></p>
            <p>2. Forma Distribuida: (${a}×${b}) + (${a}×${c}) = <b>${ladoDerecho}</b></p>
            <p style="color:#00ff00">¡El resultado es idéntico!</p>
        `;
    };
}