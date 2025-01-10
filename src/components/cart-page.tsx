"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

type CartProduct = {
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const ShoppingCartPage = () => {
  const { cartCount, cartDetails, removeItem, setItemQuantity, totalPrice } =
    useShoppingCart();
  const typedCartDetails = cartDetails as Record<string, CartProduct>;

  const router = useRouter();

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [freeShipping, setFreeShipping] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const gotToShop = () => {
    router.push("/");
  };

  const handleCouponApply = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1);
      setCouponMessage("10% discount applied!");
    } else if (couponCode === "DISCOUNT20") {
      setDiscount(0.2);
      setCouponMessage("20% discount applied!");
    } else if (couponCode === "DISCOUNT30") {
      setFreeShipping(true);
      setCouponMessage("30% discount applied!");
    } else {
      setDiscount(0);
      setFreeShipping(false);
      setCouponMessage("Invalid coupon code!");
    }
  };

  const count = cartCount ?? 0;
  const shippingFee = count > 0 && !freeShipping ? 5 : 0;

  const totalBeforeDiscount = Object.values(typedCartDetails).reduce(
    (acc, product) => {
      const productTotal = product.price * product.quantity;
      return acc + productTotal;
    },
    0
  );

  const totalAfterDiscount =
    totalBeforeDiscount - totalBeforeDiscount * discount;

  const finalTotal = totalAfterDiscount + shippingFee;

  return (
    <div className="container mx-auto px-2 md:px-4 py-6">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
        Your Shopping Cart
      </h1>

      {cartCount === 0 ? (
        <p className="text-sm sm:text-lg text-gray-500">
          You do not have any items in your cart.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b text-xs md:text-base">
                <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">
                  Product
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">
                  Price
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">
                  Quantity
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">
                  Total
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-base">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {typedCartDetails &&
                Object.entries(typedCartDetails).map(([key, product]) => (
                  <tr key={key} className="border-b">
                    <td className="md:px-4 py-2 flex items-center md:gap-2">
                      <Image
                        src={product.image || "/images/placeholder.png"}
                        alt={product.name}
                        width={70}
                        height={70}
                        className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
                      />
                      <div className="flex flex-col justify-start items-start gap-2">
                        <div className="text-[8px] sm:text-xs pl-2">
                          {product.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
                      ${product.price ? product.price : "0.00"}
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() =>
                            setItemQuantity(key, product.quantity - 1)
                          }
                          className="text-sm sm:text-base font-bold border rounded w-4 h-4 md:w-8 md:h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
                          disabled={product.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="text-sm md:text-lg">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() =>
                            setItemQuantity(key, product.quantity + 1)
                          }
                          className="text-sm sm:text-base font-bold border rounded w-4 h-4 md:w-8 md:h-8  flex items-center justify-center bg-gray-200 hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-2 text-xs sm:text-sm sm:px-4 sm:py-2">
                      ${product.price * product.quantity}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => removeItem(key)}
                        className="text-red-500 hover:text-red-700 text-center"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}


      <button
        onClick={gotToShop}
        className="bg-[#DB4444] text-white  mt-4 px-1 py-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base"
      >
        Return To Shop
      </button>

      <div className="mt-6 flex flex-col lg:flex-row justify-between border-t pt-4">
        <div className="flex flex-col max-w-full lg:max-w-[500px] mb-6 lg:mb-0">
          <label
            htmlFor="coupon"
            className="text-base sm:text-xl font-semibold"
          >
            Coupon Code
          </label>
          <p className="text-xs sm:text-base text-gray-500">
            Enter your coupon code for discounts.
          </p>
          <p className="text-xs sm:text-base text-gray-500">
            Available Coupons: DISCOUNT10, DISCOUNT20, DISCOUNT30
          </p>
          <div className="flex justify-between items-center gap-4 mt-2">
            <input
              id="coupon"
              type="text"
              className="p-2 border rounded w-[60%] sm:w-1/2 lg:w-60"
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button
              onClick={handleCouponApply}
              className="bg-[#DB4444] text-white px-1 py-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base"
            >
              Apply Coupon
            </button>
          </div>
          {couponMessage && (
            <div
              className={`mt-2 text-sm ${couponMessage.includes("Invalid") ? "text-red-500" : "text-green-500"}`}
            >
              {couponMessage}
            </div>
          )}
        </div>

        <div className="flex flex-col text-left md:text-right">
          <h2 className="text-xl sm:text-2xl font-semibold">Total Bill</h2>
          <div className="mt-2">
            <span className="text-base sm:text-lg font-medium">Subtotal:</span>
            <span className="ml-4">${totalBeforeDiscount.toFixed(2)}</span>
          </div>
          <div className="mt-2">
            <span className="text-base sm:text-lg font-medium">Discount:</span>
            <span className="ml-4">
              ${(totalBeforeDiscount * discount).toFixed(2)}
            </span>
          </div>
          <div className="mt-2">
            <span className="text-base sm:text-lg font-medium">Shipping:</span>
            <span className="ml-4">${shippingFee.toFixed(2)}</span>
          </div>
          <div className="mt-4 font-bold text-xl sm:text-2xl">
            <span>Total:</span>
            <span className="ml-4">${finalTotal.toFixed(2)}</span>
          </div>
          <div> <button
          onClick={handleCheckout}
          className="bg-[#DB4444] text-white px-1 py-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base mt-3"
        >
          Proceed to Checkout
        </button></div>
        </div>
       
      </div>
    </div>
  );
};

export default ShoppingCartPage;
