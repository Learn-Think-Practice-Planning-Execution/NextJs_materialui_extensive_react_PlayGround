"use client";
export default function MainSectionLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
}
