'use client';

import { ChevronLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { CreateCarForm } from '@/components/forms/create-car-form';
import { Button } from '@/components/ui/button';

export default function AddCarPage({ params }: { params: { slug: string } }) {
  const router = useRouter();

  return (
    <div>
      <div className="mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={() => router.back()}
          className="mr-4 h-8 w-8 rounded-full"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </Button>
        <h2 className="inline text-2xl font-bold">
          {params.slug === 'new' ? 'Đăng ký' : 'Cập nhật'} xe
        </h2>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-4/5">
          <CreateCarForm slug={params?.slug} />
        </div>
      </div>
    </div>
  );
}
