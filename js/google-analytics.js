$( "#searchbox" )
  .focusout(function() {
    ga('send', 'event', 'Main', 'Search', this.value);
})

$( "#portfolio" )
  .focusout(function() {
    ga('set', { page: '/#page-top', title: 'Home'});
    ga('send', 'pageview', '/#page-top');
})

$( "#about" )
  .focusout(function() {
    ga('set', { page: '/#about', title: 'About'});
    ga('send', 'pageview', '/#about');
})

$( "#contact" )
  .focusout(function() {
    ga('set', { page: '/#contact', title: 'Deals'});
    ga('send', 'pageview', '/#contact');
})

$( "#send_email" )
  .click(function() {
    ga('send', 'event', 'Contact', 'email', $('#email').value);
    //if ordering booklet
})

$( "#getbooklet" )
  .click(function() {
    ga('send', 'event', 'Contact', 'email', $('#email').value);
})

function dealImpression(name, category, price, position ) {

    // The impression from a Related Products section.
    ga('ec:addImpression', {            
      'id': name,                       
      'name': name,                     
      'category': category,             
      //'brand': 'Google',              
      //'variant': 'Black',             
      //'list': 'Search Results',       
      'position': position,             
      'price': price
    });
    
    ga('send', 'event', 'Deals', 'Impression', name);
}
    
function showDeal(name, category, price, position ) {
    // The product being viewed.
    ga('ec:addProduct', {              
      'id': name,                       
      'name': name,                     
      'category': category,             
      'position': position,             
      'price': price
    });
    
    ga('ec:setAction', 'detail');       

    ga('send', 'event', 'Deals', 'View', name);
}

function purchaseDeal(name, category, price ) {
    // Transaction level information is provided via an actionFieldObject.
    ga('ec:setAction', 'purchase', {
        'id': 'T12345',
        'list' : 'deals',
        revenue: price
      });
    ga('send', 'event', 'Deals', 'Purchase', name);
}
