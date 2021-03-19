import React, { Component } from "react";
import { Dropdown, Menu, Card, Image, Grid, Label } from "semantic-ui-react";

const filterOptions = [
  {
    key: "Sort By",
    text: "Sort By",
    value: "Sort By",
  },
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

const products = [
  {
    key: "1",
    name: "M670BTG",
    image: "M670BTG.png",
    price: 199,
    description: "Comfortable",
    stock: 10,
    isNew: true,
  },
  {
    key: "2",
    name: "M991BTG",
    image: "M991BTG.png",
    price: 399,
    description: "Beautiful",
    stock: 10,
    isNew: false,
  },
  {
    key: "3",
    name: "M1500BTG",
    image: "M1500BTG.png",
    price: 299,
    description: "Godlike",
    stock: 10,
    isNew: false,
  },
  {
    key: "4",
    name: "M991ANI",
    image: "M991ANI.png",
    price: 349,
    description: "dull",
    stock: 10,
    isNew: false,
  },
];

const renderProducts = products.map((product) => {
  return (
    <Grid.Column>
      <Card className="card">
        <Card.Content>
            {product.isNew && <Label color="black" className="newBadge">NEW</Label>}
          <Image src={`/images/${product.image}`} />
            <Card.Header floated = 'left'>{product.name}</Card.Header>
            <Card.Meta  textAlign='right'>{product.price}$</Card.Meta>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
});

export default class ProductGrid extends Component {
  state = {};

  handleFilterChange = () => {};
  render() {
    return (
      <div className="">
        <Menu>
          <Menu.Item className="filterDropdown">
            <p>Sort by:</p>
            <Dropdown
              placeholder="Most popular"
              fluid
              selection
              options={filterOptions}
            />
          </Menu.Item>
        </Menu>
        <Grid columns={3} stackable>
          {renderProducts}
        </Grid>
      </div>
    );
  }
}
