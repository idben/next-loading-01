This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## 簡單的載入畫面處理
1. 在 _app.js 建立一個 Loading function，會輸入載入的 div
2. 在原本 Component 的使用前，使用 Loading
3. 使用 Loading 可以傳入展示時間；如果有傳入，那即時不需要 loading 也會硬是顯示動畫
4. 使用 Loading 要傳入 lottiefiles 的動畫 JSON
5. 在 Loading 中使用 useState 來設定 loading 的狀態 true/false，這個會控制畫面的顯示與否
6. 使用 useEffect 在掛載時運行，處理 Next.js 路由事件相關的邏輯
7. 在 useEffect 中，定義了三個事件處理器：
  1. handleStart: 當路由變化開始時觸發，如果新的 URL 與當前 URL 不同，則將 loading 設置為 true，這意味著開始顯示加載動畫。
  2. handleComplete: 當路由變化完成時觸發，如果新的 URL 與當前 URL 相同，則將 loading 設置為 false，這意味著停止顯示加載動畫。
  3. handleComplete 也被用於處理路由變化錯誤的情況，以確保在任何錯誤發生時停止顯示加載動畫。
8. 這些處理器被註冊到 Next.js 的路由事件系統：
  1. 使用 Router.events.on 方法註冊 handleStart 到 routeChangeStart 事件。
  2. 使用 Router.events.on 方法註冊 handleComplete 到 routeChangeComplete 和 routeChangeError 事件。
9. 最後，使用 useEffect 的返回函數來進行清理工作，從路由事件系統中移除這些事件處理器。
10. 組件的返回值根據 loading 的狀態條件性地渲染一個 div 元素，如果 loading 為 true，則顯示加載中的文本，否則不渲染任何內容。


## 加入 lottiefiles 動畫
1. [參考網址](https://docs.lottiefiles.com/lottie-player/components/lottie-react)