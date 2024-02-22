import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons"
export default function ChiefCard({chief}){
    return(
        <div className="chief-card">

            <img src={chief.img} alt=""/>
            
            <div className="chief-info">
                <h1 className="chief-name">{chief.name}</h1>
                <p className="chief-recipe-count">Recipes:<b>{chief.recipeCount}</b></p>
                <p className="chief-cusine-info">Cusine:<b>{chief.cusine}</b></p>
                <p className="chief-icons">
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faInstagram}/>

                </p>

           
            </div>
        </div>
    )
    
}