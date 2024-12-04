const cloudinary=require('cloudinary').v2;

const addToCloudinary=async(localFilePath)=>{
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key:process.env.CLOUDINARY_API_KEY, 
        api_secret: CLOUDINARY_API_SECRET 
    });

    try {
        const uploadResult = await cloudinary.uploader
       .upload(
          localFilePath, {
               resource_type:'auto',
           }
           

       )
       if(uploadResult){
        return uploadResult.url;
       }
    } catch (error) {
        console.log(error);
    }
    
      
      
       
    
}

module.exports=addToCloudinary;


