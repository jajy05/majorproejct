const User=require('../models/user');
module.exports.profile=function(req,res){
     return res.render('user_profile',{title:'User profile'})
}


module.exports.signup=function(req,res){
     return res.render('user_sign_up',{
          title:"codial! sign up"
     })
}
module.exports.signin=function(req,res){
     return res.render('user_sign_in',{
          title:"codial! sign in"
     })
}
module.exports.create = function(req, res) {
     if (req.body.password != req.body.confirm_password) {
         return res.redirect('back');
     }
 
     User.exists({ email: req.body.email })
         .then(user => {
             // Check if user exists
             if (!user) {
                 // Create new user
                 User.create(req.body, function(err, newUser) {
                     if (err) {
                         console.log('Error in creating user sign up:', err);
                         return res.status(500).send('Error in creating user sign up');
                     }
                     // Redirect to sign-in page after successful user creation
                     return res.redirect('/users/sign-in');
                 });
             } else {
                 // Redirect back if user already exists
                 return res.redirect('back');
             }
         })
         .catch(err => {
             // Handle error in finding user
             console.log('Error in finding user sign up:', err);
             return res.status(500).send('Error in finding user sign up');
         });
 }
 
 
module.exports.createsession=function(req,res){
     
}