document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('notificacion-actividad');

    const productos = [
        { nombre: "jabón de carbón", img: "../media/imagenes/jabon-carbon.jpg", url: "detalle-carbon.html" },
        
    ];

    const ciudades = ["Medellín", "Cali"];

    function mostrarNotificacion() {
        const producto = productos[Math.floor(Math.random() * productos.length)];
        const ciudad = ciudades[Math.floor(Math.random() * ciudades.length)];

        contenedor.innerHTML = `
            <div class="contenido-notificacion">
                <button class="cerrar-notificacion">×</button>
                 <img src="${producto.img}" alt="${producto.nombre}">
                 <span>Alguien está viendo <strong>${producto.nombre}</strong> desde <strong>${ciudad}</strong></span>
            </div>
        `;


        contenedor.style.display = 'flex';

        // Cerrar con la "X"
        const botonCerrar = contenedor.querySelector('.cerrar-notificacion');
        botonCerrar.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el clic también redireccione
            contenedor.style.display = 'none';
            programarSiguiente();
        });

        // Redirigir al hacer clic en el resto del contenedor
        contenedor.onclick = () => {
            window.location.href = producto.url;
        };

        // Ocultar automático luego de 5 segundos (si no se cierra antes)
        setTimeout(() => {
            contenedor.style.display = 'none';
            programarSiguiente();
        }, 5000);
    }

    function programarSiguiente() {
        const tiempo = Math.floor(Math.random() * (40000 - 20000 + 1)) + 20000;
        setTimeout(mostrarNotificacion, tiempo);
    }

    programarSiguiente();
});
