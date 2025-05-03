import { Box, Button, TextField } from '@mui/material';
import { createLocation } from '../actions';

export default async function NewLocationPage() {
  return (
    <Box
      sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}
      component="form"
      action={createLocation}
    >
      <TextField placeholder="Name" label="Name" name="name" />

      <Button
        variant="contained"
        sx={{
          width: 'fit-content',
          mt: 3,
          bgcolor: '#1D3557',
          '&:hover': { bgcolor: '#2d4466' },
        }}
        type="submit"
      >
        Create
      </Button>
    </Box>
  );
}
