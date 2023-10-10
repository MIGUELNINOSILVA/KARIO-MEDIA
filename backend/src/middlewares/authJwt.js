import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";
import Rol from "../models/Rol.js";

export const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(403).json({ message: "No se ha proporcionado un token" });

  const decoded = jwt.verify(token, process.env.SECRET);
  req.userId = decoded.id;

  const user = await Usuario.findById(req.userId, { contraseña: 0 });
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

  next();
};

export const isAdmin = async (req, res, next) => {
  const user = await Usuario.findById(req.userId);
  const roles = await Rol.find({ _id: { $in: user.rol } });
  roles[0].nombre_rol === "Administrador"
    ? next()
    : res.status(403).json({ message: "Requiere rol de Administrador" });
};

export const isEmpleado = async (req, res, next) => {
  const user = await Usuario.findById(req.userId);
  const roles = await Rol.find({ _id: { $in: user.rol } });
  roles[0].nombre_rol === "Empleado"
    ? next()
    : res.status(403).json({ message: "Requiere rol de Empleado" });
};

export const isMember = async (req, res, next) => {
  const user = await Usuario.findOne({ correo: req.body.correo });
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

  const roles = await Rol.find({ _id: { $in: user.rol } });
  if (roles.length === 0)
    return res
      .status(404)
      .json({ message: "Rol no encontrado, no puedes iniciar sesión" });
  next();
};