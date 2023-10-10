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

export const isAdmin = async(req, res, next)=>{
  const user = await Usuario.findById(req.userId);
  console.log(user);
  const roles = await Rol.find({_id: {$in: user.rol}});
  console.log(roles);
  
}

export const isModerator = async(req, res, next)=>{

}