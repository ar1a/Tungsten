import React from 'react';
import { Connect, mutation } from 'urql';
import RecipeForm from './RecipeForm';

// I would chuck this at the bottom of the file, but eslint bitches at me if I
// try and use something before i declare it
const CREATE_MUTATION = `
  mutation(
    $name: String!
    $yield: Int!
    $equipment: [EquipmentCreateInput!]!
    $ingredients: [IngredientCreateInput!]!
  ) {
    createRecipe(
      name: $name
      yield: $yield
      equipment: { create: $equipment }
      ingredients: { create: $ingredients }
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

const CreateRecipe = ({ history }) => (
  <Connect mutation={{ create: mutation(CREATE_MUTATION) }}>
    {({ create }) => (
      <RecipeForm
        history={history}
        submit={async ({ name, Yield, ingredients, equipment }) => {
          await create({ name, yield: Yield, ingredients, equipment });
        }}
      />
    )}
  </Connect>
);

export default CreateRecipe;
