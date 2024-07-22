import Header from "../components/Header";

const Contact = () => {
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
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name=""
              placeholder="Enter Your Email"
              className="form-control"
            />
          </div>
          <div>
            <button className="btn btn-primary">SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
