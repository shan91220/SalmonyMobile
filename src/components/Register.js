import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { Button,Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class Register extends React.Component{
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    render(){
        return (

                <View>
                    <View style={styles.title}>
                        <Text style={styles.text}>Join us now!</Text>
                    </View>
                    {/* <View style={styles.display}>
                        <Image source={require('../images/LPICON.png')} style={styles.image}/>
                    </View> */}
                    <View style={styles.form}>
                        <Form>
                            <Item floatingLabel>
                                <Label>username</Label>
                            <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>account</Label>
                            <Input />
                            </Item>
                            <Item floatingLabel >
                                <Label>password</Label>
                            <Input secureTextEntry={true}/>
                            </Item>
                            <Item floatingLabel last>
                                <Label>password again</Label>
                            <Input secureTextEntry={true}/>
                            </Item>
                       </Form>
                    </View>
                    <View  style={styles.btn}>
                        <Button rounded onPress={() => this.handleSubmit()}>
                            <Text>Submit</Text>
                        </Button>
                        <Button rounded light onPress={() => this.handleCancel()}>
                            <Text>cancel</Text>
                        </Button>
                    </View>
                </View>

        );
    }
    handleSubmit() {
        this.props.navigation.navigate('Login');
    }

    handleCancel() {
        this.props.navigation.navigate('Login');
    }
}
    const styles = StyleSheet.create({
        title: {
            top: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            top: 20,
            color: 'rgb(18, 108, 168)',
            fontSize: 55,
        },
        form: {
            width: 250,
            left: 60,
            justifyContent: 'center',
            top: 60,
        },
        btn: {
            flex: 1,
            flexDirection: 'row',
            top: 150,
            alignItems: 'center',
            justifyContent: 'center',
        }
        

    });
