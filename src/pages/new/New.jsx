import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlineIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./New.scss";
import { useState } from "react";
const New = ({ Inputs, Title }) => {
  const [file, setfile] = useState();
  console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{Title}</h1>
        </div>
        <div className="buttom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://www.danchankoinc.com/wp-content/uploads/2017/01/nophoto.png"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="Forminput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlineIcon className="icon" />
                </label>
                <input
                  type={"file"}
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setfile(e.target.files[0])}
                />
              </div>
              {Inputs.map((input) => (
                <div className="Forminput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
