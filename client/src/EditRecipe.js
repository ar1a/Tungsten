import React from 'react';
import { Connect, query, mutation } from 'urql';
import startsWith from 'lodash/startsWith';
import isNumber from 'lodash/isNumber';
import omit from 'lodash/omit';
import RecipeForm from './RecipeForm';

const RECIPE_QUERY = `
  query($id: ID!) {
    me {
      timeline {
        recipes(where: { id: $id }) {
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
    $equipment: EquipmentUpdateManyInput!
    $ingredients: IngredientUpdateManyInput!
  ) {
    updateRecipe(
      id: $id
      data: {
        name: $name
        yield: $yield
        equipment: $equipment
        ingredients: $ingredients
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
// im so proud of myself
function updateMap(i) {
  const ret = {};
  // if it starts with c its from prisma (cuid)
  ret.update = i.filter(i => startsWith(i.id, 'c')).map(({ id, ...rest }) => ({
    where: { id },
    data: { ...rest }
  }));
  // if it's a number then its from my math.random shit
  ret.create = i.filter(i => isNumber(i.id)).map(i => omit(i, 'id'));
  return ret;
}

const EditRecipe = ({ edit, recipe, history }) => (
  <RecipeForm
    history={history}
    submit={async ({ name, Yield, ingredients, equipment }) => {
      await edit({
        name,
        yield: Yield,
        ingredients: updateMap(ingredients),
        equipment: updateMap(equipment),
        id: recipe.id
      });
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
