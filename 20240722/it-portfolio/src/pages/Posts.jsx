import { useEffect, useState } from "react";
import Header from "../components/Header";
import { checkTypeArr } from "../utils/smallFun";

const Posts = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    const requestOptions = {
      method: "GET",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <div className="container my-4">
        <div className="row">
          {checkTypeArr(data) &&
            data.map((item, i) => (
              <div className="col-md-6 col-12 mb-3" key={i}>
                <div className="card p-2">
                  <h1>{item.title}</h1>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
