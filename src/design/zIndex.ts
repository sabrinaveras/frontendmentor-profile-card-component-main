export interface ZIndex {
  name: string;
  value: number;
}

type ZIndexObject = { [key: string]: ZIndex };

export const zIndex: ZIndexObject = {
  speedDial: { name: "Speed Dial", value: 1050 },
  appBar: { name: "App Bar", value: 1100 },
  drawer: { name: "Drawer", value: 1200 },
  modal: { name: "Modal", value: 1300 },
  tooltip: { name: "Tooltip", value: 1500 },
  background: { name: "Background", value: -10 },
};
