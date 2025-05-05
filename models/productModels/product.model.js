module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    pid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    name: {
      type: Sequelize.CHAR,
      allowNull: false
    },
    slug: {
      type: Sequelize.CHAR,
      allowNull: false
    },
    shortdescription: {
      type: Sequelize.TEXT,
      defaultValue: ''
    },
    description: {
      type: Sequelize.TEXT,
      defaultValue: ''
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    discount: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    qty: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0, 
    },
    organizationid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    categoryid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    authorid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    additionaldata: {
      type: Sequelize.JSON,
      defaultValue: {}
    },
    status: {
      type: Sequelize.CHAR,
      defaultValue: 'Inactive'
    },
    createdat: {
      allowNull: false,
  type: Sequelize.DATE,
  defaultValue: Sequelize.fn('now')
    },
    updatedat: {
      allowNull: false,
  type: Sequelize.DATE,
  defaultValue: Sequelize.fn('now')
    }
  });

  return Product;
};
