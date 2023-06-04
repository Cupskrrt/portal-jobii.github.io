import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

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

const Pribadi = ({ person }) => (
  <View>
    <Text style={style.heading2}> PRIBADI </Text>
    {/* ROW 1 */}
    <View style={style.dataView}>
      <View style={[style.cellView, { width: "50vw" }]}>
        <Text>Email: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.email : "-"}</Text>
      </View>
      <View style={[style.cellView, { width: "50vw" }]}>
        <Text>Nama Karyawan: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.nama : "-"}</Text>
      </View>
    </View>
    {/* ROW 2 */}
    <View style={style.dataView}>
      <View style={[style.cellView, { width: "20vw" }]}>
        <Text>Umur: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.umur : "-"}</Text>
      </View>
      <View style={[style.cellView, { width: "30vw" }]}>
        <Text>Tempat & Tanggal Lahir: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.ttl : "-"}</Text>
      </View>
      <View style={[style.cellView, { width: "20vw" }]}>
        <Text>Agama: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.agama : "-"}</Text>
      </View>
      <View style={[style.cellView, { width: "30vw" }]}>
        <Text>Kewarganegaraan: </Text>
        <Text style={{ fontSize: 9 }}>
          {person ? person.kewarganegaraan : "-"}
        </Text>
      </View>
    </View>
    {/* ROW 3 */}
    <View style={style.dataView}>
      <View style={[style.cellView, { width: "25vw" }]}>
        <Text>Tinggi Badan: </Text>
        <Text style={{ fontSize: 9 }}>
          {person ? person.tinggiBadan : "-"} cm
        </Text>
      </View>
      <View style={[style.cellView, { width: "25vw" }]}>
        <Text>Berat Badan: </Text>
        <Text style={{ fontSize: 9 }}>
          {person ? person.beratBadan : "-"} kg
        </Text>
      </View>
      <View style={[style.cellView, { width: "25vw" }]}>
        <Text>Golongan darah: </Text>
        <Text style={{ fontSize: 9 }}>
          {person ? person.golonganDarah : "-"}
        </Text>
      </View>
      <View style={[style.cellView, { width: "25vw" }]}>
        <Text>Hobi: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.hobi : "-"}</Text>
      </View>
    </View>
    {/* ROW 4 */}
    <View style={style.dataView}>
      <View style={[style.cellView, { width: "50vw" }]}>
        <Text>Alamat Domisili: </Text>
        <Text style={{ fontSize: 9 }}>
          {person ? person.alamatDomisili : "-"}
        </Text>
      </View>
      <View style={[style.cellView, { width: "50vw" }]}>
        <Text>Alamat KTP: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.alamatKtp : "-"}</Text>
      </View>
    </View>
    {/* ROW 5 */}
    <View style={style.dataView}>
      <View style={[style.cellView, { width: "50vw" }]}>
        <Text>No. HP: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.noHp : "-"}</Text>
      </View>
      <View style={[style.cellView, { width: "50vw" }]}>
        <Text>No. KTP: </Text>
        <Text style={{ fontSize: 9 }}>{person ? person.noKtp : "-"}</Text>
      </View>
    </View>
  </View>
);

export default Pribadi;
