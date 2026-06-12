CREATIVO - LANDING WEB
======================

Proyecto armado en HTML + Tailwind CDN, sin necesidad de Node ni instalación.

CÓMO USARLO
1) Abrí index.html en el navegador.
2) Cambiá los links de WhatsApp:
   https://wa.me/5490000000000
   por tu número real. Ejemplo Argentina:
   https://wa.me/5493511234567

LOGO
- El logo principal está en:
  assets/logo-creativo.png
- Si querés cambiarlo, reemplazá ese archivo manteniendo el mismo nombre.

VIDEOS DEL CARRUSEL
Ahora el carrusel muestra tarjetas animadas de servicios.
Si querés usar videos reales:
1) Guardá tus videos en:
   assets/videos/video-1.mp4
   assets/videos/video-2.mp4
2) En index.html, dentro de cada <article class="video-card ..."> podés agregar:

   <video autoplay muted loop playsinline class="absolute inset-0 h-full w-full object-cover -z-10">
     <source src="assets/videos/video-1.mp4" type="video/mp4">
   </video>

3) Mantené el texto por encima para que siga teniendo título y descripción.

LOGOS QUE PASAN ABAJO
Actualmente pasan logos/textos de tecnologías.
Si querés poner logos de clientes reales:
1) Guardá las imágenes en:
   assets/clientes/logo-1.png
   assets/clientes/logo-2.png
2) En index.html, buscá la sección:
   <!-- LOGOS / MARQUEE -->
3) Reemplazá los <span class="logo-pill">...</span> por:

   <img src="assets/clientes/logo-1.png" alt="Cliente 1" class="logo-marquee-img">
   <img src="assets/clientes/logo-2.png" alt="Cliente 2" class="logo-marquee-img">

IMPORTANTE
Repetí los mismos logos dos veces dentro del carrusel para que el movimiento sea infinito y no se corte.
