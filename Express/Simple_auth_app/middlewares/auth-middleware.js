import jwt from "jsonwebtoken"

export async function authMiddleware(req, res, next) {
//   console.log(req.headers.authorization);
try{
if(!req.headers){
    return res.status(404).json({
        success: false,
        message: "headers required"
    })
}

    const token = req.headers && req.headers.authorization.split(" ")[1]
    console.log(token)

    if(!token){
        return res.status(400).json({
            success: false,
            message: "Token required !! please login first",
        });
    }

    
    //decode token
    const decodedTokenInfo = jwt.verify(token,process.env.JWT_SECRET)
    console.log(decodedTokenInfo);
    req.userInfo = decodedTokenInfo;
    next()
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Access Denied",
        })
    }
    
  
}
