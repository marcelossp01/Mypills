import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function UserHome({ navigation }) { 
  const [medicines, setMedicines] = useState([]);
  const [medicineName, setMedicineName] = useState('');
  const [prescribedBy, setPrescribedBy] = useState('');
  const [crm, setCrm] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [repeatWeekly, setRepeatWeekly] = useState(false);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [notes, setNotes] = useState('');

  const addMedicine = () => {
    if (medicineName.trim() && prescribedBy.trim() && crm.trim()) {
      setMedicines([...medicines, {
        id: Date.now().toString(),
        name: medicineName,
        prescribedBy,
        crm,
        date,
        repeatWeekly,
        daysOfWeek,
        notes
      }]);
      setMedicineName('');
      setPrescribedBy('');
      setCrm('');
      setDate(new Date());
      setRepeatWeekly(false);
      setDaysOfWeek([]);
      setNotes('');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    }
  };

  const deleteMedicine = (id) => {
    setMedicines(medicines.filter(medicine => medicine.id !== id));
  };

  const toggleDayOfWeek = (day) => {
    setDaysOfWeek(prevDays =>
      prevDays.includes(day) ? prevDays.filter(d => d !== day) : [...prevDays, day]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao Home do Usuário!</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Medicamento"
        value={medicineName}
        onChangeText={setMedicineName}
      />
      <TextInput
        style={styles.input}
        placeholder="Prescrito por"
        value={prescribedBy}
        onChangeText={setPrescribedBy}
      />
      <TextInput
        style={styles.input}
        placeholder="CRM"
        value={crm}
        onChangeText={setCrm}
      />
      <View style={styles.dateTimeContainer}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dateText}>{date.toLocaleString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || date;
              setShowDatePicker(false);
              setDate(currentDate);
            }}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setRepeatWeekly(!repeatWeekly)}
      >
        <Text style={styles.checkboxLabel}>Repetir Semanalmente</Text>
        <Text style={styles.checkbox}>{repeatWeekly ? '✔' : '✘'}</Text>
      </TouchableOpacity>
      {repeatWeekly && (
        <View style={styles.weekDaysContainer}>
          {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'].map(day => (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayButton,
                daysOfWeek.includes(day) && styles.dayButtonSelected
              ]}
              onPress={() => toggleDayOfWeek(day)}
            >
              <Text>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder="Anotação"
        value={notes}
        onChangeText={setNotes}
      />

      <TouchableOpacity style={styles.button} onPress={addMedicine}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.receituarioButton}
        onPress={() => navigation.navigate('Receituarios')}
      >
        <Text style={styles.buttonText}>Acessar Receituários</Text>
      </TouchableOpacity>

      <FlatList
        data={medicines}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.medicineItem}>
            <Text style={styles.medicineText}>{item.name}</Text>
            <Text style={styles.medicineDescription}>{item.prescribedBy}</Text>
            <Text style={styles.medicineDescription}>{item.crm}</Text>
            <Text style={styles.medicineDescription}>{item.date.toLocaleString()}</Text>
            <Text style={styles.medicineDescription}>{item.repeatWeekly ? 'Sim' : 'Não'}</Text>
            <Text style={styles.medicineDescription}>{item.daysOfWeek.join(', ')}</Text>
            <Text style={styles.medicineDescription}>{item.notes}</Text>
            <TouchableOpacity onPress={() => deleteMedicine(item.id)}>
              <Text style={styles.deleteText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  dateTimeContainer: {
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginRight: 10,
  },
  checkbox: {
    fontSize: 16,
  },
  weekDaysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  dayButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    margin: 2,
    backgroundColor: '#fff',
  },
  dayButtonSelected: {
    backgroundColor: '#38a69d',
  },
  button: {
    backgroundColor: '#38a69d',
    padding: 15,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  receituarioButton: {
    backgroundColor: '#38a69d',
    padding: 15,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  medicineItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  medicineText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  medicineDescription: {
    fontSize: 14,
    color: '#666',
  },
  deleteText: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
});
