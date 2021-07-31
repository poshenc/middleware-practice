Middleware:
伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡

Features:
伺服器接到任一請求時，server log 上能正確印出：
請求時間戳記 (time-stamps) - 以當地時間 (台北) 顯示
請求的 HTTP 方法
URL
請求到回覆所花費的時間


Installation:
1.打開終端機 (Terminal) 輸入以下訊息，下載專案至本機 git clone https://github.com/poshenc/middleware-practice.git
2.進入專案目錄資料夾 cd middleware-practice
3.安裝 npm 套件 npm install
4.啟動伺服器來執行專案 npm run dev
5.出現以下訊息即可開始使用: App is running on http://localhost:3000