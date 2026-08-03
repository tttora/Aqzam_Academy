"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "@/components/OrderModal";

type ProductCardProps = {
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductCard({
  title,
  price,
  description,
  image,
}: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <div className="rounded-3xl bg-[#e8e4f2] p-4 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">        
          <Image
            src={image}
            alt={title}
            width={300}
            height={450}
            className="mx-auto h-[350px] w-[250px] rounded-2xl object-cover"
          />

          <div className="p-6">
            <h3 className="mb-2 text-2xl font-bold text-slate-900">
              {title}
            </h3>

            <p className="mb-6 text-slate-600">
              {description}
            </p>

            <div className="mb-6 flex items-center gap-3 text-sm text-slate-500">
              <span>📘 PDF</span>
              <span>🎥 Видео</span>
              <span>💬 Telegram</span>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-violet-700">
                {price} ₸
              </p>

              <button onClick={() => setIsOpen(true)} className="rounded-full bg-violet-700 px-5 py-3 font-semibold text-white transition hover:bg-violet-800">
                Сатып алу
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <OrderModal
            product={title}
            amount={price}
            onClose={() => setIsOpen(false)}
          />
        )}
    </>
  );
}