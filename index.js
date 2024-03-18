// Stworzenie klasy Basket - koszyk
class Basket {
	constructor() {
		this.items = [];
	}
	// Skrócona metoda tworzenia konstruktora (działa tak jak ta po wyżej, ale jest mniej czytelna)
	// items = [];

	//Metoda dodawania przedmiotu do koszyka
	add(item) {
		this.items.push(item); // dodawanie przedmiotu do tablicy
	}

	// Metoda obliczania całkowitej wartości koszyka
	getTotalValue() {
		// Zastosowanie metody reduce
		// prev = poprzednia waartość, curr = obecna waartość, 0 = początekowa waartość
		return this.items.reduce((prev, curr) => prev + curr.price, 0);

		// Zastosowanie pętli for
		/*

		let totalValue = 0;
		for (let i = 0; i < this.items.length; i++) {
			totalValue += this.items[i].price;
		}
		return totalValue;
        */
	}

	// Metoda wyświetlania listy przedmiotów
	showBasket() {
		// Tablica items najpierw zostanie przetworzona przez map a potem przez forEach
		this.items
			.map(
				(product, i) =>
					`${i + 1}. ${product.name} - ${product.price.toFixed(2)} PLN`
			)
			// text dla tej funkcji to to co zwróciła metoda map
			.forEach(text => console.log(text));
	}

	// Metoda usuwania przedmiotu z koszyka
	remove(no) {
		this.items.splice(no - 1, 1); // usuwanie przedmiotu o podanym indeksie i = indeks od którego zacznie się usówanie, 1 = ilość przedmiotów do usunięcia
	}
}

// Stworzenie klasy Product - przedmiot
class Product {
	constructor(productName, productPrice) {
		this.name = productName;
		this.price = productPrice;
	}
	// Metoda dodawania nowej ceny
	setNewPrice(newPrice) {
		this.price = newPrice;
	}
}

// Tworzenie obiektu
const shopBasket = new Basket();
const oranges = new Product(
	(productName = "Pomarańcze LUZ"),
	(productPrice = 7.05)
);
const cucumbers = new Product(
	(productName = "Ogórek duży"),
	(productPrice = 5.6)
);

// Wywoływanie metod

shopBasket.add(oranges);
shopBasket.add(cucumbers);
shopBasket.add(cucumbers);
shopBasket.add(oranges);

console.log(shopBasket.getTotalValue());
shopBasket.remove(1);

shopBasket.showBasket();
console.log(shopBasket.getTotalValue());
