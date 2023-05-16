import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Add from './components/Add';


const theme = createTheme(); 


const App = () => {
  const [mode, setMode] = useState('light')

  const theme = createTheme ({
    palette: {
      mode: mode,
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
      <Navbar />
      <Stack direction='row' spacing={2}justifyContent={'space-between'}>
        <Sidebar mode={mode} setMode={setMode}/>
        <Feed />
        <Rightbar />
        <Add />
      </Stack>
    </Box>
    </ThemeProvider>
  );
};

export default App;
