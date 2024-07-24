function Loops() {
    const array =[{
        id:1,
        name:"Vivek"
    },
    {
         id:2,
        name:"AJ"
    },
    {
         id:3,
        name:"Rifat"
    }

]
    return ( 
        <>
        <ul>
            {
                array.map(item=>(
                    <ul key={item.id}>
                        <li>{item.id}  {item.name}</li>
                    </ul>
                ))
            }
        </ul>
        </>
     );
}

export default Loops;

