export default function MeasureLayout({
  children,
  mainsection,
  sidebar,
}: {
  children: React.ReactNode;
  mainsection: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>{mainsection}</div>
      <div>{sidebar}</div>
    </>
  );
}
