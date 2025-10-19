'use client'
import dynamic from 'next/dynamic';
const PointCloudNav = dynamic(() => import('@/components/PointCloudNav'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold animate-fade-in text-center">
        Johnathon Zheng
      </h1>
      <p className="text-lg text-gray-400 animate-fade-in">
        Test · Testy Test · Applied Math
      </p>
      <PointCloudNav />
    </main>
  );
}
