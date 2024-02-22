import {FontAwesomIcon, FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck} from "@fortawesome/free-solid-svg-icons"
import { useState,useEffect } from "react"
export default function Settings(){
    const [settings,setSettings] = useState ({
        "--background-color":"#fff",
        "--background-light":"#fff",
        "--shadow-color":"rgba(0, 0, 0, .2)",
        "--primary-color":"rgb(255,0,86)",
        "--text-color":"#0A0A0A",
        "--text-light":"#575757",
        "--font-size":"16px",
        "--animation-speed":1

    }
   )
   useEffect(()=>{
    const root =document.documentElement
    for(let key in settings){
        root.style.setProperty(key,settings[key])
    }

   },[settings])
   const themes =[

    {   "--background-color":"#fff",
        "--background-light":"#fff",
        "--shadow-color":"rgba(0, 0, 0, .2)",
        "--text-color":"#0A0A0A",
        "--text-light":"#575757",
    }
    ,{
        "--background-color":"rgb(29,29,29)",
        "--background-light":"rgb(77,77,77)",
        "--shadow-color":"rgba(0, 0, 0,.2)",
        "--text-color":"#ffffff",
        "--text-light":"#eceaea",
    }
    

   ]
   function changeTheme(e) {
    const _theme = {...themes[e]};
    setTheme(e==0 ? "light":"dark")
    let _settings= {...settings}
    for(let key in _theme){
        _settings[key] =_theme[key] 
    }
    setSettings(_settings)
}
   function changeColor(e){
    const _color = primaryColors[e]
    let _settings= {...settings}
    _settings["--primary-color"] =_color
    setSettings(_settings)
    setPrimaryColor(e)

   }
   function changeFont(e){
    const _font = fontSizes[e]
    let _settings= {...settings}
    _settings["--font-size"] =_font.value
    setSettings(_settings)
    setFontSize(e)
   } 
   function changeAnim(e){
    const _anim = animationSpeeds[e]
    let _settings= {...settings}
    _settings["--animation-speed"] =_anim.value
    setSettings(_settings)
    setAnimationSpeedValue(e)
   }



    const[theme,setTheme] = useState("light")
    const primaryColors=[
        "rgb(255,0,89)",
        "rgb(33,150,243)",
        "rgb(255,193,7)",
        "rgb(0,200,83)",
        "rgb(156,39,176)"
    ]
    const [primaryColor,setPrimaryColor] =useState(0)
    const fontSizes = [  
    {title:"Small",
    value:"12px"},
    {title:"Medium", 
     value:"16px"},
    {title:"Large",  
      value:"20px"}
    
    ]
    const [fontSize,setFontSize] = useState(1)
    const animationSpeeds = [
        {title:"Slow",
        value:10},
        {title:"Medium",
        value:1},
        {title:"Fast",
        value:.5}
    ]
    const [animationSpeedValue,setAnimationSpeedValue] = useState(1)
    return(
        <div>
            <div className = "section d-block">
                <h2>Primary theme</h2>
                <div className="option-container">
                    <div className="option light" onClick={() => changeTheme(0)}>
                        {theme  === "light" && (
                            <div className="check">
                            <FontAwesomeIcon icon={faCheck} />
                            </div>
                            )
                        }
                    </div>
                    <div className="option dark" onClick={() => changeTheme(1)}>
                        {theme  === "dark" && (
                            <div className="check">
                            <FontAwesomeIcon icon={faCheck} />
                            </div>
                            )
                        }
                    </div>
                </div>
                
                

            </div>
            <div className = "section d-block">
                <h2>Preferred color</h2>
                <div className="option-container">
                   
                    {primaryColors.map((color,index)=>(
                        <div className="option light" style={{backgroundColor:color}} onClick={()=> changeColor(index)}>
                        {primaryColor===index && (
                            <div className="check">
                            <FontAwesomeIcon icon={faCheck} />
                            </div>
                            )
                        }
                        </div>
                    ))
                    }
                    

                </div>
            </div>
            <div className = "section d-block">
                <h2>Font size</h2>
                <div className="option-container">
                   
                    {fontSizes.map((size,index)=>(
                       <button className="btn" onClick={()=> changeFont(index)} >
                        <span>{size.title}</span>
                        
                        {fontSize === index &&<span><FontAwesomeIcon icon ={faCheck}/></span>}
                        </button> 
                        
                    ))
                    }
                    

                </div>
                
                

            </div>
            <div className = "section d-block">
                <h2>Animation Speed</h2>
                <div className="option-container">
                   
                    {animationSpeeds.map((speed,index)=>(
                       <button className="btn" onClick={(e) => changeAnim(index)}>
                        <span>{speed.title}</span>
                        
                        {animationSpeedValue === index &&<span><FontAwesomeIcon icon ={faCheck}/></span>}
                        </button> 
                        
                    ))
                    }
                    

                </div>
                
                

            </div>
            
           
        </div>
   )}
