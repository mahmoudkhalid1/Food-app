import ChiefCard from "./ChiefCard"
export default function ChiefSection(){
    const chiefs =[
        {
            name:"Juan Carlos",
            img:"/img/top-chiefs/img_1.jpg",
            recipeCount:"10",
            cusine:"Mexican",
           
        },
        {
            name:"Hohn Doe",
            img:"/img/top-chiefs/img_2.jpg",
            recipeCount:"05",
            cusine:"Japenese",
           
        },
        {
            name:"Erich Maria",
            img:"/img/top-chiefs/img_3.jpg",
            recipeCount:"13",
            cusine:"Italian",
           
        },
        {
            name:"Chris Brown",
            img:"/img/top-chiefs/img_4.jpg",
            recipeCount:"08",
            cusine:"American",
           
        },
        {
            name:"Blake Lively",
            img:"/img/top-chiefs/img_5.jpg",
            recipeCount:"09",
            cusine:"French",
           
        },
        {
            name:"Ben Affleck",
            img:"/img/top-chiefs/img_6.jpg",
            recipeCount:"04",
            cusine:"Indian",
           
        }

    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {chiefs.map(chief =><ChiefCard key={chief.name} chief={chief}/>)}

            </div>

        </div>  
    )
}