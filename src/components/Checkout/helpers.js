import CheckoutForm from "./CheckoutForm";
import BookingDetails from "./BookingDetails";
import Confirmation from "./Confirmation";
import Payment from "./Payment";

export const renderRelatedComponent = ({
  user,
  orderInfo,
  orderError,
  bookingStep,
  handleChange,
  handleSubmit,
  checkoutData,
  handleBackStep,
  handleNextStep,
  handleCheckout,
  handleSelectChange,
}) => {
  switch (bookingStep) {
    case "datos del pedido":
      return (
        <CheckoutForm
          user={user}
          orderInfo={orderInfo}
          checkoutData={checkoutData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
        />
      );
    case "detalles del pedido":
      return (
        <BookingDetails
          user={user}
          checkoutData={checkoutData}
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
          handleCheckout={handleCheckout}
        />
      );
    case "pago del pedido":
      return (
        <Payment
          user={user}
          checkoutData={checkoutData}
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
          handleCheckout={handleCheckout}
        />
      );
    case "confirmation":
      return <Confirmation orderInfo={orderInfo} orderError={orderError} />;
    default:
      return null;
  }
};
