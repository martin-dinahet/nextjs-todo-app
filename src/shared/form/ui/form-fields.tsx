"use client";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function FormFields({ children }: Props) {
  return <div className="flex flex-col gap-4">{children}</div>;
}
