import { Field, FieldArray, Formik } from 'formik';
import get from 'lodash/get';
import omit from 'lodash/omit';
import trim from 'lodash/trim';
import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardText,
  CardTitle,
  Cell,
  Checkbox,
  CircularProgress as Progress,
  Collapse,
  Grid,
  Paper
} from 'react-md';
import * as yup from 'yup';
import { renderTextField } from './utils';

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
    validationSchema={yup.object().shape({
      name: yup.string().required('required'),
      Yield: yup
        .number('not a number')
        .required('required')
        .positive('must be positive')
        .integer('must be integer'),
      ingredients: yup
        .array()
        .of(
          yup.object().shape({
            name: yup.string().required('required'),
            quantity: yup
              .number('not a number')
              .typeError('quantity must be a number')
              .required('required')
              .positive('must be positive')
          })
        )
        .required('Must have ingredients'),
      equipment: yup
        .array()
        .of(
          yup.object().shape({
            name: yup.string().required('required'),
            washable: yup.bool().required('required')
          })
        )
        .required('Must have equipment')
    })}
    onSubmit={async (
      { name, Yield, ingredients: I, equipment: E },
      { setSubmitting }
    ) => {
      let ingredients = I.map(i => omit(i, 'id'));
      ingredients = ingredients.map(i => omit(i, '__typename'));
      let equipment = E.map(e => omit(e, 'id'));
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
          history.push('/'); // TODO: Redirect if edit
        }
      } catch (e) {
        alert(`An error occured: ${e.message}`); // FIXME
        setSubmitting(false);
      }
    }}
  >
    {({ handleChange, handleSubmit, isSubmitting, values, ...bag }) => (
      <form onSubmit={handleSubmit} className="md-text-container">
        <Grid>
          <br />
          <Cell size={12} desktopSize={8} desktopOffset={2}>
            <Collapse collapsed={!isSubmitting}>
              <div style={{ height: '52px' }}>
                <Progress id="progress" />
              </div>
            </Collapse>
          </Cell>
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
              Create
            </Button>
          </Cell>
        </Grid>
      </form>
    )}
  </Formik>
);
