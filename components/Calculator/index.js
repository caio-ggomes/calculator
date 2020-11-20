import React from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators as actions} from './actions';

import Button from './button';

class Calculator extends React.Component {
    render() {
        const { number1, number2, result, plus, minus, times, divide, compute, move, modify1, modify2 } = this.props;

        return(
            <View style={styles.main}>
            <StatusBar barStyle={'light-content'} />
                <View style={styles.container}>
                    <TextInput style={styles.number} value={String(Math.round(number1*100) / 100)} onChangeText={text => modify1(text)}/>
                    <View style={styles.column}>
                        <Button style={styles.operation} iconName="plus" onPress={plus}/>
                        <Button style={styles.operation} iconName="minus" onPress={minus}/>
                        <Button style={styles.operation} iconName="times" onPress={times}/>
                        <Button style={styles.operation} iconName="percent" onPress={divide}/>
                    </View>
                    <TextInput style={styles.number} value={String(Math.round(number2*100) / 100)} onChangeText={text => modify2(text)}/>
                    <Button style={styles.operation} iconName="exchange" onPress={compute}/>
                    <TextInput style={styles.number} value={String(Math.round(result*100) / 100)}/>
                    <Button style={styles.operation} iconName="hand-o-left" onPress={move}/>
                </View>
                <Text>Calculator Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#000000',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'space-between',
    },
    number: {
        flex: 1,
        height: 80,
        width: 160,
        backgroundColor: '#fff',
        color: '#000000',
        fontSize: 50,
        textAlign: 'center',
    },
    column: {
        width: 100,
        height: 250,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'space-between',
    },
    operation: {
        flex: 1,
        color: '#fff',
        borderColor: '#ffffff',
    },
});

function mapStateToProps(state){
    const {number1, number2, result, operation} = state;
    return {
        number1,
        number2,
        result,
        operation,
    };
}

function mapDispatchToProps(dispatch){
    return{
        plus: bindActionCreators(actions.plus, dispatch),
        minus: bindActionCreators(actions.minus, dispatch),
        times: bindActionCreators(actions.times, dispatch),
        divide: bindActionCreators(actions.divide, dispatch),
        compute: bindActionCreators(actions.compute, dispatch),
        move: bindActionCreators(actions.move, dispatch),
        modify1: bindActionCreators(actions.modify1, dispatch),
        modify2: bindActionCreators(actions.modify2, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Calculator);
