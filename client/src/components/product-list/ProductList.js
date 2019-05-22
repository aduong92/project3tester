// imports dependencies and files
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProductCard from "../product-card/ProductCard";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import API from "../../utils/API";
import products from "../hockey.json";
import HockeyCard from "../HockeyCard";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import "./ProductList.css";
//import products from "../../utils/API";

class ProductList extends Component {
    /*
    componentDidMount() {
        API.getProducts(this)
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.log(err));
    }

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }


    render() {
        return (
            <Card style={{ width: '18rem' }}>

                {this.state.products.map(({ name, category, price, description }, i) => {
                    return <div key={i} className="card">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>{description}</p>
                            <p>{category}</p>
                            <p>{price}</p>
                        </Card.Text>
                    </div>
                })}

            </Card>
        );
    }


    */
    
   state = {
    products, 
    clickedHockey:[],
    title: "",
    description: "",
    category: ""
};

componentDidMount() {
    this.loadProductList();
  }

  loadProductList = () => {
    API.getProducts()
      .then(res =>
        this.setState({ hockey: res.data, title: "", description: "", category: "" })
      )
      .catch(err => console.log(err));
  };

  deleteProduct = id => {
    API.deleteProduct(id)
      .then(res => this.loadProductList())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.description && this.state.category) {
      API.saveProduct({
        title: this.state.title,
        description: this.state.description,
        category: this.state.category
      })
        .then(res => this.loadProductList())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
    <div>
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h2>Hockey Gear & Equipment!</h2>
            <h3>Click on an individual product to select your item.</h3>
          </Jumbotron>
        </Col>
      </Row>

    </Container>


      <div className="wrapper">
          <List>
          {this.state.products.map(product => (
              <ListItem key={product.id}>
              <Link to={"/products/" + product.id}>
                  <HockeyCard imageOnClick={this.imageOnClick}
                  id={product.id}
                  key={product.id}
                  image={product.image}
                  />
                  </Link>
                  </ListItem>
          ))}
          </List>
      </div>
  </div>
    );
  }
}

export default ProductList;