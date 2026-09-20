const PROJECT_STEPS = [
    {
        id: "p1",
        title: "۱. راه‌اندازی پروژه",
        icon: "📁",
        content: `<h3>شروع پروژه Node.js</h3>
<p>یه API برای مدیریت Task (مثل Trello ساده) می‌سازیم. اول ساختار پروژه:</p>
<pre><code>mkdir task-api && cd task-api
npm init -y
npm install express mongoose dotenv bcrypt jsonwebtoken joi cors
npm install -D nodemon</code></pre>

<p>ساختار پوشه‌ها:</p>
<pre><code>task-api/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── auth.js
│   └── app.js
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
└── package.json</code></pre>

<p>فایل <code>package.json</code> - scripts:</p>
<pre><code>{
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  }
}</code></pre>

<p>فایل <code>.env</code>:</p>
<pre><code>PORT=3000
MONGO_URI=mongodb://localhost:27017/taskapi
JWT_SECRET=your-super-secret-key-change-this</code></pre>

<p>فایل <code>.gitignore</code>:</p>
<pre><code>node_modules/
.env</code></pre>`
    },
    {
        id: "p2",
        title: "۲. اتصال به MongoDB",
        icon: "🍃",
        content: `<h3>config/db.js</h3>
<pre><code>const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✓ MongoDB connected');
    } catch (err) {
        console.error('✗ MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;</code></pre>

<h3>app.js - فایل اصلی</h3>
<pre><code>require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', time: new Date() });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`🚀 Server on port \${PORT}\`));</code></pre>

<p>✅ تا اینجا: سرور Express با اتصال MongoDB آماده‌ست.</p>`
    },
    {
        id: "p3",
        title: "۳. مدل User و Auth",
        icon: "👤",
        content: `<h3>models/User.js</h3>
<pre><code>const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'نام الزامیه'],
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: [true, 'ایمیل الزامیه'],
        unique: true,
        lowercase: true,
        match: [/\\S+@\\S+\\.\\S+/, 'ایمیل معتبر نیست']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, { timestamps: true });

// Hash password before save
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
userSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.password;
    return obj;
};

module.exports = mongoose.model('User', userSchema);</code></pre>

<p>نکات مهم:</p>
<ul>
<li><code>pre('save')</code> خودکار password رو hash می‌کنه</li>
<li><code>toJSON</code> مطمئن میشه password هیچوقت در response نباشه</li>
<li>validation در schema تعریف شده</li>
</ul>`
    },
    {
        id: "p4",
        title: "۴. Route های Auth",
        icon: "🔐",
        content: `<h3>routes/auth.js</h3>
<pre><code>const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const User = require('../models/User');

// Validation schemas
const registerSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

// POST /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { error } = registerSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const exists = await User.findOne({ email: req.body.email });
        if (exists) return res.status(400).json({ error: 'ایمیل قبلاً ثبت شده' });

        const user = await User.create(req.body);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(201).json({ user, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { error } = loginSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).json({ error: 'ایمیل یا رمز اشتباهه' });

        const valid = await user.comparePassword(req.body.password);
        if (!valid) return res.status(401).json({ error: 'ایمیل یا رمز اشتباهه' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ user, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/auth/me
const auth = require('../middleware/auth');
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.userId);
    res.json(user);
});

module.exports = router;</code></pre>

<h3>middleware/auth.js</h3>
<pre><code>const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer '))
        return res.status(401).json({ error: 'توکن ارسال نشده' });

    try {
        const token = header.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ error: 'توکن نامعتبر' });
    }
};</code></pre>`
    },
    {
        id: "p5",
        title: "۵. مدل Task و CRUD",
        icon: "✅",
        content: `<h3>models/Task.js</h3>
<pre><code>const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'عنوان الزامیه'],
        trim: true,
        maxlength: 200
    },
    description: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: ['todo', 'doing', 'done'],
        default: 'todo'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

// Index for faster queries
taskSchema.index({ user: 1, status: 1 });

module.exports = mongoose.model('Task', taskSchema);</code></pre>

<h3>routes/tasks.js</h3>
<pre><code>const router = require('express').Router();
const Task = require('../models/Task');
const auth = require('../middleware/auth');

// All routes need auth
router.use(auth);

// GET /api/tasks - لیست task های کاربر
router.get('/', async (req, res) => {
    const { status, priority, page = 1, limit = 10 } = req.query;
    const filter = { user: req.userId };
    if (status) filter.status = status;
    if (priority) filter.priority = priority;

    const tasks = await Task.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(Number(limit));

    const total = await Task.countDocuments(filter);

    res.json({
        tasks,
        pagination: {
            page: Number(page),
            limit: Number(limit),
            total,
            pages: Math.ceil(total / limit)
        }
    });
});

// POST /api/tasks - ساخت task جدید
router.post('/', async (req, res) => {
    try {
        const task = await Task.create({
            ...req.body,
            user: req.userId
        });
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET /api/tasks/:id
router.get('/:id', async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ error: 'پیدا نشد' });
    res.json(task);
});

// PUT /api/tasks/:id
router.put('/:id', async (req, res) => {
    const task = await Task.findOneAndUpdate(
        { _id: req.params.id, user: req.userId },
        req.body,
        { new: true, runValidators: true }
    );
    if (!task) return res.status(404).json({ error: 'پیدا نشد' });
    res.json(task);
});

// DELETE /api/tasks/:id
router.delete('/:id', async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ error: 'پیدا نشد' });
    res.json({ message: 'حذف شد' });
});

module.exports = router;</code></pre>

<p>✅ نکات امنیتی:</p>
<ul>
<li>هر query شامل <code>user: req.userId</code> ه → IDOR نداریم</li>
<li>pagination برای جلوگیری از load زیاد</li>
<li><code>runValidators: true</code> برای validate در update</li>
</ul>`
    },
    {
        id: "p6",
        title: "۶. Docker و Deploy",
        icon: "🐳",
        content: `<h3>Dockerfile</h3>
<pre><code>FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY src/ ./src/

EXPOSE 3000

USER node

CMD ["node", "src/app.js"]</code></pre>

<h3>docker-compose.yml</h3>
<pre><code>version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
      - MONGO_URI=mongodb://mongo:27017/taskapi
      - JWT_SECRET=change-this-in-production
    depends_on:
      - mongo
    restart: unless-stopped

  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    restart: unless-stopped

volumes:
  mongo-data:</code></pre>

<h3>اجرا:</h3>
<pre><code># Development
docker-compose up -d
# http://localhost:3000/health

# Production build
docker-compose -f docker-compose.yml up --build -d</code></pre>

<h3>تست با curl:</h3>
<pre><code># Register
curl -X POST http://localhost:3000/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{"name":"علی","email":"ali@test.com","password":"123456"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"ali@test.com","password":"123456"}'

# Create task (با token از login)
curl -X POST http://localhost:3000/api/tasks \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{"title":"یادگیری Docker","priority":"high"}'

# Get tasks
curl http://localhost:3000/api/tasks \\
  -H "Authorization: Bearer YOUR_TOKEN"</code></pre>`
    },
    {
        id: "p7",
        title: "۷. تست نویسی",
        icon: "🧪",
        content: `<h3>نصب Jest و Supertest:</h3>
<pre><code>npm install -D jest supertest mongodb-memory-server
</code></pre>

<p>اضافه کن به package.json:</p>
<pre><code>"scripts": {
    "test": "jest --runInBand --forceExit"
}</code></pre>

<h3>tests/auth.test.js</h3>
<pre><code>const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let app, mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    process.env.MONGO_URI = mongoServer.getUri();
    process.env.JWT_SECRET = 'test-secret';
    app = require('../src/app');
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('Auth API', () => {
    const user = { name: 'Test', email: 'test@test.com', password: '123456' };

    test('POST /api/auth/register - creates user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send(user)
            .expect(201);

        expect(res.body.user.email).toBe(user.email);
        expect(res.body.token).toBeDefined();
        expect(res.body.user.password).toBeUndefined();
    });

    test('POST /api/auth/register - duplicate email fails', async () => {
        await request(app)
            .post('/api/auth/register')
            .send(user)
            .expect(400);
    });

    test('POST /api/auth/login - valid credentials', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: user.email, password: user.password })
            .expect(200);

        expect(res.body.token).toBeDefined();
    });

    test('POST /api/auth/login - wrong password', async () => {
        await request(app)
            .post('/api/auth/login')
            .send({ email: user.email, password: 'wrong' })
            .expect(401);
    });
});</code></pre>

<h3>tests/tasks.test.js</h3>
<pre><code>describe('Tasks API', () => {
    let token;

    beforeAll(async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'test@test.com', password: '123456' });
        token = res.body.token;
    });

    test('POST /api/tasks - creates task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .set('Authorization', 'Bearer ' + token)
            .send({ title: 'Test task', priority: 'high' })
            .expect(201);

        expect(res.body.title).toBe('Test task');
        expect(res.body.status).toBe('todo');
    });

    test('GET /api/tasks - returns user tasks', async () => {
        const res = await request(app)
            .get('/api/tasks')
            .set('Authorization', 'Bearer ' + token)
            .expect(200);

        expect(res.body.tasks.length).toBeGreaterThan(0);
        expect(res.body.pagination).toBeDefined();
    });

    test('GET /api/tasks - without auth returns 401', async () => {
        await request(app)
            .get('/api/tasks')
            .expect(401);
    });
});</code></pre>

<pre><code># اجرا:
npm test</code></pre>`
    },
    {
        id: "p8",
        title: "۸. بهبود و Production",
        icon: "🚀",
        content: `<h3>Rate Limiting:</h3>
<pre><code>npm install express-rate-limit helmet</code></pre>

<pre><code>// app.js - اضافه کن:
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

app.use(helmet()); // Security headers

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100 // 100 request per window
});
app.use('/api/', limiter);

// Rate limit سخت‌تر برای auth
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5
});
app.use('/api/auth/login', authLimiter);</code></pre>

<h3>Logging:</h3>
<pre><code>npm install morgan</code></pre>
<pre><code>const morgan = require('morgan');
app.use(morgan('combined'));</code></pre>

<h3>GitHub Actions CI/CD:</h3>
<pre><code># .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      mongo:
        image: mongo:7
        ports: ['27017:27017']
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm test
        env:
          MONGO_URI: mongodb://localhost:27017/test
          JWT_SECRET: test-secret</code></pre>

<h3>خلاصه پروژه:</h3>
<p>تبریک! 🎉 یه REST API کامل ساختی با:</p>
<ul>
<li>✅ Express + MongoDB + Mongoose</li>
<li>✅ JWT Authentication</li>
<li>✅ Input Validation (Joi)</li>
<li>✅ CRUD با pagination</li>
<li>✅ Security (helmet, rate limit, CORS)</li>
<li>✅ Docker + Docker Compose</li>
<li>✅ Testing (Jest + Supertest)</li>
<li>✅ CI/CD (GitHub Actions)</li>
</ul>
<p>این پروژه رو بذار GitHub و توی رزومت بنویس. 💪</p>`
    }
];
