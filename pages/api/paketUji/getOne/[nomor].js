export default async function paketUjiRoute(req, res) {
  const { nomor } = req.query;

  try {
    const response = await fetch(
      `https://admin-gkk-be.lspgatensi.id/paket-uji/${nomor}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${process.env.TOKEN}` },
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}
