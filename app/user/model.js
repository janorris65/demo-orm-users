import { DataTypes } from "sequelize";
import sequelize from "../conn.js";
import bcrypt from "bcrypt";

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: { msg: "Usa Name is bank" },
        notNull: {
          msg: "Usa Name must be banky",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: { args: [8], msg: "must be lanky" },
        notNull: {
          msg: "Pass must be grass",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "need to ems those mems",
        },
        notNull: {
          msg: "you legit?",
        },
      },
    },
  },
  {
    timestamps: false,
    sequelize,
    underscored: true,
  }
);

await User.sync().catch((err) => {
  console.error(`Error syncing User model/table: ${err.message}`);
  process.exit(1);
});

export default User;
