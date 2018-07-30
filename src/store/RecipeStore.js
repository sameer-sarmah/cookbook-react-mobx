import { observable, action, computed } from 'mobx';
import { RecipeService }  from "../services/recipe.service";

class RecipeStore {
    @observable
    recipes=[];

    @observable
    selectedRecipe= null;

    recipeSvc=new RecipeService();

    constructor(){
        this.recipes=this.recipeSvc.getRecipes();
        this.selectedRecipe=this.recipes[0];
      }
  

     getRecipe(recipeID){
        return this.recipeSvc.getRecipe(recipeID);
     }
 
     @action
     setSelectedRecipe(selectedRecipe){
         this.selectedRecipe=selectedRecipe;
     }

     @action
     setSelectedRecipeById(selectedRecipeID){
         this.selectedRecipe=this.getRecipe(selectedRecipeID);
     }
}

const recipeStore = new RecipeStore();
export default recipeStore;