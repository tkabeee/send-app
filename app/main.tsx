/**
 * React Native App
 * https://github.com/tkabeee/sendapp
 */

import React, { Component } from 'react'
import {
  Share
} from 'react-native'
import {
  Container, Header, Content,
  Left, Right, Body,
  List, ListItem,
  Title, Text, Button, Icon
} from 'native-base'

interface Props {
}

interface State {
}

export default class App extends Component<Props, State> {
  constructor (props: any) {
    super(props)
  }

  contentShare() {
    Share.share({
      message: 'BAM: we\'re helping your business with awesome React Native apps',
      url: 'http://bam.tech',
      title: 'Wow, did you see that?'
    }, {
      // for Android
      // dialogTitle: '',
      // for iOS
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
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
            <ListItem
              onPress={() => this.contentShare()}
            >
              <Text>sample text</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}