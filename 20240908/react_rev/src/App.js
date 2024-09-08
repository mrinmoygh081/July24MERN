import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data", data);

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <div className="row">
          {data &&
            data.map((item, i) => (
              <div className="col-12 col-md-6">
                <div className="card">
                  <h3>
                    {item.name} ({item.username})
                  </h3>
                  <ul>
                    <li>{item.phone}</li>
                    <li>{item.email}</li>
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
