import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
  heading2: {
    fontSize: 20,
    padding: 10,
  },
  dataView: {
    display: "flex",
    flexDirection: "row",
  },
  cellView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderStyle: "solid",
    borderColor: "#000000",
    borderWidth: 1,
    padding: 10,
  },
});

const Kursus = ({ person }) => (
  <View break>
    <Text style={style.heading2}>KURSUS / TRAINING</Text>
    <View style={style.dataView}>
      {/* Diklat View */}
      <View style={[style.cellView, { width: "100vw" }]}>
        <Text>Pendidikan/Latihan (Diklat): </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.diklat : "-"}</Text>
      </View>
      {/* Kursus View */}
      <View style={[style.cellView, { width: "100vw" }]}>
        <Text>Kursus: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.kursus : "-"}</Text>
      </View>
      {/* Seminar View */}
      <View style={[style.cellView, { width: "100vw" }]}>
        <Text>Seminar, Simposium, Lokakarya: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.seminar : "-"}</Text>
      </View>
    </View>
  </View>
);

export default Kursus;
