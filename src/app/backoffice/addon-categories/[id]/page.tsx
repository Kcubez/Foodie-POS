import { prisma } from '@/libs/prisma';
import { Box, Button, TextField } from '@mui/material';
import { deleteNewAddonCategory, updateAddonCategory } from '../actions';

interface Props {
  params: {
    id: string;
  };
}

export default async function UpdateAddonCategoryPage({ params }: Props) {
  const { id } = await params;
  const addonCategory = await prisma.addonCategories.findFirst({
    where: { id: Number(id) },
  });
  return (
    <Box>
      <Box
        component={'form'}
        action={deleteNewAddonCategory}
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <input type="hidden" name="id" value={id} />
        <Button variant="contained" sx={{ width: 'fit-content' }} color="error" type="submit">
          Delete
        </Button>
      </Box>
      <Box component={'form'} action={updateAddonCategory}>
        <TextField defaultValue={addonCategory?.name} name="name" />
        <input type="hidden" name="id" value={id} />
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained">
            Update Addon Category
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
