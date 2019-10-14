import React, {useState} from "react";
import { Appbar, Menu } from 'react-native-paper';
import SortMenuItem from "../../containers/SortMenuItem";

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);
  const openMenu = () => setMenuState(true);
  const dismissMenu = () => setMenuState(false);

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu"/>
      <Appbar.Content
        title="Faces"
        subtitle="All"
      />
      <Menu
        visible={isMenuOpen}
        onDismiss={dismissMenu}
        anchor={
          <Appbar.Action
            icon="more-vert"
            color="white"
            onPress={openMenu}
          />
        }
      >
        <SortMenuItem title="None" value="" dismissMenu={dismissMenu}/>
        <SortMenuItem title="Price" value="price" dismissMenu={dismissMenu}/>
        <SortMenuItem title="Size" value="size" dismissMenu={dismissMenu}/>
        <SortMenuItem title="Id" value="id" dismissMenu={dismissMenu}/>
      </Menu>
    </Appbar.Header>
  )
};

export default Header;
