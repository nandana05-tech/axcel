import BottomNav from '@/components/BottomNav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col pb-[88px] md:pb-0">
      {children}
      <BottomNav />
    </div>
  );
}
