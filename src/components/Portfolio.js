import React from 'react';
import portfolioData from '../data/portfolioData';
import PortfolioGroup from './PortfolioGroup';
import shortid from 'shortid';

export default class Portfolio extends React.Component {

    render() {
        const data = portfolioData.data;

        // find only the categories that have at least one portfolio item
        const itemsPerCat = data.categories.map((cat) => {
            return [cat.title, data.items.filter((item) => {
                return item.categories.indexOf(cat.category) !== -1
            })];
        }).filter((it) => {
            return it[1].length !== 0;
        });
    
        return (
            <section className="app-portfolio" id="app-portfolio">
            {itemsPerCat.map((item) => {
                return <PortfolioGroup groupData={item}  key={shortid.generate()} />
            })}                    
            </section>
        );        
    }

}

