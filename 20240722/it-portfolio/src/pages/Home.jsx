import Header from "../components/Header";
import img from "../assets/home.jpeg";
import ServiceCard from "../components/ServiceCard";
import { sData } from "../data/student";
import { Fragment } from "react";

const Home = () => {
  return (
    <>
      <Header />
      <section id="service">
        <div className="container">
          <div className="row">
            {sData.map((item, index) => {
              return (
                <Fragment key={index}>
                  <ServiceCard img={img} title={item.name} body={item.desc} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
