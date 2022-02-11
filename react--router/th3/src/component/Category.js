import { useNavigate } from "react-router-dom";
function Category() {
  let Navigate = useNavigate();
  const sendDataToProduct = (event) => {
    const location = {
      pathname: "/product",
      state: { categoryId: event.target.value },
    };
    Navigate("location");
  };
  return (
    <div>
      <h2>select : </h2>
      <select onChange={(e) => sendDataToProduct(e)}>
        <option value="1">Honda</option>
        <option value="2">Suzuki</option>
        <option value="3">Yamaha</option>
      </select>
    </div>
  );
}
export default Category;
