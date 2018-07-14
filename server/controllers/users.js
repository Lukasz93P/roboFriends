const User = require ('../models/User')
const {normalizeErrors} = require('../helpers/mongoose');

exports.register = (req,res)=>{

    const {name,email,password} = req.body;
    if(!password || !email || !name)
        return res.status(422).send({errors:[{title: 'Data missing', detail:'Missing username or email '}]})
       
    User.findOne({email}, (error, mailInUse)=>{
        if(error){
            return res.status(422).send({errors:normalizeErrors(error.errors)})}
        if(mailInUse)
            return res.status(422).send({errors:[{title:"User already exists", detail:"Mail is in use"}]})
    
        const user=new User({name,email,password});
        user.save(
            error=>{
                if(error)
                    return res.status(422).send({error:normalizeErrors(error.errors)})
                else{  
                    console.log(user)
                    return res.json(user) } 

            }
        )  
    
    }) 
}

exports.signin =(req, res)=>{

    const {email,password}=req.body
    if(!email || !password)
        return res.status(422).send({errors:[{title: 'Data missing', detail:'Missing username or email '}]})
    
    User.findOne({email},(error,foundedUser)=>{

        if(error)
            return res.status(422).send({errors:normalizeErrors(error)})
        if(!foundedUser)
            return res.status(422).send({errors:[{title:'Invalid user', detail:'Account does not exists'}]})
        if(foundedUser.isValidPassword(password)){
            return res.json(foundedUser)
        }              
        else
            return res.status(422).send({errors:[{title:'Wrong password', detail:'Your password is not the same'}]})

    })
}

exports.modify =(req, res)=>{

    const {user,newContact}=req.body
    if(!user|| !newContact)
        return res.status(422).send({errors:[{title: 'Data missing', detail:'We have an error'}]})


    User.findOneAndUpdate({_id: user._id }, { $push: { contacts: newContact }, $inc: {contactsId:1} }, {new: true}, function(err, user){
    if(err)
        return res.status(422).send({errors:normalizeErrors(error)})
    else 
        return res.json(user)
    });
}

exports.removeContact=(req,res)=>{

    const {contactId,userId}=req.body

    User.update( 
        { _id: userId },
        { $pull: { contacts : { id : contactId } } },
        { new: true },
        function (err, user){
            if(err)
                return res.status(422).send({errors:normalizeErrors(error)})
        });
    
    User.findById(userId,
        function(error,user){
            if(error) 
                return res.status(422).send({errors:normalizeErrors(error)})
        
            else
                return res.json(user)
        }
        
    )
}