import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { Button,Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class Login extends React.Component{

    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    render(){
        return (

                <View>
                    <View style={styles.title}>
                        <Text style={styles.text}>Salmoney</Text>
                    </View>
                    <View style={styles.imgDisplay}>
                        <Image source={require('../images/LPICON.png')} style={styles.image}/>
                    </View>
                    <View style={styles.form}>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                            <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                            <Input secureTextEntry={true}/>
                            </Item>
                       </Form>
                    </View>
                    <View  style={styles.btn}>
                        <Button rounded onPress={() => this.handleLogin()}>
                            <Text>Login</Text>
                        </Button>
                        <Button rounded light onPress={() => this.handleRegister()}>
                            <Text>Register</Text>
                        </Button>
                    </View>
                </View>

        );
    }

    handleLogin() {
        this.props.navigation.navigate('BorrowForm');
    }
    handleRegister() {
        this.props.navigation.navigate('Register');
    }
}

    
    const styles = StyleSheet.create({
        title: {
            top: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imgDisplay: {
            top: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: 250,
            height: 200,
        },
        text: {
            top: 20,
            color: 'rgb(18, 108, 168)',
            fontSize: 55,
        },
        form: {
            width: 200,
            left: 100,
            justifyContent: 'center',
            top: 40,
        },
        btn: {
            flex: 1,
            flexDirection: 'row',
            top: 100,
            alignItems: 'center',
            justifyContent: 'center',
        }
        

    });
