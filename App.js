import {StatusBar} from 'expo-status-bar';
import {Button, ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

import React from 'react'

export default function App() {

    const [checked, setChecked] = React.useState('standard');
    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [bmi, setBmi] = React.useState();
    const [bmiText, setBmiText] = React.useState('');
    const [placeholderHeight, setPlaceHolderHeight] = React.useState('cm');
    const [placeholderWeight, setPlaceHolderWeight] = React.useState('km');

    function setRadioStandard() {
        setChecked('standard')
        setPlaceHolderHeight('cm')
        setPlaceHolderWeight('kg')
    }

    function setRadioMatric() {
        setChecked('matric')
        setPlaceHolderHeight('inch')
        setPlaceHolderWeight('lbs')
    }

    function calculateBMI() {

        var resultBMI = 0;
        setHeight(height)
        setWeight(weight)

        if (height <= 0) {
            alert('Please enter valid your height')
            return;
        }
        if (weight <= 0) {
            alert('Please enter valid your weight')
            return;
        }

        if (checked === 'standard') {
            resultBMI = (parseFloat(weight) * 10000) / ((parseFloat(height) * (parseFloat(height))))

        } else if (checked === 'matric') {
            resultBMI = (parseFloat(weight) * 703) / ((parseFloat(height) * (parseFloat(height))))
        }

        resultBMI = resultBMI.toFixed(2)
        setBmi(resultBMI)

        if (resultBMI < 18.5) {
            setBmiText('Underweight')
        } else if (resultBMI >= 18.5 && resultBMI < 25) {
            setBmiText('Normal weight')
        } else if (resultBMI >= 25 && resultBMI < 30) {
            setBmiText('Overweight')
        } else {
            setBmiText('Obesity')
        }
    }

    return (

        <ImageBackground source={require("./assets/background.jpg")}
                         style={{width: "100%", height: "100%"}}>
            <View style={styles.container}>

                <Text style={styles.lblTitle}>BMI Calculator</Text>


                <View style={styles.modelView}>

                    <Text style={{padding: 5}}>Standard</Text>
                    <RadioButton
                        value="standard"
                        title="test"
                        status={checked === 'standard' ? 'checked' : 'unchecked'}
                        onPress={() => setRadioStandard()}
                    />

                    <Text style={{padding: 5}}>Matric</Text>
                    <RadioButton
                        value="matric"
                        status={checked === 'matric' ? 'checked' : 'unchecked'}
                        onPress={() => setRadioMatric()}
                    />
                </View>
                <View style={styles.subView}>

                    <Text style={styles.lblSubTitle}>My Height</Text>
                    <TextInput
                        placeholder={placeholderHeight}
                        keyboardType="number-pad"
                        style={styles.input}
                        defaultValue={height}
                        onChangeText={height => setHeight(height)}/>
                    <Text style={styles.smallText}>{placeholderHeight}</Text>

                </View>

                <View style={styles.subView}>

                    <Text style={styles.lblSubTitle}>My Weight</Text>
                    <TextInput
                        placeholder={placeholderWeight}
                        keyboardType="number-pad"
                        style={styles.input}
                        defaultValue={weight}
                        onChangeText={weight => setWeight(weight)}/>
                    <Text style={styles.smallText}>{placeholderWeight}</Text>

                </View>


                <View style={styles.btnSubmit}>
                    <Button
                        onPress={() => calculateBMI()}
                        title="Complete BMI"
                        color="#841584"/>

                </View>

                <View style={styles.modelView}>
                    <Text style={styles.lblResult}>Result: {bmi}</Text>
                    <Text style={styles.lblResult}>{bmiText}</Text>
                </View>
                <StatusBar style="auto"/>


            </View>
        </ImageBackground>

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subView: {
        flexDirection: 'row'
    },
    modelView: {
        flexDirection: 'row',
        justifyContent: "center",
        alignSelf: "center",
        margin: 20
    },
    lblTitle: {
        color: "#830587",
        fontWeight: 'bold',
        alignSelf: "center",
        marginTop: 90,
        fontSize: 36
    },
    lblSubTitle: {
        color: "#ff6666",
        fontWeight: 'normal',
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 24,
        margin: 40
    },
    smallText: {
        color: "#ff6666",
        fontSize: 15,
        marginTop: 40
    },

    btnSubmit: {
        marginHorizontal: 64,
        margin: 20
    },
    btnSubmitText: {width: 50},
    lblResult: {
        margin: 24,
        fontSize: 24
    },


    input: {
        fontSize: 24,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        height: 40,
        marginTop: 40,
        marginBottom: 40,
        width: 120,
        justifyContent: "center",
        alignSelf: "center"

    }
});
