'use client';

import { Checkbox, FormControlLabel } from '@mui/material';
import { Locations } from '@prisma/client';

interface Props {
  id: string;
  locations: Locations[];
}
export default function LocationCheckbox({ id, locations }: Props) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          defaultChecked={id === localStorage.getItem('currentLocationId')}
          name="menuCategories"
        />
      }
      label={'Current Location'}
      onChange={(_, checked) => {
        if (checked) {
          localStorage.setItem('currentLocationId', id);
        } else {
          localStorage.setItem('currentLocationId', locations[0].id.toString());
        }
      }}
    />
  );
}
