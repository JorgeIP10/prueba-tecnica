import jwt from "jsonwebtoken";
import settings from "../settings.js";
import { customer } from "../models/customers.models.js";
import { createAccessToken } from "../utils/createJWT.js";

export const login = async (req, res) => {
  try {
    const { dni, email } = req.body;
    let customerFound = await customer.getByDni(dni);

    if (customerFound.length === 0) {
      console.log('The customer has not registered');

      return res.status(400).json({
        message: ["The customer has not registered"],
      });
    }

    customerFound = customerFound[0];
    if (email != customerFound.correo) {
      return res.status(400).json({
        message: ["The email is incorrect"],
      });
    }

    const token = await createAccessToken({
      dni: customerFound.dni,
      email: customerFound.correo,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });


    return res.json({
      dni: customerFound.dni,
      email: customerFound.correo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, settings.secretToken, async (error, user) => {
    if (error) return res.sendStatus(401);

    const customerFound = await customer.getByDni(user.dni);

    if (customerFound.length === 0) return res.sendStatus(401);

    return res.json({
      dni: customerFound[0].dni,
      email: customerFound[0].correo,
    });
  });
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: false,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};