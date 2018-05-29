import React from 'react';
import { Connect, query, mutation } from 'urql';
import { List, Button, ListItem, Card, CardText, Grid, Cell } from 'react-md';

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
const DELETE_MUTATION = `
  mutation ($id: ID!) {
    deleteRecipe(id: $id) {
      id
    }
  }
`;

const ListCard = ({ title, items }) => (
  <Card>
    <div className="md-card-title md-card-title--primary md-text-center">
      {/* I don't use card title, because we have to set width: 100%
            * but can't with CardTitle */}
      <h2
        className="md-card-title--title md-card-title--large md-text"
        style={{ width: '100%' }}
      >
        {title}
      </h2>
    </div>
    <CardText>
      <List>{items}</List>
    </CardText>
  </Card>
);

const Recipe = ({ recipe, del, history }) => (
  <Grid className="md-text-container">
    <Cell className="md-text-center" size={12}>
      <h3>{recipe.name}</h3>
      <h4>Serves {recipe.yield}</h4>
      <ListCard
        title="Ingredients"
        items={recipe.ingredients.map(ingredient => (
          <ListItem
            key={ingredient.id}
            primaryText={`${ingredient.name} (${ingredient.quantity})`}
          />
        ))}
      />
      <br />
      <ListCard
        title="Equipment"
        items={recipe.equipment.map(equipment => (
          <ListItem
            key={equipment.id}
            primaryText={`${equipment.name} ${
              equipment.washable ? '(Can be washed)' : ''
            }`}
          />
        ))}
      />
      <br />
      <Button
        onClick={() => {
          del({ id: recipe.id }).then(() => {
            history.push('/recipes');
          });
        }}
        iconChildren="delete"
        secondary
        flat
      >
        Delete
      </Button>
    </Cell>
  </Grid>
);

export default ({ history, match }) => (
  <Connect
    query={query(RECIPE_QUERY, { id: match.params.id })}
    mutation={{ del: mutation(DELETE_MUTATION) }}
  >
    {({ loaded, data, del }) => {
      if (!loaded) return null;
      return (
        <Recipe
          history={history}
          recipe={data.me.timeline.recipes[0]}
          del={del}
        />
      );
    }}
  </Connect>
);
