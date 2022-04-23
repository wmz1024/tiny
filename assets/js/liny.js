console.log("%c  ____  __    __   ____  _      ____  ____   __ __ \n /    ||  |__|  | /    || |    |    ||    \ |  |  |\n|  o  ||  |  |  ||  o  || |     |  | |  _  ||  |  |\n|     ||  |  |  ||     || |___  |  | |  |  ||  ~  |\n|  _  ||  `  '  ||  _  ||     | |  | |  |  ||___, |\n|  |  | \      / |  |  ||     | |  | |  |  ||     |\n|__|__|  \_/\_/  |__|__||_____||____||__|__||____/ \n",'color:#0f0;');console.log("%c盲生你发现了华点 你找到了一处彩蛋( •̀ ω •́ )y",'color: 	#00FA9A;')
// from http://patorjk.com/software/taag/ 

console.log("%c盲生你发现了华点 你找到了一处彩蛋( •̀ ω •́ )y",'color: 	#00FA9A;')
console.log("\n%c想帮助我们 或者出现Bug时 请联系我们 i@wmza.cn",'color: 	#DC143C;')
window.addEventListener('load',async()=>{navigator.serviceWorker.register(`/sw.js?time=${new Date().getTime()}`).then(async reg=>{if(window.localStorage.getItem('install')!='true'){window.localStorage.setItem('install','true');setTimeout(()=>{window.location.search=`?time=${new Date().getTime()}`},1000)}}).catch(err=>{})});
const CACHE_NAME='ICDNCache';let cachelist=["/images",'/assets','/css'];self.addEventListener('install',async function(installEvent){self.skipWaiting();installEvent.waitUntil(caches.open(CACHE_NAME).then(function(cache){console.log('Opened cache');return cache.addAll(cachelist)}))});
self.addEventListener('fetch', async event => {
    event.respondWith(handle(event.request))
});
const handle = async(req)=>{
    //do something
}
console.log("愿现在的景象都好",'color: 	#DC143C;')


document.cookie = "caidan=U found a painted egg (❁´◡`❁) Report quickly";
document.cookie = "114514=你看到控制台的114514了罢（确信）";

const handle = async (req) => {
    return fetch(req.url).then(function (res) {
        if (!res) { throw 'error' } //1
        return caches.open(CACHE_NAME).then(function (cache) {
            cache.delete(req);
            cache.put(req, res.clone());
            return res;
        });
    }).catch(function (err) {
        return caches.match(req).then(function (resp) {
            return resp || caches.match(new Request('/offline.html')) //2
        })
    })
}



