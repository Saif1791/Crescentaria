import axios from "axios";

export const payController = async (req, res) => {
  const options = {
    method: "POST",
    url: "https://sandbox.cashfree.com/pg/orders",
    headers: {
      accept: "application/json",
      "x-api-version": "2022-09-01",
      "content-type": "application/json",
      "x-client-id": "TEST10190479cfb74e1424e438dceaa097409101",
      "x-client-secret":
        "cfsk_ma_test_1378773a830aa7b6e021f3e0ac7eadc1_70e9588a",
    },
    data: {
      customer_details: {
        customer_id: "1234567890",
        customer_phone: "1234567890",
      },
      order_meta: { payment_methods: "cc,dc,upi,app" },
      order_id: "ORID635802" + Date.now(),
      order_amount: 200,
      order_currency: "INR",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return res.status(200).send(response.data.payment_session_id);
    })
    .catch(function (error) {
      console.error(error);
      return res.status(401).send(error);
    });
};

export const getOrderStatus = () => {
  const options = {
    method: "GET",
    url: "https://sandbox.cashfree.com/pg/orders/order_id",
    headers: {
      accept: "application/json",
      "x-api-version": "2022-09-01",
      "x-client-id": "TEST10190479cfb74e1424e438dceaa097409101",
      "x-client-secret":
        "cfsk_ma_test_1378773a830aa7b6e021f3e0ac7eadc1_70e9588a",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
