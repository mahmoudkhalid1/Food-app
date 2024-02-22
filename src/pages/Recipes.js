import PreviousSearches from "../components/PerviousSearches"
import RecipeCart from "../components/RecipeCart"
export default function Recipes(){
    const recipes= [
        {
            
            title: "Chicken Pan Pizza",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            image: "./img/gallery/img_1.jpg",
            authorImg: "./img/top-chiefs/img_1.jpg"
        },
        {
            
            title: "Chicken Pan Pizza",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            image: "./img/gallery/img_2.jpg",
            authorImg: "./img/top-chiefs/img_2.jpg"
        },
        {
            
            title: "Chicken Pan Pizza",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            image: "./img/gallery/img_3.jpg",
            authorImg: "./img/top-chiefs/img_3.jpg"
        },
        {
            
            title: "Chicken Pan Pizza",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            image: "./img/gallery/img_4.jpg",
            authorImg: "./img/top-chiefs/img_4.jpg"
        },
        {
            title: "Chicken Pan Pizza",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            image: "./img/gallery/img_5.jpg",
            authorImg: "./img/top-chiefs/img_5.jpg"
        },
        {
            title: "Chicken Pan Pizza",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            image: "./img/gallery/img_6.jpg",
            authorImg: "./img/top-chiefs/img_6.jpg"
        }
    ]

    return (
        <div>
             <PreviousSearches/>
            <div className="reciepes-container">
                
                {recipes.map((recipe,index) =>(
                    <RecipeCart key={index} recipe={recipe}/>
                ))}


            </div>
            
            
        </div>
    )
}