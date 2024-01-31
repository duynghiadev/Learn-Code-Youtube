export const metadata = {
  title: "Nine Dev | Dash Board",
  description: "Danh sách học viên Nine Dev",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>Header Nine Dev</div>
      {children}
      <div>Footer Nini Dev</div>
    </section>
  );
}
