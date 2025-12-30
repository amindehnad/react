import Body from "./compo/body";
import { nanoid } from "nanoid"
import { useState } from "react";
export default function App(){
    function genrateNewDice(){
        const allDice = []
            for (let i =0 ; i <10 ; i++){
                let randumNumber =Math.ceil( Math.random()*6)
                allDice.push(
                    {
                        id: nanoid(),
                        value:randumNumber,
                        isHeld:false
                    }
                )
            }
        const styles={
            backgroundColor : props.isHeld ? "#59E391" :"#fff"
        }
        return allDice
    }
    const [dice , SetDice]=useState()


        
            function holdHandler(id){
                setDices( pervDice=>pervDice.map( item=>
                    item.id ===id ? {...item , isHeld : !item.isHeld}:item
                )
            )
        }
            function rollDice(){
                setDices(pervDice=>pervDice.map( dice=>
                    dice.isHeld?dice:{
                        ...dice,
                        value :Math.ceil( Math.random() * 6)
                    }
                    
                )
            )
        }
        const DiceEl=Dices.map(   dice=>{
            return(
                <Body
                isHeld={dice.isHeld}
                value={dice.value}
                id={dice.id}
                holdHandler={()=>holdHandler(dice.id)}
                />
            )
        })
            return(
        <>
            <div className="conteiner">
                    <div className="top"></div>
                    <div className=""></div>
            </div>        
        </>
    )
}