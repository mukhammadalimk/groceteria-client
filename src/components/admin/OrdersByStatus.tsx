import PackageIcon from "../UI/Icons/PackageIcon";
import ShippingIcon from "../UI/Icons/ShippingIcon";
import ShoppingCartIcon from "../UI/Icons/ShoppingCartIcon";

const OrdersByStatus = () => {
  return (
    <div className="order-numbers">
      <div className="order-numbers__item">
        <div className="order-numbers__img">
          <ShoppingCartIcon />
        </div>
        <div className="order-numbers__main">
          <h6>Total Order</h6>
          <span>245</span>
        </div>
      </div>
      <div className="order-numbers__item">
        <div className="order-numbers__img">
          <PackageIcon />
        </div>
        <div className="order-numbers__main">
          <h6>To be packed</h6>
          <span>234</span>
        </div>
      </div>
      <div className="order-numbers__item">
        <div className="order-numbers__img">
          <ShippingIcon />
        </div>
        <div className="order-numbers__main">
          <h6>On the way</h6>
          <span>100</span>
        </div>
      </div>
      <div className="order-numbers__item">
        <div className="order-numbers__img">
          <img src="/assets/icons/home-icon.svg" alt="" />
        </div>
        <div className="order-numbers__main">
          <h6>Delivered</h6>
          <span>98</span>
        </div>
      </div>
    </div>
  );
};

export default OrdersByStatus;
