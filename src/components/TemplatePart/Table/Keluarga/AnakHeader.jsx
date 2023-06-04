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

const AnakHeader = () => (
  <View style={{ display: "flex", flexDirection: "row" }}>
    <Text style={[style.cellView, { width: "30%" }]}>Nama Anak</Text>
    <Text style={[style.cellView, { width: "40%" }]}>
      Tempat & Tanggal Lahir Anak
    </Text>
    <Text style={[style.cellView, { width: "30%" }]}>Jenis Kelamin Anak</Text>
  </View>
);

export default AnakHeader;
