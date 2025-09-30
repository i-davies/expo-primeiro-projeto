import React from "react";
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

export default function Inputs(){
    const [ text, setText ] = React.useState("");

    return(
        <KeyboardAvoidingView style={styles.container} behavior={"height"}>
            <TouchableWithoutFeedback style={styles.content} onPress={Keyboard.dismiss}>
                <View style={styles.content}>

                    <Text style={styles.text}>Input: {text}</Text>

                    {/* TextInput */}
                    <TextInput style={styles.input} placeholder="Digite algo aqui..." onChangeText={setText} />

                    {/* TextInput com senha */}
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />

                    {/* TextInput com telefone */}
                    <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" />

                    {/* TextInput com numero */}
                    <TextInput style={styles.input} placeholder="Número" keyboardType="number-pad" />

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

// Usando StyleSheet.create() para otimização e organização
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content:{
        flex: 1,
        gap: 16,
        justifyContent: "center",
        padding: 32,
        backgroundColor: "#f0f0f0"
    },
    text: {
        color: "#1d1d1d",
        fontWeight: "bold",
        fontSize: 24
    },
    input: {
        width: "100%",
        height: 64,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#fff"
    }
})