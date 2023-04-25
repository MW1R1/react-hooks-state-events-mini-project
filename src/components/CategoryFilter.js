import React from "react";

function CategoryFilter ({ categories, selectedCategory, onCategoryClick }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : "";
function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  // console.log(categories)
  const displayCategories = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onCategoryClick(category)}
      >
        {category}
      <button key={category} className={className} onClick={() => onSelectCategory(category)}>{category}
      </button>
    );
    )
  });
  return  (<div className="categories">
    <h5>Category filters</h5>
    {categoryButtons}
    </div>);
};

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
  );
}


export default CategoryFilter;
export default CategoryFilter;
