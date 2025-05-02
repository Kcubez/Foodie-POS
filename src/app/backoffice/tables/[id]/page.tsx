import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { getCompanyAddonCategories } from '@/libs/actions';
import { deleteTable, getTable, updateTable } from '../actions';

interface Props {
  params: {
    id: string;
  };
}

export default async function AddonUpdatePage({ params }: Props) {
  const { id } = await params;
  const addon = await getTable(Number(id));
  const addonCategories = await getCompanyAddonCategories();

  return (
    <>
      <Box
        component={'form'}
        action={deleteTable}
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <input type="hidden" value={id} name="id" />
        <Button type="submit" variant="contained" sx={{ width: 'fit-content' }} color="error">
          Delete
        </Button>
      </Box>

      <Box
        component={'form'}
        action={updateTable}
        sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}
      >
        <input type="hidden" value={id} name="id" />
        <TextField defaultValue={addon.name} label="Name" name="name" />

        <Button type="submit" variant="contained" sx={{ width: 'fit-content', mt: 3 }}>
          Update
        </Button>
      </Box>
    </>
  );
}
