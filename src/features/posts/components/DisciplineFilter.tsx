import { DISCIPLINE_LIST } from "../constants/disciplines";

interface DisciplineFilterProps {
  /** label da disciplina selecionada, ou null para "Todos" */
  selected: string | null;
  onSelect: (discipline: string | null) => void;
}

/**
 * Chips de filtro por disciplina (spec §"Filtros de disciplina").
 * Inativo: fundo branco, borda e texto da disciplina.
 * Ativo "Todos": fundo verde, texto branco.
 */
export const DisciplineFilter = ({
  selected,
  onSelect,
}: DisciplineFilterProps) => (
  <div className="flex flex-wrap gap-2">
    <button
      type="button"
      onClick={() => onSelect(null)}
      className={`rounded-full border-hair px-3 py-1 text-xs font-medium transition-colors ${
        selected === null
          ? "border-green-primary bg-green-primary text-white"
          : "border-green-light bg-white text-green-primary hover:bg-green-pale"
      }`}
    >
      Todos
    </button>

    {DISCIPLINE_LIST.map((d) => {
      const active = selected === d.label;
      const Icon = d.Icon;
      return (
        <button
          key={d.label}
          type="button"
          onClick={() => onSelect(active ? null : d.label)}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors"
          style={{
            backgroundColor: active ? d.bg : "#fff",
            borderColor: d.border,
            borderWidth: "0.5px",
            color: d.text,
          }}
        >
          <Icon size={14} stroke={1.5} />
          {d.label}
        </button>
      );
    })}
  </div>
);
