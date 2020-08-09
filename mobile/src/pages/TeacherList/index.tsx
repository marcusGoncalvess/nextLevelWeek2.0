import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInputKeyPressEventData,
} from "react-native";
import { TextInput, BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFiltersVisible);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Qual a matéria?"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual horário?"
                />
              </View>
            </View>
            
            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>

          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;
