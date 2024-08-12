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
1. 建立 LoadingContext 來控制全域載入狀態控制
2. 從 LoadingContext 可以載入 loading 狀態與 setLoading 這個方法來控制載入畫面
3. 從 LoadingContext 中，如果將 waittingTime 這個 state 設為大於 0 的數字，載入動畫會多加這個 waittingTime 的動畫播放時間
4. 使用 Loading 要傳入 lottiefiles 的動畫 JSON
5. 在 Loading 中使用 從 LoadingContext 的 loading 狀態來切換顯示
6. 如果在各別頁面中想要控制 loading 動畫，也是可以從 LoadingContext 可以載入 setLoading 來控制


## 加入 lottiefiles 動畫
1. [參考網址](https://docs.lottiefiles.com/lottie-player/components/lottie-react)