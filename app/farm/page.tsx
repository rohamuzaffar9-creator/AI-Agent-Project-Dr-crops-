import { getGoogleMapsApiKey } from "@/lib/google-maps";
import { FarmClient } from "./farm-client";

export default function FarmPage() {
  return <FarmClient apiKey={getGoogleMapsApiKey()} />;
}
