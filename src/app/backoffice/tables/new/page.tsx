'use client';
import { Box, Button, TextField } from '@mui/material';
import { createTable } from '../actions';
import { useRef } from 'react';

export default function NewTablePage() {
  const ref = useRef<HTMLFormElement>(null);

  const handleCreateTable = () => {
    if (!ref.current) return;
    const fd = new FormData(ref.current);
    const locationId = localStorage.getItem('currentLocationId') as string;
    fd.set('locationId', locationId);
    createTable(fd);
  };

  return (
    <Box ref={ref} sx={{ mt: 2, display: 'flex', flexDirection: 'column' }} component="form">
      <TextField placeholder="Name" label="Name" name="name" />
      <Button
        variant="contained"
        sx={{
          width: 'fit-content',
          mt: 3,
          bgcolor: '#1D3557',
          '&:hover': { bgcolor: '#2d4466' },
        }}
        onClick={handleCreateTable}
      >
        Create
      </Button>
    </Box>
  );
}
