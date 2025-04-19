import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { createNewAddonCategory } from '../actions';
import { prisma } from '@/libs/prisma';

export default async function NewAddonCategoryPage() {
  const menus = await prisma.menus.findMany();
  return (
    <Box
      component={'form'}
      sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}
      action={createNewAddonCategory}
    >
      <TextField placeholder="Name" defaultValue={''} name="name" />
      <Box sx={{ my: 2 }}>
        <Typography sx={{ mb: 1 }}>Menus</Typography>
        <Box sx={{ border: '1px solid lightgrey', borderRadius: 1, px: 1.2, py: 1 }}>
          {menus.map(menu => (
            <FormControlLabel
              key={menu.id}
              control={<Checkbox name="menus" value={menu.id} />}
              label={menu.name}
            />
          ))}
        </Box>
      </Box>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Required" name="isRequired" />
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
