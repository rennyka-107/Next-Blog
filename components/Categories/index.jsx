import React, { memo, useState } from "react";
import { Menu } from "semantic-ui-react";

function Categories() {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu color="teal" widths={6}>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={handleItemClick}
      />
    </Menu>
  );
}

export default memo(Categories);
