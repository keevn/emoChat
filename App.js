/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class emoChat extends Component<Props> {
    constructor(props) {
        super(props);
        this.unReadMassage = '';
        this.defaultState = 'chat';
        this.state = {
            selectedTab: this.defaultState,
            unReadMassage: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'chat'}
                        title="Chat"
                        renderIcon={() => <Image style={[styles.icon, {tintColor: '#808080'}]}
                                                 source={require('./res/images/ic_chat.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.icon}
                                                         source={require('./res/images/ic_chat.png')}/>}
                        badgeText={this.unReadMassage}
                        onPress={() => {
                            this.unReadMassage = '';
                            this.setState({selectedTab: 'chat'});
                        }}>
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'setting'}
                        title="Setting"
                        renderIcon={() => <Image style={[styles.icon, {tintColor: '#808080'}]}
                                                 source={require('./res/images/ic_settings.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.icon}
                                                         source={require('./res/images/ic_settings.png')}/>}
                        onPress={() => {
                            this.unReadMassage = '2';
                            this.setState({selectedTab: 'setting'});
                        }}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor: '#F5FCcc',
    },
    page2: {
        flex: 1,
        backgroundColor: '#F5FCaa',
    },
    navigatorItem: {
        padding: 5,
    },
    icon: {}
});
