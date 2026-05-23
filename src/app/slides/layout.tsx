export default function SlidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`html { font-size: 20px; }`}</style>
      {children}
    </>
  );
}
