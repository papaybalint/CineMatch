# CineMatch AI – Full-Stack & Dockerized App

Ez a projekt a **CineMatch AI** alkalmazás Dockerizált fejlesztői környezete (React + Node.js Express).

---

## 🚀 Gyorsindítás (Quick Start)

A projekt futtatásához mindössze **Docker** és **Docker Compose** szükséges. Nincs szükség helyi Node.js vagy npm telepítésre!

```bash
# 1. Klónozd a tárolót (ha szükséges)
git clone <repo-url>
cd CineMatch

# 2. Indítsd el a teljes alkalmazást egyetlen paranccsal!
docker compose up --build
```

---

## 🌐 Elérhetőségek

* **Frontend (React 18 + Vite):** [http://localhost:5175](http://localhost:5175)
* **Backend API (Node.js Express):** [http://localhost:3000](http://localhost:3000)

---

## 📁 Projekt Szerkezet

```text
CineMatch/
├── client/                  # React (Vite) frontend alkalmazás
│   ├── Dockerfile           # Frontend Docker konfiguráció (Port: 5175)
│   ├── .dockerignore
│   └── vite.config.js       # Vite host & port beállítások
├── server/                  # Node.js Express backend API
│   ├── Dockerfile           # Backend Docker konfiguráció (Port: 3000)
│   ├── .dockerignore
│   └── server.js            # Express szerver (node --watch)
└── docker-compose.yml       # Összekötő konfiguráció (Hot Reload támogatással)
```

---

## 🛠️ Hasznos Docker Compose Parancsok

| Parancs | Leírás |
| :--- | :--- |
| `docker compose up` | Elindítja a környezetet a terminálban (élő logok) |
| `docker compose up -d` | Elindítja a környezetet a háttérben (detached mód) |
| `docker compose up --build` | Újraépíti az Image-eket és elindítja a konténereket |
| `docker compose down` | Leállítja és eltávolítja a futó konténereket és a hálózatot |
| `docker compose logs -f` | Megjeleníti az élő logokat háttérben futás esetén |
