import React from "react";
import PendidikanHeader from "./Table/Pendidikan/PendidikanHeader";
import PendidikanRow from "./Table/Pendidikan/PendidikanRow";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
  heading2: {
    fontSize: 20,
    padding: 10,
  },
  dataView: {
    display: "flex",
    flexDirection: "row",
    height: 200,
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

const Pendidikan = ({ person }) => (
  <View>
    <Text style={style.heading2} break>
      RIWAYAT PENDIDIKAN
    </Text>
    <PendidikanHeader />
    <PendidikanRow person={person} />
  </View>
);

export default Pendidikan;
