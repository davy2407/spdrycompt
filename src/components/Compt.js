import React, { useState } from "react";




import "./Compt.css";



function Compt () {

    const [currentValeur,setCurrentValeur] = useState(0);
    const [valeurCompteur, setValeurCompteur] = useState(0)

    const handleChange = (event) => {
        setCurrentValeur(event.currentTarget.value);
      };


      const valid = () => {
          let nb =parseInt(currentValeur);
          setValeurCompteur(nb);
      }



      const Moins = () =>{
        let nb = valeurCompteur;
        nb -= 1;
        setValeurCompteur(nb);
    }


    const Plus = () =>{
        let nb = valeurCompteur;
        nb += 1;
        setValeurCompteur(nb);
    }
    




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
            <input type="number" min="0" value={currentValeur} onChange={(e)=>{handleChange(e)}}></input><br></br>
            Modifier manuellement.. 
            <button onClick={valid}>Valider</button>

            </p>
            
            </div>
           
           
           
            <div className="Bloc3">
                <button onClick={Moins}>-</button>
                <button onClick={Plus}>+</button>

            </div>

        </div>
    )
};


export default Compt;