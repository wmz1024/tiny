// from http://patorjk.com/software/taag/ 
console.log("%c  ____  __    __   ____  _      ____  ____   __ __ \n /    ||  |__|  | /    || |    |    ||    \ |  |  |\n|  o  ||  |  |  ||  o  || |     |  | |  _  ||  |  |\n|     ||  |  |  ||     || |___  |  | |  |  ||  ~  |\n|  _  ||  `  '  ||  _  ||     | |  | |  |  ||___, |\n|  |  | \      / |  |  ||     | |  | |  |  ||     |\n|__|__|  \_/\_/  |__|__||_____||____||__|__||____/ \n",'color:#0f0;');



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


