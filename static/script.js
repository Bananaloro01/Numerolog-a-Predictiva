document.getElementById("numerologia-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const fecha_nac = document.getElementById("fecha_nac").value;
    const ano_pred = document.getElementById("ano_pred").value;

    const response = await fetch("/calcular", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fecha_nac, ano_pred }),
    });

    if (response.ok) {
        const data = await response.json();
        document.getElementById("ano-personal").innerText = "Año Personal: " + data.ano_personal;
        document.getElementById("tercera-etapa").innerText = "Tercera Etapa: " + data.tercera_etapa;
    } else {
        const error = await response.json();
        alert(error.error);
    }
});
