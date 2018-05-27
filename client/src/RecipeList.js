import React from 'react';
import { Button, List, ListItem, Cell, Grid } from 'react-md';
import get from 'lodash/get';
import { Connect, query } from 'urql';
import { CSSTransitionGroup } from 'react-transition-group';

const RECIPES_QUERY = query(`
{
  me {
    timeline {
      recipes {
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
`);

const RecipeCell = ({ history, recipe }) => (
  <ListItem
    primaryText={recipe.name}
    secondaryText={`Makes ${recipe.yield} bowls`}
    onClick={() => history.push(`/recipes/${recipe.id}`)}
  />
);

export default ({ history }) => (
  <Grid>
    <Connect query={RECIPES_QUERY}>
      {({ data }) => (
        <Cell size={12}>
          <List className="md-list-no-background">
            <CSSTransitionGroup
              transitionName="list-transition"
              transitionEnterTimeout={250}
              transitionLeaveTimeout={200}
              style={{ width: '100%' }}
            >
              {get(data, 'me.timeline.recipes', []).map(recipe => (
                <RecipeCell history={history} key={recipe.id} recipe={recipe} />
              ))}
            </CSSTransitionGroup>
          </List>
        </Cell>
      )}
    </Connect>
  </Grid>
);
