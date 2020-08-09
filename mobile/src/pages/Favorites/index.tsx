import React from "react";
import { View, ScrollView } from "react-native";

import styles from "./styles";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title={"Meus proffys favoritos"} />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        
      </ScrollView>
    </View>
  );
}

export default Favorites;
