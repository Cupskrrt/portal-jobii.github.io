import Pribadi from "./TemplatePart/Pribadi";
import Keluarga from "./TemplatePart/Keluarga";
import Pendidikan from "./TemplatePart/Pendidikan";
import Kursus from "./TemplatePart/Kursus";
import Kerja from "./TemplatePart/Kerja.jsx";
import HasilTestPapikostik from "./TemplatePart/HasilTestPapikostik";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import HasilTestAptitude from "./TemplatePart/HasilTestAptitude";

const style = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    fontSize: 11,
  },
  heading1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    paddingBottom: 20,
  },
});

const PrintData = ({ person, papikostik, aptitude }) => (
  <Document>
    <Page size={"A4"} style={style.page} wrap>
      <View style={style.heading1}>
        <Text>Formulir Data Karywan</Text>
      </View>
      {/* PRIBADI VIEW */}
      <Pribadi person={person} />
      {/* DATA KELUARGA VIEW */}
      <Keluarga person={person} />
      {/* PENDIDIKAN VIEW */}
      <Pendidikan person={person} />
      {/* KURSUS / TRAINING VIEW */}
      <Kursus person={person} />
      {/* RIWAYAT KERJA VIEW */}
      <Kerja person={person} />
      {/* HASIL TEST VIEW */}
      <HasilTestPapikostik papikostik={papikostik} />
      <HasilTestAptitude aptitude={aptitude} />
    </Page>
  </Document>
);

export default PrintData;
