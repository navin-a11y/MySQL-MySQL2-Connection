const { report } = require("../app");
// const { query, response } = require('express');
// const connection = require('./../DataBase/dbConnection');
// // const Promise = require("pro");

const connection = require("../DataBase/dbConnectionWithMySQL2");

// exports.createUserWithPromise = async(req, res) => {
//     const {username, email, password} = req.body;
//     const insertData = {
//         username : username,
//         email : email,
//         password : password
//     }

//     let query = "SELECT * FROM users";
//     const promise1 = new Promise((resolve, reject) => {
//         connection.query(query, (err, result) => {
//             if(err) reject(err);

//             resolve(result);
//         });
//     });

//     // promise1.then(result => console.log(result)).catch(error => console.log(error));

//    try {
//     let response = await promise1;
//     console.log(response);
//     response.forEach(item => {
//         if(item.username === username) {
//             return res.send("Username alreday exists");
//         }
//     });
//    }catch(error) {
//     return res.send(error)
//    }

//     query = "INSERT INTO users SET ?"
//     const promise2 = new Promise((resolve, reject) => {
//         connection.query(query,[insertData], (err, result) => {
//             if(err) reject(err);

//             resolve(result);
//         });
//     });

//     // response = await promise2;
//     try {
//         let response = await promise2;
//         return res.send(response);
//        }catch(error) {
//         return res.send(error)
//        }

// };

// exports.getUserWithPromise = async(req, res) => {
//     let query = "select * from users";
//     const promise = new Promise((resolve, reject) => {
//         connection.query(query, (err, result) => {
//             if(err) reject(err);

//             resolve(result);
//         });
//     });

//     try{
//         let response = await promise;
//         return res.send(response);
//     }
//     catch(error){
//         return res.send(error);
//     }
// };

// exports.viewUserWithPromise = async(req, res) => {
//     const id = req.params.id;
//     let query = "select * from users where id=?";
//     const promise = new Promise((resolve, reject) => {
//         connection.query(query, [id], (err, result) => {
//             if(err) reject(err);

//             resolve(result);
//         });
//     });

//     try{
//         let response = await promise;
//         return res.send(response);
//     }
//     catch(err)
//     {
//         return res.send(err);
//     }
// };

// exports.updateUserWithPromise = async(req, res) => {
//     const id = req.params.id;
//     const username = req.body.username;

//     let query = "update users SET username=? WHERE id=?";
//     const promise = new Promise((resolve, reject) => {
//         connection.query(query, [username, id], (err, result) => {
//             if(err) reject(err);

//             resolve(result);
//         });
//     });

//     try{
//         let response = await promise;
//         return res.send(response);
//     }catch(err){
//         return res.send(err);
//     }
// };

// exports.deleteUserWithPromise = async(req, res) => {
//     const id= req.params.id;

//     let query = "delete from users WHERE id=?";
//     const promise = new Promise((resolve, reject) => {
//         connection.query(query, [id], (err, result) => {
//             if(err) reject(err);

//             resolve(result);
//         });
//     });

//     try{
//         let response = await promise;
//         return res.send(response);
//     }catch(err){
//         return res.send(err);
//     }
// };

//Controllers with mysql2
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const insertData = {
    username: username,
    email: email,
    password: password,
  };

  let query = "SELECT * FROM users";
  let response;
  try {
    response = await connection.query(query);
    response.forEach((item) => {
      if (item.username === username) {
        return res.send("Username alreday exists");
      }
    });

    query = "INSERT INTO users SET ?";
    response = await connection.query(query, insertData);
    return res.send(response);

  } catch (err) {
    return res.send(err);
  }
};

exports.getUser = async(req,res) => {
    let query = "SELECT * FROM users";
    let response;
    try{
        response = await connection.query(query);
        return res.send(response);
    } catch(err){
        return res.send(err);
    }
};

exports.viewUser = async(req,res) => {
    const id = req.params.id;
    let quert = `SELECT * FROM users WHERE ${id}=?`;
    let response;
    try{
        response = await connection.query(query, [id]);
        return res.send(response);
    }catch(err){
        return res.send(err);
    }
};

exports.updateUser = async(req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    let query = "UPDATE USERS SET username=? WHERE id=?";
    let response;
    try{
        response = await connection.query(query, [username, id]);
        return res.send(response);
    }catch(err){
        return res.send(err);
    }
};

exports.deleteUser = async(req, res) => {
    const id = req.params.id;
    let query = "DELETE FROM users WHERE id=?";
    let response;
    try{
        response = await connection.query(query, [id]);
        return res.send(response);
    }catch(err){
        return res.send(err);
    }
};