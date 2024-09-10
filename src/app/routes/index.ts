type Route = {
  id: string;
  path: string;
  title?: string;
};

export const Routes: Route[] = [
  {
    id: "swap",
    title: "Swap",
    path: "/swap",
  },
  {
    id: "bridge",
    title: "Bridge",
    path: "/bridge",
  },
  {
    id: "pools",
    title: "Pools",
    path: "/pools",
  },
  {
    id: "products",
    title: "Products",
    path: "/products",
  },
];
