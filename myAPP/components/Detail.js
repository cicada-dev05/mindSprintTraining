function Details({ data }) {
  return (
    <>
      <div>
        <h3>Detail Component</h3>
        <h3>{data.id}</h3>
        <h3>{data.name}</h3>
      </div>
    </>
  );
}

export default Details;
