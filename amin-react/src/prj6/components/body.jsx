import { useState } from "react"
import "../style.css"
import Card from "../../prj6/components/card"
export default function Body(){
    const MyScore=[
      {
        img:{
            src:"https://media.khabarvarzeshi.com/d/2022/11/03/4/239812.jpg?ts=1667476341000",
            alt:"sapinto"
        },
        postgame:"  postgame  =  Head coach",
        name:"Ricardo Sapinto",
        age:"age  =  53",
        from:"from  =  Portugal"
    },
        {
            img:{
                src:"",
                alt:"Goalkeeper-esteghlal"
            },
            postgame:"  postgame  =  Goalkeeper",
            shirtnumber:"  shirtnumber  =  1",
            name:"Adan",
            age:"age  =  38",
            from:"from  =  spain"
        }
        ,
           {
              img: {
                src: "https://news-cdn.varzesh3.com/pictures/2025/10/26/C/zquop3gc3.webp",
                alt: "saharkhizan"
              },
              postgame: " postgame  =  Winger",
              shirtnumber: "shirtnumber  =  11",
              name: "saharkhizan",
              age: "age  =  22",
              from: "from  =  Iran"
            },
            {
              img: {
                src: "https://saednews.com/storage/files/post/ec7e2b6c-398e-44d3-9920-719b7ac7f92e-yeP9Fz43Hai7r43k/image.jpg",
                alt: "jasir asani"
              },
              postgame: "winger",
              shirtnumber: 70,
              name: "jasir asani",
              age: 30,
              from: "North Macedonia"
            },
            {
              img: {
                src: "https://www.tarafdari.com/sites/default/files/contents/user76697/news/munir_elhaddadi_esteghlal_alwehdat_goal_2025_1.jpg",
                alt: "munir El hadadi"
              },
              postgame: "winger/Attacker",
              shirtnumber: 17,
              name: "munir El hadadi",
              age: 30,
              from: "spain"
            },
            {
              img: {
                src: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Iran_Football_Premier_League_Aug_26_2025_Esteghlal_vs_Zob_Ahan_Avash_36.jpg",
                alt: "Alireza koshki"
              },
              postgame: "Attacker",
              shirtnumber: 20,
              name: "Alireza koshki",
              age: 25,
              from: "Iran"
            },
            {
              img: {
                src: "https://photokade.com/wp-content/uploads/Am-rz-photokade-com-6.webp",
                alt: "amir mohamad razaghnia"
              },
              postgame: "Midfielder",
              shirtnumber: 8,
              name: "amir mohamad razaghnia",
              age: 19,
              from: "Iran"
            },
            {
              img: {
                src: "https://ts18.tarafdari.com/contents/user76697/news/chshmy.jpg",
                alt: "rozbeh cheshmi"
              },
              postgame: "Defender",
              shirtnumber: 4,
              name: "rozbeh cheshmi",
              age: 32,
              from: "Iran"
            },
            {
              img: {
                src: "https://photokade.com/wp-content/uploads/mehran-ahmadi-f-photokade-com-10.webp",
                alt: "mehran ahmadi"
              },
              postgame: "Attacking midfielder",
              shirtnumber: 87,
              name: "mehran ahmadi",
              age: 27,
              from: "Iran"
            },
            {
              img: {
                src: "https://media.khabarvarzeshi.com/d/2025/07/11/4/395884.jpg?ts=1755978144000",
                alt: "Rustam Ashurmatov"
              },
              postgame: "Defender",
              shirtnumber: 5,
              name: "Rustam Ashurmatov",
              age: 29,
              from: "Uzbekistan"
            },
            {
              img: {
                src: "https://cdn.oddrun.ir/@s/news/images/2025/10/26/17614850842896.jpeg",
                alt: "hosein gudarzi"
              },
              postgame: "postgame  =   Defender",
              shirtnumber: " shirtnumber =  27",
              name: "hosein gudarzi",
              age: "age  =  24",
              from: "from   =   Iran"
            },
            {
              img: {
                src: "https://cdn.oddrun.ir/@s/news/images/2025/10/17/17607246236988.jpeg",
                alt: "saman falah"
              },
              postgame: "  postgame  =  Defender",
              shirtnumber: " shirtnumber  =  19",
              name: "saman falah",
              age: "  age  =  24",
              from: "from  =  Iran"
            }
          ] 
    
    const ScoreEl = MyScore.map((item)=>{
        return(
            <>
            <Card
            postgame= {item.postgame}
            img={item.img}
            shirtnumber={item.shirtnumber}
            name={item.name}
            age={item.age}
            from={item.from}
            />
            </>
        )
    })
    return(
        <>
        
        {ScoreEl}
        </>
    )
}