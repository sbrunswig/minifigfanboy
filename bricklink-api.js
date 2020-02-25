var api = require('bricklink-api');
var Client = api.Client,
    ItemType = api.ItemType,
    PriceGuide = api.PriceGuide,
    PriceDetail = api.PriceDetail,
    Condition = api.Condition;

const bricklink = new Client({
    "consumer_key": "34D87D0E82ED41C9A4C1BAEF3E4AACC9>",
    "consumer_secret": "07FCBBF056164A38BCAE8C970DCC76B7",
    "token": "14E17146B0134C848ECA7D6FD656AB97",
    "token_secret": "614ACCEC01414383BE33B10C85F2E8AF"
  });


var req = PriceGuide.get(ItemType.Minifigure, 'sh500', {guide_type: 'sold', new_or_used: Condition.New});
setInterval(function() {
  bricklink.send(req).then(guide => console.log(guide));
}, 20000);

//   var CatalogItem = api.CatalogItem;
//   var req = CatalogItem.get(ItemType.Minifigure, 'sh500');
//   bricklink.send(req)
//     .then(function(part){
//       console.log(part);
//     });