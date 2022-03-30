import React from "react";

/*function Greet()
{
    return <h1>Helmo All</h1>
}*/

// const Greet = (props) => {
//     console.log(props)
//     return (
//     <div>
//         <h1>Hello {props.name} you like {props.heroname}</h1>
//         {props.children}
//     </div>
//     )
// }


// Destructuring props

const Greet = ({name,heroname,children}) => {
    return (
    <div>
        <h1>Hello {name} you like {heroname}</h1>
        {children}
    </div>
    )
}

export default Greet