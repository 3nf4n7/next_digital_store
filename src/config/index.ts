export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Наш выбор",
        href: `${process.env.NEXT_PUBLIC_SERVER_URL}/products`,
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "Новые поступления",
        href: `${process.env.NEXT_PUBLIC_SERVER_URL}/products`,
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Топ продаж",
        href: `${process.env.NEXT_PUBLIC_SERVER_URL}/products`,
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "Избранные иконки",
        href: `${process.env.NEXT_PUBLIC_SERVER_URL}/products`,
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "Новые поступления",
        href: `${process.env.NEXT_PUBLIC_SERVER_URL}/products`,
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Топ продаж",
        href: `${process.env.NEXT_PUBLIC_SERVER_URL}/products`,
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
