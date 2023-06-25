import connectMongoose from "/database/conn";
import { getSingleUser,putUser,deleteUser} from "/database/controller";
 const handler=async(req,res)=>{
    console.log('im m in single fun')
    connectMongoose().catch(()=>
        { return res.status(401).json({error:'no connection DataBase'})
      })
    const {method}=req

    switch (method) {
        case'GET':
              getSingleUser(req,res)
            break;
            case 'PUT':
                putUser(req,res)
                 break;
             case 'DELETE':
                 deleteUser(req,res)
                 break;
    
        default:
            res.setHeader('Allow',['GET','POST','PUT','DELETE'])
            res.status(405).json({error:`method${method} not allow`})
            break;
    }
    
}
export default handler
