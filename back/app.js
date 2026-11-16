// 1. Traemos las herramientas
import express from 'express';
import path from 'path';

// 2. Creamos el mesero
const app = express();
const PORT = 3000;

// 3. Le decimos dónde está la bodega de archivos que el cliente puede ver
app.use(express.static(path.join(import.meta.dirname, 'public')));

// 4. Un plato nuevo en el menú, para probar
app.get('/hola', (req, res) => {
  res.send('Hola, soy el mesero Express');
});

// 5. Abrimos el restaurante
app.listen(PORT, () => {
  console.log(`Restaurante abierto en http://localhost:${PORT}`);
});