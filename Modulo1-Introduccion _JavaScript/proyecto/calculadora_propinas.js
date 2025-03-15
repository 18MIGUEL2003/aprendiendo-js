document.addEventListener("DOMContentLoaded", function () {
    // Capturar elementos del DOM
    const totalCuentaInput = document.getElementById("total-cuenta");
    const calcularBtn = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");

    // Función para calcular propina
    function calcularPropina() {
        let totalCuenta = parseFloat(totalCuentaInput.value);
        let botonSeleccionado = document.querySelector('input[name="porcentaje"]:checked');

        // Validar entrada
        if (isNaN(totalCuenta) || totalCuenta <= 0) {
            resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, ingrese un total válido.</p>";
            return;
        }

        if (!botonSeleccionado) {
            resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, seleccione un porcentaje de propina.</p>";
            return;
        }

        let porcentajePropina = parseFloat(botonSeleccionado.value);

        // Cálculo de propina y total a pagar
        let propina = totalCuenta * (porcentajePropina / 100);
        let totalPagar = totalCuenta + propina;

        // Mostrar resultados
        resultadoDiv.innerHTML = `
            <p>Propina: <strong>$${propina.toLocaleString()}</strong></p>
            <p>Total a pagar: <strong>$${totalPagar.toLocaleString()}</strong></p>
        `;
    }

    // Evento al hacer clic en el botón
    calcularBtn.addEventListener("click", calcularPropina);
});