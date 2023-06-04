import { Text, View, StyleSheet } from "@react-pdf/renderer";
import AptitudeHeader from "./Table/HasilTest/AptitudeHeader";
import AptitudeRow from "./Table/HasilTest/AptitudeRow";

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

const HasilTestAptitude = ({ aptitude }) => {
  const stringPercentage = aptitude ? aptitude.rangeIq : "0%";
  const intPercentage = stringPercentage?.replace("%", "");

  const iqRange =
    intPercentage <= 50
      ? "Kecerdasan sudah pasti lemah"
      : intPercentage > 50 || intPercentage <= 60
      ? "Kecerdasan diambang kekurangan"
      : "";

  return (
    <View break>
      <Text style={style.heading2}>Hasil Test Aptitude</Text>
      <AptitudeHeader />
      <AptitudeRow aptitude={aptitude} />
      <Text style={style.heading2}>IQ</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={[style.cellView, { width: "30%", textAlign: "center" }]}>
          Range IQ
        </Text>
        <Text style={[style.cellView, { width: "15%", textAlign: "center" }]}>
          {aptitude ? aptitude.rangeIq : "0"}
        </Text>
        {intPercentage <= 50 ? (
          <Text style={[style.cellView, { width: "55%", textAlign: "center" }]}>
            Kecerdasan sudah pasti lemah
          </Text>
        ) : intPercentage > 50 && intPercentage <= 60 ? (
          <Text style={[style.cellView, { width: "55%", textAlign: "center" }]}>
            kecerdasan diambang kekurangan
          </Text>
        ) : intPercentage > 60 && intPercentage <= 70 ? (
          <Text style={[style.cellView, { width: "55%", textAlign: "center" }]}>
            Kecerdasan dibawah rata-rata
          </Text>
        ) : intPercentage > 70 && intPercentage <= 80 ? (
          <Text style={[style.cellView, { width: "55%", textAlign: "center" }]}>
            Kecerdasan normal atau rata-rata
          </Text>
        ) : intPercentage > 80 && intPercentage <= 90 ? (
          <Text style={[style.cellView, { width: "55%", textAlign: "center" }]}>
            Kecerdasan superior
          </Text>
        ) : intPercentage > 90 ? (
          <Text style={[style.cellView, { width: "55%", textAlign: "center" }]}>
            Kecerdasan sangat superior
          </Text>
        ) : (
          <Text style={[style.cellView, { width: "55%", textAlign: "center" }]}>
            -
          </Text>
        )}
      </View>
    </View>
  );
};

export default HasilTestAptitude;
