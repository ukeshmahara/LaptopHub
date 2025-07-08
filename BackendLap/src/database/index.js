import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',// other example mysql,oracle,h2
    logging: false, // disable logging; default: console.log
  }
);

export const db = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (e) {
    console.error("Failed to connect to the database:", e);
    process.exit(1);
  }
};



