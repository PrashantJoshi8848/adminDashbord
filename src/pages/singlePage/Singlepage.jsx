import "./SinglePage.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Singlepage = () => {
  return (
    <div className="singlePage">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                alt=""
                className="itemImage"
              />
              <div className="details">
                <h1 className="itemName"> jane Doe</h1>
                <div className="DetailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="DetailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue"> +9746373784</span>
                </div>
                <div className="DetailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Kathmandu,Nepal</span>
                </div>
                <div className="DetailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue"> Nepal,Np</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1.2} title={"Last 6 months (Revenue)"} />
          </div>
        </div>

        <div className="buttom">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
