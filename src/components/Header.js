import React, { Component } from "react";
import { Container, Icon, Input, Image, Menu, Label } from "semantic-ui-react";

export default class Header extends Component {
  state = {};

  handleItemClick = (e, {name }) => this.setState({ activeItem: name})

  render() {
      const { activeItem } = this.state
    return (
      <Menu>
        <Container>
          <Menu.Item>
              <Image src='/images/logo.jpg' size='tiny' />
          </Menu.Item>
          <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
          />
          <Menu.Item
              name='shop'
              active={activeItem === 'shop'}
              onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
              <Menu.Item>
                  <Input icon='search' placeholder ='Search..' />
              </Menu.Item>
              <Menu.Item>
                <Label color='red'>2</Label>
                <Icon size='big' name='shopping cart'/>
                569.98 zł
              </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
