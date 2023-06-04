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

const PapikostikRow1 = ({ papikostik }) => (
  <View>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        G - Hard Intense Worked
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.G : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Bekerja untuk kesenangan saja, bukan untuk hasil optimal
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        L - Leadership Role
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.L : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Cenderung tidak secara aktif menggunakan orang lain lama bekerja
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        I - Decision Making
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.I : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Ragu - menolak mengambil keputusan
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>T - Pace</Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.T : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Melakukan segala sesuatu menurut kemauannya sendiri
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>V - Vigorous Type</Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.V : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>Cenderung pasif</Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        S - Social Extension
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.S : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Perhatian rendah terhadap hubungan sosial, kurang percaya pada orang
        lain
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        R - Theoritical Type
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.R : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Kurang perhatian, bersifat praktis
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        D - Interest In Working with Details
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.D : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Menyadari kebutuhan akan kecermatan, tetapi tidak berminat bekerja
        detail
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>C - Organized Type</Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.C : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Flexible - tidak teratur
      </Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={[style.cellView, { width: "30%" }]}>
        E - Emotional Resistant
      </Text>
      <Text style={[style.cellView, { width: "15%" }]}>
        {papikostik ? papikostik.E : "-"}
      </Text>
      <Text style={[style.cellView, { width: "55%" }]}>
        Terbuka, cepat beraksi, tidak normatif
      </Text>
    </View>
  </View>
);

export default PapikostikRow1;
