import React from 'react';
import HogItem from './HogItem'
import HogFilter from './HogFilter'
import hogs from '../porkers_data'
class HogList extends React.Component {
  constructor() {
    super()

    this.state = {
      hogData: hogs,
      sortBy: 'name'
    }
  }

  sortMethod = (sortValue) => {
    if (sortValue === 'weight') {
      this.setState({
        sortBy: 'weight'
      })
      this.state.hogData.sort((a, b) => {
        let a_weight = Object.values(a)[3];
        let b_weight = Object.values(b)[3];

        if (a_weight < b_weight) return -1
        if (a_weight > b_weight) return 1
      })
    } else {
      this.setState({
        sortBy: 'name'
      })
      this.state.hogData.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
      })
    }
  }

  createHogs = (data) => {
    let hogsByName = data.map((hog) => {
      return (
        <HogItem key={hog.name} hogInfo={hog} />
      )
    });
  }

  sortByWeight = () => {

  }

  render() {
    let allHogs = this.state.hogData.map((hog) => {
      return (<HogItem
        key={hog.name}
        hogInfo={hog}
      />)
    });

    return (
      <div>
        <HogFilter
          sortMethod={this.sortMethod}
        />
        {allHogs}
      </div>
    )
  }
}

export default HogList
