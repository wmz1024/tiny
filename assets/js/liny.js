// from http://patorjk.com/software/taag/ 


window.addEventListener('load', async () => {
    navigator.serviceWorker.register(`/sw.js?time=${new Date().getTime()}`)
        .then(async reg => {
            //安装成功，建议此处强刷新以立刻执行SW
            if (window.localStorage.getItem('install') != 'true') {
                window.localStorage.setItem('install', 'true');
                setTimeout(() => {
                    window.location.search = `?time=${new Date().getTime()}`
                }, 1000)
            }
        }).catch(err => {
            //安装失败，错误信息会由err传参
        })
});

const CACHE_NAME = 'ICDNCache';//可以为Cache版本号，但这样可能会导致缓存冗余累积
let cachelist = ["index.html","/images",'/assets','/css'];
self.addEventListener('install', async function (installEvent) {
    self.skipWaiting();
    installEvent.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cachelist);
            })
    );
});

self.addEventListener('fetch', async event => {
    event.respondWith(handle(event.request))
});

const handle = async(req)=>{
    //do something
}

console.log("%c  ____  __    __   ____  _      ____  ____   __ __ \n /    ||  |__|  | /    || |    |    ||    \ |  |  |\n|  o  ||  |  |  ||  o  || |     |  | |  _  ||  |  |\n|     ||  |  |  ||     || |___  |  | |  |  ||  ~  |\n|  _  ||  `  '  ||  _  ||     | |  | |  |  ||___, |\n|  |  | \      / |  |  ||     | |  | |  |  ||     |\n|__|__|  \_/\_/  |__|__||_____||____||__|__||____/ \n",'color:#0f0;');
console.log("%c盲生你发现了华点 你找到了一处彩蛋( •̀ ω •́ )y",'color: 	#00FA9A;')
console.log("\n%c想帮助我们 或者出现Bug时 请联系我们 i@wmza.cn",'color: 	#DC143C;')


document.cookie = "caidan=U found a painted egg (❁´◡`❁) Report quickly";




