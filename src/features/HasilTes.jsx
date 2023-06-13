import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Button,
} from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import PrintData from "../components/PrintData";
import Axios from "axios";

const HasilTes = () => {
  const [rows, setRows] = useState([]);
  const [personData, setPersonData] = useState([]);
  const [papikostikData, setPapikostikData] = useState([]);
  const [aptitudeData, setAptitudeData] = useState([]);

  const fetchData = async () => {
    const { data } = await Axios.get("http://localhost:6969/api/getForm");
    setRows(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // `https://jobii.id:6969/getForm/${id}`
  //https://jobii.id:6969/getForm
  // `https://jobii.id:6969/getPapikotes/${id}`
  // `https://jobii.id:6969/getAptitude/${id}`
  const getPersonData = async (id) => {
    const { data: personData } = await Axios.get(
      `http://localhost:6969/api/getForm/${id}`
    );
    setPersonData(personData);
    console.log(personData);
    const { data: papikostikData } = await Axios.get(
      `http://localhost:6969/api/getPapikotes/${id}`
    );
    setPapikostikData(papikostikData);
    console.log(papikostikData);
    const { data: aptitudeData } = await Axios.get(
      `http://localhost:6969/api/getAptitude/${id}`
    );
    setAptitudeData(aptitudeData);
    console.log(aptitudeData);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <TableContainer sx={{ width: "50%", height: "100vh" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nama</TableCell>
                <TableCell align="center">Umur</TableCell>
                <TableCell align="center">DOB</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => (
                <TableRow
                  key={row?.uuid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row?.nama}</TableCell>
                  <TableCell align="center">{row?.umur}</TableCell>
                  <TableCell align="center">{row?.ttl}</TableCell>
                  <TableCell align="center">{row?.email}</TableCell>
                  <TableCell align="center">{row?.noHp}</TableCell>
                  <Button
                    variant="contained"
                    onClick={() => getPersonData(row?.uuid)}
                  >
                    Get Data
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
 <PDFViewer width={"50%"}>
          <PrintData
            person={personData}
            papikostik={papikostikData}
            aptitude={aptitudeData}
          />
        </PDFViewer>
      </Box>
    </>
  );
};

export default HasilTes;
