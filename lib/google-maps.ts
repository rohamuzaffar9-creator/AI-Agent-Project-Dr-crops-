/** Read Google Maps JS API key from env (supports both Next and Vite names). */
export function getGoogleMapsApiKey(): string {
  const raw =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
    process.env.VITE_GOOGLE_MAPS_API_KEY ||
    "";
  return raw.trim().replace(/^"|"$/g, "");
}
