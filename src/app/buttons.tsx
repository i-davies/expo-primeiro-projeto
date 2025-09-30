import { router } from "expo-router";
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DuolingoButton from "../components/DulingoButton";

export default function Buttons(){
    return (
        <View style={styles.container}>
            {/* Botão Padrão */}
            <Button title="Button (Padrão)" />

            {/* TouchableOpacity */}
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Text style={styles.text}>TouchableOpacity</Text>
            </TouchableOpacity>

            {/* Pressable - maior controle e funcionalidades */}
            <Pressable style={({pressed}) => [
                // 1. Estilo base
                styles.button,
                // 2. Estilo específico
                styles.pressable,
                // 3. Estilo condicional
                pressed && styles.pressed
            ]}
            onPress={() => console.log("Clicou no botão")}
            onLongPress={() => console.warn("Segurou no botão")}
            onPressOut={()=> console.log("Largou do botão")} 
            delayLongPress={2000}>
                <Text style={styles.text}>Pressable</Text>
            </Pressable>


            <DuolingoButton />


            {/* Voltar */}
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.backLink}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

// Usando StyleSheet.create() para otimização e organização
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        padding: 32,
        gap: 16,
        backgroundColor: "#f0f0f0"
    },
     button: {
        backgroundColor: "#1d1d1d",
        paddingVertical: 16,
        alignItems: "center",
        borderRadius: 8,
    },
    pressable: {
        backgroundColor: "#ff9800"
    },
    pressed: {
        backgroundColor: '#ff9890',
        opacity: 0.9,
    },
    backLink: {
        textAlign: 'center', // Centraliza o texto
        color: '#333',
        marginTop: 16, // Adiciona um espaço acima do link.
    },
    text: {
        color: "#dfdfdf",
        fontSize: 16,
        fontWeight: 'bold',
    },

})