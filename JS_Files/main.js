$(document).ready(startWhenloaded)
let initialization = null;

function startWhenloaded(){

  let domInformation = { //Passes all elments for click handling and editing that is needed. 
    initScanButton: $("#camera-button"),
    submitNumberInput: $(".search-bar"),
    displayDataElm: $(".info-container1"),
    displayYoutubeElm: $(".youtube-main"),
    youtubeArticleElm: $(".youtube-main .article.item"),
    displayDataImgElm: $("#product-image-placeholder"),
    modalButton: $('.btn-modal'),
    modalShadow: $("#modal-shadow"),
    modalBody: $(".modal"),
    modalDisplayText: $(".modal-body"),
    submitBarcodeNumberButton: $("#search-bar-button-image"),
    cancelScanButton: $(".cancel-scan"),
    homeIcon:$(".home-page-button"),
    reviewIcon:$(".reviews-page-button"),
    mapIcon:$(".map-page-button"),
    youtubeIcon:$(".youtube-page-button"),
    indexDisplayPage: $(".index-page"),
    productDisplayPage: $(".product-page"),
    youtubeDisplayPage: $(".youtube-page"),
    googleDisplayPage: $(".google-page"),
    searchBarContainer:$(".search-bar-container")
  }
  initialization = new PBGS_init(domInformation); //TODO: Move this and next line into the user interface class
  initialization.clickHandler();
  domInformation.indexDisplayPage.show();
  domInformation.productDisplayPage.hide();
  domInformation.youtubeDisplayPage.hide();
  domInformation.googleDisplayPage.hide();
  domInformation.modalBody.hide();
  domInformation.modalShadow.hide();
}
//TODO: REMOVE Temp Pass data after testing
let testBadScan = {"code":"OK","total":0,"offset":0,"items":[]}
let testData = {
  "code": "OK",
  "total": 1,
  "offset": 0,
  "items": [{
    "ean": "0610370565025",
    "title": "million dollars, but... the game",
    "description": "million dollars, but... the game",
    "upc": "610370565025",
    "brand": "rooster teeth",
    "model": "56502CZE",
    "color": "Burgundy",
    "size": "",
    "dimension": "",
    "weight": "",
    "currency": "",
    "lowest_recorded_price": 15.24,
    "highest_recorded_price": 71.36,
    "images": [
      "https://d29pz51ispcyrv.cloudfront.net/images/I/ZkuNuJ9w9OaZAANyv.MD256.JPEG",
      "http://images.jet.com/md5/24f518f4605e7e80424faa7f13821d8e.500",
      "https://images10.newegg.com/ProductImageCompressAll200/ACXV_1_20180830374784191.jpg",
      "https://i5.walmartimages.com/asr/0d03e562-0da9-478e-8f4e-ebca32be6a63_1.59b683e79cbcb81f62efaaf48b575323.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      "https://i5.walmartimages.com/asr/f67b82a4-3073-467e-b445-48ee7235a47c_1.722bfc9a897be9a0e06ca82be8871800.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      "https://tshop.r10s.com/114/40b/358b/5546/00f6/0981/6a0c/116ae9b6b7a81e84d033d4.jpg?_ex=512x512",
      "http://site.unbeatablesale.com/ACDD40148.JPG",
      "https://www.calendars.com/img/p/135/201900018100.jpg",
      "https://images10.newegg.com/ProductImageCompressAll200/ACXV_1_20180830374784191.jpg"
    ],
    "offers": [{
        "merchant": "Newegg.com",
        "domain": "newegg.com",
        "title": "Million Dollars But The Game, Adult Games by Cryptozoic Entertainment",
        "currency": "",
        "list_price": "",
        "price": 24.99,
        "shipping": "Free Shipping",
        "condition": "New",
        "availability": "Out of Stock",
        "link": "http://www.upcitemdb.com/norob/alink/?id=w2w2x2x2y213c4b4r2&tid=1&seq=1548721476&plt=6f93c6a78400b1bababad36b59eb11fd",
        "updated_t": 1541682854
      },
      {
        "merchant": "Calendars.com",
        "domain": "Calendars.com",
        "title": "Million Dollars But The Game",
        "currency": "",
        "list_price": "",
        "price": 24.99,
        "shipping": "6.00",
        "condition": "New",
        "availability": "",
        "link": "http://www.upcitemdb.com/norob/alink/?id=w2r2x223234384c4s2&tid=1&seq=1548721476&plt=e08e0856046c60b9b7656f0b487f72be",
        "updated_t": 1548654899
      },
      {
        "merchant": "UnbeatableSale.com",
        "domain": "unbeatablesale.com",
        "title": "Cryptozoic Entertainment CTZ56502 Million Dollars But The Game",
        "currency": "",
        "list_price": "",
        "price": 20,
        "shipping": "9.81",
        "condition": "New",
        "availability": "",
        "link": "http://www.upcitemdb.com/norob/alink/?id=w2t22313w213d464w2&tid=1&seq=1548721476&plt=3c57f7df26a73781b25f0ade2f79b4bc",
        "updated_t": 1548662465
      },
      {
        "merchant": "Rakuten(Buy.com)",
        "domain": "rakuten.com",
        "title": "Million Dollars But The Game, Adult Games by Cryptozoic Entertainment",
        "currency": "",
        "list_price": "",
        "price": 54.7,
        "shipping": "",
        "condition": "New",
        "availability": "",
        "link": "http://www.upcitemdb.com/norob/alink/?id=w2t2z223y2337494r2&tid=1&seq=1548721476&plt=6a1c406b94605d75882e8927c9606728",
        "updated_t": 1546366480
      },
      {
        "merchant": "Wal-Mart.com",
        "domain": "walmart.com",
        "title": "Million Dollars But The Game",
        "currency": "",
        "list_price": 25,
        "price": 19.96,
        "shipping": "5.99",
        "condition": "New",
        "availability": "",
        "link": "http://www.upcitemdb.com/norob/alink/?id=w2r25313z2x2b4b4q2&tid=1&seq=1548721476&plt=24aaa50c6714f7c3ccdd722f739af557",
        "updated_t": 1543034423
      },
      {
        "merchant": "Walmart Marketplace",
        "domain": "walmart.com",
        "title": "million dollars, but... the game",
        "currency": "",
        "list_price": 19.99,
        "price": 17.95,
        "shipping": "10.95",
        "condition": "New",
        "availability": "",
        "link": "http://www.upcitemdb.com/norob/alink/?id=w2q253w203y29474z2&tid=1&seq=1548721476&plt=505e15e961c7962caed7b937849c0823",
        "updated_t": 1534212402
      },
      {
        "merchant": "Newegg Canada",
        "domain": "newegg.ca",
        "title": "Million Dollars But The Game, Adult Games by Cryptozoic Entertainment",
        "currency": "CAD",
        "list_price": "",
        "price": 23.65,
        "shipping": "",
        "condition": "New",
        "availability": "",
        "link": "http://www.upcitemdb.com/norob/alink/?id=w2t203y2230394a4q2&tid=1&seq=1548721476&plt=4bdd27abf2a563777ce1e574ac5c2cd5",
        "updated_t": 1542007587
      },
      {
        "merchant": "Jet.com",
        "domain": "jet.com",
        "title": "Million Dollars But The Game, Adult Games by Cryptozoic Entertainment",
        "currency": "",
        "list_price": "",
        "price": 24.99,
        "shipping": "",
        "condition": "New",
        "availability": "",
        "link": "http://www.upcitemdb.com/norob/alink/?id=w2t203y2y2x2e484x2&tid=1&seq=1548721476&plt=879689e635b537ca37628e1c461794cf",
        "updated_t": 1536546094
      },
      {
        "merchant": "MassGenie",
        "domain": "massgenie.com",
        "title": "Cryptozoic Entertainment CTZ56502 Million Dollars, But The Game",
        "currency": "",
        "list_price": 29.58,
        "price": 26.59,
        "shipping": "",
        "condition": "New",
        "availability": "",
        "link": "http://www.upcitemdb.com/norob/alink/?id=w2w263t21353c494x2&tid=1&seq=1548721476&plt=38d932a89a7d05ed794c94a5ac0a9810",
        "updated_t": 1543838945
      }
    ],
    "elid": "123608912826"
  }]
}