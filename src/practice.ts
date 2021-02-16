let count = 0;
count += 1;
// count = '갑자기 문자열..ㄷㄷ'; // 에러발생

const message: string = "hello world";

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];

// messages.push(1); // 숫자를 넣으려고 하면 안된다

let mightBeUndefined: string | undefined = undefined; //string or undefined
let nullableNumber: number | null = null;

let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow중 하나
color = "yellow";
// color = 'green'; // 에러 발생

// 에러가 존재하는 상태에서 컴파일을 시도할 경우 컴파일 되지 않음

function sum(x: number, y: number): number {
  return x + y;
}

function returnNothing(): void {
  console.log("I am just saying hello world");
}

// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

// ---------------------------------------------------------------------

type Person = {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "김사람",
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const colors: Color[] = ["red", "orange"];

export {};
