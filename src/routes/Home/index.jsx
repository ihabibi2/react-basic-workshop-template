import React from 'react'
import './home.css'


import Card from '../../components/Card'

import BookService from '../../services/BookService'

class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      books : []
    }
  }

  componentDidMount = () => {
    BookService.get((res) => {
      if (res.isSuccess) {
        console.log('response:', res.data)
        this.processResponse(res.data)
      } else {
        alert('fetching failed')
      }
    })
  }

  processResponse = (data) => {
    const apiResponse = data.data

    let toState = apiResponse.map((b) => {
      return {
        title : b.title,
        author : b.author,
        publishedDate : b.published_date,
        rating : {
          score : b.rating.score,
          outOf : b.rating.out_of
        },
        imageUrl : b.image_url
      }
    })

    this.setState({
      books : toState
    }, () => {
      console.log('this.state',this.state)
    })

  }

  render = () => {
    const { books } = this.state
    let display = []

    books.forEach((b) => {
      display.push(
        <Card
          key = { b.title }
          imgUrl = { b.imageUrl }
          title = { b.title }
          author = { b.author }
          publishedYear = { b.publishedDate }
          rating = { b.rating }
        />
      )
    })


    console.log('displayku', display)

    return (
      <div className = 'grid-container'>
        { display }
      </div>
    )
  }
}

export default Home
