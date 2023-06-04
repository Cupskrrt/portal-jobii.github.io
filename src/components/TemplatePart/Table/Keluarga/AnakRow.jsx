import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";

const style = StyleSheet.create({
  cellView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderStyle: "solid",
    borderColor: "#000000",
    borderWidth: 1,
    padding: 5,
  },
});

const AnakRow = ({ person }) => (
  <View style={{ display: "flex", flexDirection: "row" }}>
    <View style={{ width: "30%" }}>
      <Text style={style.cellView}>
        {person ? person.namaAnakPertama : "-"}
      </Text>
      <Text style={style.cellView}>{person ? person.namaAnakKedua : "-"}</Text>
      <Text style={style.cellView}>{person ? person.namaAnakKetiga : "-"}</Text>
    </View>
    <View style={{ width: "40%" }}>
      <Text style={style.cellView}>{person ? person.ttlAnakPertama : "-"}</Text>
      <Text style={style.cellView}>{person ? person.ttlAnakKedua : "-"}</Text>
      <Text style={style.cellView}>{person ? person.ttlAnakKetiga : "-"}</Text>
    </View>
    <View style={{ width: "30%" }}>
      <Text style={style.cellView}>
        {person ? person.jenisKelaminAnakPertama : "-"}
      </Text>
      <Text style={style.cellView}>
        {person ? person.jenisKelaminAnakKedua : "-"}
      </Text>
      <Text style={style.cellView}>
        {person ? person.jenisKelaminAnakKetiga : "-"}
      </Text>
    </View>
  </View>
);

export default AnakRow;
