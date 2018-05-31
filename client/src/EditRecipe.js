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

function pickId(arr) {
  return arr.map(i => i.id);
}

function getDeleted(newObj, original) {
  let concat = [...pickId(newObj), ...pickId(original)];
  concat = concat.filter(i => startsWith(i, 'c')); // you can't delete new ones!
  const uniques = [];
  // If the user deletes it from the list then the original object will have the
  // ingredient/equipment and the new one won't. If we concat the arrays and
  // then delete *every* element if it is a duplicate, we can essentially diff
  // the array.
  for (let i = 0, l = concat.length; i < l; ++i) {
    if (concat.lastIndexOf(concat[i]) === concat.indexOf(concat[i]))
      uniques.push(concat[i]);
  }
  return uniques.map(x => ({ id: x }));
}

// im so proud of myself
function updateMap(newObj, original) {
  const ret = {};
  // if it starts with c its from prisma (cuid)
  ret.update = newObj
    .filter(i => startsWith(i.id, 'c'))
    .map(({ id, ...rest }) => ({
      where: { id },
      data: { ...rest }
    }));
  // if it's a number then its from my math.random shit
  ret.create = newObj.filter(i => isNumber(i.id)).map(i => omit(i, 'id'));
  // TODO ret.delete = getDeleted
  ret.delete = getDeleted(newObj, original);

  return ret;
}

const EditRecipe = ({ edit, recipe, history }) => (
  <RecipeForm
    history={history}
    submit={async ({ name, Yield, ingredients, equipment }) => {
      await edit({
        name,
        yield: Yield,
        ingredients: updateMap(ingredients, recipe.ingredients),
        equipment: updateMap(equipment, recipe.equipment),
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
