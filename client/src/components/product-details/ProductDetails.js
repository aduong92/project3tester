import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {  }
        };
    }
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => this.setState({ product: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
        <Container fluid>
          
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>PRODUCTS</h1>              
              </Jumbotron>
            </Col>
          </Row>
  
          <Row>
            <Col size="md-10 md-offset-1">
              <article>
                <h4>{this.state.product.name}</h4>
              </article>
            </Col>
          </Row>
          
          <Row>
            <Col size="md-10 md-offset-1">
              <article>
                <h4>{this.state.product.description}</h4>
              </article>
            </Col>
          </Row>
          <Row>
            <Col size="md-10 md-offset-1">
              <article>
                <h4>{this.state.product.category}</h4>
              </article>
            </Col>
          </Row>
  
          <Row>
            <Col size="md-2">
              <Link to="/Products">← Back to Product List</Link>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default ProductDetails;