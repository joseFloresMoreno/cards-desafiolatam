import React, { Component } from 'react';
import {
    Card as CardRS, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, CardColumns
  } from 'reactstrap';

import { users } from '../../utils/mock-data';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users,  
        };
    }

    getAlive = a => a ? 'Vivo' : 'Muerto';
    getAction = a => a ? 'Matar' : 'Revivir';

    handlerToggleAlive = (user) => {
        const i = this.state.users.findIndex(e => e.id === user.id);
        return (event) => {
            const nL = this.state.users;
            nL[i].alive = !nL[i].alive;

            this.setState({
                users: nL,
            })
        }
    }
    render () {
        return(
            <div>
                <Container>
                    <CardColumns>
                            {this.state.users.map(elm => (
                                <CardRS key={elm.id}>
                                    <CardImg  src={'https://picsum.photos/500/300?random=' + elm.id } />
                                    <CardBody>
                                    <CardTitle><strong>Nombre: </strong>{elm.name}</CardTitle>
                                    <CardSubtitle><strong>Edad: </strong>{elm.age}</CardSubtitle>
                                    <CardText><strong>Estado: </strong>{this.getAlive(elm.alive)}</CardText>
                                    <Button block color={elm.alive ? 'danger' : 'success'} onClick={this.handlerToggleAlive(elm)} >
                                            {this.getAction(elm.alive)}
                                    </Button>
                                    </CardBody>
                                </CardRS>
                            ))}
                    </CardColumns>    
                </Container>    
                
            </div>
        )
    }
}

export default Card;