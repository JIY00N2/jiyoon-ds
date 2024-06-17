import { RefCallback, useCallback, useState } from 'react';

/**
 * 조건부에서 Ref 를 사용할 때, DOM 요소의 위치, 크기 계산하기 위한 훅
 * @template T 는 HTMLElement를 확장합니다.
 * @returns {[DOMRect | null, RefCallback<T>]}
 */

export const useClientRect = <T extends HTMLElement>(): [
  DOMRect | null,
  RefCallback<T>
] => {
  const [rect, setRect] = useState<DOMRect | null>(null);

  const ref: RefCallback<T> = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);

  return [rect, ref];
};
