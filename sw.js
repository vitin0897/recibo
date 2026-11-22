const V='recibo-v2';
const CORE=['./','index.html','manifest.json','icon-192.png','icon-512.png'];
const FRESH=/(config\.json|logo\.(png|jpe?g|webp|svg))$/i;
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==V).map(n=>caches.delete(n)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  const save=r=>{const copy=r.clone();caches.open(V).then(c=>c.put(e.request,copy)).catch(()=>{});return r;};
  if(url.origin===location.origin&&FRESH.test(url.pathname)){
    e.respondWith(fetch(e.request).then(save).catch(()=>caches.match(e.request)));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(save).catch(()=>caches.match('index.html'))));
});
