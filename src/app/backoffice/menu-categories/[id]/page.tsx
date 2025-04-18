import { prisma } from '@/libs/prisma';
import { Box, Button, TextField } from '@mui/material';
import { deleteNewMenuCategory, updateMenuCategory } from '../actions';

interface Props {
  params: {
    id: string;
  };
}

export default async function UpdateMenuCategoryPage({ params }: Props) {
  const { id } = await params;
  console.log('id', id);
  const menuCategory = await prisma.menuCategories.findFirst({
    where: { id: Number(id) },
  });
  return (
    <Box>
      <Box
        component={'form'}
        action={deleteNewMenuCategory}
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <input type="hidden" name="menuCategoryId" value={id} />
        <Button variant="contained" sx={{ width: 'fit-content' }} color="error" type="submit">
          Delete
        </Button>
      </Box>
      <Box component={'form'} action={updateMenuCategory}>
        <TextField defaultValue={menuCategory?.name} name="menuCategoryName" />
        <input type="hidden" name="menuCategoryId" value={id} />
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained">
            Update Menu Category
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
