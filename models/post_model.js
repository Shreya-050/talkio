const mongoose=require('mongoose');
const postSchema=mongoose.Schema({
    Image:{
        type:String,
        require:true
    },
    Description:{
        type:String,
        require:true
    },
    Likes:{
        type:Array,
        
    },
    Comments:{
        type:Array,
    }
})
const postModel = mongoose.model('Posts', postSchema);
module.exports=postModel;