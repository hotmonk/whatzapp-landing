const API_ENDPOINT = 'https://whatzapp.co/api/v1/whatzapp/payVerify';

export const stripePaymentMethodHandler = async (data, cb) => {
  const { amount, result } = data;
  console.log(data);
  if (result.error) {
    // show error in payment form
    cb(result);
  } else {
    const paymentResponse = await stripePayment({
      payment_method_id: result.paymentMethod.id,
      mobile: localStorage.getItem("mobile"),
      // name: result.paymentMethod.billing_details.name,
      // email: result.paymentMethod.billing_details.email,
      amount: amount
    });
    console.log(paymentResponse);
    cb(paymentResponse);
  }
}

// place backend API call for payment
const stripePayment = async data => {
  const res = await fetch(`${API_ENDPOINT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await res.json();
}