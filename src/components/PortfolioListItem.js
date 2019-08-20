import React from 'react';


const PortfolioListItem = (props) => {
        const $data = props.itemdata;
        const $title = $data.title;
        
        return (
            <div className="portfolio-list-item">
                <div className="portfolio-list-item__item">
                    {$title}
                </div>
            </div>
        );   
}

export default PortfolioListItem;