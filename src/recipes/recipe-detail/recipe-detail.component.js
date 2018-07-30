import React, { Component } from "react";
import './recipe-detail.component.css';
import PropTypes from "prop-types";

export class RecipeDetail extends Component {

    static propTypes={
        selectedRecipe:PropTypes.object,
        getRecipe:PropTypes.func,
        setSelectedRecipe:PropTypes.func,
        addToCart:PropTypes.func
    };

    createRow(listItem,index) {
        const rows = (<li key={index}>{listItem}</li>);
        return rows;
    };


    componentDidUpdate(prevProps, prevState){
         let recipeID;
         if(!!this.props.match && !!this.props.match.params.id){
             recipeID=this.props.match.params.id;
         }
         const selectedRecipe=this.props.getRecipe.call(this.props.RecipeStore,recipeID);
         if(!!recipeID && recipeID !== prevProps.selectedRecipe.recipe_id){
         this.props.setSelectedRecipe.call(this.props.RecipeStore,selectedRecipe);
         }
    }
    
    render() {
        if (!this.props.selectedRecipe || Object.keys(this.props.selectedRecipe).length === 0) {
            return (<div></div>);
        }
        const table = (
            <div className="height100pc width100pc">
                <div className="flex-column-container height100pc">
                    <div className="flex-row-container flex-item textAlignCenter height55pc" >
                        <div className="flex-item height100pc">
                            <img src={this.props.selectedRecipe.image_url} className="height100pc" />
                        </div>
                        <div className="flex-item text-block">
                            <h2>{this.props.selectedRecipe.title}</h2>
                        </div>
                        <div className="flex-item ">
                            <button type="button" className="add-to-cart"
                            onClick={this.props.addToCart.bind(this.props.CartStore,this.props.selectedRecipe)}>Add</button>
                        </div>
                    </div>

                    <div className="flex-row-container flex-item darkGreyBG height45pc">
                        <div className="flex-item text-block whiteTextColor width40pc marginLeft5pc height100pc">
                            <h2 className="height20pc no-margin">Ingredients:</h2>
                            <ul className="height80pc no-margin overflow-hidden">
                                {this.props.selectedRecipe.ingredients.map(this.createRow)}
                            </ul>
                        </div>
                        <div className="flex-item text-block whiteTextColor width60pc height100pc">
                            <h2 className="height20pc no-margin">Directions:</h2>
                            <ul className="height80pc no-margin  overflow-hidden">
                                {this.props.selectedRecipe.directions.map(this.createRow)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
        return table;
    }
}

