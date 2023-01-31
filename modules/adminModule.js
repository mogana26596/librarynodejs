const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.createAdmin = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("admin").insertOne(req.body);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.updateAdmin = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("admin")
                        .findOneAndUpdate({_id:ObjectId(req.params.adminId)}, 
                                          {$set: {...req.body}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getAdmin = async (req,res,next) => {
   try{
       const productData = await mongo.selectedDb.collection("admin").find().toArray();
       res.send(productData);
   } catch(err) {
    console.error(err);
    res.status(500).send(err);
   }
}

module.exports.deleteAdmin = async (req,res,next) => {
    try{
        const deletedData = await mongo.selectedDb.collection("admin").remove({_id: ObjectId(req.params.adminId)});
        res.send(deletedData);
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}