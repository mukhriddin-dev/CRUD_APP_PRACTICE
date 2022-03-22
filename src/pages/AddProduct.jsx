import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = ({ AddProducts }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [cost, setCost] = useState("");

  const check = () => {
    const res = {
      name: name.trim().length === 0,
      type: type.trim().length === 0,
      cost: cost.length === 0,
    };

    if (res.name || res.type || res.cost) {
      return toast.error("Barcha maydonlarni to'ldirish shart", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      AddProducts(name, type, cost),
        toast.success("Muoffaqiyatli qo'shildi", {
          position: "top-right",
          autoClose: 2000,
        });
    }
  };

  return (
    <div className="card w-50 p-2 text-center mx-auto">
      <p>Add product content</p>

      <input
        type="text"
        className="form-control w-50 mx-auto m-2"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        className="form-control w-50 mx-auto m-2"
        placeholder="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <input
        type="number"
        className="form-control w-50 mx-auto m-2"
        placeholder="cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />

      <button
        className="btn btn-success w-50 mx-auto m-1"
        onClick={() => {
          return check(), setName(""), setType(""), setCost("");
        }}
      >
        {" "}
        add product
      </button>

      <ToastContainer />
    </div>
  );
};

export default AddProduct;
