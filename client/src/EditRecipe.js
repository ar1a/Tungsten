import React from 'react';
import { Connect, query, mutation } from 'urql';
import RecipeForm from './RecipeForm';

const RECIPE_QUERY = `
query ($id:ID!){
  me {
    timeline {
      recipes(where: { id: $id}) {
        id
        name
        yield
        equipment {
          id
          name
          washable
          
        }
        ingredients {
          id
          name
          quantity
          scale
        }
      }
    }
  }
}
`;
const EDIT_MUTATION = `
mutation(
  $id: ID!
  $name: String!
  $yield: Int!
  $equipment: [EquipmentCreateInput!]!
  $ingredients: [IngredientCreateInput!]!
) {
  updateRecipe(
    id: $id
    data: {
      name: $name
      yield: $yield
      equipment: { create: $equipment }
      ingredients: { create: $ingredients }
    }
  ) {
    id
    equipment {
      id
      name
      washable
    }
    yield
    ingredients {
      id
      name
      quantity
      scale
    }
  }
}
`;
const EditRecipe = ({ edit, recipe, history }) => (
  <RecipeForm
    history={history}
    submit={async ({ name, Yield, ingredients, equipment }) => {
      await edit({ name, yield: Yield, ingredients, equipment, id: recipe.id });
    }}
    name={recipe.name}
    Yield={recipe.yield}
    ingredients={recipe.ingredients}
    equipment={recipe.equipment}
    edit={recipe.id}
  />
);
export default ({ history, match }) => (
  <Connect
    mutation={{ edit: mutation(EDIT_MUTATION) }}
    query={query(RECIPE_QUERY, { id: match.params.id })}
  >
    {({ loaded, data, edit }) => {
      if (!loaded) return null;
      return (
        <EditRecipe
          edit={edit}
          history={history}
          recipe={data.me.timeline.recipes[0]}
        />
      );
    }}
  </Connect>
);
