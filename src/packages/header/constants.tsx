import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to="/profile">Profile</Link>,
  },
  {
    type: "divider",
  },
  {
    key: "2",
    danger: true,
    label: (
      <Link to="/" onClick={() => console.log("dd")}>
        Log Out
      </Link>
    ),
  },
];
