import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UserDetail() {
  const { userId } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    if (userId) {
      axios
        .get("http://localhost:3001/api/users/list")
        .then((res) => {
          setDetail(res.data[userId - 1]);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [userId]);

  function handleChange(event) {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(e) {
    alert("Updated");
  }
  return (
    <div className="container">
      <div>
        <label>Id</label>
        <input name="id" value={detail.id || ""} onChange={handleChange} />
      </div>
      <div>
        <label>Name</label>
        <input name="name" value={detail.name || ""} onChange={handleChange} />
      </div>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
