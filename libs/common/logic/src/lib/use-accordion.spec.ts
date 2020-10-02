import { renderHook, act } from '@testing-library/react-hooks';
import { useAccordion } from './use-accordion';

enum Accordions {
  one,
  two,
}

describe(' useAccordion', () => {
  it('should toggle accordion', () => {
    const { result } = renderHook(() => useAccordion<Accordions>({}));

    expect(result.current.expandedAccordion).toEqual(null);
    act(() => {
      result.current.toggleAccordionFactory(Accordions.one)();
    });
    expect(result.current.expandedAccordion).toEqual(Accordions.one);
    act(() => {
      result.current.toggleAccordionFactory(Accordions.one)();
    });
    expect(result.current.expandedAccordion).toEqual(null);
  });

  it('should initialize with default accordion', () => {
    const { result } = renderHook(() =>
      useAccordion<Accordions>({ defaultOpen: Accordions.two })
    );

    expect(result.current.expandedAccordion).toEqual(Accordions.two);
  });

  it('should close accordion', () => {
    const { result } = renderHook(() =>
      useAccordion<Accordions>({ defaultOpen: Accordions.two })
    );

    expect(result.current.expandedAccordion).toEqual(Accordions.two);
    act(() => {
      result.current.closeAccordionFactory(Accordions.two)();
    });
    expect(result.current.expandedAccordion).toEqual(null);
  });

  it('should run pre and post toggle handlers', () => {
    const preToggleHandler = jest.fn();
    const postToggleHandler = jest.fn();
    const { result } = renderHook(() =>
      useAccordion<Accordions>({
        preToggleFunction: preToggleHandler,
        postToggleFunction: postToggleHandler,
      })
    );

    act(() => {
      result.current.toggleAccordionFactory(Accordions.two)();
    });
    expect(preToggleHandler).toBeCalledTimes(1);
    expect(postToggleHandler).toBeCalledTimes(1);
  });
});
