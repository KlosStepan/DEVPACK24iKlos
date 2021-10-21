import React from "react";
import { Alert, Button, Text, TextInput, StyleSheet, Image, Input, View, ViewComponent } from "react-native";

const SignUp = () => {
    return (
        <View style={styles.form}>
            <Text>Register for 24i streaming services</Text>
            <Text />
            <Image source={require('../img/24i_logo.png')} style={{ width: 98, height: 42 }} />
            <Text />
            <Text>Email</Text>
            <TextInput
                style={styles.input}
            />
            <Text>Password</Text>
            <TextInput
                style={styles.input}
            />
            <Button
                title="Sign up"
                color='#B02436'
                onPress={() => Alert.alert('To send Email+Pass to register server')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        borderColor: '#B02436',
        padding: 10,
    }
});
export default SignUp;