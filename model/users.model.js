module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define(
      "users",
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        First_Name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        Last_Name: {
          type: Sequelize.STRING(100),
          allowNull: false,
          
        },
        email: {
          type: Sequelize.STRING(150),
          allowNull: true,
          unique: true,
        }

      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return model;
  };
  