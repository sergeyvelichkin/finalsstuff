module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [6, 128],
          msg: "Email address must be between 6 and 128 characters in length"
        },
        isEmail: {
          msg: "Email address must be valid"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3],
          msg: "Password must have at least 3 characters in length"
        }
      }
    },
    about: {
      type: DataTypes.TEXT
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3],
          msg: "First name must have at least 3 characters in length"
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3],
          msg: "Last name must have at least 3 characters in length"
        }
      }
    },
    avatar: {
      type: DataTypes.STRING,
    },
    last_login: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });

  User.associate = function (models) {
    // Associating User with Jobs
    // When an User is deleted, also delete any associated Jobs
    User.hasMany(models.Job, {
      onDelete: "cascade"
    });
  };

  return User;
};
