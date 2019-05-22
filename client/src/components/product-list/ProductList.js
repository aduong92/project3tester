// imports dependencies and files
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProductCard from "../product-card/ProductCard";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import API from "../../utils/API";
//import products from "../../utils/API";

class ProductList extends Component {
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

                {this.state.products.map(({ name, category, price }, i) => {
                    return <div key={i} className="card">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>{category}</p>
                            <p>{price}</p>
                        </Card.Text>
                    </div>
                })}

            </Card>
        );
    }


    /*
        // When hockey product photo is clicked
        hockeyOnClick = event => {
            const currentHockey = event.target.alt;
            const hockeyClicked = this.state.clickedHockey.indexOf(currentHockey);
    
            // Hockey product opens to a new window where you can purchase the product
            if (hockeyClicked) {
                this.setState({
                    hockey: this.state.hockey(function(a, b) {
                        return 
                    })
                })
            }
    
        }
    
    
        render() {
            return (
                <div>
                    <div className="wrapper">
                        <List>
                        {this.state.products.map(product => (
                            <ListItem key={product.id}>
                            <Link to={"/products/" + product.id}>
                                <ProductCard imageOnClick={this.imageOnClick}
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
        */
}

export default ProductList;