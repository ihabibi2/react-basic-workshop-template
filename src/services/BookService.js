import axios from 'axios'

const PATH = 'https://devin-react-basic-workshop-project.vercel.app/api/books'

let BookService = {}

BookService.get = (callback) => {
  //const PATH = BASE_URL + BOOKS_PATH

  axios.get(PATH, {
    params: {
    	abc : 'def'
    }
  })
  .then((response) => {
    console.log('response', response)
    if(response.status === 200) {
      callback({
        isSuccess: true,
        data: response.data
      })
    } else {
      callback({
        isSuccess: false
      })
    }
  })
}

export default BookService