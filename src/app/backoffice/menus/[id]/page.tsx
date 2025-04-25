import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { deleteMenu, getMenu, updateMenu } from '../actions';
import { getCompanyMenuCategories } from '@/libs/actions';

interface Props {
  params: {
    id: string;
  };
}

export default async function MenuUpdatePage({ params }: Props) {
  const { id } = await params;
  const menu = await getMenu(Number(id));
  const selected = menu?.menuCategoriesMenus.map(item => item.menuCategoryId);
  const menuCategories = await getCompanyMenuCategories();

  return (
    <>
      <Box
        component={'form'}
        action={deleteMenu}
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <input type="hidden" value={id} name="id" />
        <Button type="submit" variant="contained" sx={{ width: 'fit-content' }} color="error">
          Delete
        </Button>
      </Box>

      <Box
        component={'form'}
        action={updateMenu}
        sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}
      >
        <TextField defaultValue={menu?.name} name="name" />
        <TextField defaultValue={menu?.price} sx={{ my: 2 }} name="price" />
        <input type="hidden" value={id} name="id" />
        <Box>
          <Typography sx={{ mb: 1 }}>Menu Categories</Typography>
          <Box sx={{ border: '1px solid lightgrey', borderRadius: 1, px: 1.2, py: 1 }}>
            {menuCategories.map(menuCategory => (
              <FormControlLabel
                key={menuCategory.id}
                control={
                  <Checkbox
                    defaultChecked={selected?.includes(menuCategory.id)}
                    name="menuCategories"
                    value={menuCategory.id}
                  />
                }
                label={menuCategory.name}
              />
            ))}
          </Box>
        </Box>

        <FormControlLabel
          control={<Checkbox defaultChecked={menu?.isAvailable ? true : false} />}
          label="Available"
          name="isAvailable"
        />

        <Button type="submit" variant="contained" sx={{ width: 'fit-content', mt: 3 }}>
          Update
        </Button>
      </Box>
    </>
  );
}
