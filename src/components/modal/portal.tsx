import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  elementId: string;
}

export default function Portal({ children, elementId }: PortalProps) {
  const rootElement = useMemo(() => document.getElementById(elementId), [
    elementId,
  ]);
  return createPortal(children, rootElement as HTMLElement);
}
