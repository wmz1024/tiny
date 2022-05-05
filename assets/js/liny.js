console.log("%c  ____  __    __   ____  _      ____  ____   __ __ \n /    ||  |__|  | /    || |    |    ||    \ |  |  |\n|  o  ||  |  |  ||  o  || |     |  | |  _  ||  |  |\n|     ||  |  |  ||     || |___  |  | |  |  ||  ~  |\n|  _  ||  `  '  ||  _  ||     | |  | |  |  ||___, |\n|  |  | \      / |  |  ||     | |  | |  |  ||     |\n|__|__|  \_/\_/  |__|__||_____||____||__|__||____/ \n",'color:#0f0;');console.log("%c盲生你发现了华点 你找到了一处彩蛋( •̀ ω •́ )y",'color: 	#00FA9A;')
// from http://patorjk.com/software/taag/ 

console.log("%c盲生你发现了华点 你找到了一处彩蛋( •̀ ω •́ )y",'color: 	#00FA9A;')
console.log("%c想帮助我们 或者出现Bug时 请联系我们 i@w03.cc",'color: 	#DC143C;')
window.addEventListener('load',async()=>{navigator.serviceWorker.register(`/sw.js?time=${new Date().getTime()}`).then(async reg=>{if(window.localStorage.getItem('install')!='true'){window.localStorage.setItem('install','true');setTimeout(()=>{window.location.search=`?time=${new Date().getTime()}`},1000)}}).catch(err=>{})});
const CACHE_NAME='ICDNCache';let cachelist=["/images",'/assets','/css'];self.addEventListener('install',async function(installEvent){self.skipWaiting();installEvent.waitUntil(caches.open(CACHE_NAME).then(function(cache){console.log('Opened cache');return cache.addAll(cachelist)}))});
self.addEventListener('fetch', async event => {
    event.respondWith(handle(event.request))
});
const handle=async(req)=>{return fetch(req.url).then(function(b){if(!b){throw'error'}return caches.open(CACHE_NAME).then(function(a){a.delete(req);a.put(req,b.clone());return b})}).catch(function(b){return caches.match(req).then(function(a){return a||caches.match(new Request('/offline.html'))})})}


console.log("%c愿现在的景象都好",'color: 	#DC143C;');document.cookie = "caidan=U found a painted egg (❁´◡`❁) Report quickly";
document.cookie = "114514=你看到控制台的114514了罢（确信）";

function appendhead(){
    var head = document.head || document.getElementsByTagName('head')[0];   
    head += '<script async defer data-website-id="a107c181-665f-4b65-b448-267143746216" src="https://analytics.w03.cc/umami.js"></script>';
    document.getElementsByTagName('head')[0].innerHTML += head;
}
appendhead();


