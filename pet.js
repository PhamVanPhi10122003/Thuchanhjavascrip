//Tạo ra một lớp Pet có tham số về name , tiếng kêu methond : introduce() 
// => in ra Toi ten là name, talk( tiếng kêu) =>in ra tiếng kêu .
//  Lớp dog extends từ lớp pet, có thêm tham số là loại vật ,và thăm methond loại vật
//   => tôi là động vật S( loại vật), gọi hàm introduce(),
//  và gọi lại hàm talk( tiếng kêu dog) bằng ngôn ngữ javascript
class Pet {
    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log(`Tôi tên là ${this.name}.`);
    }
  
    talk(sound) {
      console.log(sound);
    }
  }
  
  class Dog extends Pet {
    constructor(name, animalType) {
      super(name);
      this.animalType = animalType;
    }
  
    introduce() {
      console.log(`Tôi là động vật ${this.animalType}.`);
      super.introduce();
    }
  }
  
  // Sử dụng các lớp đã tạo
  const myPet = new Pet("Bò");
  myPet.introduce(); // Output: Tôi tên là Tom.
  myPet.talk("Beeee"); // Output: Woof!
  
  const myDog = new Dog( "Đen","Chó");
  myDog.introduce(); // Output: Tôi là động vật Chó. Tôi tên là Max.
  myDog.talk("Gâu gâu!"); // Output: Gâu gâu!