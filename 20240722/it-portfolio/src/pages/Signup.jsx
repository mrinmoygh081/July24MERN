import { Fragment, useState } from "react";
import Header from "../components/Header";
import { inputChange } from "../utils/smallFun";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = () => {
    console.log("form", form);
  };

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="card p-4 m-5">
          <div className="pb-2">
            <h3>Signup</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam.
            </p>
          </div>
          <div className="pb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={form.name}
              onChange={(e) => inputChange(e, form, setForm)}
            />
          </div>
          <div className="pb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={form.email}
              onChange={(e) => inputChange(e, form, setForm)}
              //   onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="pb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={form.password}
              onChange={(e) => inputChange(e, form, setForm)}
              //   onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="pb-2">
            <button className="btn btn-primary" onClick={handleSignup}>
              SIGNUP
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
