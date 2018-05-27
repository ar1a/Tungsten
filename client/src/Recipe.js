import React from 'react';
import { Connect, query } from 'urql';
import {
  List,
  ListItem,
  Card,
  CardTitle,
  CardText,
  Grid,
  Cell
} from 'react-md';

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

const Recipe = ({ recipe }) => (
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
    </Cell>
  </Grid>
);

export default ({ match }) => (
  <Connect query={query(RECIPE_QUERY, { id: match.params.id })}>
    {({ loaded, data }) => {
      if (!loaded) return null;
      return <Recipe recipe={data.me.timeline.recipes[0]} />;
    }}
  </Connect>
);
