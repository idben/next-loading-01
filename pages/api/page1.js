const waitting = (t) => {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve();
    },t);
  });
}

export default function handler(req, res) {
  (async ()=>{
    await waitting(5000);
    res.status(200).json({ status: "success" });
  })();
}