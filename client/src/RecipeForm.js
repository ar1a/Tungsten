import { Field, FieldArray, Formik } from 'formik';
import get from 'lodash/get';
import omit from 'lodash/omit';
import trim from 'lodash/trim';
import React from 'react';
import { Button } from 'react-md/lib/Buttons';
import { Card, CardActions, CardText, CardTitle } from 'react-md/lib/Cards';
import { Grid, Cell } from 'react-md/lib/Grids';
import { Checkbox } from 'react-md/lib/SelectionControls';
import { CircularProgress as Progress } from 'react-md/lib/Progress';
import { Collapse } from 'react-md/lib/Helpers';
import { Paper } from 'react-md/lib/Papers';
import schema from './RecipeSchema';
import { renderTextField } from './utils';

const onSubmit = (edit, history, submit) => async (
  { name, Yield, ingredients: I, equipment: E },
  { setSubmitting }
) => {
  let ingredients = I;
  if (!edit) {
    ingredients = ingredients.map(i => omit(i, 'id'));
  }
  ingredients = ingredients.map(i => omit(i, '__typename'));
  let equipment = E;
  if (!edit) {
    equipment = equipment.map(e => omit(e, 'id'));
  }
  equipment = equipment.map(e => omit(e, '__typename'));
  try {
    await submit({
      name,
      Yield,
      ingredients,
      equipment
    });
    setSubmitting(false);
    if (edit) {
      history.push(`/recipes/${edit}`);
    } else {
      history.push('/');
    }
  } catch (e) {
    alert(`An error occured: ${e.message}`); // FIXME
    setSubmitting(false);
  }
};

const LoadingSpinner = ({ shouldHide }) => (
  <Cell size={12} desktopSize={8} desktopOffset={2}>
    <Collapse collapsed={shouldHide}>
      <div style={{ height: '52px' }}>
        <Progress id="progress" />
      </div>
    </Collapse>
  </Cell>
);

