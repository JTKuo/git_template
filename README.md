# Sample Web Project

這是一個使用 React + TypeScript 作為前端，Node.js/Express 連接 Postgres 的後端，以及 Nginx 作為 Web Server 的簡易範例。

## 目錄結構

- `frontend/`：React + TypeScript 原始碼。
- `backend/`：Node.js/Express 伺服器，連接 Postgres。
- `nginx/`：Nginx 設定與建置檔。
- `docker-compose.yml`：整合 Postgres、後端與 Nginx 的服務定義。

## 使用方式

1. 安裝 [Docker](https://www.docker.com/) 與 [Docker Compose](https://docs.docker.com/compose/)。
2. 在專案根目錄執行：
   ```bash
   docker-compose up --build
   ```
3. 之後即可在瀏覽器開啟 `http://localhost` 看到前端畫面。
   - 後端 API 會透過 `/api` 路徑對外提供。

此範例僅供參考，可依需求修改程式碼與設定。
