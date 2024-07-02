import React from 'react';
import Tooltip from '../src/lib/components/Tooltip/Tooltip';
import Modal from '../src/lib/components/Modal/Modal';
import './global.css';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Tooltip.Root direction='top'>
        <Tooltip.Trigger>트리거 버튼</Tooltip.Trigger>
        <Tooltip.Content>
          내용입니다.
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
      <Modal.Root>
        <Modal.Trigger>모달 트리거</Modal.Trigger>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content style={{ width: '500px', height: '300px' }}>
            모달 내용
            <Modal.Close>닫기</Modal.Close>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  );
}
