import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

export default function ReceituarioForm() {
  const [receituarios, setReceituarios] = useState([]);
  const [nomeMedico, setNomeMedico] = useState('');
  const [crm, setCrm] = useState('');
  const [data, setData] = useState('');
  const [nomeMedicamento, setNomeMedicamento] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [formaFarmaceutica, setFormaFarmaceutica] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [posologia, setPosologia] = useState('');
  const [duracaoTratamento, setDuracaoTratamento] = useState('');
  const [instrucoesEspeciais, setInstrucoesEspeciais] = useState('');
  
  const handleSave = () => {
    if (nomeMedico.trim() && crm.trim() && data.trim() &&
        nomeMedicamento.trim() && dosagem.trim() && formaFarmaceutica.trim() && quantidade.trim() && posologia.trim() &&
        duracaoTratamento.trim()) {
      
      setReceituarios([...receituarios, {
        id: Date.now().toString(),
        nomeMedico,
        crm,
        data,
        nomeMedicamento,
        dosagem,
        formaFarmaceutica,
        quantidade,
        posologia,
        duracaoTratamento,
        instrucoesEspeciais,
      }]);

      // Resetar os campos do formulário
      setNomeMedico('');
      setCrm('');
      setData('');
      setNomeMedicamento('');
      setDosagem('');
      setFormaFarmaceutica('');
      setQuantidade('');
      setPosologia('');
      setDuracaoTratamento('');
      setInstrucoesEspeciais('');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    }
  };

  const handleDelete = (id) => {
    setReceituarios(receituarios.filter(receituario => receituario.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Receituário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Médico"
        value={nomeMedico}
        onChangeText={setNomeMedico}
      />
      <TextInput
        style={styles.input}
        placeholder="CRM"
        value={crm}
        onChangeText={setCrm}
      />

      <TextInput
        style={styles.input}
        placeholder="Data"
        value={data}
        onChangeText={setData}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome do Medicamento"
        value={nomeMedicamento}
        onChangeText={setNomeMedicamento}
      />
      <TextInput
        style={styles.input}
        placeholder="Dosagem"
        value={dosagem}
        onChangeText={setDosagem}
      />
      <TextInput
        style={styles.input}
        placeholder="Forma Farmacêutica"
        value={formaFarmaceutica}
        onChangeText={setFormaFarmaceutica}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <TextInput
        style={styles.input}
        placeholder="Posologia"
        value={posologia}
        onChangeText={setPosologia}
      />
      <TextInput
        style={styles.input}
        placeholder="Duração do Tratamento"
        value={duracaoTratamento}
        onChangeText={setDuracaoTratamento}
      />

      <TextInput
        style={styles.input}
        placeholder="Instruções Especiais"
        value={instrucoesEspeciais}
        onChangeText={setInstrucoesEspeciais}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <FlatList
        data={receituarios}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.receituarioItem}>
            <Text style={styles.receituarioText}>Nome do Médico: {item.nomeMedico}</Text>
            <Text style={styles.receituarioText}>CRM: {item.crm}</Text>
            <Text style={styles.receituarioText}>Data: {item.data}</Text>
            <Text style={styles.receituarioText}>Nome do Medicamento: {item.nomeMedicamento}</Text>
            <Text style={styles.receituarioText}>Dosagem: {item.dosagem}</Text>
            <Text style={styles.receituarioText}>Forma Farmacêutica: {item.formaFarmaceutica}</Text>
            <Text style={styles.receituarioText}>Quantidade: {item.quantidade}</Text>
            <Text style={styles.receituarioText}>Posologia: {item.posologia}</Text>
            <Text style={styles.receituarioText}>Duração do Tratamento: {item.duracaoTratamento}</Text>
            <Text style={styles.receituarioText}>Instruções Especiais: {item.instrucoesEspeciais}</Text>
            <Text style={styles.receituarioText}>Repetição: {item.repeticao}</Text>
            <Text style={styles.receituarioText}>Assinatura: {item.assinatura}</Text>
            <Text style={styles.receituarioText}>Carimbo: {item.carimbo}</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.deleteText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#38a69d',
    padding: 15,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  receituarioItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  receituarioText: {
    fontSize: 14,
    color: '#666',
  },
  deleteText: {
    color: '#ff0000',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
