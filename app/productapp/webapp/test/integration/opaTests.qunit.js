sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/prod/productapp/test/integration/FirstJourney',
		'com/prod/productapp/test/integration/pages/ProductsList',
		'com/prod/productapp/test/integration/pages/ProductsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/prod/productapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
                }
            },
            opaJourney.run
        );
    }
);