

exports.authusersdb = () => {    
const authusersdb = require("../dataLayer/authuserDL/authuserdl");
authusersdb.sequelize.sync()
  .then(() => {
    consoleMessage("authusers");
  })
  .catch((err) => {
    consoleMessage("authusers", err.message);
  });
}
exports.productDL = () => {
  const productDL= require("../dataLayer/productDL/productdl");    
  productDL.sequelize.sync()
      .then(() => {
        consoleMessage("product");
      })
      .catch((err) => {
        consoleMessage("product", err.message);
      });
}

function consoleMessage(tableName, message){
    if(message){
        console.log("Failed to sync "+tableName+" table in db: " + message);
    }
    else{
        console.log("Synced "+tableName+" table in db.");
    }   
}
