import { useState, useCallback } from 'react';

/**
 * @function useAccordion<T> -custom hook which handles Accordion state where `T` is enum with accordions names.
 *
 * @returns
 * @var expandedAccordion - Accordion state (enum `T` value).
 * @function toggleAccordionFactory - factory function which retruns toggle function for provided Accordion name(enum `T` value).
 * @function toggleAccordionFactory - factory function which retruns close function for provided Accordion name(enum `T` value).
 */
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
