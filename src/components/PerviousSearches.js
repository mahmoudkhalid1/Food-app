import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function PreviousSearches(){
    const searches=['pizza','burger','cookies','juice','biryani','salad','ice cream','lasagna','pudding','soup']

    return(
        <div className="pervious-searches section">
                <h2>Previous Searches</h2>
                <div className="pervious-searches-container">
                    {searches.map((search,index) => (
                        <div key={index} style={{animationDelay:index * .1+"s"}} className="search-item" >
                            {search}
                        </div>
                    ))}
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search"/>
                    <button className="btn"><FontAwesomeIcon icon={faSearch}/></button>
                </div>
            </div>
    )
}