import React from "react";
import Project from "../Project/Project";
import "./projectlist.scss";
import data from "../../project";

const Projectlist = () => {
  // console.log(data);
  return (
    <div className="projectlistContainer">
      <h1>Project</h1>
      {data.map((item) => {
        return <Project {...item} key={item.id} />;
      })}
    </div>
  );
};

export default Projectlist;
