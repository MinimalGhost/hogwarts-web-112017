import React from 'react';

class HogItem extends React.Component {
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      expanded: false
    }
  }

  formatImageName = (hogName) => {
    return hogName.split(' ').join('_').toLowerCase();
  }

  formatStupidData = () => {

  }

  toggleInfo = () => {
    this.setState( prevState => ({
      expanded: !prevState.expanded
    }))
  }

  render() {
    let expandedView = null
    if (this.state.expanded) {
      expandedView =
      <div>
        <p>Specialty: {this.props.hogInfo.specialty}</p>
        <p>Greased: {this.props.hogInfo.greased}</p>
        <p>Highest medal achieved: {}</p>
      </div>
    }
    return (
      <div onClick={this.toggleInfo}>
        <img src={`/hog-imgs/${this.formatImageName(this.props.hogInfo.name)}.jpg`} />
        <h3>{this.props.hogInfo.name}</h3>
        {expandedView}
      </div>
    )
  }
}

export default HogItem
