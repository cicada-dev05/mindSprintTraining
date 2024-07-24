function Child(props) {
  const name = props.name;
  const age = props.age;
  return (
    <div>
       <h3>
              {name}: {age}
            </h3>
    </div>
  );
}

export default Child;
