module.exports = function(sequelize, DataTypes) {
    let Job = sequelize.define("Job", {
      // Giving the Job model a name of type STRING
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3],
            msg: "Title must have at least 3 characters in length"
          }
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3],
            msg: "Description must have at least 3 characters in length"
          }
        }
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3],
            msg: "Address must have at least 3 characters in length"
          }
        }
      },
      cost: {
        type: DataTypes.DECIMAL(10, 2) ,
        allowNull: false,
        validate: {
          isDecimal: {
            msg: "Cost must be a number"
          }
        }
      }
    });

    Job.associate = function(models) {
      // We're saying that a Job should belong to an User
      // A Job can't be created without an User due to the foreign key constraint
      Job.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Job;
  };