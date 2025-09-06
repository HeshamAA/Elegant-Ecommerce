import { CategoryTabProps } from "@/features/Home";

export const CategoryTab = ({ id, name, isActive, onClick }: CategoryTabProps) => (
  <button
    className={`category-tab ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    {name}
  </button>
);

export default CategoryTab;
