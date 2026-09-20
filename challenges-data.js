const CHALLENGES = [
    {
        id: "c1",
        title: "Two Sum",
        company: "Google",
        difficulty: "easy",
        desc: "دو عدد از آرایه پیدا کن که جمعشون برابر target باشه.",
        tags: ["Array", "HashMap"],
        instruction: `<p>یه تابع بنویس که آرایه‌ای از اعداد و یه target بگیره و ایندکس دو عددی که جمعشون برابر target هست رو برگردونه.</p>
<pre><code>// مثال:
twoSum([2, 7, 11, 15], 9) // [0, 1]
// چون 2 + 7 = 9</code></pre>`,
        starterCode: 'function twoSum(nums, target) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nreturn twoSum([2,7,11,15], 9);');
                const result = fn();
                return Array.isArray(result) && result.includes(0) && result.includes(1);
            } catch(e) { return false; }
        },
        solution: `function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}`
    },
    {
        id: "c2",
        title: "Reverse String",
        company: "Amazon",
        difficulty: "easy",
        desc: "یه رشته رو برعکس کن بدون استفاده از reverse().",
        tags: ["String", "Two Pointers"],
        instruction: `<p>یه تابع بنویس که رشته رو برعکس کنه. از متد <code>reverse()</code> استفاده نکن.</p>
<pre><code>reverseStr("hello") // "olleh"
reverseStr("JavaScript") // "tpircSavaJ"</code></pre>`,
        starterCode: 'function reverseStr(str) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nreturn reverseStr("hello");');
                return fn() === "olleh";
            } catch(e) { return false; }
        },
        solution: `function reverseStr(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}`
    },
    {
        id: "c3",
        title: "FizzBuzz",
        company: "Microsoft",
        difficulty: "easy",
        desc: "کلاسیک‌ترین سوال مصاحبه - اعداد 1 تا n رو با شرط چاپ کن.",
        tags: ["Logic", "Loop"],
        instruction: `<p>تابعی بنویس که اعداد 1 تا n رو بررسی کنه:</p>
<ul><li>اگه بر 3 بخش‌پذیر: "Fizz"</li><li>اگه بر 5 بخش‌پذیر: "Buzz"</li><li>اگه بر هر دو: "FizzBuzz"</li><li>وگرنه خود عدد</li></ul>
<pre><code>fizzBuzz(5) // [1, 2, "Fizz", 4, "Buzz"]</code></pre>`,
        starterCode: 'function fizzBuzz(n) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nreturn fizzBuzz(15);');
                const r = fn();
                return r[2] === "Fizz" && r[4] === "Buzz" && r[14] === "FizzBuzz";
            } catch(e) { return false; }
        },
        solution: `function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i);
    }
    return result;
}`
    },
    {
        id: "c4",
        title: "Valid Palindrome",
        company: "Meta",
        difficulty: "easy",
        desc: "چک کن رشته palindrome هست یا نه (از دو طرف یکسان).",
        tags: ["String", "Two Pointers"],
        instruction: `<p>تابعی بنویس که چک کنه رشته palindrome هست (فقط حروف و اعداد، case-insensitive).</p>
<pre><code>isPalindrome("A man, a plan, a canal: Panama") // true
isPalindrome("hello") // false</code></pre>`,
        starterCode: 'function isPalindrome(s) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nreturn isPalindrome("racecar") && !isPalindrome("hello");');
                return fn() === true;
            } catch(e) { return false; }
        },
        solution: `function isPalindrome(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}`
    },
    {
        id: "c5",
        title: "Maximum Subarray",
        company: "LinkedIn",
        difficulty: "medium",
        desc: "زیرآرایه‌ای با بیشترین مجموع رو پیدا کن (Kadane's Algorithm).",
        tags: ["Array", "Dynamic Programming"],
        instruction: `<p>زیرآرایه پیوسته‌ای پیدا کن که بیشترین مجموع رو داشته باشه.</p>
<pre><code>maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) // 6
// زیرآرایه [4,-1,2,1] مجموعش 6 ه</code></pre>`,
        starterCode: 'function maxSubArray(nums) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nreturn maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);');
                return fn() === 6;
            } catch(e) { return false; }
        },
        solution: `function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`
    },
    {
        id: "c6",
        title: "Valid Parentheses",
        company: "Amazon",
        difficulty: "easy",
        desc: "چک کن پرانتزها درست باز و بسته شدن.",
        tags: ["Stack", "String"],
        instruction: `<p>تابعی بنویس که چک کنه رشته‌ای از پرانتزها معتبره.</p>
<pre><code>isValid("()[]{}") // true
isValid("(]")     // false
isValid("([)]")   // false
isValid("{[]}")   // true</code></pre>`,
        starterCode: 'function isValid(s) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nreturn isValid("()[]{}") && !isValid("(]") && isValid("{[]}");');
                return fn() === true;
            } catch(e) { return false; }
        },
        solution: `function isValid(s) {
    const stack = [];
    const map = { ')': '(', ']': '[', '}': '{' };
    for (const char of s) {
        if ('([{'.includes(char)) {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) return false;
        }
    }
    return stack.length === 0;
}`
    },
    {
        id: "c7",
        title: "Merge Sorted Arrays",
        company: "Microsoft",
        difficulty: "easy",
        desc: "دو آرایه مرتب رو ادغام کن.",
        tags: ["Array", "Two Pointers"],
        instruction: `<p>دو آرایه مرتب رو به یه آرایه مرتب تبدیل کن.</p>
<pre><code>mergeSorted([1,3,5], [2,4,6]) // [1,2,3,4,5,6]
mergeSorted([1,2], [3,4,5])   // [1,2,3,4,5]</code></pre>`,
        starterCode: 'function mergeSorted(arr1, arr2) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nreturn JSON.stringify(mergeSorted([1,3,5],[2,4,6]));');
                return fn() === JSON.stringify([1,2,3,4,5,6]);
            } catch(e) { return false; }
        },
        solution: `function mergeSorted(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) result.push(arr1[i++]);
        else result.push(arr2[j++]);
    }
    return [...result, ...arr1.slice(i), ...arr2.slice(j)];
}`
    },
    {
        id: "c8",
        title: "Flatten Array",
        company: "Uber",
        difficulty: "medium",
        desc: "آرایه تو در تو رو مسطح کن (بدون flat()).",
        tags: ["Array", "Recursion"],
        instruction: `<p>آرایه‌ای با هر عمقی رو مسطح کن. از <code>.flat()</code> استفاده نکن.</p>
<pre><code>flatten([1,[2,[3,[4]],5]]) // [1,2,3,4,5]
flatten([[1,2],[3,[4,5]]]) // [1,2,3,4,5]</code></pre>`,
        starterCode: 'function flatten(arr) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nreturn JSON.stringify(flatten([1,[2,[3,[4]],5]]));');
                return fn() === JSON.stringify([1,2,3,4,5]);
            } catch(e) { return false; }
        },
        solution: `function flatten(arr) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}`
    },
    {
        id: "c9",
        title: "Debounce Implementation",
        company: "Google",
        difficulty: "medium",
        desc: "تابع debounce رو پیاده‌سازی کن - سوال رایج فرانت‌اند.",
        tags: ["Closure", "Timer", "Frontend"],
        instruction: `<p>تابع debounce رو بساز: تابع ورودی فقط بعد از delay اجرا بشه و اگه دوباره صدا زده بشه تایمر ریست بشه.</p>
<pre><code>const debouncedFn = debounce(fn, 300);
debouncedFn(); // تایمر شروع
debouncedFn(); // تایمر ریست
// بعد 300ms فقط یکبار fn اجرا میشه</code></pre>`,
        starterCode: 'function debounce(fn, delay) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                return code.includes('setTimeout') && code.includes('clearTimeout') && code.includes('return');
            } catch(e) { return false; }
        },
        solution: `function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}`
    },
    {
        id: "c10",
        title: "Promise.all Implementation",
        company: "Meta",
        difficulty: "medium",
        desc: "Promise.all رو از صفر پیاده‌سازی کن.",
        tags: ["Promise", "Async"],
        instruction: `<p><code>Promise.all</code> رو خودت بنویس: آرایه‌ای از promiseها بگیره و وقتی همه resolve شدن، نتایج رو برگردونه.</p>
<pre><code>promiseAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(r => console.log(r)); // [1,2,3]</code></pre>`,
        starterCode: 'function promiseAll(promises) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                return code.includes('new Promise') && code.includes('resolve') && code.includes('reject');
            } catch(e) { return false; }
        },
        solution: `function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;
        promises.forEach((p, i) => {
            Promise.resolve(p).then(val => {
                results[i] = val;
                count++;
                if (count === promises.length) resolve(results);
            }).catch(reject);
        });
    });
}`
    },
    {
        id: "c11",
        title: "LRU Cache",
        company: "Amazon",
        difficulty: "hard",
        desc: "یه LRU Cache بساز - سوال محبوب سیستم دیزاین.",
        tags: ["Design", "HashMap", "LinkedList"],
        instruction: `<p>LRU (Least Recently Used) Cache بساز با capacity محدود. وقتی پر شد، کم‌استفاده‌ترین رو حذف کنه.</p>
<pre><code>const cache = new LRUCache(2);
cache.put(1, "a");
cache.put(2, "b");
cache.get(1);      // "a"
cache.put(3, "c"); // حذف key 2 (کم‌استفاده‌ترین)
cache.get(2);      // -1 (حذف شده)</code></pre>`,
        starterCode: 'class LRUCache {\n    constructor(capacity) {\n        // کدت رو اینجا بنویس\n    }\n    get(key) {}\n    put(key, value) {}\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nconst c = new LRUCache(2); c.put(1,"a"); c.put(2,"b"); c.get(1); c.put(3,"c"); return c.get(2);');
                return fn() === -1;
            } catch(e) { return false; }
        },
        solution: `class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key)) return -1;
        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }
    put(key, value) {
        this.cache.delete(key);
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}`
    },
    {
        id: "c12",
        title: "Deep Clone",
        company: "Uber",
        difficulty: "medium",
        desc: "یه آبجکت رو deep clone کن (بدون JSON.parse).",
        tags: ["Recursion", "Object"],
        instruction: `<p>تابعی بنویس که آبجکت رو عمیق کپی کنه. آرایه، آبجکت تو در تو و Date رو هندل کنه.</p>
<pre><code>const obj = { a: 1, b: { c: 2 }, d: [1,2] };
const clone = deepClone(obj);
clone.b.c = 99;
console.log(obj.b.c); // 2 (تغییر نکرده)</code></pre>`,
        starterCode: 'function deepClone(obj) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nconst o={a:1,b:{c:2}}; const c=deepClone(o); c.b.c=99; return o.b.c;');
                return fn() === 2;
            } catch(e) { return false; }
        },
        solution: `function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (Array.isArray(obj)) return obj.map(item => deepClone(item));
    const clone = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}`
    },
    {
        id: "c13",
        title: "Event Emitter",
        company: "Spotify",
        difficulty: "medium",
        desc: "یه سیستم Event Emitter بساز (on, emit, off).",
        tags: ["Design Pattern", "OOP"],
        instruction: `<p>کلاس EventEmitter بساز با متدهای on, emit, off:</p>
<pre><code>const emitter = new EventEmitter();
const fn = (data) => console.log(data);
emitter.on('test', fn);
emitter.emit('test', 'hello'); // "hello"
emitter.off('test', fn);
emitter.emit('test', 'hello'); // هیچی</code></pre>`,
        starterCode: 'class EventEmitter {\n    constructor() {\n        // کدت رو اینجا بنویس\n    }\n    on(event, fn) {}\n    emit(event, ...args) {}\n    off(event, fn) {}\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nconst e = new EventEmitter(); let x=0; const f=()=>x++; e.on("t",f); e.emit("t"); e.off("t",f); e.emit("t"); return x;');
                return fn() === 1;
            } catch(e) { return false; }
        },
        solution: `class EventEmitter {
    constructor() { this.events = {}; }
    on(event, fn) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(fn);
    }
    emit(event, ...args) {
        (this.events[event] || []).forEach(fn => fn(...args));
    }
    off(event, fn) {
        this.events[event] = (this.events[event] || []).filter(f => f !== fn);
    }
}`
    },
    {
        id: "c14",
        title: "Throttle",
        company: "Netflix",
        difficulty: "medium",
        desc: "تابع throttle بساز - حداکثر یکبار در هر بازه زمانی اجرا بشه.",
        tags: ["Closure", "Timer", "Frontend"],
        instruction: `<p>Throttle: تابع حداکثر هر X میلی‌ثانیه یکبار اجرا بشه (برخلاف debounce).</p>
<pre><code>const throttled = throttle(fn, 1000);
throttled(); // اجرا میشه
throttled(); // نادیده گرفته میشه
// بعد 1 ثانیه دوباره قابل اجراست</code></pre>`,
        starterCode: 'function throttle(fn, limit) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                return code.includes('return') && (code.includes('setTimeout') || code.includes('Date') || code.includes('lastRun') || code.includes('inThrottle'));
            } catch(e) { return false; }
        },
        solution: `function throttle(fn, limit) {
    let inThrottle = false;
    return function(...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}`
    },
    {
        id: "c15",
        title: "Binary Search",
        company: "Google",
        difficulty: "easy",
        desc: "جستجوی دودویی در آرایه مرتب.",
        tags: ["Array", "Search"],
        instruction: `<p>Binary search پیاده‌سازی کن: در آرایه مرتب، ایندکس target رو برگردون (یا -1).</p>
<pre><code>binarySearch([1,3,5,7,9,11], 7)  // 3
binarySearch([1,3,5,7,9,11], 4)  // -1</code></pre>`,
        starterCode: 'function binarySearch(arr, target) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nreturn binarySearch([1,3,5,7,9,11], 7);');
                return fn() === 3;
            } catch(e) { return false; }
        },
        solution: `function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`
    },
    {
        id: "c16",
        title: "Curry Function",
        company: "Airbnb",
        difficulty: "hard",
        desc: "تابع curry بساز که تابع رو curried کنه.",
        tags: ["Closure", "Functional"],
        instruction: `<p>Curry: تابعی که آرگومان‌ها رو یکی‌یکی بگیره تا کامل بشه.</p>
<pre><code>function add(a, b, c) { return a + b + c; }
const curriedAdd = curry(add);
curriedAdd(1)(2)(3)   // 6
curriedAdd(1, 2)(3)   // 6
curriedAdd(1)(2, 3)   // 6</code></pre>`,
        starterCode: 'function curry(fn) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            try {
                const fn = new Function(code + '\nfunction add(a,b,c){return a+b+c;} const c=curry(add); return c(1)(2)(3);');
                return fn() === 6;
            } catch(e) { return false; }
        },
        solution: `function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...args2) {
            return curried.apply(this, args.concat(args2));
        };
    };
}`
    }
];
