import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { createTable } from '../actions';
import { getCompanyAddonCategories } from '@/libs/actions';

export default async function NewTablePage() {
  const addonCategories = await getCompanyAddonCategories();

  return (
    <Box
      sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}
      component="form"
      action={createTable}
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
