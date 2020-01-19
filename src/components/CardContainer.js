import React, { Component } from "react";
import Nav from "./Nav";
import Title from "./Title";
import Footer from "./Footer";
import { CardList, CardItem } from "./CardGroup";
import animals from '../animals.json';

class CardContainer extends Component {
    state = {
        animals: animals
    };

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Nav />
                <Title />
                <CardList>
                    {this.state.animals.map(item => 
                        <CardItem
                            image={item.image}
                            istarget={item.istarget}
                        />
                    )}
                </CardList>
                <Footer />
            </div>
        );
    }
}

export default CardContainer;