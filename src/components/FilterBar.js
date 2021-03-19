import React from 'react';
import { Dropdown, Grid, Header, Segment, Icon } from 'semantic-ui-react';
import { toggleView } from '../actions';
import { connect } from 'react-redux';

class FilterBar extends React.Component {
  // const [view, setView] = useState('grid layout')

  // const handleIconClick = (e, { name }) => {
  //   setView(name);
  //   console.log(name);
  // }

  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column width={2} className="vertical-align-middle">
            <Header as="h4" >Sort by:</Header>
          </Grid.Column>
          <Grid.Column width={6}>
            <Dropdown
              className='filterDropdown'
              placeholder="Most popular"
              fluid
              selection
              options={this.props.options}
            />
          </Grid.Column>
          <Grid.Column width={6}>

          </Grid.Column>
          <Grid.Column width={2} className="vertical-align-middle" >
            <Icon
              link
              name='grid layout'
              size='big'
              color={this.props.view === 'grid layout' ? 'black' : 'grey'}
              onClick={() => {this.props.toggleView('grid layout')}}
            />
            <Icon
              link
              name='list layout'
              size='big'
              color={this.props.view === 'list layout' ? 'black' : 'grey'}
              onClick={() => this.props.toggleView('list layout')}
            />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    view: state.settings.view
  }
}

export default connect(mapStateToProps, { toggleView })(FilterBar);