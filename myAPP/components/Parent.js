import Child from "./Child";

function UserInfo({user}){
    return(
        <div className='p-2 m-2' style={{border:'2px solid green'}}>
            <h3>Name:{user.name}</h3>
            <p>Address:{user.address}</p>
        </div>
    )
}
function Parent(){
    const obj={name:"test", address:"UTTAR PRADESH"}
    return(
    <div className="p-2" style={{border:'2px solid red'}}>
        <h1>This is my parent component</h1>
        <Child name="Vivek" age="22"></Child>
        <Child name="Tripathi" age="23"></Child>
        <UserInfo user={obj}/>
    </div>
    )
}

export default Parent