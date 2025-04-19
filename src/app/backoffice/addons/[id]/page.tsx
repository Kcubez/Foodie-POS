import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { getMenuCategories } from '../../menu-categories/actions';
import { deleteAddon, getAddon, updateAddon } from '../actions';
import { getAddonCategories } from '../../addon-categories/actions';

interface Props {
  params: {
    id: string;
  };
}

export default async function AddonUpdatePage({ params }: Props) {
  const { id } = await params;
  const addon = await getAddon(Number(id));
  const addonCategories = await getAddonCategories();

  return (
    <>
      <Box
        component={'form'}
        action={deleteAddon}
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <input type="hidden" value={id} name="id" />
        <Button type="submit" variant="contained" sx={{ width: 'fit-content' }} color="error">
          Delete
        </Button>
      </Box>

      <Box
        component={'form'}
        action={updateAddon}
        sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}
      >
        <input type="hidden" value={id} name="id" />
        <TextField defaultValue={addon.name} label="Name" name="name" />
        <TextField defaultValue={addon.price} sx={{ my: 2 }} label="Price" name="price" />

        <Box>
          <Typography sx={{ mb: 1 }}>Addon Categories</Typography>
          <Box sx={{ border: '1px solid lightgrey', borderRadius: 1, px: 1.2, py: 1 }}>
            {addonCategories.map(addonCategory => (
              <FormControlLabel
                key={addonCategory.id}
                control={
                  <Checkbox
                    name="addonCategoryId"
                    value={addonCategory.id}
                    defaultChecked={addonCategory.id === addon.addonCategoryId}
                  />
                }
                label={addonCategory.name}
              />
            ))}
          </Box>
        </Box>

        <FormControlLabel
          control={<Checkbox defaultChecked={addon.isAvailable} name="isAvailable" />}
          label="Available"
        />

        <Button type="submit" variant="contained" sx={{ width: 'fit-content', mt: 3 }}>
          Update
        </Button>
      </Box>
    </>
  );
}
