<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-60127388-1', 'auto');
  ga('send', 'pageview');
  ga('require', 'ec');

</script>


$( "#searchbox" )
  .focusout(function() {
    ga('send', 'event', 'Main', 'Search', this.value);"
})

$( "#portfolio" )
  .focusout(function() {
    ga('set', { page: '/#page-top', title: 'Home'});
    ga('send', 'pageview', '/#page-top');"
})

$( "#about" )
  .focusout(function() {
    ga('set', { page: '/#about', title: 'About'});
    ga('send', 'pageview', '/#about');"
})

$( "#contact" )
  .focusout(function() {
    ga('set', { page: '/#contact', title: 'Deals'});
    ga('send', 'pageview', '/#contact');"
})

$( "#send_email" )
  .click(function() {
    ga('send', 'event', 'Contact', 'email', $('#email').value);"
    //if ordering booklet
})

$( "#getbooklet" )
  .click(function() {
    ga('send', 'event', 'Contact', 'email', $('#email').value);"
})

function dealImpression(name, category, price, position ) {

    // The impression from a Related Products section.
    ga('ec:addImpression', {            // Provide product details in an impressionFieldObject.
      'id': name,                       // Product ID (string).
      'name': name,                     // Product name (string).
      'category': category,             // Product category (string).
      //'brand': 'Google',              // Product brand (string).
      //'variant': 'Black',             // Product variant (string).
      //'list': 'Search Results',       // Product list (string).
      'position': position,             // Product position (number).
      'price': price,
    });
    
    ga('send', 'event', 'Deals', 'Impression', name);
}
    
function showDeal(name, category, price, position ) {
    // The product being viewed.
    ga('ec:addProduct', {               // Provide product details in an productFieldObject.
      'id': name,                       // Product ID (string).
      'name': name,                     // Product name (string).
      'category': category,             // Product category (string).
      //'brand': 'Google',              // Product brand (string).
      //'variant': 'Black',             // Product variant (string).
      'position': position,             // Product position (number).
      'price': price,
    });
    
    ga('ec:setAction', 'detail');       // Detail action.

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
