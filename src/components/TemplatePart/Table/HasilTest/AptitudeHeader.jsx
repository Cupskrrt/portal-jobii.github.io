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

const AptitudeHeader = () => (
  <View style={{ display: "flex", flexDirection: "row" }}>
    <Text style={[style.cellView, { width: "50%" }]}>Tipe Kecerdasan</Text>
    <Text style={[style.cellView, { width: "50%" }]}>Nilai</Text>
  </View>
);

export default AptitudeHeader;
