import "../sass/notfound.scss";
import notf from "../assets/notfound.png";
function Notfound() {
  return (
    <div className="notfound">
      <h3>Loading....</h3>
      <img alt="notfound" src={notf}></img>
    </div>
  );
}
export default Notfound;
