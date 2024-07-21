import axios from "axios";
import "dotenv/config";

export const payController = async (req, res) => {
  // const { order_amount } = req.body;
  // console.log("order money" + order_amount);
  const options = {
    method: "POST",
    url: "https://sandbox.cashfree.com/pg/orders",
    headers: {
      accept: "application/json",
      "x-api-version": "2022-09-01",
      "content-type": "application/json",
      "x-client-id": "TEST10190479cfb74e1424e438dceaa097409101",
      "x-client-secret": process.env.CASHFREE_SECRET,
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
      console.log(response.data.order_amount);
      return res.status(200).send(response.data.payment_session_id);
    })
    .catch(function (error) {
      console.error(error);
      return res.status(401).send(error);
    });
};

export const getOrderStatus = async (req, res) => {
  const orderid = req.params.orderid;
  console.log(orderid);

  const options = {
    method: "GET",
    url: `https://sandbox.cashfree.com/pg/orders/${orderid}`,
    headers: {
      accept: "application/json",
      "x-api-version": "2022-09-01",
      "x-client-id": "TEST10190479cfb74e1424e438dceaa097409101",
      "x-client-secret": process.env.CASHFREE_SECRET,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      // console.log(response.data);
      if (response.data.order_status === "PAID") {
        return res.redirect(`/ordersuccess/${orderid}`);
      } else if (response.data.order_status === "ACTIVE") {
        return res.redirect(
          `http://localhost:5173/${response.data.payment_session_id}`
        );
      } else {
        return res.redirect(`/orderfailure/${orderid}`);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
