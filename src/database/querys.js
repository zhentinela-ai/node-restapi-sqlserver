export const queries = {
  getAllProducts: "SELECT * FROM [webstore].[dbo].[Products]",
  addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name, @description, @quantity)",
  getProductById: "SELECT * FROM [webstore].[dbo].[Products] WHERE Id = @Id",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id = @Id",
  getTotalProducts: "SELECT COUNT(*) FROM [webstore].[dbo].[Products]",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id",
};
