export default async function asesorGet(req, res) {
  try {
    const apiResponse = await fetch("https://asap.lspgatensi.id/asesor", {
      method: "GET",
    });

    const data = await apiResponse.json();

    res.status(apiResponse.status).json(data);
  } catch (error) {
    console.error("Error proxying request:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
