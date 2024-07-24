import { useState } from "react";
import Header from "../components/Header";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  console.log(form);

  const submitHandler = (e) => {
    console.log(e);
  };

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="card p-3">
          <div>
            <h2>Contact Form</h2>
            <p>
              <i>Please let us know your all queries.</i>
            </p>
          </div>
          <div className="mb-3">
            <input
              type="text"
              name=""
              placeholder="Enter Your Name"
              className="form-control"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name=""
              placeholder="Enter Your Email"
              className="form-control"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <button className="btn btn-primary" onClick={submitHandler}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
