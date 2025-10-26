import React from "react";
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

export default function Menu() {
  const menu = useLoaderData();
  return (
    <div className="p-4 space-y-2">
      {menu.map((item) => {
        return <MenuItem item={item}/>;
      })}
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
