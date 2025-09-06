import { ROUTES, AdminTabs, AvailableSizes, AvailableColors, Categories } from "@/features/Admin";

export const tabs = [
    { label: AdminTabs.Overview, to: ROUTES.ADMIN_OVERVIEW },
    { label: AdminTabs.Products, to: ROUTES.ADMIN_PRODUCTS },
    { label: AdminTabs.Users, to: ROUTES.ADMIN_USERS },
    { label: AdminTabs.Analytics, to: ROUTES.ADMIN_ANALYTICS },
  ];
  export  const availableCategories = [
      { id: Categories.Men, name: Categories.Men, prefix: Categories.Men},
      { id: Categories.Women, name: Categories.Women, prefix: Categories.Women},
      { id: Categories.Kids, name: Categories.Kids, prefix: Categories.Kids},
      { id: Categories.Sports, name: Categories.Sports, prefix: Categories.Sports},
      { id: Categories.Accessories, name: Categories.Accessories, prefix: Categories.Accessories},
    ];
    
 export const availableColors = Object.values(AvailableColors);
 export const availableSizes = Object.values(AvailableSizes);
