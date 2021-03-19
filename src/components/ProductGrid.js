import React, { Component } from "react";
import { connect } from 'react-redux';
import { Card, Image, Grid, Label } from "semantic-ui-react";
import FilterBar from './FilterBar';
import { fetchProducts } from '../actions';

const filterOptions = [
  {
    key: "Most Popular",
    text: "Most Popular",
    value: "Most Popular",
  },
  {
    key: "New Arrivals",
    text: "New Arrivals",
    value: "New Arrivals",
  },
  {
    key: "Price (Low-High)",
    text: "Price (Low-High)",
    value: "Price (Low-High)",
  },
  {
    key: "Price (High-Low)",
    text: "Price (High-Low)",
    value: "Price (High-Low)",
  },
];

class ProductGrid extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchProducts();

  }

  renderProducts() {
    console.log(this.props.view);
    return this.props.products.map(product => {
      return (
        <Grid.Column key={product.id}>
          <Card  className="card">
            <Card.Content>
                {product.isNew && <Label color="black" className="newBadge">NEW</Label>}
              <Image src={`/images/${product.image}`} />
                <Card.Header floated = 'left'>{product.name}</Card.Header>
                <Card.Meta  textAlign='right'>{product.price}$</Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    })
  }

  render() {
    return (
      <div className="">
        <FilterBar options = {filterOptions} />
        <Grid columns={3} stackable>
          {this.renderProducts()}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
    view: state.settings.view
  };
}

export default connect(mapStateToProps, { fetchProducts })(ProductGrid)