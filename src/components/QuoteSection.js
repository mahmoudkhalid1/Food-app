import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
export default function QuoteSection(){
    return(
        <div className= "section quote">
            <p className = "quote-text"><FontAwesomeIcon icon = {faQuoteLeft}/> The best way to predict the future is to invent it.Food is evething we are, it's an extension of nationalist feeling,ethnic feelin,your personal history,your province,your region,your tribe,your grandma.it's inseperable from thos the get-go.<FontAwesomeIcon icon = {faQuoteRight}/>
            </p>
            <p className = "quote-author">- Anthony Bourdain</p>
        </div>
    )
}