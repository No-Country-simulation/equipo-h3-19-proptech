import { Router } from "express";
import { readdirSync } from "fs";
import path from "path";

const PATH_ROUTER = path.resolve(__dirname); // Usar rutas absolutas
const router = Router();

/**
 * Limpia el nombre del archivo, eliminando su extensión
 */
const cleanFileName = (fileName: string): string => {
  return fileName.split(".").shift() || "";
};

/**
 * Carga dinámicamente todas las rutas excepto index
 */
readdirSync(PATH_ROUTER).forEach(async (fileName) => {
  if (!fileName.endsWith(".ts") && !fileName.endsWith(".js")) return; // Filtrar solo archivos .ts y .js
  if (fileName === "index.ts" || fileName === "index.js") return;

  const routeName = cleanFileName(fileName);

  try {
    const moduleRouter = await import(path.join(PATH_ROUTER, fileName));
    if (moduleRouter.default) {
      router.use(`/${routeName}`, moduleRouter.default);
      console.log(`[INFO] Ruta cargada: /${routeName}`);
    }
  } catch (error) {
    console.error(`[ERROR] Error al cargar la ruta /${routeName}:`, error);
  }
});

export default router;
