/* =====================================
NEXTEL V2 SETTINGS API
===================================== */

import fs from "fs";
import path from "path";

export default function handler(req, res) {

  /* =========================
  CORS
  ========================= */

  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  /* =========================
  OPTIONS
  ========================= */

  if (req.method === "OPTIONS") {

    return res.status(200).end();

  }

  /* =========================
  ONLY GET
  ========================= */

  if (req.method !== "GET") {

    return res.status(405).json({
      error: "Method not allowed"
    });

  }

  try {

    /* =========================
    PAYMENT JSON FILE
    ========================= */

    const filePath = path.join(
      process.cwd(),
      "data",
      "payment.json"
    );

    /* =========================
    READ PAYMENT SETTINGS
    ========================= */

    const fileContent =
      fs.readFileSync(
        filePath,
        "utf8"
      );

    const data =
      JSON.parse(fileContent);

    /* =========================
    PREVENT BROWSER CACHE
    ========================= */

    res.setHeader(
      "Cache-Control",
      "no-store, no-cache, must-revalidate"
    );

    /* =========================
    RETURN PAYMENT SETTINGS
    ========================= */

    return res.status(200).json(data);

  } catch (error) {

    console.error(
      "Settings API Error:",
      error
    );

    return res.status(500).json({

      success: false,

      error:
        "Could not load payment settings"

    });

  }

}
