import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Мгновенная доставка",
    Icon: ArrowDownToLine,
    description: "Товар отправляется на электронную почту за секунду"
  },
  {
    name: "Гарантия качества",
    Icon: CheckCircle,
    description: "Каждый товар проверен командой маркета"
  },
  {
    name: "Забота об экологии",
    Icon: Leaf,
    description: "Процент с каждой покупки идет на пожертвования природным заповедникам"
  }
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Ваш маркетплейс для высококачественных{" "}
            <span className="text-green-600">цифровых товаров</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Добро пожаловать на digitalBebra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Популярное
            </Link>
            <Button variant="ghost">Качество</Button>
          </div>
        </div>

        {/* {TODO: list products} */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x8 lg:gap-y-0">
            {perks.map(perk => (
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))} 
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
