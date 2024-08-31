// models.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Example using SQLite, adjust for your DB

// Define the Staff model
const Staff = sequelize.define('Staff', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shiftPreference: {
        type: DataTypes.STRING,
        allowNull: false
    },
    availability: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});

// Define the Incentive model
const Incentive = sequelize.define('Incentive', {
    staffId: {
        type: DataTypes.INTEGER,
        references: {
            model: Staff,
            key: 'id'
        }
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});

// Establish relationships
Staff.hasMany(Incentive, { foreignKey: 'staffId' });
Incentive.belongsTo(Staff, { foreignKey: 'staffId' });

module.exports = { Staff, Incentive };
