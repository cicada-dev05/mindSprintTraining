function EventHandling() {
    const handleClick = () =>{
        alert('Button CLicked')
        console.log('Button Clicked');
    }

    return <button onClick={handleClick}>Click Me</button>
}

export default EventHandling;