const NETWORK_LESSONS = [
    {
        id: 101,
        title: "مدل OSI و TCP/IP",
        icon: "📚",
        steps: [
            { type: "teach", title: "مدل OSI", content: `<p>شبکه به 7 لایه تقسیم میشه. هر لایه وظیفه خاص خودش رو داره:</p><pre><code>7. Application  → HTTP, FTP, DNS, SMTP
6. Presentation → SSL/TLS, encoding
5. Session      → Sessions management
4. Transport    → TCP, UDP (پورت)
3. Network      → IP, ICMP (آدرس IP و routing)
2. Data Link    → Ethernet, MAC address
1. Physical     → کابل، سیگنال، WiFi</code></pre><p>یادگاری: <strong>All People Seem To Need Data Processing</strong></p><p>وقتی یه request HTTP می‌فرستی، از لایه 7 شروع و به لایه 1 می‌رسه (encapsulation)، در سرور برعکس میشه (decapsulation).</p>` },
            { type: "quiz", title: "TCP در کدوم لایه‌ست؟", options: ["لایه 3 (Network)", "لایه 4 (Transport)", "لایه 7 (Application)", "لایه 2 (Data Link)"], correct: 1 },
            { type: "teach", title: "TCP/IP Model", content: `<p>مدل TCP/IP نسخه ساده‌تر و عملی‌تره (4 لایه):</p><pre><code>OSI                → TCP/IP
Application + Pres + Session → Application
Transport          → Transport (TCP/UDP)
Network            → Internet (IP)
Data Link + Physical → Network Access</code></pre><p>این مدلیه که عملاً اینترنت روش کار می‌کنه.</p>` },
            { type: "quiz", title: "IP address در کدوم لایه‌ست؟", options: ["Application", "Transport", "Network/Internet", "Physical"], correct: 2 },
            { type: "code", title: "تست لایه‌ها!", instruction: "نام لایه Application از مدل OSI رو در یه متغیر <code>layer</code> ذخیره کن.", answer: 'const layer = "Application";', validate: function(code) { return code.includes('layer') && code.includes('Application'); } }
        ]
    },
    {
        id: 102,
        title: "TCP و UDP",
        icon: "📡",
        steps: [
            { type: "teach", title: "TCP - قابل اعتماد", content: `<p>TCP اتصال‌گرا و قابل اعتماده:</p><pre><code>// 3-Way Handshake:
// 1. Client → Server: SYN
// 2. Server → Client: SYN-ACK
// 3. Client → Server: ACK
// → اتصال برقرار شد!

// ویژگی‌ها:
// ✓ تضمین رسیدن داده
// ✓ ترتیب درست
// ✓ تشخیص و ارسال مجدد packet گم شده
// ✓ Flow control و Congestion control
// ✗ کندتر از UDP

// کاربرد:
// HTTP/HTTPS, SSH, FTP, SMTP, دانلود فایل</code></pre>` },
            { type: "quiz", title: "TCP 3-Way Handshake چند مرحله داره؟", options: ["2", "3", "4", "5"], correct: 1 },
            { type: "teach", title: "UDP - سریع", content: `<p>UDP بدون اتصال و سریعه:</p><pre><code>// UDP بدون handshake مستقیم packet می‌فرسته:
// Client → Server: DATA
// (تموم شد!)

// ویژگی‌ها:
// ✓ سریع
// ✓ overhead کم
// ✗ بدون تضمین رسیدن
// ✗ بدون ترتیب
// ✗ packet گم میشه = گم میشه

// کاربرد:
// DNS, video streaming, online gaming
// VoIP, DHCP, SNMP

// چرا DNS از UDP استفاده می‌کنه؟
// → سریع و query کوچیکه
// → اگه گم شد، دوباره می‌پرسیم</code></pre>` },
            { type: "quiz", title: "DNS از کدوم پروتکل استفاده می‌کنه؟", options: ["TCP فقط", "UDP فقط", "بیشتر UDP، گاهی TCP", "HTTPS"], correct: 2 },
            { type: "code", title: "TCP vs UDP!", instruction: "یه آبجکت بساز که نوع <code>type</code> برابر <code>\"TCP\"</code> و reliable برابر true باشه.", answer: 'const protocol = { type: "TCP", reliable: true };', validate: function(code) { return code.includes('TCP') && code.includes('reliable') && code.includes('true'); } }
        ]
    },
    {
        id: 103,
        title: "IP و Subnet",
        icon: "🌍",
        steps: [
            { type: "teach", title: "IPv4 و IPv6", content: `<p>IP آدرس شناسه دستگاه در شبکه‌ست:</p><pre><code>// IPv4: 32 bit (4 octet)
// 192.168.1.1
// محدوده: 0.0.0.0 تا 255.255.255.255
// حدود 4 میلیارد آدرس (تموم شد!)

// IPv6: 128 bit
// 2001:0db8:85a3:0000:0000:8a2e:0370:7334
// تقریباً نامحدود

// IP خصوصی (private):
// 10.0.0.0/8
// 172.16.0.0/12
// 192.168.0.0/16

// IP خاص:
// 127.0.0.1 → localhost (خودت)
// 0.0.0.0   → همه آدرس‌ها (binding)
// 255.255.255.255 → broadcast</code></pre>` },
            { type: "quiz", title: "127.0.0.1 یعنی چی؟", options: ["یه سرور", "localhost (خود دستگاه)", "broadcast", "DNS"], correct: 1 },
            { type: "teach", title: "Subnet و CIDR", content: `<p>CIDR notation با <code>/x</code> تعداد bit شبکه رو نشون میده:</p><pre><code>192.168.1.0/24
// /24 = 24 bit اول شبکه، 8 bit آخر host
// 256 - 2 = 254 host قابل استفاده

192.168.1.0/16
// 65,534 host

10.0.0.0/8
// 16 میلیون host

// Subnet mask:
// /24 = 255.255.255.0
// /16 = 255.255.0.0
// /8  = 255.0.0.0

// محاسبه Network address:
// IP: 192.168.1.50
// Mask: /24
// Network: 192.168.1.0
// Broadcast: 192.168.1.255
// Range: 192.168.1.1 - 192.168.1.254</code></pre>` },
            { type: "quiz", title: "192.168.1.0/24 چند host قابل استفاده داره؟", options: ["256", "254", "253", "100"], correct: 1 },
            { type: "code", title: "CIDR محاسبه!", instruction: "یه آبجکت با IP <code>\"192.168.1.0\"</code> و subnet <code>\"/24\"</code> بساز.", answer: 'const network = { ip: "192.168.1.0", subnet: "/24" };', validate: function(code) { return code.includes('192.168.1.0') && code.includes('/24'); } }
        ]
    },
    {
        id: 104,
        title: "DNS",
        icon: "📖",
        steps: [
            { type: "teach", title: "DNS چیست؟", content: `<p>DNS اسم دامنه رو به IP تبدیل می‌کنه (مثل دفترچه تلفن):</p><pre><code>// google.com → 142.250.190.46

// مراحل DNS Lookup:
// 1. Browser cache
// 2. OS cache (/etc/hosts)
// 3. Router cache
// 4. ISP DNS
// 5. Root DNS Server (.)
// 6. TLD DNS Server (.com)
// 7. Authoritative DNS (google.com)

// DNS Records:
// A     → IPv4 address
// AAAA  → IPv6 address
// CNAME → alias (mail.x.com → x.com)
// MX    → mail server
// TXT   → متن (SPF, DKIM, verification)
// NS    → name server
// PTR   → reverse DNS

// دستورات:
// nslookup google.com
// dig google.com
// dig google.com MX
// host google.com</code></pre>` },
            { type: "quiz", title: "MX record چیه؟", options: ["IPv4", "alias", "mail server", "name server"], correct: 2 },
            { type: "teach", title: "DNS برای باگ‌بانتی", content: `<pre><code>// 1. Subdomain enumeration:
// dig +short api.target.com
// dnsenum target.com
// subfinder -d target.com

// 2. Zone transfer (AXFR):
// اگه DNS بد config شده باشه، کل zone رو می‌گیری
// dig @ns1.target.com target.com AXFR

// 3. DNS Rebinding:
// مهاجم دامنه رو به 127.0.0.1 ریزولو می‌کنه
// → دور زدن SOP/CORS

// 4. Cache Poisoning:
// تزریق record جعلی در DNS cache

// در JS از DNS over HTTPS استفاده کن:
async function resolveDNS(domain) {
    const res = await fetch(
        \`https://dns.google/resolve?name=\${domain}&type=A\`
    );
    const data = await res.json();
    return data.Answer?.map(a => a.data);
}

// resolveDNS("google.com").then(console.log);</code></pre>` },
            { type: "quiz", title: "Zone transfer چیه؟", options: ["انتقال domain", "گرفتن لیست کامل DNS records یه domain", "تغییر DNS", "حذف cache"], correct: 1 },
            { type: "code", title: "DNS resolver بنویس!", instruction: "یه تابع async بنویس که از <code>dns.google/resolve</code> استفاده کنه.", answer: 'async function resolve(d) { const r = await fetch("https://dns.google/resolve?name="+d+"&type=A"); return r.json(); }', validate: function(code) { return code.includes('dns.google') && code.includes('fetch'); } }
        ]
    },
    {
        id: 105,
        title: "HTTP/HTTPS عمیق",
        icon: "🔐",
        steps: [
            { type: "teach", title: "ساختار HTTP Request", content: `<pre><code>POST /api/login HTTP/1.1        ← Request line
Host: example.com               ← Headers
User-Agent: Mozilla/5.0
Content-Type: application/json
Content-Length: 45
Cookie: session=abc123

{"username":"admin","password":"123"}  ← Body

// Response:
HTTP/1.1 200 OK                 ← Status line
Content-Type: application/json
Set-Cookie: session=xyz; HttpOnly; Secure
Cache-Control: no-cache

{"token":"eyJ..."}              ← Body</code></pre>
<p>Status codes مهم:</p><pre><code>1xx → Informational (100 Continue)
2xx → Success (200, 201, 204)
3xx → Redirect (301, 302, 304)
4xx → Client Error (400, 401, 403, 404, 429)
5xx → Server Error (500, 502, 503)</code></pre>` },
            { type: "quiz", title: "Status 401 یعنی چی؟", options: ["Not Found", "Unauthorized (auth لازمه)", "Forbidden", "Server Error"], correct: 1 },
            { type: "teach", title: "HTTPS و TLS", content: `<p>HTTPS = HTTP + TLS (لایه رمزنگاری):</p><pre><code>// TLS Handshake:
// 1. Client Hello (cipher suites پیشنهادی)
// 2. Server Hello (cipher انتخابی + certificate)
// 3. Client چک certificate
// 4. Key exchange (DH/ECDHE)
// 5. Finished
// → ارتباط رمزنگاری شد

// Certificate شامل:
// - دامنه (CN, SAN)
// - public key
// - امضای CA
// - تاریخ انقضا

// Headers امنیتی مهم:
// Strict-Transport-Security: max-age=31536000
// Content-Security-Policy: default-src 'self'
// X-Frame-Options: DENY
// X-Content-Type-Options: nosniff
// Referrer-Policy: no-referrer

// HTTP/2 و HTTP/3:
// HTTP/2: multiplexing روی یه connection
// HTTP/3: روی QUIC (UDP) به جای TCP</code></pre>` },
            { type: "quiz", title: "HSTS چه کاری انجام میده؟", options: ["رمزنگاری", "مرورگر رو مجبور می‌کنه HTTPS استفاده کنه", "cache می‌کنه", "session مدیریت می‌کنه"], correct: 1 },
            { type: "code", title: "Headers امنیتی!", instruction: "یه آبجکت با header <code>Strict-Transport-Security</code> برابر <code>\"max-age=31536000\"</code> بساز.", answer: 'const headers = { "Strict-Transport-Security": "max-age=31536000" };', validate: function(code) { return code.includes('Strict-Transport-Security') && code.includes('max-age'); } }
        ]
    },
    {
        id: 106,
        title: "پورت‌ها و Firewall",
        icon: "🚪",
        steps: [
            { type: "teach", title: "پورت‌های مهم", content: `<pre><code>// Well-known ports (0-1023):
20, 21    → FTP
22        → SSH
23        → Telnet (ناامن!)
25        → SMTP
53        → DNS
80        → HTTP
110       → POP3
143       → IMAP
443       → HTTPS
445       → SMB
3306      → MySQL
3389      → RDP
5432      → PostgreSQL
6379      → Redis
8080      → HTTP alt
9200      → Elasticsearch
27017     → MongoDB

// Registered (1024-49151)
// Dynamic (49152-65535)

// اسکن پورت با nmap:
// nmap -sS target.com         (TCP SYN scan)
// nmap -sU target.com         (UDP scan)
// nmap -sV -p 1-1000 target   (version detection)
// nmap -A target.com          (aggressive)
// nmap --script vuln target   (vulnerability scripts)</code></pre>` },
            { type: "quiz", title: "MongoDB روی کدوم پورت پیش‌فرض اجرا میشه؟", options: ["3306", "5432", "27017", "6379"], correct: 2 },
            { type: "teach", title: "Firewall و NAT", content: `<pre><code>// Firewall انواع:
// 1. Packet filtering: بر اساس IP/port
// 2. Stateful: state اتصال رو track می‌کنه
// 3. WAF: لایه application

// iptables (Linux):
// iptables -A INPUT -p tcp --dport 22 -j ACCEPT
// iptables -A INPUT -p tcp --dport 80 -j ACCEPT
// iptables -A INPUT -j DROP    (هر چیز دیگه drop)

// ufw (راحت‌تر):
// ufw allow 22
// ufw allow 80
// ufw enable

// NAT (Network Address Translation):
// چند دستگاه با IP خصوصی → یه IP عمومی
// 192.168.1.5 → 85.x.x.x:54321 → اینترنت
// router track می‌کنه که جواب رو به کی برگردونه

// Port Forwarding:
// router:8080 → 192.168.1.5:80
// از اینترنت به سرور داخلی دسترسی</code></pre>` },
            { type: "quiz", title: "WAF چیه؟", options: ["WiFi access point", "Web Application Firewall (لایه 7)", "Wide Area Frame", "Wireless"], correct: 1 },
            { type: "code", title: "iptables rule!", instruction: "یه rule iptables بنویس که port 22 رو allow کنه.", answer: 'iptables -A INPUT -p tcp --dport 22 -j ACCEPT', validate: function(code) { return code.includes('iptables') && code.includes('22') && code.includes('ACCEPT'); } }
        ]
    },
    {
        id: 107,
        title: "Routing و Switching",
        icon: "🔀",
        steps: [
            { type: "teach", title: "Router vs Switch", content: `<pre><code>// Switch (لایه 2):
// - دستگاه‌های یه شبکه LAN رو وصل می‌کنه
// - با MAC address کار می‌کنه
// - جدول MAC table

// Router (لایه 3):
// - شبکه‌های مختلف رو وصل می‌کنه
// - با IP address کار می‌کنه
// - Routing table داره

// مسیر یه packet:
// PC → Switch (LAN) → Router → ISP → Internet

// دستورات:
// ip route show              (Linux)
// route -n
// netstat -rn

// نمونه routing table:
// Destination     Gateway         Genmask
// 0.0.0.0         192.168.1.1     0.0.0.0     ← default route
// 192.168.1.0     0.0.0.0         255.255.255.0
// 10.0.0.0        192.168.1.1     255.0.0.0</code></pre>` },
            { type: "quiz", title: "Switch با چی کار می‌کنه؟", options: ["IP address", "MAC address", "URL", "DNS"], correct: 1 },
            { type: "teach", title: "ARP و MAC", content: `<pre><code>// MAC Address: شناسه فیزیکی کارت شبکه
// 00:1A:2B:3C:4D:5E (48 bit)

// ARP (Address Resolution Protocol):
// IP → MAC تبدیل می‌کنه
// "کی IP 192.168.1.1 داره؟ MAC ش رو بگو"

// مشاهده ARP table:
// arp -a

// ARP Spoofing/Poisoning:
// مهاجم به همه میگه: "من 192.168.1.1 (gateway) هستم"
// → traffic از مهاجم رد میشه (MITM)

// محافظت:
// - Static ARP entries
// - Dynamic ARP Inspection
// - HTTPS (encryption)
// - VPN

// ابزار: arpspoof, ettercap, bettercap</code></pre>` },
            { type: "quiz", title: "ARP Spoofing چی کار می‌کنه؟", options: ["IP عوض می‌کنه", "Man-in-the-middle attack میسازه", "DNS رو هک می‌کنه", "wifi رو می‌شکنه"], correct: 1 },
            { type: "code", title: "MAC format!", instruction: "یه MAC address در متغیر <code>mac</code> ذخیره کن.", answer: 'const mac = "00:1A:2B:3C:4D:5E";', validate: function(code) { return code.includes('mac') && /[0-9a-fA-F]{2}:[0-9a-fA-F]{2}/.test(code); } }
        ]
    },
    {
        id: 108,
        title: "VPN و Proxy",
        icon: "🛡️",
        steps: [
            { type: "teach", title: "VPN چیست؟", content: `<pre><code>// VPN: tunnel رمزنگاری شده بین دستگاه و سرور
// PC → [VPN tunnel] → VPN server → Internet
// همه ترافیک از سرور VPN رد میشه

// انواع VPN:
// - PPTP (قدیمی، ناامن)
// - L2TP/IPSec
// - OpenVPN (open source)
// - WireGuard (مدرن، سریع)
// - IKEv2

// مزایا:
// ✓ مخفی کردن IP
// ✓ encryption
// ✓ دور زدن geo-restriction
// ✓ امنیت در public WiFi

// Proxy vs VPN:
// Proxy: فقط برای یه app/browser
// VPN: کل سیستم
// VPN معمولاً encrypted، Proxy نه

// نوع Proxy:
// - HTTP Proxy
// - HTTPS Proxy
// - SOCKS4/SOCKS5 (هر پروتکلی)
// - Transparent proxy (شفاف، کاربر نمی‌فهمه)
// - Reverse proxy (Nginx, Cloudflare)</code></pre>` },
            { type: "quiz", title: "تفاوت اصلی VPN با Proxy چیه؟", options: ["VPN رایگانه", "VPN کل سیستم رو tunnel می‌کنه و معمولاً encrypted ه", "Proxy سریع‌تره", "فرقی ندارن"], correct: 1 },
            { type: "teach", title: "Reverse Proxy", content: `<pre><code>// Reverse Proxy: جلوی سرور می‌ایسته
// Client → Reverse Proxy → Backend Servers

// Nginx به عنوان reverse proxy:
// nginx.conf
/*
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
*/

// مزایای reverse proxy:
// ✓ Load balancing
// ✓ SSL termination
// ✓ Caching
// ✓ Rate limiting
// ✓ مخفی کردن backend
// ✓ WAF

// در باگ‌بانتی:
// X-Forwarded-For چک کن (rate limit bypass)
// IP واقعی client کجاست؟
// SSRF: localhost از طریق reverse proxy</code></pre>` },
            { type: "quiz", title: "Cloudflare چه نوع proxy ای ه؟", options: ["Forward proxy", "Reverse proxy", "VPN", "DNS فقط"], correct: 1 },
            { type: "code", title: "Proxy header!", instruction: "header <code>X-Forwarded-For</code> رو در یه آبجکت با مقدار <code>\"127.0.0.1\"</code> ست کن.", answer: 'const headers = { "X-Forwarded-For": "127.0.0.1" };', validate: function(code) { return code.includes('X-Forwarded-For') && code.includes('127.0.0.1'); } }
        ]
    },
    {
        id: 109,
        title: "ابزارهای Network",
        icon: "🔧",
        steps: [
            { type: "teach", title: "ابزارهای پایه Linux", content: `<pre><code># IP و interface
ip addr show           # IP کارت‌های شبکه
ip route show          # routing table
ifconfig               # قدیمی‌تر

# تست اتصال
ping google.com
ping -c 4 8.8.8.8

# مسیر packet
traceroute google.com
mtr google.com         # ترکیب ping + traceroute

# DNS
nslookup google.com
dig google.com
dig +trace google.com
host google.com

# پورت و اتصال
netstat -tulpn         # پورت‌های باز
ss -tulpn              # جدیدتر
lsof -i :3000          # کی روی پورت 3000 ه

# Network statistics
iftop                  # ترافیک real-time
nethogs                # per-process bandwidth

# Wireshark/tshark
sudo tshark -i eth0    # capture
sudo tshark -i eth0 -f "port 80"</code></pre>` },
            { type: "quiz", title: "کدوم دستور پورت‌های در حال listen رو نشون میده؟", options: ["ping", "ss -tulpn", "ifconfig", "ip route"], correct: 1 },
            { type: "teach", title: "ابزار باگ‌بانتی", content: `<pre><code># curl - HTTP client قدرتمند
curl -X POST https://api.example.com/login \\
  -H "Content-Type: application/json" \\
  -d '{"user":"admin","pass":"123"}' \\
  -i  # نمایش headers

curl -k https://target.com  # ignore SSL errors
curl -L https://target.com  # follow redirects
curl --proxy http://127.0.0.1:8080 ... # از Burp رد کن

# nmap - port scanner
nmap -sV -sC target.com
nmap -p- target.com           # همه 65535 پورت
nmap --script vuln target.com

# nikto - web vulnerability scanner
nikto -h https://target.com

# gobuster - directory bruteforce
gobuster dir -u https://target.com \\
  -w /usr/share/wordlists/dirb/common.txt

# ffuf - fast fuzzer
ffuf -u https://target.com/FUZZ \\
  -w wordlist.txt -mc 200,301

# Burp Suite - حرفه‌ای‌ترین
# - Intercept کردن request
# - Repeater (دستکاری)
# - Intruder (brute force)
# - Scanner (auto)

# tcpdump - packet capture
sudo tcpdump -i eth0 port 80
sudo tcpdump -w capture.pcap</code></pre>` },
            { type: "quiz", title: "ffuf برای چی استفاده میشه؟", options: ["DNS lookup", "Port scan", "Fuzzing (پیدا کردن endpoints)", "VPN"], correct: 2 },
            { type: "code", title: "curl command!", instruction: "یه curl command بنویس که POST request به <code>/api/login</code> بفرسته با Content-Type: application/json.", answer: 'curl -X POST /api/login -H "Content-Type: application/json" -d \'{}\'', validate: function(code) { return code.includes('curl') && code.includes('POST') && code.includes('Content-Type'); } }
        ]
    },
    {
        id: 110,
        title: "حملات شبکه‌ای",
        icon: "⚔️",
        steps: [
            { type: "teach", title: "MITM و Sniffing", content: `<pre><code>// Man-in-the-Middle (MITM):
// مهاجم بین client و server می‌نشینه
// Client → [Attacker] → Server

// تکنیک‌ها:
// 1. ARP Spoofing (شبکه LAN)
// 2. DNS Spoofing
// 3. Rogue WiFi (شبکه جعلی)
// 4. SSL Stripping (HTTPS → HTTP)

// محافظت:
// - HTTPS + HSTS
// - Certificate Pinning
// - VPN
// - DNS over HTTPS/TLS

// Packet Sniffing:
// Wireshark - capture و analysis
// tshark - command line
// tcpdump - lightweight

// فیلترهای Wireshark:
// http
// http.request.method == "POST"
// ip.addr == 192.168.1.5
// tcp.port == 443
// http contains "password"</code></pre>` },
            { type: "quiz", title: "HSTS از چه حمله‌ای جلوگیری می‌کنه؟", options: ["XSS", "SSL Stripping (HTTPS → HTTP)", "SQL injection", "DDoS"], correct: 1 },
            { type: "teach", title: "DDoS و حملات دیگه", content: `<pre><code>// DoS vs DDoS:
// DoS: یه منبع
// DDoS: چندین منبع (botnet)

// انواع DDoS:
// 1. Volumetric (پر کردن bandwidth)
//    - UDP flood
//    - ICMP flood
//    - Amplification (DNS, NTP)

// 2. Protocol attacks (لایه 3-4)
//    - SYN flood
//    - Ping of death

// 3. Application layer (لایه 7)
//    - HTTP flood
//    - Slowloris (اتصال‌های آهسته)

// محافظت:
// - Rate limiting
// - Cloudflare/Akamai
// - SYN cookies
// - WAF
// - Auto-scaling

// حملات دیگه:
// Port Scanning - شناسایی سرویس‌ها
// Banner Grabbing - شناسایی version
// Brute Force - حدس password
// Session Hijacking - دزدی cookie/token

// ابزار شناسایی:
// nmap, masscan, zmap
// shodan.io (search engine برای دستگاه‌های متصل)
// censys.io</code></pre>` },
            { type: "quiz", title: "Slowloris چه نوع حمله‌ایه؟", options: ["UDP flood", "Application layer DDoS با اتصالات آهسته", "SQL injection", "XSS"], correct: 1 },
            { type: "code", title: "Wireshark filter!", instruction: "یه filter Wireshark بنویس که فقط POST requests نشون بده.", answer: 'http.request.method == "POST"', validate: function(code) { return code.includes('http') && code.includes('POST'); } }
        ]
    }
];
