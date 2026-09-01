import type { ReactNode } from "react";
import {
  IconCircleCheck,
  IconInfoCircle,
  IconAlertTriangle,
  type IconProps,
} from "@tabler/icons-react";
import type { ComponentType } from "react";

type FeedbackVariant = "success" | "info" | "error";

interface FeedbackProps {
  variant?: FeedbackVariant;
  children: ReactNode;
  className?: string;
}

const styles: Record<
  FeedbackVariant,
  { box: string; Icon: ComponentType<IconProps> }
> = {
  success: {
    box: "bg-green-pale border-green-light text-green-primary",
    Icon: IconCircleCheck,
  },
  info: {
    box: "bg-blue-pale border-blue-light text-blue-primary",
    Icon: IconInfoCircle,
  },
  error: {
    box: "bg-danger-bg border-danger-border text-danger-text",
    Icon: IconAlertTriangle,
  },
};

/** Mensagem de feedback (spec §"Mensagens de feedback"). */
export const Feedback = ({
  variant = "info",
  children,
  className = "",
}: FeedbackProps) => {
  const { box, Icon } = styles[variant];

  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className={`flex items-start gap-2 rounded border-hair p-3 text-sm ${box} ${className}`}
    >
      <Icon size={18} stroke={1.5} className="mt-0.5 shrink-0" />
      <div>{children}</div>
    </div>
  );
};
