let mngs=require('mongoose')
const userSchema = mngs.Schema({
  mode:{
    type:String,
    
  },
  status1:{ 
    type:String,
  },
  orders:[
           {
            id:{
                type:String
            },
            name:{
                 type:String
            },
               qty: {
                    type:Number
                },
                price:{
                    type:Number
                },
                total:{
                    type:Number
                }
           }
  ]

},  {timestamps:true})
userSchema.index({ createdAt: 1 }, { expireAfterSeconds: 43200 * 60 });
let Cartoperation=mngs.model('carttable',userSchema)
module.exports=Cartoperation