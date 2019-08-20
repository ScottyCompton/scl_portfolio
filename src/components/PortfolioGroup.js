import React from 'react';
import PortfolioListItem from './PortfolioListItem';
import shortid from 'shortid';



const PortfolioGroup = ($props) => {
    const $categoryTitle = $props.groupData[0];
    const $groupData = $props.groupData[1];
    
    console.log($groupData);

    return (
        <div className="portfolio-group">
            <h1 className="portfolio-group__title">{$categoryTitle}</h1>
            <div className="portfolio-group__list">            
                {$groupData.map((item) => {
                    return <PortfolioListItem itemdata={item}  key={shortid.generate()} />
                })}        
            </div>                    
        </div>
    );
    
}

export default PortfolioGroup;