import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { Button,Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import DatePicker from 'react-native-datepicker';
import NavigationContainer from './NavigationContainer';
export default class Login extends React.Component{

    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

        this.state = {
            date: "2018-6-24"
        };
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <NavigationContainer title='NewlendForm' navigate={navigate}>
                <View>    
                    <View style={styles.form}>
                        <Form>
                            <Item floatingLabel>
                                <Label>借款人</Label>
                            <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>金額</Label>
                            <Input/>
                            </Item>
                            <View style={styles.dateP}>
                                <Item>
                                    <Label>預計還款日</Label>
                                </Item>
                                <DatePicker
        style={{width: 200,top:15}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
                     </View>
                     </Form>
                    </View>
                    <View  style={styles.btn}>
                        <Button rounded onPress={() => this.handleSubmit()}>
                            <Text>Submit</Text>
                        </Button>
                        
                    </View>
                </View>
                
                </NavigationContainer>
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
    text: {
        top: 20,
        color: 'rgb(18, 108, 168)',
        fontSize: 55,
    },
    form: {
        width: 200,
        left: 100,
        justifyContent: 'center',
        top: 100,
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        top: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateP: {
        top: 30,
    }
    

});
