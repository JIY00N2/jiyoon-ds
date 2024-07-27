import { RefCallback, useCallback, useState } from "react";

export const useCallbackRef = <T extends HTMLElement>() => {
  const [element, setElement] = useState<T | null>(null);

  const elementCallbackRef: RefCallback<T> = useCallback(
    (node) => setElement(node),
    [],
  );

  return [element, elementCallbackRef] as [T, RefCallback<T>];
};
