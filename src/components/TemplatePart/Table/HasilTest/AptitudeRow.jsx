import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

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

const AptitudeRow = ({ aptitude }) => (
  <View>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "50%" }]}>Numerik</Text>
      <Text style={[style.cellView, { width: "50%" }]}>
        {aptitude ? aptitude.numerik : "0"}/3
      </Text>
    </View>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "50%" }]}>Verbal</Text>
      <Text style={[style.cellView, { width: "50%" }]}>
        {aptitude ? aptitude.verbal : "0"}/19
      </Text>
    </View>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "50%" }]}>Induktif</Text>
      <Text style={[style.cellView, { width: "50%" }]}>
        {aptitude ? aptitude.induktif : "0"}/6
      </Text>
    </View>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "50%" }]}>Diagram</Text>
      <Text style={[style.cellView, { width: "50%" }]}>
        {aptitude ? aptitude.diagram : "0"}/19
      </Text>
    </View>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "50%" }]}>Spasial</Text>
      <Text style={[style.cellView, { width: "50%" }]}>
        {aptitude ? aptitude.spasial : "0"}/6
      </Text>
    </View>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "50%" }]}>Logika</Text>
      <Text style={[style.cellView, { width: "50%" }]}>
        {aptitude ? aptitude.logika : "0"}/7
      </Text>
    </View>
  </View>
);

export default AptitudeRow;
