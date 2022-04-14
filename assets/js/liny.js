console.log("%c  ____  __    __   ____  _      ____  ____   __ __ \n /    ||  |__|  | /    || |    |    ||    \ |  |  |\n|  o  ||  |  |  ||  o  || |     |  | |  _  ||  |  |\n|     ||  |  |  ||     || |___  |  | |  |  ||  ~  |\n|  _  ||  `  '  ||  _  ||     | |  | |  |  ||___, |\n|  |  | \      / |  |  ||     | |  | |  |  ||     |\n|__|__|  \_/\_/  |__|__||_____||____||__|__||____/ \n",'color:#0f0;');console.log("%c盲生你发现了华点 你找到了一处彩蛋( •̀ ω •́ )y",'color: 	#00FA9A;')
// from http://patorjk.com/software/taag/ 

console.log("%c盲生你发现了华点 你找到了一处彩蛋( •̀ ω •́ )y",'color: 	#00FA9A;')
console.log("\n%c想帮助我们 或者出现Bug时 请联系我们 i@wmza.cn",'color: 	#DC143C;')
window.addEventListener('load',async()=>{navigator.serviceWorker.register(`/sw.js?time=${new Date().getTime()}`).then(async reg=>{if(window.localStorage.getItem('install')!='true'){window.localStorage.setItem('install','true');setTimeout(()=>{window.location.search=`?time=${new Date().getTime()}`},1000)}}).catch(err=>{})});
const CACHE_NAME='ICDNCache';let cachelist=["index.html","/images",'/assets','/css'];self.addEventListener('install',async function(installEvent){self.skipWaiting();installEvent.waitUntil(caches.open(CACHE_NAME).then(function(cache){console.log('Opened cache');return cache.addAll(cachelist)}))});
self.addEventListener('fetch', async event => {
    event.respondWith(handle(event.request))
});
const handle = async(req)=>{
    //do something
}
console.log("\n%c最新消息 有一个项目需要内测 请联系 i@w03.cc",'color: 	#DC143C;')


document.cookie = "caidan=U found a painted egg (❁´◡`❁) Report quickly";




