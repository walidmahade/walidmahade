import React from "react";
import LinkIcon from "../components/icons/link"
import Link from "next/link";

const FilterContent = ({ data, handlePortfolioItemClick }) => {
    return data.map(item => {
        return (
            <div className="portfolio-item" key={item.id}>
                <Link href={item.localUrl}>
                    <img src={item.img} />
                </Link>

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