export default ({
  submit,
  name = '',
  Yield = '1',
  ingredients = [],
  equipment = [],
  history,
  edit = false
}) => (
  <Formik
    initialValues={{
      name,
      Yield,
      ingredients,
      equipment
    }}
    isInitialValid={!!edit}
    validationSchema={schema}
    onSubmit={onSubmit(edit, history, submit)}
  >
    {({ handleChange, handleSubmit, isSubmitting, values, ...bag }) => (
      <form onSubmit={handleSubmit} className="md-text-container">
        <Grid>
          <br />
          <LoadingSpinner shouldHide={!isSubmitting} />
          <Cell size={12}>
            <Field
              customSize="title"
              label="Recipe name"
              placeholder="Chicken Burritos"
              name="name"
              component={renderTextField}
              error={bag.touched.name && !!bag.errors.name}
              errorText={bag.errors.name}
            />
          </Cell>
          <Cell size={12}>
            <Field
              label="Yield (bowls of food)"
              name="Yield"
              type="number"
              placeholder="How many bowls of food will this make?"
              component={renderTextField}
              error={bag.touched.Yield && !!bag.errors.Yield}
              errorText={bag.errors.Yield}
            />
          </Cell>

          {/* FIXME DRY -- refactor this out */}
          <Cell size={12}>
            <Card>
              <CardTitle title="Ingredients" />
              <FieldArray
                name="ingredients"
                render={arrayHelpers => (
                  <div>
                    <CardText>
                      {values.ingredients &&
                        values.ingredients.map((ing, index) => (
                          <span key={ing.id}>
                            <Paper>
                              <div>
                                <Grid>
                                  <Cell size={8}>
                                    <Field
                                      name={`ingredients[${index}].name`}
                                      label="Name"
                                      placeholder="What are you cooking with?"
                                      error={
                                        !!get(
                                          bag.errors,
                                          `ingredients[${index}].name`
                                        )
                                      }
                                      errorText={get(
                                        bag.errors,
                                        `ingredients[${index}].name`
                                      )}
                                      component={renderTextField}
                                      inlineIndicator={
                                        <Button
                                          className="text-fields__inline-btn"
                                          icon
                                          onClick={e => {
                                            if (
                                              trim(
                                                values.ingredients[index].name
                                              ) &&
                                              !e.ctrlKey
                                            ) {
                                              bag.setFieldValue(
                                                `ingredients[${index}].name`,
                                                ''
                                              );
                                            } else {
                                              arrayHelpers.remove(index);
                                            }
                                          }}
                                        >
                                          close
                                        </Button>
                                      }
                                    />
                                  </Cell>
                                  <Cell>
                                    <Field
                                      name={`ingredients[${index}].quantity`}
                                      label="Quantity"
                                      type="number"
                                      placeholder="How much are you cooking with?"
                                      error={
                                        !!get(
                                          bag.errors,
                                          `ingredients[${index}].quantity`
                                        )
                                      }
                                      errorText={get(
                                        bag.errors,
                                        `ingredients[${index}].quantity`
                                      )}
                                      component={renderTextField}
                                    />
                                  </Cell>
                                </Grid>
                              </div>
                            </Paper>
                            <br />
                          </span>
                        ))}
                    </CardText>
                    <CardActions centered>
                      <Button
                        type="button"
                        flat
                        onClick={() =>
                          arrayHelpers.push({
                            id: Math.floor(Math.random() * 1000),
                            name: '',
                            quantity: '1'
                          })
                        }
                        style={{ width: '100%' }}
                      >
                        Add
                      </Button>
                    </CardActions>
                  </div>
                )}
              />
            </Card>
          </Cell>

          <Cell size={12}>
            <Card>
              <CardTitle title="Equipment" />
              <FieldArray
                name="equipment"
                render={arrayHelpers => (
                  <div>
                    <CardText>
                      {values.equipment &&
                        values.equipment.map((ing, index) => (
                          <span key={ing.id}>
                            <Paper>
                              <div>
                                <Grid>
                                  <Cell size={8}>
                                    <Field
                                      name={`equipment[${index}].name`}
                                      label="Name"
                                      placeholder="What are you using to cook?"
                                      error={
                                        !!get(
                                          bag.errors,
                                          `equipment[${index}].name`
                                        )
                                      }
                                      errorText={get(
                                        bag.errors,
                                        `equipment[${index}].name`
                                      )}
                                      component={renderTextField}
                                      inlineIndicator={
                                        <Button
                                          className="text-fields__inline-btn"
                                          icon
                                          onClick={e => {
                                            if (
                                              trim(
                                                values.equipment[index].name
                                              ) &&
                                              !e.ctrlKey
                                            ) {
                                              bag.setFieldValue(
                                                `equipment[${index}].name`,
                                                ''
                                              );
                                            } else {
                                              arrayHelpers.remove(index);
                                            }
                                          }}
                                        >
                                          close
                                        </Button>
                                      }
                                    />
                                  </Cell>
                                  <Cell align="middle">
                                    <Checkbox
                                      name={`equipment[${index}].washable`}
                                      id={`equipment[${index}].washable`}
                                      label="Washable"
                                      checked={values.equipment[index].washable}
                                      onChange={(_, e) => handleChange(e)}
                                    />
                                  </Cell>
                                </Grid>
                              </div>
                            </Paper>
                            <br />
                          </span>
                        ))}
                    </CardText>
                    <CardActions centered>
                      <Button
                        type="button"
                        flat
                        onClick={() =>
                          arrayHelpers.push({
                            id: Math.floor(Math.random() * 1000),
                            name: '',
                            washable: true
                          })
                        }
                        style={{ width: '100%' }}
                      >
                        Add
                      </Button>
                    </CardActions>
                  </div>
                )}
              />
            </Card>
          </Cell>

          <Cell size={12} className="md-text-center">
            <Button
              disabled={isSubmitting || !bag.isValid}
              type="submit"
              primary
              raised
            >
              {edit ? 'Update' : 'Create'}
            </Button>
          </Cell>
        </Grid>
      </form>
    )}
  </Formik>
);
