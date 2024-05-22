var jwt = require('jsonwebtoken');

const JWT_SECRET = 'priyansh123';

const fetchuser = (req,res,next)=>{

//get users from the jwt token and id to req object
const token=req.header('auth_token');

if(!token){
    res.status(401).send({error:"invalid token please enter the right one"})
}
try {
    const data =jwt.verify(token,JWT_SECRET);
    id=data.id;
    // res.send(id)
    req.user=data.user;
     next();
} catch (error) {
    res.status(401).send({error:"servies problem dume 401 hello"})
    console.log(error)
}

} 
// router.get('/getuser', fetchuser, async (req, res) => {
//     try {
//         const userId = req.user.id; // Ensure to use const keyword for defining userId
//         const user = await User.findById(userId).select("-password");
//         res.send(user);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Internal Server Error');
//     }
// });
module.exports = fetchuser;