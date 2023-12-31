import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = props => {
    const { placeholder, reff } = props;
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical:5,
            marginBottom: 10,
            height: 90,
            width: '100%'
        },
        verticalLine: {
            backgroundColor: 'black',
            width: 5,
            height: '85%',
        },
        horizontalLines: {
            borderTopWidth: 5,
            borderBottomWidth: 5,
            borderColor: 'black',
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row'
          },
        inputStyle: {
            color: '#212529',
            flex: 1,
            fontFamily: 'PressStart',
            height: "100%",
            fontSize: 20,
            paddingHorizontal: 10
        }
    });

    return (
        <View style={styles.container} pointerEvents={props.pointerEvents}>
            <View style={styles.verticalLine} />
            <View style={styles.horizontalLines} >
                <TextInput
                    ref={reff}
                    {...props}
                    maxFontSizeMultiplier={1.2}
                    style={styles.inputStyle}
                    placeholder={placeholder}
                />
            </View>
            <View style={styles.verticalLine} />
        </View>
    );
};

export default Input