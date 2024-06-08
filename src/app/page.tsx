import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Ваш маркетплейс для высококачественных <span className="text-blue-600">цифровых товаров</span></h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Добро пожаловать на digitalBebra.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>Популярное</Link>
          <Button variant='ghost'>Качество</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
