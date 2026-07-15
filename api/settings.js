/* =====================================
NEXTEL V2 SETTINGS API
===================================== */

export default function handler(req, res) {

  // Allow requests from your frontend
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {

    return res.status(200).json({

      account1: {
        bankName: "Kuda MFB",
        accountNumber: "2022355704",
        accountName: "NEXTEL CONNECT"
      },

      account2: {
        bankName: "Bank Name",
        accountNumber: "0000000000",
        accountName: "NEXTEL CONNECT"
      },

      redirectUrl: "https://google.com"

    });

  }

  return res.status(405).json({
    error: "Method not allowed"
  });

}
