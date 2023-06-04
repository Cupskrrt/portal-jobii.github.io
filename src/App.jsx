import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import LowonganKerja from "./features/LowonganKerja";
import HasilTes from "./features/HasilTes";
import Login from "./components/Login";
import { QueryClientProvider, QueryClient } from "react-query";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const qc = new QueryClient();

  return (
    <QueryClientProvider client={qc}>
      {/* <Routes> */}
      {/* <Route path="/" element={<Login />} /> */}
      {/* </Routes> */}
      {/* <Login /> */}
      <Sidebar />
      <HasilTes />
    </QueryClientProvider>
  );
};

export default App;
