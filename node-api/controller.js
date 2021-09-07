var config = require("./dbconfig");
const sql = require("mssql");
const fs = require("fs");
var rawdata = fs.readFileSync("./query/queries.json");
var queries = JSON.parse(rawdata);

// DB connection
// TODO Think how to make it once
// const pool = sql
//   .connect(config)
//   .then((pool) => {
//     console.log("Connected to MSSQL");
//     return pool;
//   })
//   .catch(() => {
//     (err) => console.log("Database Connection Failed! Bad Config: ", err);
//   });

// TODO adapt
async function getQuizQuestions(req, res) {
  try {
    let pool = await sql.connect(config);
    let results = await pool.request().query(queries.getAllQuizQuestions);
    res.status(200).json(results);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

// // TODO adapt
// async function getOrder(productId) {
//   try {
//     let pool = await sql.connect(config);
//     let product = await pool
//       .request()
//       .input("input_parameter", sql.Int, productId)
//       .query("SELECT * from Orders where Id = @input_parameter");
//     return product.recordsets;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // TODO adapt
// async function addOrder(order) {
//   try {
//     let pool = await sql.connect(config);
//     let insertProduct = await pool
//       .request()
//       .input("Id", sql.Int, order.Id)
//       .input("Title", sql.NVarChar, order.Title)
//       .input("Quantity", sql.Int, order.Quantity)
//       .input("Message", sql.NVarChar, order.Message)
//       .input("City", sql.NVarChar, order.City)
//       .execute("InsertOrders");
//     return insertProduct.recordsets;
//   } catch (err) {
//     console.log(err);
//   }
// }

module.exports = {
  getQuizQuestions,
  test
};
