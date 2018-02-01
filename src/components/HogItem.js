import React from 'react';

class HogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  formatImageName = (hogName) => {
    return hogName.split(' ').join('_').toLowerCase();
  }

  formatStupidData = () => {
    let accessor = Object.values(this.props.hogInfo)[3]
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
        <p>Greased: {this.props.hogInfo.greased.toString()}</p>
        <p>Weight: {Math.round(Object.values(this.props.hogInfo)[3]*324)} pounds</p>
        <p>Highest medal achieved: {Object.values(this.props.hogInfo)[4]}</p>
      </div>
    }
    return (
      <div onClick={this.toggleInfo} className = 'pigTile'>
        <img src={`/hog-imgs/${this.formatImageName(this.props.hogInfo.name)}.jpg`} />
        <h3>{this.props.hogInfo.name}</h3>
        {expandedView}
      </div>
    )
  }
}

export default HogItem
