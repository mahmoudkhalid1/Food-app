import CustomImage from "./CustomeImage"

export default function RecipeCart({recipe}){
    return(
        <div className="recipe-cart">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="author-img" src={recipe.authorImg} alt=""/>
                <h1 className="recipe-card-title">pizza</h1>
                <p className="recipe-card-description">
                    ccc
                </p>
                <a className="view-btn" href="#!" >VIEW RECIPE</a>
            </div>
        </div>
    )
}