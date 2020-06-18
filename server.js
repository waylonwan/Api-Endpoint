var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/api-endpoint', function(request, response) {
    var nameString = request.query.name;
    var historyString = request.query.history;
    
//       var jsonContent = { 
//             title: nameString,
//             imageUrl: "https://image.flaticon.com/icons/png/512/61/61456.png",
//             contact: [ {id: 12345, name: "King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"}],
//             show: true 
//         };
    
    var jsonContent = { 
	username: "STANLEY NG",
	memberId: 8148862405,
	currentTier: "Gold",
	currentTierStartDate: "2020-02-15",
	currentTierEndDate: "2022-02-14",
	previousTier: "Silver ",
	previousTierStartDate: "2018-02-15",
	previousTierEndDate: "2020-02-14",
	joinDate: "2006-06-20",
	mobileNo: "+852 98769876",
	birthMonth: 6,
	email: "stanley.ng@hkt.com",
	balance: 6505,
	expBalance: [{balance: 2000, expDate: "31/03/2021"}, {balance: 2505, expDate: "30/09/2021"}, {balance: 2000, expDate: "31/12/2021"}],
	transaction: [{transName: "(Bill: 4/2020)", transDesc: "Club SIM - Bill: 8048903747", transType: "Earn", transBalance: 2, transDate: "23/05/2020"},
				  {transName: "(Bill: 4/2020)", transDesc: "1O1O - Bill: 75100213338565", transType: "Earn", transBalance: 35, transDate: "23/05/2020"},
				  {transName: "1O1O Service Plan Renewal Offer", transType: "Earn", transBalance: 1500, transDate: "22/05/2020"},
				  {transName: "Club Like Purchase", transDesc: "order no:3000038875", transType: "Earn", transBalance: 1500, transDate: "08/05/2020"},
				  {transName: "(Bill: 3/2020)", transDesc: "1O1O - Bill: 75100213338565", transType: "Earn", transBalance: 35, transDate: "23/04/2020"},
				  {transName: "(Bill: 2/2020)", transDesc: "1O1O - Bill: 75100213338565", transType: "Earn", transBalance: 38, transDate: "23/03/2020"},
				  {transName: "Club SIM - Service Pack", transType: "Burn", transBalance: 510, transDate: "14/01/2020"},
				  {transName: "broadway circuit Ticket Exchange Coupon (1pc) (Quantity: 1)", transType: "Burn", transBalance: 500, transDate: "27/09/2019"},
				  {transName: "Club SIM - Service Pack", transType: "Burn", transBalance: 75, transDate: "30/06/2019"},
				  {transName: "Club SIM - Service Pack", transType: "Burn", transBalance: 75, transDate: "30/05/2019"}]
    };
    
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send(JSON.parse(JSON.stringify(jsonContent)));
    
});


app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
