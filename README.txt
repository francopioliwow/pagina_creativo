CREATIVO SOLUCIONES TECNOLÓGICAS - LANDING

Cómo abrir:
1. Descomprimí el ZIP.
2. Abrí index.html en el navegador.

Qué se modificó en esta versión:
- El carrusel principal del hero ahora usa tarjetas superpuestas tipo Wodes.
- La tarjeta central queda enfocada y las tarjetas laterales pasan por detrás, con blur y escala.
- El movimiento se controla desde js/main.js.
- El diseño sigue adaptado a Creativo Soluciones Tecnológicas.

Para cambiar el WhatsApp:
Buscá en index.html:
https://wa.me/5490000000000

Y reemplazalo por tu número real. Ejemplo Argentina:
https://wa.me/5493511234567

Para cambiar las tarjetas del hero:
Buscá en index.html:
<div class="wodes-card-stage" id="heroCardStage">

Ahí vas a ver las tarjetas:
- Gestión documental
- Fotos en vivo
- Restaurantes
- Gestores educativos
- Reparación PC

Podés cambiar título, texto e íconos.

Para poner videos reales dentro de las tarjetas:
Dentro de una tarjeta, agregá un video así, arriba de stack-card-content:

<video autoplay muted loop playsinline class="card-video">
  <source src="assets/videos/video-1.mp4" type="video/mp4">
</video>

Y en css/styles.css podés agregar:

.card-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

Después guardá tus videos en:
assets/videos/

Para cambiar los logos que pasan abajo:
En index.html buscá:
<!-- LOGOS / MARQUEE -->

Podés reemplazar los <span class="logo-pill">...</span> por imágenes:

<img src="assets/clientes/logo-cliente-1.png" alt="Cliente 1" class="logo-marquee-img">

Acordate de repetir los logos dos veces para que el carrusel sea infinito.
