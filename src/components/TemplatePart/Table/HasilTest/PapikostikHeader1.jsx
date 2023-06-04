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

const PapikostikHeader1 = () => (
  <View style={{ display: "flex", flexDirection: "row" }}>
    <Text style={[style.cellView, { width: "30%" }]}>Peran</Text>
    <Text style={[style.cellView, { width: "15%" }]}>Nilai</Text>
    <Text style={[style.cellView, { width: "55%" }]}>Keterangan / Arti</Text>
  </View>
);

export default PapikostikHeader1;
