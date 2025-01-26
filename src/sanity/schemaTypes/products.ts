export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",  
      description: "Product ID",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the product",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "A brief description of the product",
    },
    {
      name: "old_price",
      title: "Old Price",
      type: "number",  // Old price as number
      description: "The original price of the product before any discount or price change",
    },
    {
      name: "new_price",
      title: "New Price",
      type: "number",  // New price as number
      description: "The current price of the product after discount or price change",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",  // New price as number
      description: "The current rating of the product",
    },
    {
      name: "stock_quantity",
      title: "Stock Quantity",
      type: "number",  // New price as number
      description: "The current stock quantity of the product",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",  // Tags field as array of strings
      of: [{ type: "string" }],
      description: "Tags associated with the product",
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",  // Sizes field as array of strings
      of: [{ type: "string" }],
      description: "Available sizes of the product",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Product image",
    },
   
  ],
};



