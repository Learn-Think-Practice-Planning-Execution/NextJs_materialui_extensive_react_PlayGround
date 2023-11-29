"use client";
export default function MeasureLayout(props: {
  children: React.ReactNode;
  mainsection: React.ReactNode;
}) {
  return (
    <>
      <div>{props.children}</div>
      <div>{props.mainsection}</div>
    </>
  );
}
