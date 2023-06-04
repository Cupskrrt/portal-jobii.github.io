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

const PendidikanRow = ({ person }) => (
  <View style={{ display: "flex", flexDirection: "row" }}>
    <View style={{ width: "30vw" }}>
      <Text style={style.cellView}>SD</Text>
      <Text style={style.cellView}>SMP</Text>
      <Text style={style.cellView}>SMA</Text>
      <Text style={style.cellView}>Universitas/Perguruan Tinggi</Text>
    </View>
    <View style={{ width: "20vw" }}>
      <Text style={style.cellView}>{person ? person.namaSD : "-"}</Text>
      <Text style={style.cellView}>{person ? person.namaSMP : "-"}</Text>
      <Text style={style.cellView}>{person ? person.namaSMASMK : "-"}</Text>
      <Text style={style.cellView}>
        {person ? person.namaPerguruanTinggi : "-"}
      </Text>
    </View>
    <View style={{ width: "15vw" }}>
      <Text style={style.cellView}>{person ? person.kotaSD : "-"}</Text>
      <Text style={style.cellView}>{person ? person.kotaSMP : "-"}</Text>
      <Text style={style.cellView}>{person ? person.kotaSMASMK : "-"}</Text>
      <Text style={style.cellView}>
        {person ? person.kotaPerguruanTinggi : "-"}
      </Text>
    </View>
    <View style={{ width: "20vw" }}>
      <Text style={style.cellView}>-</Text>
      <Text style={style.cellView}>-</Text>
      <Text style={style.cellView}>{person ? person.jurusanSMASMK : "-"}</Text>
      <Text style={style.cellView}>{person ? person.bidangJurusan : "-"}</Text>
    </View>
    <View style={{ width: "15vw" }}>
      <Text style={style.cellView}>
        {person ? person.tahunKelulusanSD : "-"}
      </Text>
      <Text style={style.cellView}>
        {person ? person.tahunKelulusanSMP : "-"}
      </Text>
      <Text style={style.cellView}>
        {person ? person.tahunKelulusanSMASMK : "-"}
      </Text>
      <Text style={style.cellView}>
        {person ? person.tahunKelulusanPerguruanTinggi : "-"}
      </Text>
    </View>
  </View>
);

export default PendidikanRow;
