import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const EditProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((item) => setData(item.data));
  }, []);

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="card m-2 mx-auto w-50 ">
          <div className="box d-flex w-100 justify-content-around align-items-center ">
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.type}</p>
                <p>{item.cost}</p>
                <Link to={`/home/edit/${item.id}`} className="btn btn-warning"> view </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default EditProduct;
