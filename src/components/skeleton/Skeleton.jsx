import "./Skeleton.css";

export default function Skeleton({ width, height }) {
  return (
    <div
      style={{ width, height, borderRadius: "8px" }}
      className="skeleton"
    ></div>
  );
}
