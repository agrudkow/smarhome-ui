import { useState, useCallback } from 'react';

export function useAccordion<T>({
  postToggleFunction,
  preToggleFunction,
  defaultOpen,
}: {
  preToggleFunction?: (...args: unknown[]) => void;
  postToggleFunction?: (...args: unknown[]) => void;
  defaultOpen?: T;
}) {
  const [expandedAccordion, setExpandedAccordion] = useState<T | null>(
    defaultOpen ?? null
  );

  const toggleAccordionFactory = useCallback(
    (accordionName: T) => () => {
      if (preToggleFunction) {
        preToggleFunction();
      }

      setExpandedAccordion((expandedAccordion) =>
        expandedAccordion === accordionName ? null : accordionName
      );

      if (postToggleFunction) {
        postToggleFunction();
      }
    },
    [postToggleFunction, preToggleFunction]
  );

  const closeAccordionFactory = useCallback(
    (accordionName: T) => () => {
      setExpandedAccordion((expandedAccordion) =>
        expandedAccordion === accordionName ? null : expandedAccordion
      );
    },
    []
  );

  return {
    expandedAccordion,
    toggleAccordionFactory,
    closeAccordionFactory,
  } as const;
}
