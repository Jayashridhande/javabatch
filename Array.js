const xyz=['amaze',1234,'Volvo','Alto','Kia',233,57433]
console.log(xyz);//output xyz

console.log(xyz.length);//length of array
console.log(xyz.indexOf('Kia'));// index of array
console.log(xyz.push('HondaCity',2345));//push
console.log(xyz.pop());//pop
xyz.pop();

const fruits = ["Banana", "Apple", "Mango"];
console.log(fruits.shift());//shift
console.log(fruits);

const cities = ['Manchester', 'Liverpool'];
const newLength = cities.push('Bristol');
console.log(cities);     // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength);  // 3


//multidiamentinal array
let glass=[
    [123,345,'rita','pinky','Seema'],
    [345,678,453,'Akshay'],
    [5667,43,67,'Poja'],
];

console.log(glass[0][2]);
console.log(glass[1][0]);
console.log(glass[2][3]);

const random = ['tree', 795,
 [0, 1, 2]
];
 console.log(random[2][2]);

const p=[3,9,6,5]
const find = p.find(Element=>Element>5) // filter
console.log(find);

const s =[56,78,32,56]
const filter = s.filter(Element=>Element >32) //filter
console.log(filter);

