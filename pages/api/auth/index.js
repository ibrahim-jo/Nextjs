import connectData  from '../../../database/conn'
import {signup} from '../../../database/controller'
export default async function handler(req,res) {
connectData().catch(
    ()=>res.status(401).json({error:'no connection db'})
)
const {method}=req
console.log('mm',method)
switch (method) {
    case 'POST':
        signup(req,res)
        break;

        case 'GET':
       
            break;

    default:
        res.setHeader('Allow',['GET','POST','PUT','DELETE'])
        res.status(405).json({error:`method${method} not allow`})
        break;
}
    
} 