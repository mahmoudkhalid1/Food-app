export default function CustomImage({imgSrc,pt}) 
{
    return(
        <div className= "custome-image" style={{paddingTop:pt}} >
            <img src ={imgSrc} alt=""/>
        </div>
     )
    }