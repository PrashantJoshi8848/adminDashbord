import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revenu</div>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="buttom">
        <div className="featureChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={4} />
        </div>
        <p className="title">Total Sales made Today</p>
        <p className="amount">$550</p>
        <p className="desc">
          Previous transaction processing.Last Payment may Not includede
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.5K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">LastWeeks</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.5K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">LastMonth</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.5K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
