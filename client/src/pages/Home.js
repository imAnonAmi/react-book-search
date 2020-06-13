//renamed Books.js from Activity 5 as base

import React, { Component } from "react";
import Book from "../components/Book";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import Form from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";
class Home extends Component {
  state = {
    books: [],
    query: "",
    message: "Let's start searching for some books!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  getBooks = () => {
    API.getBooks(this.state.query)
    .then(res =>
      this.setState({
        books: res.data
      })
    )
    .catch(() =>
    this.setState({
      books:[],
      message: "Nope. Try something else."
    })
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() 
  {
    return (
    <Container>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">
              React Google Books Search
            </h1>
            <h2 className="text-center">
              Search for Books. Save Books. Read Books.
            </h2>
          </Jumbotron>
        </Col>
        <Col size ="md-12">
          <Card title="Book Search" icon="far fa-book">
            <Form 
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            query={this.state.query}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Card title="Book Results">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book 
                  key={book.id}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  link={book.volumeInfo.infoLink}
                  authors={book.volumeInfo.authors.join(", ")}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  Button={() => (
                    <button
                      onClick={() => this.handleBookSave(book.id)}
                      className="btn btn-primary ml-2"
                    >
                      Save Book
                    </button>
                  )}
                  />
                ))}
              </List>
            ) : (
              <h3 className="text-center">{this.state.message}</h3>
            )}
          </Card>
        </Col>
      </Row>
    </Container>  
    );

  }
}



export default Home;
