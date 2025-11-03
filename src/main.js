document.addEventListener("DOMContentLoaded", () => {
    //Animaciónes
    const descripcion = document.querySelector(".descripcion");
    const imagen = document.querySelector(".quienes-somos-container img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                descripcion.classList.add("slide-in-left");
                imagen.classList.add("slide-in-right");
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });
    observer.observe(descripcion);


    //Formulario
    const form = document.querySelector(".form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        try {
            const response = await fetch("https://getform.io/f/akkpqnxa", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });
            if (response.ok) {
                alert("✅ ¡Mensaje enviado con éxito! Gracias por contactarnos.");
                form.reset();
            }else{
                alert("❌ Ocurrió un error al enviar tu mensaje. Intenta de nuevo.");
            }
        } catch (error) {
            alert("⚠️ Error de conexión. Revisa tu internet e intenta más tarde.");
        }
    })
});

