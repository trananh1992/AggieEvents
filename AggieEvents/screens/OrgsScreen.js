import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';

import Colors from '../constants/Colors';
import { List, ListItem, Tile, SearchBar, Button, Icon } from 'react-native-elements';

export default class OrgsScreen extends React.Component {
  static navigationOptions = {
    title: 'Aggie Events',
    headerTitleStyle: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 20,
    },
    headerStyle: {
      backgroundColor: Colors.tabBar,
    },
    headerRight: (
      <Button
        icon={
          <Icon
            name='settings'
            color={Colors.iconGray}
          />
        }
        buttonStyle={{
          backgroundColor: 'transparent',
          paddingRight: 14,
        }}
        //onPress={ }
      />
    )
  };

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  orgsList = [
    {
      name: 'TAMU Computing Society',
      discription: 'We like computers!',
      icon: 'computer'
    },
    {
      name: 'Paintball Club',
      discription: 'Gig \'em with PAINTBALL',
      icon: 'format-paint'

    },
    {
      name: 'Alpha Beta Sigma',
      discription: 'Social Fraternity',
      icon: 'arrow-forward'
    },
    {
      name: 'Sigma Gamma Chi',
      discription: 'Service Fraternity',
      icon: 'arrow-back'
    }
    ];



  render() {
    const { search } = this.state;
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'white', flex: 1 }} />
        <LinearGradient
          /* Background gradient on each page of the app */
          colors={[Colors.background1, Colors.background2]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}>

          <View>
            <SearchBar    //doesnt do anything yet
              placeholder='Search student organizations...'
              onChangeText={this.updateSearch}
              value={search}
              lightTheme
              round
              containerStyle={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderColor: 'transparent',
              }}
            />
          </View>

          <ScrollView>

            <View>
              {
                this.orgsList.map((l, i) => (
                <ListItem
                  key={i}
                  leftIcon={{name: l.icon}}
                  title={l.name}
                  titleStyle={styles.eventTitle}
                  subtitle={l.discription}
                  subtitleStyle={styles.eventSubTitle}
                  style={styles.event}
                  chevron
                  onPress={() => {
                    navigate('Org', {
                      name: l.name,
                      icon: l.icon,
                      discription: l.discription,
                    });
                  }}

                />
              ))
              }

            </View>

          </ScrollView>

        </LinearGradient>
      </View>
    );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    color: 'white',
  },
  contentContainer: {
    //paddingTop: 80,
  },
  myFeed: {
    // Container for user's events feed
    paddingTop: '12%', // Use percentages instead of ints for scalability
    paddingBottom: '12%',
  },
  feedTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: "bold",
    padding: '6%',
  },
  eventsCard: {
    backgroundColor: 'transparent',
  },
  event: {
    padding: '2%',
  },
  eventTitle: {
    fontSize: 18,
    color: Colors.almostBlack,
  },
  eventSubTitle: {
    color: Colors.lightGray,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  getStartedText: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
});
