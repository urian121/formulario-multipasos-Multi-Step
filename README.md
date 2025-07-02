# Formulario Multi-Paso con HTML, CSS y JavaScript

## 📋 Descripción

Este proyecto demuestra cómo crear un formulario multi-paso elegante y funcional usando únicamente **HTML**, **CSS** y **JavaScript vanilla**. No se requieren frameworks complejos ni librerías adicionales.

<img src="https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/refs/heads/master/formulario-multipasos-Multi-Step-con-solo-html-y-javascript.png" alt="Vista previa del formulario multi-paso">

<img src="https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/refs/heads/master/formulario-multi-pasos-Multi-Step-html-y-javascript.png" alt="Captura de pantalla del formulario">

## ✨ Características

- **Navegación por pasos**: 5 pasos organizados con iconos de Bootstrap
- **Interfaz en español**: Completamente localizada
- **Botones fijos**: Navegación siempre visible en la parte inferior
- **Diseño responsive**: Funciona en dispositivos móviles y desktop
- **Navegación flexible**: Puedes saltar entre pasos haciendo clic en el sidebar
- **Estilo moderno**: Utiliza Bootstrap 5 para un diseño profesional

## 🚀 Cómo funciona

### Estructura Simple

```html
<!-- Sidebar con pasos -->
<div class="step-item active" data-step="0">
  <i class="bi bi-box-seam"></i>
  <span>Detalles del Producto</span>
</div>

<!-- Contenido del paso -->
<div class="step-content active">
  <!-- Campos del formulario -->
  <div class="step-buttons">
    <!-- Botones de navegación -->
  </div>
</div>
```


### JavaScript Básico

```javascript
function updateSteps() {
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });
}
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos y posicionamiento
- **JavaScript ES6+**: Lógica de navegación
- **Bootstrap 5**: Framework CSS para diseño
- **Bootstrap Icons**: Iconografía moderna

## 📁 Archivos del Proyecto

- `example-02.html` - Formulario completo multi-paso
- `README.md` - Este archivo de documentación

## 🎯 Casos de Uso

Este tipo de formulario es perfecto para:

- **Registros de usuarios**
- **Configuraciones de productos**
- **Procesos de checkout**
- **Wizards de configuración**
- **Encuestas largas**
- **Formularios de contacto complejos**

## 💡 Ventajas de esta Implementación

1. **Sin dependencias**: Solo HTML, CSS y JavaScript
2. **Fácil de personalizar**: Estructura clara y modular
3. **Ligero**: No requiere frameworks pesados
4. **Accesible**: Funciona sin JavaScript (con fallbacks)
5. **SEO-friendly**: HTML semántico
6. **Mantenible**: Código simple y legible

