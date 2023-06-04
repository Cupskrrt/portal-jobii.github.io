import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Add, Delete, PhotoCamera } from "@mui/icons-material";
import Axios from "axios";

const LowonganKerja = () => {
  const [namaPerusahan, setNamaPerusahaan] = useState("");
  const [posisi, setPosisi] = useState("");
  const [inputList, setInputList] = useState([{ kualifikasi: "" }]);
  const [image, setImage] = useState(null);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { kualifikasi: "" }]);
  };

  const handleImageInput = () => {
    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("upload_preset", "ml_default");
    Axios.post(
      "https://api.cloudinary.com/v1_1/del1943mz/upload",
      imageData
    ).then((res) => {
      console.log(res.data.secure_url);
    });
  };

  return (
    <>
      <Box component={"main"} py={2}>
        <Typography variant="h4" fontWeight={600}>
          Tambah Lowongan Kerja
        </Typography>

        <FormControl>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {image && <img src={URL.createObjectURL(image)} width={100} />}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton aria-label="upload picture" component="label">
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <PhotoCamera />
              </IconButton>

              {image && (
                <IconButton
                  onClick={() => {
                    setImage(null);
                  }}
                  aria-label="delete picture"
                  component="label"
                >
                  <Delete />
                </IconButton>
              )}
            </Box>
          </Box>
          <TextField
            label="Nama Perusahaan"
            onChange={(e) => setNamaPerusahaan(e.target.value)}
          />
          <TextField
            label="Posisi"
            onChange={(e) => setPosisi(e.target.value)}
          />

          {/* KUALIFIKASI */}
          {inputList.map((x, i) => {
            return (
              <Box key={i}>
                <TextField
                  key={i}
                  label="Kualifikasi"
                  name="kualifikasi"
                  onChange={(e) => handleInputChange(e, i)}
                />
                {inputList.length !== 1 && (
                  <IconButton onClick={() => handleRemoveClick(i)}>
                    <Delete />
                  </IconButton>
                )}
                {inputList.length - 1 === i && (
                  <IconButton onClick={handleAddClick}>
                    <Add />
                  </IconButton>
                )}
              </Box>
            );
          })}
        </FormControl>

        <Typography>{JSON.stringify(inputList)}</Typography>
        <Typography>Nama Perushaan: {namaPerusahan}</Typography>
        <Typography>Posisi: {posisi}</Typography>
        <Button variant="contained" onClick={handleImageInput}>
          Input Image
        </Button>
      </Box>
    </>
  );
};

export default LowonganKerja;
