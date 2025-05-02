import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { createAddons } from '../actions';
import { getCompanyAddonCategories } from '@/libs/actions';

export default async function NewAddonPage() {
  const addonCategories = await getCompanyAddonCategories();

  return (
    <Box
      sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}
      component="form"
      action={createAddons}
    >
      <TextField placeholder="Name" label="Name" name="name" />
      <TextField placeholder="Price" sx={{ my: 2 }} label="Price" name="price" />

      <Box>
        <Typography sx={{ mb: 1 }}>Addon Categories</Typography>
        <Box sx={{ border: '1px solid lightgrey', borderRadius: 1, px: 1.2, py: 1 }}>
          {addonCategories.map(addonCategory => (
            <FormControlLabel
              key={addonCategory.id}
              control={<Checkbox name="addonCategoryId" value={addonCategory.id} />}
              label={addonCategory.name}
            />
          ))}
        </Box>
      </Box>

      <FormControlLabel
        control={<Checkbox defaultChecked name="isAvailable" />}
        label="Available"
      />

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
