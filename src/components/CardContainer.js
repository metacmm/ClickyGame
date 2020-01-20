import React, { Component } from "react";
import Nav from "./Nav";
import Title from "./Title";
import Footer from "./Footer";
import { CardList, CardItem } from "./CardGroup";
import animals from '../animals.json';

class CardContainer extends Component {
    state = {
        animals: animals,
        score: 0,
        topScore: 0,
        clickedItem: []
    };


    handleClickImage = (event) => {
        const element = event.target;
        console.log(event.target);
        
        if (!this.state.clickedItem.includes(element)) {
            let clicketItemCopy = this.state.clickedItem;
            clicketItemCopy.push(element);
            this.setState({
                score: this.state.score + 1,
                topScore: Math.max(this.state.topScore, this.state.score + 1),
                clickedItem: clicketItemCopy
            });
            
        } else {
            this.setState({
                score: 0,
                clickedItem: []
            });
        }

        this.shuffleArray(this.state.animals);
    }

    shuffleArray = (arrList) =>{
        for (let i = arrList.length - 1; i > 0; i--){
            let rndIdx = Math.floor(Math.random() * (i - 1));
            let temp = arrList[i];
            arrList[i] = arrList[rndIdx];
            arrList[rndIdx] = temp;
        }
        console.log(arrList);
    }

    render() {
        return (
            <div>
                <Nav
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Title />
                <CardList>
                    {this.state.animals.map(item =>
                        <CardItem
                            key={item.id}
                            handleClickImage={this.handleClickImage}
                            image={item.image}
                        />
                    )}
                </CardList>
                <Footer />
            </div>
        );
    }
}

export default CardContainer;