const cds = require("@sap/cds");
const { request } = require("express");

module.exports = cds.service.impl(async function () {
  const { Products } = this.entities;
  const service = await cds.connect.to("NorthWind");
  this.on("READ", Products, async (request) => {
    //Checks before call made to external service
    //enrich data, validations, checks...
    var data = await service.tx(request).run(request.query);
    // data.forEach(function(element, index) {
    //     if(element.Price < 40){
    //         data.splice(index, 1);
    //     }
    // });
    // data.push({
    //   ID: 10,
    //   Name: "Alam",
    //   Description: "BTP learning",
    //   ReleaseDate: "2006-11-15T00:00:00Z",
    //   DiscontinuedDate: null,
    //   Rating: 5,
    //   Price: 100
    // });
    return data;
    //once data comes from external service - post processing
    //checks, validations, enrichments, masking, reduce data size
  });
});
