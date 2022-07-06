module.exports = (sequelize, Sequelize) => {

    
    const model = sequelize.define(
      "orders",
      {
        Order_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        Product_name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        Status: {
          type: Sequelize.STRING(60),
          allowNull: false,
        },
        Created_date: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        }
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return model;
  };
  