import { getDiscipline } from "../constants/disciplines";

interface DisciplineBadgeProps {
  /** texto livre vindo de `post.discipline` */
  discipline?: string | null;
  className?: string;
}

/**
 * Pill com bg + border + text da disciplina (spec §"Cor por disciplina").
 * Usa os três tokens sempre juntos; nunca mistura disciplinas.
 */
export const DisciplineBadge = ({
  discipline,
  className = "",
}: DisciplineBadgeProps) => {
  const d = getDiscipline(discipline);
  const Icon = d.Icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${className}`}
      style={{
        backgroundColor: d.bg,
        borderColor: d.border,
        borderWidth: "0.5px",
        color: d.text,
      }}
    >
      <Icon size={14} stroke={1.5} />
      {d.label}
    </span>
  );
};
