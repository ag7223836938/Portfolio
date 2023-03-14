import "./WorkCardStyles.css";
import React from 'react'
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val,index) => {
                return (
                    <WorkCard 
                        key={index}
                        imgsrc={val.imgsrc}
                        text={val.text}
                        title={val.title}
                        source={val.source}
                        view={val.view}
                    />
                );
            })}
        </div>
    </div>
  )
}

export default Work;