import { Request, Response, NextFunction } from 'express';
import { jwtDecode }  from 'jwt-decode'

export function isAuthenticated(req: Request) {
  let token = req.headers["credential"];
  
  try {
      const tkn = token?.slice(1) as string
      const decoded = jwtDecode(tkn)
      console.log(decoded);
      
    } catch (error) {
      console.error({ message: 'No autorizado.' });
    }
}

// export function authorizeRoles(roles: string[]) {
//   return (req: Request, res: Response, next: NextFunction): void => {
//     if () {
//       const userRole = ; // Supone que el rol está almacenado en req.session.user.role

//       if (roles.includes(userRole)) {
//         // El rol del usuario está autorizado
//         next();
//       } else {
//         // Usuario no autorizado para esta ruta
//         res.status(403).json({ message: 'Acceso denegado. No tienes permiso para esta acción.' });
//       }
//     } else {
//       // Usuario no autenticado
//       res.status(401).json({ message: 'No autorizado. Por favor, inicia sesión.' });
//     }
//   };
// }
