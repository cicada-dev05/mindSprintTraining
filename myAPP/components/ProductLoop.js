import Product from "../jsonFolder/Product.json";
function ProductLoop() {
  return (
    <>
      <table className="table ">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {Product.map((index) => (
            <tr key={index.id}>
              <td>{index.id}</td>
              <td>{index.name}</td>
              <td>{index.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductLoop;
