import { Text, View, StyleSheet } from "@react-pdf/renderer";
import PapikostikHeader1 from "./Table/HasilTest/PapikostikHeader1";
import PapikostikHeader2 from "./Table/HasilTest/PapikostikHeader2";
import PapikostikRow1 from "./Table/HasilTest/PapikostikRow1";
import PapikostikRow2 from "./Table/HasilTest/PapikostikRow2";
import React from "react";

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

const HasilTestPapikostik = ({ papikostik }) => (
  <View break>
    <Text style={style.heading2}>Hasil Test Papikostik</Text>
    <PapikostikHeader1 papikostik={papikostik} />
    <PapikostikRow1 papikostik={papikostik} />
    <PapikostikHeader2 papikostik={papikostik} />
    <PapikostikRow2 papikostik={papikostik} />
  </View>
);

export default HasilTestPapikostik;
