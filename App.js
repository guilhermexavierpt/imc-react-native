import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/styles.js'

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if (imc < 18.6) { alert('Você está abaixo do peso! ' + imc.toFixed(2)) }
    else if (imc >= 18.6 && imc < 24.9) { alert('Peso ideal! ' + imc.toFixed(2)) }
    else if (imc >= 24.9 && imc < 34.9) { alert('Levemente acima do peso! ' + imc.toFixed(2)) }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (Kg)"
        keyboardType="numeric"

      />
      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder='Altura (Cm)'
        keyboardType="numeric"

      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}

      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

