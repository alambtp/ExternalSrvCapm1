using { NorthWind as external  } from './external/NorthWind';

service CatalogService@(path: '/CatalogService') {

    @readonly
    entity Products as projection on external.Products{
        key ProductID,
        ProductName,
        QuantityPerUnit,
        UnitPrice,
        UnitsInStock,
        UnitsOnOrder,
        ReorderLevel,
       Discontinued
    //    case Discontinued
    //         when false then 2
    //         when true then 3
    //         else 1
    //     end as Discontinued: Integer
    }
    
    annotate Products with{
      ProductID @title : 'Product ID';
      ProductName @title : 'Product Name';  
    };
    

}