import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  Grid,
  Cell
} from 'react-md';
import { FieldArray, Field, Formik } from 'formik';
import get from 'lodash/get';
import * as yup from 'yup';
import { renderTextField } from './utils';

export default class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.title = React.createRef();
  }

  componentDidMount() {
    this.focus();
  }

  componentDidUpdate() {
    this.focus();
  }

  setRef = ref => {
    this.title = ref;
  };

  focus() {
    if (this.title) {
      this.title.focus();
    }
  }

  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          Yield: '1',
          ingredients: [],
          equipment: []
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required('required'),
          Yield: yup
            .number('not a number')
            .required('required')
            .positive('must be positive')
            .integer('must be integer'),
          ingredients: yup
            .array()
            .of(yup.string().required('required'))
            .required('Must have ingredients'),
          equipment: yup
            .array()
            .of(yup.string().required('required'))
            .required('Must have equipment')
        })}
        onSubmit={(values, { setSubmitting }) => {
          // By the time it reaches here, our validation should have *actually*
          // been run, and we know the values are valid
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, values, ...bag }) => (
          <form onSubmit={handleSubmit} className="md-text-container">
            <Grid>
              <br />
              <Cell size={12}>
                <h1 className="md-text-center">New Recipe</h1>
              </Cell>
              <Cell size={12}>
                <Field
                  customSize="title"
                  label="Recipe name"
                  placeholder="Chicken Burritos"
                  name="name"
                  refCallback={this.setRef}
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
                              <div key={ing}>
                                <Field
                                  name={`ingredients.${index}`}
                                  label="Name"
                                  placeholder="What are you cooking with?"
                                  error={
                                    !!get(bag.errors, `ingredients[${index}]`)
                                  }
                                  errorText={get(
                                    bag.errors,
                                    `ingredients[${index}]`
                                  )}
                                  component={renderTextField}
                                  inlineIndicator={
                                    <Button
                                      className="text-fields__inline-btn"
                                      icon
                                      onClick={() => arrayHelpers.remove(index)}
                                    >
                                      close
                                    </Button>
                                  }
                                />
                              </div>
                            ))}
                        </CardText>
                        <CardActions centered>
                          <Button
                            type="button"
                            flat
                            onClick={() => arrayHelpers.push('')}
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
                              <div key={ing}>
                                <Field
                                  name={`equipment.${index}`}
                                  label="Name"
                                  placeholder="What are you using to cook?"
                                  error={
                                    !!get(bag.errors, `equipment[${index}]`)
                                  }
                                  errorText={get(
                                    bag.errors,
                                    `equipment[${index}]`
                                  )}
                                  component={renderTextField}
                                  inlineIndicator={
                                    <Button
                                      className="text-fields__inline-btn"
                                      icon
                                      onClick={() => arrayHelpers.remove(index)}
                                    >
                                      close
                                    </Button>
                                  }
                                />
                              </div>
                            ))}
                        </CardText>
                        <CardActions centered>
                          <Button
                            type="button"
                            flat
                            onClick={() => arrayHelpers.push('')}
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
  }
}
