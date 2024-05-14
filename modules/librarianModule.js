const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.createLibrarian = async (req,res,next) => {
     try{
       const insertedResponse = await mongo.selectedDb.collection("librarian").insertOne(req.body);
         res.send(insertedResponse);
     } catch(err) {
        console.error(err);
         res.status(500).send(err);
    }
}

module.exports.getLibrarian = async (req,res,next) => {
   try{
       const productData = await mongo.selectedDb.collection("librarian").find().toArray();
       res.send(productData);
   } catch(err) {
    console.error(err);
    res.status(500).send(err);
   }
}

module.exports.deleteLibrarian = async (req,res,next) => {
    try{
        const deletedData = await mongo.selectedDb.collection("librarian").remove({_id: ObjectId(req.params.librarianId)});
        res.send(deletedData);
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}