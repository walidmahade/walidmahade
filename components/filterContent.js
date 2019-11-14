import React from "react";
import LinkIcon from "../components/icons/link"

const FilterContent = ({ data }) => {
    return data.map(item => {
        return (
            <div className="portfolio-item" key={item.id}>
                <img src={item.img} />
                <div className="info">
                    <h4>{item.title}</h4>
                    <a href={item.url} target="_blank">
                        <LinkIcon />
                    </a>
                </div>
            </div>
        )
    });
};

export default FilterContent;