module.exports = (sequelize, Sequelize) => {
    const Authusers = sequelize.define("authusers", {
        userid: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        accessfailedcount: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        email: {
            type: Sequelize.CHAR,
            allowNull: false
        },
        firstname: {
            type: Sequelize.CHAR,
            allowNull: false
        },
        lastname: {
            type: Sequelize.CHAR,
            defaultValue: ''       
        },
        middlename: {
            type: Sequelize.CHAR,
            defaultValue: ''
        },
        timezone: {
            type: Sequelize.CHAR,
            defaultValue: ''
        },
        emailconfirmed: {
            type: Sequelize.BOOLEAN,
            allowNull:false,
            defaultValue:false
        },
        lastlogintime: {
            type: Sequelize.DATE,
        },
        lockoutenabled: {
            type: Sequelize.BOOLEAN,
            allowNull:false,
            defaultValue:false
        },
        lockoutend: {
            type: Sequelize.DATE,
        },
        passwordhash: {
            type: Sequelize.TEXT,
            allowNull:false
        },
        phonenumber: {
            type: Sequelize.CHAR,
            defaultValue: ''
        },
        phonenumberconfirmed: {
            type: Sequelize.BOOLEAN,
            allowNull:false,
            defaultValue:false
        },
        registrationdate: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('now')
        },
        lastloginfailedtime: {
            type: Sequelize.DATE,
        }
    });  
    return Authusers;
  };
  