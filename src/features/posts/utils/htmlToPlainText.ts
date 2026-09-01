/**
 * Extrai o texto puro de uma string HTML (usado para preview de card e busca).
 * O `content` do post é salvo como HTML pelo editor BlockNote.
 */
export function htmlToPlainText(html?: string | null): string {
  if (!html) return "";

  if (typeof DOMParser === "undefined") {
    return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  }

  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent ?? "").replace(/\s+/g, " ").trim();
}
