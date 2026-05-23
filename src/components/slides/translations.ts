import type { Lang } from "./LangContext";

export function t(lang: Lang, en: string, id: string): string {
  return lang === "id" ? id : en;
}
