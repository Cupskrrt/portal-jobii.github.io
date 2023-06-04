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

const PendidikanHeader = () => (
  <View style={{ display: "flex", flexDirection: "row" }}>
    <Text
      style={[
        style.cellView,
        { textAlign: "center", fontWeight: "extrabold", width: "30%" },
      ]}
    >
      Tingkat
    </Text>
    <Text
      style={[
        style.cellView,
        { textAlign: "center", fontWeight: "extrabold", width: "20%" },
      ]}
    >
      Nama Sekolah
    </Text>
    <Text
      style={[
        style.cellView,
        { textAlign: "center", fontWeight: "extrabold", width: "15%" },
      ]}
    >
      Kota
    </Text>
    <Text
      style={[
        style.cellView,
        { textAlign: "center", fontWeight: "extrabold", width: "20%" },
      ]}
    >
      Jurusan
    </Text>
    <Text
      style={[
        style.cellView,
        { textAlign: "center", fontWeight: "extrabold", width: "15%" },
      ]}
    >
      Tahun
    </Text>
  </View>
);

export default PendidikanHeader;
