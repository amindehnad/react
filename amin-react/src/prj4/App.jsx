import Card from "./components/card"
export default function App(){
    const contact=[
        {
            name:"amin",
            favcolor:"blue",
            age:23

    },{
        name:"reza",
        favcolor:"red",
        age:21
        }
    ]
    const ContactEl=contact.map( (item , index) =>{
        return(
                <Card  key={index}  name= {item.name} favcolor={item.favcolor} age={item.age} />
        )
    }
)
return(
    <>
        {ContactEl}
    </>
    )
}