'use client';
import { Box, Button, TextField } from '@mui/material';
import { createTable } from '../actions';
import { useRef, useState } from 'react';

export default function NewTablePage() {
  const ref = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateTable = async () => {
    if (!ref.current) return;
    setIsLoading(true);
    try {
      const fd = new FormData(ref.current);
      const locationId = localStorage.getItem('currentLocationId') as string;
      fd.set('locationId', locationId);
      await createTable(fd);
    } finally {
      setIsLoading(false);
    }
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
        disabled={isLoading}
      >
        {isLoading ? 'Creating...' : 'Create'}
      </Button>
    </Box>
  );
}
