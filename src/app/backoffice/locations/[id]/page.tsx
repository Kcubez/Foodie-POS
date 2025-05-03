import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';

import { deleteLocation, getLocation, updateLocation } from '../actions';
import LocationCheckbox from '@/components/LocationCheckbox';
import { getCompanyLocations } from '@/libs/actions';

interface Props {
  params: {
    id: string;
  };
}

export default async function LocationUpdatePage({ params }: Props) {
  const { id } = await params;
  const location = await getLocation(Number(id));
  const locations = await getCompanyLocations();

  return (
    <>
      <Box
        component={'form'}
        action={deleteLocation}
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <input type="hidden" value={id} name="id" />
        <Button type="submit" variant="contained" sx={{ width: 'fit-content' }} color="error">
          Delete
        </Button>
      </Box>

      <Box
        component={'form'}
        action={updateLocation}
        sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}
      >
        <input type="hidden" value={id} name="id" />
        <TextField defaultValue={location.name} label="Name" name="name" />
        <LocationCheckbox id={id} locations={locations} />

        <Button type="submit" variant="contained" sx={{ width: 'fit-content', mt: 3 }}>
          Update
        </Button>
      </Box>
    </>
  );
}
