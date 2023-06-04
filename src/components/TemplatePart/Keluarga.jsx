import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import AnakHeader from "./Table/Keluarga/AnakHeader.jsx";
import AnakRow from "./Table/Keluarga/AnakRow.jsx";

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

const Keluarga = ({ person }) => (
  <View>
    <Text style={style.heading2}>DATA KELUARGA</Text>
    {/* ROW 1 */}
    <View style={style.dataView}>
      <View style={[style.cellView, { width: "50vw" }]}>
        <Text>Jumlah Saudara: </Text>
        <Text>{person ? person.jumlahSaudara : "-"}</Text>
      </View>
      <View style={[style.cellView, { width: "50vw" }]}>
        <Text>Anak Ke: </Text>
        <Text>{person ? person.anakKe : "-"}</Text>
      </View>
    </View>

    {/* ROW 2 */}
    <View style={style.dataView}>
      <View style={[style.cellView, { width: "30vw" }]}>
        <Text>Status Perkawinan: </Text>
        <Text>{person ? person.statusPerkawinan : "-"}</Text>
      </View>
      <View style={[style.cellView, { width: "40vw" }]}>
        <Text>Nama Pasangan: </Text>
        <Text>{person ? person.namaIstriSuami : "-"}</Text>
      </View>
      <View style={[style.cellView, { width: "30vw" }]}>
        <Text>Pekerjaan Pasangan: </Text>
        <Text>{person ? person.pekerjaanPasangan : "-"}</Text>
      </View>
    </View>

    {/* TABLE ANAK */}
    <AnakHeader />
    <AnakRow person={person} />

    {/* ROW 3 */}
    <View style={style.dataView}>
      <View style={[style.cellView, { width: "25vw" }]}>
        <Text>Nama Bapak: </Text>
        <Text>{person ? person.namaOrangTuaLaki : "-"}</Text>
      </View>
      <View style={[style.cellView, { width: "25vw" }]}>
        <Text>Perkerjaan Bapak: </Text>
        <Text>{person ? person.pekerjaanOrangtuaLaki : "-"}</Text>
      </View>
      <View style={[style.cellView, { width: "25vw" }]}>
        <Text>Nama Ibu: </Text>
        <Text>{person ? person.namaOrangtuaPerempuan : "-"}</Text>
      </View>
      <View style={[style.cellView, { width: "25vw" }]}>
        <Text>Pekerjaan Ibu: </Text>
        <Text>{person ? person.pekerjaanOrangtuaPerempuaa : ""}</Text>
      </View>
    </View>

    {/* ROW 5 */}
    <View style={style.cellView}>
      <Text>Alamat Orang Tua: </Text>
      <Text>{person ? person.alamatOrangtua : "-"}</Text>
    </View>
  </View>
);

export default Keluarga;
