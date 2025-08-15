````markdown
# Gemini Chatbot API

Proyek ini adalah implementasi chatbot menggunakan **Google Gemini API** dengan Node.js dan Express.  
Chatbot ini dapat menerima input dari pengguna, memprosesnya menggunakan model Gemini, dan mengembalikan respons secara real-time.

## 🚀 Fitur
- Integrasi dengan **@google/genai** untuk mengakses Gemini API
- Endpoint REST API untuk komunikasi dengan chatbot
- Mendukung konfigurasi **.env** untuk menyimpan API key dengan aman
- Middleware CORS untuk akses lintas domain
- Struktur kode sederhana dan mudah dikembangkan

## 📦 Instalasi

1. **Clone repository**
```bash
git clone https://github.com/Valentinopp/gemini-chatbot-api.git
cd gemini-chatbot-api
````

2. **Install dependencies**

```bash
npm install
```

3. **Buat file `.env`**

```env
PORT=5000
GEMINI_API_KEY=YOUR_API_KEY_HERE
```

4. **Jalankan server**

```bash
node index.js
```

## 📡 Endpoint API

### **POST** `/chat`

**Body:**

```json
{
  "message": "Halo chatbot!"
}
```

**Response:**

```json
{
  "reply": "Halo! Apa kabar hari ini?"
}
```

## 🛠 Dependencies

* [express](https://www.npmjs.com/package/express)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [cors](https://www.npmjs.com/package/cors)
* [@google/genai](https://www.npmjs.com/package/@google/genai)

## 📜 Lisensi

MIT License © 2025 Valentinopp

```

---

Kalau mau, aku bisa tambahkan **contoh kode lengkap `index.js`** yang sudah siap jalan, jadi README dan kode saling nyambung.  
Mau sekalian aku tambahkan?
```
