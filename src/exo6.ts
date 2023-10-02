interface Pet {
    name: string
    age: number
    speak(): string
}

class Dog implements Pet {
    constructor(public name: string, public age: number) { }
    speak(): string {
        return "Woof !"

    }
}

class Cat implements Pet {
    constructor(public name: string, public age: number) { }
    speak(): string {
        return "Meow !"
    }
}

class Parrot implements Pet {
    constructor(public name: string, public age: number, public words: string[]) { }
    speak(): string {
        return (this.words.join(' '))
    }
}
function logPet(pet: Pet){
    console.log(`cutePet: ${pet.speak()}, ${pet.name}, ${pet.age}`);
}

let petDog = new Dog("Conan", 16);
let petCat = new Cat("Shakra", 3);
let petParrot = new Parrot("Flip", 2, ["Woof", "Meow", "Groar","Cot cot codak","glouglou"]);

logPet(petDog);
logPet(petCat);
logPet(petParrot);