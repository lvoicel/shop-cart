const cards = $( ".card-deck" ).children().first();
const cart = $( ".dropdown-menu" ).children().first();
var subtotal = 0;
products = [["City", 500, "city.jpg"], ["Horse", 20, "horse.jpg"], ["Japan", 1000, "japan.jpg"], ["Animal", 10, "animal.jpg"], ["Bridge", 100, "bridge.jpg"], ["Sea", 1500, "sea.jpg"]];

for (let i=0; i<products.length; i++){
	card = cards.clone(true);
	card.find( ".card-title" ).text(products[i][0]);
	card.find( "img" ).attr('src', products[i][2]);
	card.find( ".card-subtitle" ).text(products[i][1] + "$");
	card.removeClass( "d-none" );
	$( ".card-deck" ).append(card);
};
addToCartBtn = $( ".card-body" ).find( "button" );
addToCartBtn.on('click', addToCart);

function addToCart(){
	item = $( event.target ).closest( ".card" ).clone(true);
	cartCard = cart.find( ".d-none" ).clone(true);
	cartCard.find( ".card-title" ).text(item.find(".card-title").text());
	cartCard.find( ".price" ).text(item.find(".card-subtitle").text())
	cartCard.find( "img" ).attr('src', item.find( "img" ).attr('src'));
	cartCard.removeClass( "d-none" );
	cart.append(cartCard);
	for (let i=0; i<products.length; i++){
		ind = products[i].indexOf(item.find(".card-title").text());
		if (ind != -1){
			subtotal += products[i][1];
		};
	};
	$( ".dropdown-menu" ).find( ".subtotal" ).text(subtotal + "$");
	$( ".dropdown-menu" ).find( ".total" ).text(subtotal + (subtotal * 0.1) + "$");
};

$( "#BuyBtn" ).on('click', success);

function success(){
	const message = document.createElement('div');
	$( "body" ).prepend(message);
	message.className = 'alert alert-success alert-dismissible fade show';
    message.innerHTML = 'Success!';
	window.setTimeout(function(){
		$('.alert').alert('close');
	},2000);

};