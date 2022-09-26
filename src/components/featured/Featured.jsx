import { KeyboardArrowDown, MoreVert } from "@mui/icons-material";
import React from "react";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={`${70}%`} strokeWidth={5} />
        </div>
        <p className="title">Total sale made today</p>
        <p className="amount">%420</p>
        <p className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          sunt culpa ea dicta omnis velit nostrum amet sequi! Asperiores vel
          ducimus assumenda ad maiores esse aliquid quas ab, dolore repudiandae.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowDown />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDown />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult">
              <KeyboardArrowDown />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
