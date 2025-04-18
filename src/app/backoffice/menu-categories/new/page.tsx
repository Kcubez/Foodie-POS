import { Box, Button, TextField } from '@mui/material';

import { MenuCategories } from '@prisma/client';
import { createNewMenuCategory } from '../actions';

export default function NewMenuCategoryPage() {
  return (
    <Box
      component={'form'}
      sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}
      action={createNewMenuCategory}
    >
      <TextField placeholder="Name" defaultValue={''} name="menuCategoryName" />
      <Button
        variant="contained"
        type="submit"
        sx={{
          width: 'fit-content',
          mt: 3,
          bgcolor: '#1D3557',
          '&:hover': { bgcolor: '#2d4466' },
        }}
      >
        Create
      </Button>
    </Box>
  );
}
