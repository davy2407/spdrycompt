import React, { useState } from "react";




import "./Compt.css";



function Compt () {

    const [valeurCompteur, setValeurCompteur] = useState(0)

    const handleChange = (event) => {
        setValeurCompteur(event.currentTarget.value);
      };

    return (
        <div className="CompteurContainer">
            <div className="Bloc1">
                <p>
                    Nombre de clients dans le Magasin : <br></br>
                    {valeurCompteur}
                </p>
            </div>

            <div className="Bloc2">
            <p>
            <input type="number" min="0" value={valeurCompteur} onChange={(e)=>{handleChange(e)}}></input><br></br>
            Modifier manuellement.. 

            </p>
            
            </div>
           
           
           
            <div className="Bloc3">
                <button onClick={()=>{setValeurCompteur(valeurCompteur-1)}}>-</button>
                <button onClick={()=>{setValeurCompteur(valeurCompteur+1)}}>+</button>

            </div>

        </div>
    )
};


export default Compt;