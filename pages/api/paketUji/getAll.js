export default async function paketUjiRoute(req, res) {
  try {
    const apiResponse = await fetch(
      "https://admin-gkk-be.lspgatensi.id/paket-uji",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await apiResponse.json();

    res.status(apiResponse.status).json(data);
  } catch (error) {
    console.error("Error proxying request:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
