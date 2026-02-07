const descripcion = document.querySelector(".descripcion");
const imagen = document.querySelector(".quienes-somos-container img");

const btnSubmit = document.querySelector('#submit');
const formulario = document.querySelector('#form');

const resultadoAlerta = document.querySelector('#resultado-alerta');

const contenedorAlerta = document.querySelector('.alerta');

document.addEventListener('DOMContentLoaded', () => {
    //Animaciónes
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
})

formulario.addEventListener('submit', llamarAPI);


// //Formulario
// const form = document.querySelector(".form");

// form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);

//     try {
//         const response = await fetch("https://getform.io/f/akkpqnxa", {
//             method: "POST",
//             body: formData,
//             headers: { Accept: "application/json" },
//         });
//         if (response.ok) {
//             alert("¡Mensaje enviado con éxito! Gracias por contactarnos.");
//             form.reset();
//         }else{
//             alert("Ocurrió un error al enviar tu mensaje. Intenta de nuevo.");
//         }
//     } catch (error) {
//         alert("Error de conexión. Revisa tu internet e intenta más tarde.");
//     }
// })

const btn = document.getElementById('button');


function llamarAPI(e) {
    e.preventDefault();
    const nombre = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const correo = document.querySelector('#email').value;
    const asunto = document.querySelector('#asunto').value;
    const mensaje = document.querySelector('#mensaje').value;

    if (!nombre || !email || !correo || !asunto || !mensaje) {
        alerta('Todos los campos son obligatorios', 'error');
        return
    }

    

    btnSubmit.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_rh3dxku';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btnSubmit.value = 'Send Email';
            alerta('Correo enviado!!', 'exito');
        }, (err) => {
            btnSubmit.value = 'Send Email';
            alerta(JSON.stringify(err));
        });
}

function alerta(texto, clase) {
    const alerta = document.createElement('P');
    alerta.classList.add(clase);
    alerta.textContent = texto;

    resultadoAlerta.append(alerta)

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}


