import Area from "../models/Area.js";

export const getAreas = async (req, res) => {
  try {
    const area = await Area.find();
    res.json(area);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}