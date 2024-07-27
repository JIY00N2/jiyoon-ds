import Tooltip from "../src/lib/components/Tooltip/Tooltip";
import Modal from "../src/lib/components/Modal/Modal";
import DropdownMenu from "./lib/components/DropdownMenu/DropdownMenu";
import "./global.css";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        width: "1000px",
        height: "1000px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tooltip.Root direction="bottom">
        <Tooltip.Trigger style={{ border: "1px solid black" }}>
          트리거 버튼
        </Tooltip.Trigger>
        <Tooltip.Content style={{ border: "1px solid black" }}>
          내용입니다.
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
      <Modal.Root>
        <Modal.Trigger>모달 트리거</Modal.Trigger>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content style={{ width: "500px", height: "300px" }}>
            모달 내용
            <Modal.Close>닫기</Modal.Close>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
      <DropdownMenu.Root
        align={"right"}
        defaultOpen={true}
        offset={5}
        direction={"bottom"}
      >
        <DropdownMenu.Trigger style={{ border: "1px solid black" }}>
          drop down 트리거 버튼
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content style={{ border: "1px solid black" }}>
            <div style={{ display: "flex" }}>
              <DropdownMenu.Item>아이템1</DropdownMenu.Item>
              <DropdownMenu.Separator orientation={"vertical"} />
              <DropdownMenu.Item>아이템2</DropdownMenu.Item>
            </div>
            <DropdownMenu.Separator orientation={"horizontal"} />
            <DropdownMenu.Item>아이템3</DropdownMenu.Item>
            <DropdownMenu.Sub margin={0}>
              <DropdownMenu.SubTrigger style={{ border: "1px solid red" }}>
                서브 트리거
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent style={{ border: "1px solid blue" }}>
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>서브 22</DropdownMenu.SubTrigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent
                        style={{ border: "1px solid blue" }}
                      >
                        <DropdownMenu.Item>서브 아이템1</DropdownMenu.Item>
                        <DropdownMenu.Item>서브 아이템1</DropdownMenu.Item>
                        <DropdownMenu.Item>서브 아이템1</DropdownMenu.Item>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>

                  <DropdownMenu.Item>서브 아이템2</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템1</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템2</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템1</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템2</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템1</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템2</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템1</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템2</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템1</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템2</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템2</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템1</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템2</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템1</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템2</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템1</DropdownMenu.Item>
                  <DropdownMenu.Item>서브 아이템2</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
            <DropdownMenu.Arrow />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
