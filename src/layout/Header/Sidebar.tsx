import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import CompareIcon from "../../components/UI/Icons/CompareIcon";
import Groups2Icon from "@mui/icons-material/Groups2";
import { Link } from "react-router-dom";

const navUserItems = [
  {
    name: "Home",
    link: "/home",
    icon: <HomeIcon />,
  },
  {
    name: "Shop",
    link: "/shop",
    icon: <ShoppingBasketIcon />,
  },
  {
    name: "About us",
    link: "/about-us",
    icon: <InfoIcon />,
  },
  {
    name: "News & Announcements",
    link: "/news",
    icon: <AnnouncementIcon />,
  },
  {
    name: "My Cart",
    link: "/my-cart",
    icon: <ShoppingCartIcon />,
  },
  {
    name: "Compare",
    link: "/compare",
    icon: <CompareIcon />,
  },
];

const navAdminItems = [
  {
    name: "Home",
    link: "/home",
    icon: <HomeIcon />,
  },
  {
    name: "Shop",
    link: "/shop",
    icon: <ShoppingBasketIcon />,
  },
  {
    name: "About us",
    link: "/about-us",
    icon: <InfoIcon />,
  },
  {
    name: "News & Announcements",
    link: "/news",
    icon: <AnnouncementIcon />,
  },
  {
    name: "Customers",
    link: "/customers",
    icon: <Groups2Icon />,
  },
  {
    name: "Compare",
    link: "/compare",
    icon: <CompareIcon />,
  },
];

const Sidebar = ({ onCloseSidebar, open }: SidebarTypes) => {
  return (
    <div className={`sidebar${open ? " open" : ""}`}>
      <div className="sidebar__top">
        <div onClick={onCloseSidebar}>
          <CloseIcon />
        </div>
        <h1>Groceteria</h1>
      </div>

      <div className="sidebar__items">
        {navAdminItems.map((item) => (
          <Link
            to={item.link}
            className="sidebar__item"
            key={item.name}
            onClick={onCloseSidebar}
          >
            {item.icon}
            <h2>{item.name}</h2>
          </Link>
        ))}
      </div>

      <p className="footer__copyright">
        Groceteria © 2024. All Rights Reserved
      </p>
    </div>
  );
};

interface SidebarTypes {
  onCloseSidebar: () => void;
  open: boolean;
}

export default Sidebar;
