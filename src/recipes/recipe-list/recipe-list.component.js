import React, { Component } from "react";
import './recipe-list.component.css';
import PropTypes from "prop-types";
import ReactTooltip from 'react-tooltip';

export class RecipeList extends Component {

    static propTypes={
        recipes:PropTypes.array,
        history:PropTypes.any
    };

    createRow(recipeItem) {
    
        const rows = (<div>
        <li data-tip={recipeItem["social_rank"]} key={recipeItem.recipe_id} onClick={this.listItemClicked.bind(this,recipeItem)}>
        {recipeItem["title"]}
        </li>
        <ReactTooltip place="right" type="light" effect="solid" getContent={(dataTip) => ` ${dataTip}`}/>
        </div>);
        return rows;
    };

    render() {
        if (!this.props.recipes || this.props.recipes.length === 0) {
            return (<div></div>);
        }
        const table = (
            <div className="flex-column-container lightBlueBG scroll-box">
                <div className="flex-item text-block paleBlackTextColor ">
                    <ul className="recipe-item">
                        {this.props.recipes.map(this.createRow.bind(this))}
                    </ul>
                </div>
            </div>
        );
        return table;
    }

    listItemClicked(recipe) {
        this.props.history.push(`/recipes/${recipe.recipe_id}`)
    }
}
