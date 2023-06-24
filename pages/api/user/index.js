import connectData from '../../../database/conn'
import {getUser,postUser} from '../../../database/controller'
export default async function handler(req, res) {
  connectData().catch(
    ()=>
    { return res.status(401).json({error:'no connection DataBase'})
  })
  const {method}=req
 switch (method) {
     case 'GET':
       getUser(req,res)
         break;
     case 'POST':
         postUser(req,res)
         break;
     
    default:
        res.setHeader('Allow',['GET','POST','PUT','DELETE'])
        res.status(405).json({error:`method${method} not allow`})
        break
 }
}
