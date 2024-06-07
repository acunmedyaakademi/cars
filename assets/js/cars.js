let cars = [
  { 
      brand: "Ford", 
      model: "Mustang", 
      color: "Mavi" ,
      image : 'assets/img/fmustang.jpg'
  },
  { 
      brand: "BMW", 
      model: "3 Serisi", 
      color: "Siyah" ,
      image : 'assets/img/bmw.jpeg'

  },
  { 
      brand: "Mercedes-Benz", 
      model: "E Serisi", 
      color: "Kırmızı" ,
      image : 'assets/img/e200.jpeg'

  },
  { 
      brand: "Toyota", 
      model: "Corolla", 
      color: "Beyaz" ,
      image : 'assets/img/coralla.jpeg'

  },
  { 
      brand: "Honda", 
      model: "Civic", 
      color: "Gri" ,
      image : 'assets/img/civic.jpeg'

  },
  { 
      brand: "Volkswagen", 
      model: "Golf", 
      color: "Yeşil" ,
      image : 'assets/img/golf.jpeg'

  },
  { 
      brand: "Audi", 
      model: "A4", 
      color: "Turuncu" ,
      image : 'assets/img/a4.jpeg'

  },
  { 
      brand: "Porsche", 
      model: "911", 
      color: "Sarı" ,
      image : 'assets/img/911.jpeg'

  },
  { 
      brand: "Ferrari", 
      model: "488 GTB", 
      color: "Lacivert" ,
      image : 'assets/img/gtb.jpeg'

  },
  { 
      brand: "Lamborghini", 
      model: "Aventador", 
      color: "Altın" ,
      image : 'assets/img/avendator.jpeg'

  },
  { 
      brand: "Tesla", 
      model: "Model S", 
      color: "Gümüş" ,
      image : 'assets/img/tesla.jpeg'

  },
  { 
      brand: "Subaru", 
      model: "Impreza", 
      color: "Mor" ,
      image : 'assets/img/subaru.jpeg'

  },
  { 
      brand: "Chevrolet", 
      model: "Camaro", 
      color: "Turkuaz" ,
      image : 'assets/img/camaro.jpeg'

  },
  { 
      brand: "Hyundai", 
      model: "Tucson", 
      color: "Kahverengi" ,
      image : 'assets/img/tucson.jpeg'

  },
  { 
      brand: "Kia", 
      model: "Sportage", 
      color: "Pembe" ,
      image : 'assets/img/spotage.jpeg'

  },
  { 
      brand: "Nissan", 
      model: "Altima", 
      color: "Beyaz" ,
      image : 'assets/img/altima.jpeg'

  },
  { 
      brand: "Jaguar", 
      model: "F-Type", 
      color: "Siyah" ,
      image : 'assets/img/ftype.jpeg'

  },
  { 
      brand: "Land Rover", 
      model: "Range Rover", 
      color: "Gri" ,
      image : 'assets/img/range.jpeg'

  },
  { 
      brand: "Volvo", 
      model: "XC90", 
      color: "Yeşil" ,
      image : 'assets/img/xc90.jpeg'

  },
  { 
      brand: "Mazda", 
      model: "MX-5", 
      color: "Kırmızı" ,
      image : 'assets/img/mx5.jpeg'

  }
];

let carBox = document.querySelector('.carBox');

for (let i = 0; i < cars.length; i++) {
    carBox.innerHTML += `<td class='brand' data-index=${i}>${cars[i].brand}</td>`+ `<td class='model' data-index=${i}>${cars[i].model}</td>` + `<td class='color' data-index=${i}>${cars[i].color}</td> ` +`<td class='image'><img src='${cars[i].image}' alt='${cars[i].brand} ${cars[i].model}' /></td>`;
}

// for (let i = 0; i < cars.length; i++) {
//     carBoxTr.innerHTML += `<td class='brand' data-index=${i}>${cars[i].brand}</td>`+ `<td class='model' data-index=${i}>${cars[i].model}</td>` + `<td class='color' data-index=${i}>${cars[i].color}</td>`;
// }
