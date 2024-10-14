export default async function createPaketUji(req, res) {
  try {
    const response = await fetch(
      "https://admin-gkk-be.lspgatensi.id/paket-uji/create",
      {
        method: req.method,
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
          "Content-Type": "application/json",
        },
        body: req.body,
      }
    );

    const data = await response.json();
    // console.log(req.headers.Authorization);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
