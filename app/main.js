/**
 * React Native App
 * https://github.com/tkabeee/sendapp
 */

import React, { Component } from 'react'
import {
  Container, Header, Content,
  Left, Right, Body,
  List, ListItem,
  Title, Text, Button, Icon
} from 'native-base'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Sended</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>sample text</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}