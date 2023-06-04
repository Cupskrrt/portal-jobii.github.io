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

const Kerja = ({ person }) => (
  <View>
    <Text style={style.heading2}>RIWAYAT BEKERJA</Text>
    <View style={style.dataView}>
      {/* Perusahaan View */}
      <View style={[style.cellView, { width: "50vw" }]}>
        <Text>Nama Perusahaan/Instansi: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.instansi : "-"}</Text>
      </View>
      {/* Current Perusahaan View */}
      <View style={[style.cellView, { width: "50vw" }]}>
        <Text>Nama Perusahaan/Instansi (Masih Bekerja): </Text>
        <Text style={{ fontSize: 9 }}>
          {person ? person.instansiMasihBekerja : "-"}
        </Text>
      </View>
    </View>
  </View>
);

export default Kerja;
