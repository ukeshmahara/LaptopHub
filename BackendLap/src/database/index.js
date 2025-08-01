import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

export const db = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    
    // Import all models to ensure they are registered
    import("./models/index.js").then(async ({ User, Laptop, Order, OrderItem, Wishlist }) => {
      // Sync all models with database
      await sequelize.sync({ alter: true });
      console.log("Database models synchronized.");
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};



