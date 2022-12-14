export default function Noggle(props: {
  color: string;
  size: number;
  mono?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size * 0.375}
      viewBox="0 0 1600 600"
      fill="none"
      shape-rendering={props.size < 40 ? "geometricPrecision" : "crispEdges"}
    >
      <rect y="203" width="100" height="300" fill={props.color} />
      <rect x="900" y="203" width="100" height="100" fill={props.color} />
      <rect x="400" width="400" height="100" fill={props.color} />
      <rect x="400" y="500" width="400" height="100" fill={props.color} />
      <rect x="100" y="203" width="200" height="100" fill={props.color} />
      <rect x="800" width="100" height="600" fill={props.color} />
      <rect
        x="600"
        y="100"
        width="200"
        height="400"
        fill={props.mono ? props.color : "black"}
      />
      <rect
        x="400"
        y="100"
        width="200"
        height="400"
        fill={props.mono ? "transparent" : "white"}
      />
      <rect
        x="1100"
        y="100"
        width="200"
        height="400"
        fill={props.mono ? "transparent" : "white"}
      />
      <rect
        x="1300"
        y="100"
        width="200"
        height="400"
        fill={props.mono ? props.color : "black"}
      />
      <rect x="300" width="100" height="600" fill={props.color} />
      <rect x="1100" width="400" height="100" fill={props.color} />
      <rect x="1100" y="500" width="400" height="100" fill={props.color} />
      <rect x="1500" width="100" height="600" fill={props.color} />
      <rect x="1000" width="100" height="600" fill={props.color} />
    </svg>
  );
}

// Path
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="600" viewBox="0 0 1600 600" fill="none"><path d="M899.5 300V599.5H300.5V300V299.5H300H100H99.5V300V499.5H0.5V200.5H300H300.5V200V0.5H899.5V200V200.5H900H1000H1000.5V200V0.5H1599.5V599.5H1000.5V300V299.5H1000H900H899.5V300Z" fill="red" stroke="none"/><path d="M599.5 499.5H400.5V100.5H599.5V499.5Z" fill="white" /><path d="M799.5 499.5H600.5V100.5H799.5V499.5Z" fill="black" /><path d="M1299.5 499.5H1100.5V100.5H1299.5V499.5Z" fill="white" /><path d="M1499.5 499.5H1300.5V100.5H1499.5V499.5Z" fill="black" /></svg>;

// Minified
<svg viewBox="0 0 51 19" xmlns="http://www.w3.org/2000/svg">
  <path d="M28.5 0H9.5V3.16667H28.5V0Z" fill="#F3322C" />
  <path d="m50.667 0h-19v3.1667h19v-3.1667z" fill="#F3322C" />
  <path d="m12.667 3.1667h-3.1667v3.1667h3.1667v-3.1667z" fill="#F3322C" />
  <path d="M19 3.16666H12.6667V6.33332H19V3.16666Z" fill="#fff" />
  <path d="M25.3333 3.16666H19V6.33332H25.3333V3.16666Z" />
  <path d="m28.5 3.1667h-3.1667v3.1667h3.1667v-3.1667z" fill="#F3322C" />
  <path d="m34.833 3.1667h-3.1667v3.1667h3.1667v-3.1667z" fill="#F3322C" />
  <path d="m41.167 3.1667h-6.3333v3.1667h6.3333v-3.1667z" fill="#fff" />
  <path d="m47.5 3.1667h-6.3333v3.1667h6.3333v-3.1667z" />
  <path d="m50.667 3.1667h-3.1667v3.1667h3.1667v-3.1667z" fill="#F3322C" />
  <path d="M12.6667 6.33334H0V9.50001H12.6667V6.33334Z" fill="#F3322C" />
  <path d="M19 6.33334H12.6667V9.50001H19V6.33334Z" fill="#fff" />
  <path d="M25.3333 6.33334H19V9.50001H25.3333V6.33334Z" />
  <path d="m34.833 6.3333h-9.5v3.1667h9.5v-3.1667z" fill="#F3322C" />
  <path d="m41.167 6.3333h-6.3333v3.1667h6.3333v-3.1667z" fill="#fff" />
  <path d="m47.5 6.3333h-6.3333v3.1667h6.3333v-3.1667z" />
  <path d="m50.667 6.3333h-3.1667v3.1667h3.1667v-3.1667z" fill="#F3322C" />
  <path d="M3.16667 9.5H0V12.6667H3.16667V9.5Z" fill="#F3322C" />
  <path d="M12.6667 9.5H9.5V12.6667H12.6667V9.5Z" fill="#F3322C" />
  <path d="M19 9.5H12.6667V12.6667H19V9.5Z" fill="#fff" />
  <path d="M25.3333 9.5H19V12.6667H25.3333V9.5Z" />
  <path d="M28.5 9.5H25.3333V12.6667H28.5V9.5Z" fill="#F3322C" />
  <path d="M34.8334 9.5H31.6667V12.6667H34.8334V9.5Z" fill="#F3322C" />
  <path d="M41.1666 9.5H34.8333V12.6667H41.1666V9.5Z" fill="#fff" />
  <path d="M47.5 9.5H41.1667V12.6667H47.5V9.5Z" />
  <path d="M50.6667 9.5H47.5V12.6667H50.6667V9.5Z" fill="#F3322C" />
  <path d="M3.16667 12.6667H0V15.8333H3.16667V12.6667Z" fill="#F3322C" />
  <path d="m12.667 12.667h-3.1667v3.1666h3.1667v-3.1666z" fill="#F3322C" />
  <path d="M19 12.6667H12.6667V15.8333H19V12.6667Z" fill="#fff" />
  <path d="M25.3333 12.6667H19V15.8333H25.3333V12.6667Z" />
  <path d="m28.5 12.667h-3.1667v3.1666h3.1667v-3.1666z" fill="#F3322C" />
  <path d="m34.833 12.667h-3.1667v3.1666h3.1667v-3.1666z" fill="#F3322C" />
  <path d="m41.167 12.667h-6.3333v3.1666h6.3333v-3.1666z" fill="#fff" />
  <path d="m47.5 12.667h-6.3333v3.1666h6.3333v-3.1666z" />
  <path d="m50.667 12.667h-3.1667v3.1666h3.1667v-3.1666z" fill="#F3322C" />
  <path d="M28.5 15.8333H9.5V19H28.5V15.8333Z" fill="#F3322C" />
  <path d="m50.667 15.833h-19v3.1667h19v-3.1667z" fill="#F3322C" />
</svg>;
