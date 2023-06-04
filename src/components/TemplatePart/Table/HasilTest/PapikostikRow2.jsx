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

const PapikostikRow2 = ({ papikostik }) => (
  <View>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        N - Need to Finish Task
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.N : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Menunda atau menghindari pekerjaan
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        A - Need to Achieve
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.A : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Ketidakpastian tujuan, kepuasan dalam suatu pekerjaan, tidak ada usaha
        lebih
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        P - Need to Control Others
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.P : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Menurunnya keinginana untuk bertanggung jawab pada pekerjaan dan
        tindakan orang lain
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        X - Need to be Noticed
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.X : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>Cenderung pemalu</Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        B - Need to Belong to Groups
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.B : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>Selektif</Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        O - Need for Closeness and Affection
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.O : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Tidak suka hubungan perorangan
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        Z - Need for Change
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.Z : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>Tidak suka berubah</Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        K - Need to be Forceful / Aggresive
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.K : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Menghindari masalah, menulak untuk mengenali situasi sebagai masalah
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        F - Need to Support Authority
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.F : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Cenderung egois, kemungkinan dapat memberontak
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        W - Need for Rules and Supervision
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.W : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Berorientasi pada tujuan, mandiri
      </Text>
    </View>
  </View>
);

export default PapikostikRow2;
