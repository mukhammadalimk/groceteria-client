const navUserItems = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "About us",
    link: "/about-us",
  },
  {
    name: "News",
    link: "/news",
  },
  {
    name: "My Cart",
    link: "/my-cart",
  },
  {
    name: "Compare",
    link: "/compare",
  },
];

const navAdminItems = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "About us",
    link: "/about-us",
  },
  {
    name: "News",
    link: "/news",
  },
  {
    name: "Customers",
    link: "/customers",
  },
  {
    name: "Compare",
    link: "/compare",
  },
];

const HeaderBottom = () => {
  return (
    <div className="header__bottom">
      <div className="container">
        <div className="header__bottom--context">
          <ul className="header__nav">
            {navUserItems.map((item) => (
              <li className="header__nav--link" key={item.name}>
                <div className="nav--link-item">{item.name}</div>
              </li>
            ))}
          </ul>
          <div className="header__location">
            <img src="/assets/icons/location-icon.png" alt="Location Icon" />
            <span>Lincoln- 344, Illinois, Chicago, USA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
