const { response } = require('./app');
const User = require ('./model');


const getUsers = (req,res,next) => {

    User.find()
        .then(response => {
            res.json({response})
        })
        .catch(error =>{
            res.json({message:error})
        });
};

const addUser = (req,res,next)=>{
     
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
        .then(response => {
           res.json({response})
         })
        .catch(error =>{
           res.json({error})
        });
};

const updateUser = (req,res,next) =>{
    const {id,name}= req.body;
    User.updateOne({id:id},{$set:{name:name}})
        .then(response => {
           res.json({response})
        })
        .catch(error =>{
           res.json({error})
        });
    
};

const deleteUser = (req,res,next) =>{
    const id =  req.body.id;
    User.deleteOne({id:id})
        .then(response => {
             res.json({response})
        })
       .catch(error =>{
             res.json({error})
        });
};

const getUsersCount = (req, res, next) => {
    User.countDocuments({})
        .then(count => {
            res.json({ count });
        })
        .catch(error => {
            res.json({ message: error });
        });
};

const searchUsersByName = (req, res, next) => {
    const name = req.query.name;
    User.find({ name: new RegExp(name, 'i') })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ message: error });
        });
};


exports.searchUsersByName = searchUsersByName;
exports.getUsersCount = getUsersCount;
exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;