import React, { Component } from "react";
import axios from 'axios';
import Placeholder from './GoodReadsPlaceholder';
import FadeIn from "react-fade-in";
const convert = require("xml-js");

export class GoodReads extends Component {

  state = {
    loading: true,
    bookList: []
  }

  fetchApi() {
    this.setState({
      loading: true
    })
    axios.get(`http://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/15082854.xml?key=${process.env.REACT_APP_API_KEY}&v=2`)
    .then(res => {
      setTimeout(() => {
        const data = JSON.parse(
          convert.xml2json(res.data, { compact: true, spaces: 2 })
        );
        const bookList = data.GoodreadsResponse.reviews.review;
        console.log(bookList);
        this.setState({ bookList: bookList, loading: false });
      }, 2000);
    })
  }

  componentDidMount() {
    this.fetchApi();
  }
  
  render() {
    return(
      <div className="bg-gray-100 p-4">
        <h1 className="text-xl text-gray-900 text-center mb-4">
          My Reading List
        </h1>
        <ul>
          {this.state.loading ? (
            <>
              <Placeholder />
              <Placeholder />
              <Placeholder />
            </>
          ) : (
          <FadeIn>
            { this.state.bookList.map((book, index) => 
            <li key={ index } className="w-9/12 m-auto mb-6 bg-white rounded-sm p-4 shadow">
              <figure className="mb-2">
                <img className="m-auto" alt={ 'Image of ' + book.book.title._text } src={ book.book.image_url._text } loading='lazy'></img>
              </figure>  
              <div>              
                <label className="block text-gray-700 font-semibold text-xs mb-1">Book Title</label>
                <h5 className="font-serif text-lg text-gray-900 mb-3 subpixel-antialiased">{ book.book.title._text }</h5>
                <label className="block text-gray-700 font-semibold text-xs mb-1">Book Description</label>
                { book.book.description._text ? (
                  <p className="font-sans text-base text-gray-700 mb-2 subpixel-antialiased" dangerouslySetInnerHTML={{ __html: book.book.description._text }}></p> 
                ) : (
                  <p className="font-sans text-base text-gray-700 mb-2 subpixel-antialiased"> No description provided...</p> 
                ) }
                <a className="text-blue-500 hover:text-blue-800 subpixel-antialiased text-sm" href={ book.book.link._text }>Learn more</a>
              </div>
            </li>) }
          </FadeIn>
        )}
        </ul>
      </div>
      )
  }
}

export default GoodReads