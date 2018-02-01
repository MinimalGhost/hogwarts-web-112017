import React from 'react';
import HogItem from './HogItem'
import HogFilter from './HogFilter'
import hogs from '../porkers_data'

class HogList extends React.Component {
  constructor() {
    super()

    this.state = {
      hogData: hogs,
      sortBy: 'name',
      greased: false
    }
  }

  toggleGrease = () => {
    this.setState( prevState => ({
      greased: !prevState.greased
    }))
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
    return hogsByName
  }

  filterGreased = () => {
    let allHogs;
    let filteredHogs = null
    if (this.state.greased){
      filteredHogs = this.state.hogData.filter((hog) => {
        return hog.greased === true
      })
    }
    
    if (filteredHogs !== null){
      allHogs = this.createHogs(filteredHogs)
    } else {
      allHogs = this.createHogs(this.state.hogData)
    }

    return allHogs
  }



  render() {
    let allHogs = this.filterGreased()
    return (
      <div>
        <HogFilter
          sortMethod={this.sortMethod} toggleGrease = {this.toggleGrease}
        />
        {allHogs}
      </div>
    )
  }
}

export default HogList
