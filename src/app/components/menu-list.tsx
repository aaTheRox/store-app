"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import useGetCategories from "../../../api/getProducts";
import IResponseType from "../../../types/response";
type ICategoryType = {
  id: number;
  categoryName: string;
  categorySlug: string;
  description: string;
};

const MenuList = () => {
  const { result, loading }: IResponseType = useGetCategories();
  let categories: ICategoryType[] = [];

  result?.forEach((category: ICategoryType) => {
    categories.push({
      id: category.id,
      categoryName: category.categoryName,
      categorySlug: `/category/${category.categorySlug}`,
      description: category.description,
    });
  });

  return (
    <NavigationMenu className="z-[5] m750:max-w-[300px]">
      <NavigationMenuList className="m750:max-w-[300px]">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="m750:max-w-[80px] m750:text-xs">
            <span className="m750:hidden">Sobre nosotros</span>
            <span className="hidden m750:inline">Home</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-6 lg:grid-cols-[.75fr_1fr] m750:w-[300px]">
              {/* <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="https://ui.shadcn.com"
                  >
                    <div className="mb-2 mt-4 text-lg font-heading">
                      shadcn/ui
                    </div>
                    <p className="text-sm font-base leading-tight">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li> */}
              <ListItem href="/about-us" title="Sobre nosotros">
                Descubre nuestra historía ksajkasjkajksa
              </ListItem>
              <ListItem href="/contact" title="Contacto">
                Ponte en contracto con nosotros, te resolveremos todas tus
                dudas.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="m750:max-w-[80px] m750:text-xs">
            Categorías
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {categories.map((category) => (
                <ListItem
                  key={category.categoryName}
                  title={category.categoryName}
                  href={category.categorySlug}
                >
                  {category.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="https://ui.shadcn.com/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="m750:max-w-[80px] m750:text-xs">
                Documentation
              </span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent block text-text select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-border dark:hover:border-darkBorder",
            className
          )}
          {...props}
        >
          <div className="text-base font-heading leading-none">{title}</div>
          <p className="text-muted-foreground font-base line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MenuList;
