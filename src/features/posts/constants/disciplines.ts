import {
  IconLeaf,
  IconAtom,
  IconMath,
  IconFlask,
  IconGlobe,
  IconBuildingArch,
  IconBook,
  IconPalette,
  IconBallFootball,
  IconBrain,
  IconBook2,
  type IconProps,
} from "@tabler/icons-react";
import type { ComponentType } from "react";

export type TablerIcon = ComponentType<IconProps>;

export interface DisciplineStyle {
  label: string;
  /** cor de fundo do badge/card */
  bg: string;
  /** cor da borda */
  border: string;
  /** cor do texto e da borda superior do card */
  text: string;
  Icon: TablerIcon;
}

/**
 * Normaliza um nome de disciplina para uso como chave:
 * minúsculas, sem acento, sem pontuação, espaços colapsados.
 */
export function normalizeDiscipline(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

interface RawDiscipline extends DisciplineStyle {
  /** chaves alternativas que também devem casar com esta disciplina */
  aliases?: string[];
}

const RAW: RawDiscipline[] = [
  { label: "Biologia", bg: "#E8F5ED", border: "#A8D5B5", text: "#1A5C38", Icon: IconLeaf },
  { label: "Física", bg: "#EAF0FB", border: "#A0BEE8", text: "#1B3F7A", Icon: IconAtom },
  { label: "Matemática", bg: "#FFF5E6", border: "#FFD08A", text: "#7A4100", Icon: IconMath, aliases: ["matematica"] },
  { label: "Química", bg: "#F3EAFD", border: "#C9A8F0", text: "#4A1A7A", Icon: IconFlask },
  { label: "Geografia", bg: "#E6F7FA", border: "#89D4E0", text: "#0E5C66", Icon: IconGlobe },
  { label: "História", bg: "#FEF0E6", border: "#F5B98A", text: "#7A3010", Icon: IconBuildingArch },
  { label: "Português", bg: "#FDE8F0", border: "#F0A0C0", text: "#7A1840", Icon: IconBook, aliases: ["portugues", "lingua portuguesa"] },
  { label: "Artes", bg: "#FFF8E6", border: "#FFD966", text: "#6B4C00", Icon: IconPalette, aliases: ["arte"] },
  { label: "Ed. Física", bg: "#EAFAF0", border: "#80DBA8", text: "#0E5C30", Icon: IconBallFootball, aliases: ["ed fisica", "educacao fisica", "educ fisica"] },
  { label: "Filosofia", bg: "#F0EEF8", border: "#B0A8E0", text: "#2A1A6A", Icon: IconBrain },
];

export const DISCIPLINE_LIST: DisciplineStyle[] = RAW;

export const DISCIPLINES: Record<string, DisciplineStyle> = RAW.reduce(
  (acc, { aliases = [], ...d }) => {
    acc[normalizeDiscipline(d.label)] = d;
    for (const alias of aliases) acc[normalizeDiscipline(alias)] = d;
    return acc;
  },
  {} as Record<string, DisciplineStyle>,
);

export const NEUTRAL_DISCIPLINE: DisciplineStyle = {
  label: "Geral",
  bg: "var(--surface-1)",
  border: "var(--green-light)",
  text: "var(--text-secondary)",
  Icon: IconBook2,
};

/**
 * Resolve o estilo de uma disciplina a partir do texto livre de `post.discipline`.
 * Faz match por nome normalizado; cai para NEUTRAL_DISCIPLINE se não reconhecer.
 */
export function getDiscipline(value?: string | null): DisciplineStyle {
  if (!value) return NEUTRAL_DISCIPLINE;
  return DISCIPLINES[normalizeDiscipline(value)] ?? NEUTRAL_DISCIPLINE;
}
