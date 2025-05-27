import React from "react";

export type ReactProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  [key: string]: any; // Allow additional props
}
