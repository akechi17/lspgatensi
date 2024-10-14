const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://lspgatensi.id"
    : "http://localhost:3000";

export default baseUrl;
