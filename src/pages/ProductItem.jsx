import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductItem = () => {
  const { id } = useParams();
  const back = useNavigate();
  const [info, setInfo] = useState({});

  const [nName, setnName] = useState("");
  const [nType, setnType] = useState("");
  const [nCost, setnCost] = useState("");


  const check = () => {

    const res = {
      nName: nName.trim().length === 0,
      nType: nType.trim().length === 0,
      nCost: nCost.length === 0,
    };

    if (res.nName || res.nType || res.nCost) {
      return toast.error("O'zgatirish kiritmadingiz", {
        position: "top-right",
        autoClose: 2000,
      });
      
    } else {
         EditPro(),
        toast.success("Muoffaqiyatli o'zgartirildi", {
          position: "top-right",
          autoClose: 2000,
        });
    }
  };



  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((item) => setInfo(item.data));
  }, []);

  function EditPro() {
    return (
      axios.put(`http://localhost:5000/product/${id}`, {
        name: `${nName}`,
        type: `${nType}`,
        cost: `${nCost}`,
      })
    );
  }

  function DeletPro() {
    return (
      axios.delete(`http://localhost:5000/product/${id}`, {}),
      toast.error("Muoffaqiyatli o'chirildi")
    );
  }

  return (
    <div className="card w-50 p-3 mx-auto m-2">
      <ToastContainer />
      <>
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  className="form-control w-100 mx-auto m-2"
                  placeholder="name"
                  value={nName}
                  onChange={(e) => setnName(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control w-100 mx-auto m-2"
                  placeholder="type"
                  value={nType}
                  onChange={(e) => setnType(e.target.value)}
                />

                <input
                  type="number"
                  className="form-control w-100 mx-auto m-2"
                  placeholder="cost"
                  value={nCost}
                  onChange={(e) => setnCost(e.target.value)}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  bekor qilish
                </button>
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    return check();
                  }}
                >
                  {" "}
                  saqlash{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

      <div className="box1  w-100">
        <p>
          tartib rqami : <b>{info.id}</b>
        </p>
        <p>
          nomi : <b>{info.name}</b>
        </p>
        <p>
          turi : <b>{info.type}</b>
        </p>
        <p>
          narxi : <b>{info.cost} </b>
        </p>
      </div>

      <div className="box2">
        <div
          className="btn btn-info w-25 m-2"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          {" "}
          O'zgartirish
        </div>
        <div
          className="btn btn-danger w-25 m-2"
          onClick={() => {
            return (
              DeletPro(),
              setTimeout(() => {
                back("/home/edit");
              }, 500)
            );
          }}
        >
          {" "}
          O'chirish{" "}
        </div>
        <div className="btn btn-primary w-50 m-2" onClick={() => back(-1)}>
          orqaga
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
