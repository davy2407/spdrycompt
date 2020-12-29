import React, { useState } from "react";




import "./Compt.css";



function Compt () {

    const [currentValeur,setCurrentValeur] = useState(0);
    const [valeurCompteur, setValeurCompteur] = useState(0)

    const handleChange = (event) => {
        setCurrentValeur(event.currentTarget.value);
      };


      



     


    
    


    const [classContainerBase , setClassContainerBase] = useState("CompteurContainer");

    const [classContainerValid, setClassContainerValid] = useState("CompteurContainerValidation");

    const [classContainerPLus, setClassContainerPLus] = useState("CompteurContainerPLUS");

    const [classContainerMoins, setClassContainerMoins] = useState("CompteurContainerMOINS")

    const [currentClassContainer, setCurrentClassContainer] = useState(classContainerBase);

    const animationValidation = () => {
        setCurrentClassContainer(classContainerValid);
    }
    const valid = () => {
        animationValidation();
        setTimeout(() => {
            setCurrentClassContainer(classContainerBase);

            
        }, 400);
        setCurrentMax(noMax);
        let nb =parseInt(currentValeur);
        
        if (nb >= 30) {
            setCurrentClassNombre(classNombreMAX);
            setCurrentMax(noMax);
            if (nb==35) {
                setCurrentMax(MaxCli);
                
            } 
            
            
        } else {
            setCurrentClassNombre(classNombreBase)
        }
        setValeurCompteur(nb);
    }

    const animationContainerPlus = () => {
        setCurrentClassContainer(classContainerPLus);
    }


    const animationContainerMoins = () => {
        setCurrentClassContainer(classContainerMoins);
    }





    const Plus = () =>{
        animationContainerPlus();
        setTimeout(() => {
            setCurrentClassContainer(classContainerBase);

            
        }, 400);
        let nb = valeurCompteur;
        nb += 1;
        if (nb >= 30) {
            setCurrentClassNombre(classNombreMAX);
            setCurrentMax(noMax);
            if (nb==35) {
                setCurrentMax(MaxCli);
                
            } 
            
            
        }
        if (nb>35) {
            nb=35;
            setCurrentClassNombre(classNombreMAX);
            setCurrentMax(MaxCli);
        }
        
        
        setValeurCompteur(nb);
    }


    const Moins = () =>{
        animationContainerMoins();
        setTimeout(() => {
            setCurrentClassContainer(classContainerBase);

            
        }, 400);
        let nb = valeurCompteur;
        nb -= 1;
        if (nb<0) {
            nb = 0;
        }
        if (nb >= 30) {
            setCurrentClassNombre(classNombreMAX);
            setCurrentMax(noMax);
            if (nb==35) {
                setCurrentMax(MaxCli);
                
                
                
            } 
            
            
        }
        
         else {
            setCurrentClassNombre(classNombreBase)
        }
        setValeurCompteur(nb);
    }

    const [classNombreBase, setClassNombreBase] = useState("BlocNombreBAse");

    const [classNombreMAX, setClassNombreMAX] = useState("BlocNOmbreRed");

    const [currentClassNombre, setCurrentClassNombre] = useState(classNombreBase);

    const [MaxCli, setMAxCli] = useState("MAX")

    const [noMax, setNoMAx] = useState("");

    const [currentMAx, setCurrentMax] = useState(noMax);


    return (
        <div className={currentClassContainer}>
            <div className="Bloc1">
                <p className={currentClassNombre}>
                    Nombre de clients dans le Magasin : <br></br>
                    <span className="NbClient">{valeurCompteur}</span><br></br>
                    {currentMAx}

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