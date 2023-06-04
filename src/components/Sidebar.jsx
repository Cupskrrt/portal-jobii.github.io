import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ width: 240, flexShrink: 1 }}
    >
      <List sx={{ fontSize: 30 }}>LOGO</List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary={"Lihat Hasil Tes"} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
