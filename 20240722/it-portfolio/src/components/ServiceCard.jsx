const ServiceCard = ({ title, body, img }) => {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-3">
        <div className="card my-3">
          <img src={img} alt="" className="img-fluid" />
          <div className="card-details p-3">
            <h2 className="fs-4">{title}</h2>
            <p className="fs-6">{body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
