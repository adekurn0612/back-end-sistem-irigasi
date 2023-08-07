import models, { Sequelize } from "sequelize";
import { sequelize } from "../models/init-models.js";

const deleteAll = async (req, res) => {
    try {
        const query =
            `Delete * from coba`;
        const result = await sequelize.query(query);
        res.json(formattedResult);
    } catch (e) {
        res.json(e.message);
    }
}

export default{
    deleteAll
}