import { useState, useEffect } from 'react';
import {
  createTheme,
  ThemeProvider
} from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import CardsList from './CardsList';
import { orange } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    }
  }
})


function App() {
  const [pageNumber, updatePageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <CardsList results={results} />
      </Container>
    </ThemeProvider>
  )
}

export default App
