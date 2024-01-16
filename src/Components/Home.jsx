import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';


const Home = () => {
  const [material, setMaterial] = useState('');

  const handleReset = () => {
    setMaterial('');
  };

  const handleSet = async () => {
    try {
      const response = await axios.post("http://localhost:3005/api/material/add", {
        name: material,
      });

      console.log('Category created successfully:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <center>
        <h1>CATEGORY</h1>
        <h4>Add or edit category</h4>

        <input
          type="text"
          id="material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          required
        />

        <br />
        <br />

        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained" onClick={handleSet}>
            SET
          </Button>
          <Button variant="contained" onClick={handleReset}>
            RESET
          </Button>
        </Stack>
      </center>
    </div>
  );
};

export default Home;
