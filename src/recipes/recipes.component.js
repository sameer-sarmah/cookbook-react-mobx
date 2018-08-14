import { inject, observer } from 'mobx-react';
import React, { Component } from "react";
import { RecipeDetail } from './recipe-detail/recipe-detail.component';
import { RecipeList } from './recipe-list/recipe-list.component';
import './recipes.component.css';

@inject("CartStore")
@inject('RecipeStore')
@observer
export class RecipeComponent extends Component {
 
    recipeStore;
    cartStore;

    constructor(props){
    super(props);
     this.recipeStore = this.props.RecipeStore;
     this.cartStore = this.props.CartStore;
   } 

    render() {
        const panel = (
            <div className="flex-item flex-row-container height100pc width100pc" >
                    <div className="width30pc" >{<RecipeList  {...this.props} recipes={this.recipeStore.recipes}/>}</div>
                    <div className="width70pc">{<RecipeDetail  {...this.props} selectedRecipe={this.recipeStore.selectedRecipe}
                        getRecipe={this.recipeStore.getRecipe}  setSelectedRecipe={this.recipeStore.setSelectedRecipe} 
                        addToCart={this.cartStore.addToCart}/>}
                    </div>
            </div>
        );
        return panel;
    }
}

