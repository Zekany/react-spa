import React from 'react'
import axios from 'axios'

class Dog extends React.Component {
  constructor () {
    super()
    this.state = {
      dog: ''
    }
    this.getDog = this.getDog.bind(this)
  }

  componentWillMount () {
    this.getDog()
  }

  getDog () {
    return axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => this.setState({dog: res.data.message}))
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <div>
          <img src={this.state.dog} alt='dog' />
        </div>
        <DogButton getDog={this.getDog} />
      </div>
    )
  }
}

const DogButton = props => {
  return (
    <button className='btn btn-info' onClick={props.getDog}>Get dog</button>
  )
}

export default Dog
