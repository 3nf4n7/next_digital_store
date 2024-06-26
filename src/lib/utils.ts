import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "RUB";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "RUB", notation = "compact" } = options;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}

export function constructMetadata({
  title = "DigitalBebra - маркетплейс цифровых товаров",
  description = "DigitalBebra Pet project about digital assets.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@3nf4n7",
    },
    icons,
    metadataBase: new URL(
      "https://nextdigitalstore-production.up.railway.app/"
    ),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
