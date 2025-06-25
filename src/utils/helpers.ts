export function getImageUrl(image?: string): string {
  const baseUrl = "http://127.0.0.1:8000";
  const defaultImage = "https://via.placeholder.com/50";

  if (!image) return defaultImage;

  return `${baseUrl}${image.startsWith("/") ? "" : "/"}${image}`;
}
