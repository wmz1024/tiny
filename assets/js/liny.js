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
getCDNinfo = function() {
	$.ajax({
		url: "https://l.wmza.cn/cdn-cgi/trace",
		success: function(data, status) {
			let areas = "Antananarivo, Madagascar - (TNR);Cape Town, South Africa - (CPT);Casablanca, Morocco - (CMN);Dar Es Salaam, Tanzania - (DAR);Djibouti City, Djibouti - (JIB);Durban, South Africa - (DUR);Johannesburg, South Africa - (JNB);Kigali, Rwanda - (KGL);Lagos, Nigeria - (LOS);Luanda, Angola - (LAD);Maputo, MZ - (MPM);Mombasa, Kenya - (MBA);Port Louis, Mauritius - (MRU);Réunion, France - (RUN);Bangalore, India - (BLR);Bangkok, Thailand - (BKK);Bandar Seri Begawan, Brunei - (BWN);Cebu, Philippines - (CEB);Chengdu, China - (CTU);Chennai, India - (MAA);Chittagong, Bangladesh - (CGP);Chongqing, China - (CKG);Colombo, Sri Lanka - (CMB);Dhaka, Bangladesh - (DAC);Dongguan, China - (SZX);Foshan, China - (FUO);Fuzhou, China - (FOC);Guangzhou, China - (CAN);Hangzhou, China - (HGH);Hanoi, Vietnam - (HAN);Hengyang, China - (HNY);Ho Chi Minh City, Vietnam - (SGN);Hong Kong - (HKG);Hyderabad, India - (HYD);Islamabad, Pakistan - (ISB);Jakarta, Indonesia - (CGK);Jinan, China - (TNA);Karachi, Pakistan - (KHI);Kathmandu, Nepal - (KTM);Kolkata, India - (CCU);Kuala Lumpur, Malaysia - (KUL);Lahore, Pakistan - (LHE);Langfang, China - (NAY);Luoyang, China - (LYA);Macau - (MFM);Malé, Maldives - (MLE);Manila, Philippines - (MNL);Mumbai, India - (BOM);Nagpur, India - (NAG);Nanning, China - (NNG);New Delhi, India - (DEL);Osaka, Japan - (KIX);Phnom Penh, Cambodia - (PNH);Qingdao, China - (TAO);Seoul, South Korea - (ICN);Shanghai, China - (SHA);Shenyang, China - (SHE);Shijiazhuang, China - (SJW);Singapore, Singapore - (SIN);Suzhou, China - (SZV);Taipei - (TPE);Thimphu, Bhutan - (PBH);Tianjin, China - (TSN);Tokyo, Japan - (NRT);Ulaanbaatar, Mongolia - (ULN);Vientiane, Laos - (VTE);Wuhan, China - (WUH);Wuxi, China - (WUX);Xi'an, China - (XIY);Yerevan, Armenia - (EVN);Zhengzhou, China - (CGO);Zuzhou, China - (CSX);Amsterdam, Netherlands - (AMS);Athens, Greece - (ATH);Barcelona, Spain - (BCN);Belgrade, Serbia - (BEG);Berlin, Germany - (TXL);Brussels, Belgium - (BRU);Bucharest, Romania - (OTP);Budapest, Hungary - (BUD);Chișinău, Moldova - (KIV);Copenhagen, Denmark - (CPH);Cork, Ireland -  (ORK);Dublin, Ireland - (DUB);Düsseldorf, Germany - (DUS);Edinburgh, United Kingdom - (EDI);Frankfurt, Germany - (FRA);Geneva, Switzerland - (GVA);Gothenburg, Sweden - (GOT);Hamburg, Germany - (HAM);Helsinki, Finland - (HEL);Istanbul, Turkey - (IST);Kyiv, Ukraine - (KBP);Lisbon, Portugal - (LIS);London, United Kingdom - (LHR);Luxembourg City, Luxembourg - (LUX);Madrid, Spain - (MAD);Manchester, United Kingdom - (MAN);Marseille, France - (MRS);Milan, Italy - (MXP);Moscow, Russia - (DME);Munich, Germany - (MUC);Nicosia, Cyprus - (LCA);Oslo, Norway - (OSL);Paris, France - (CDG);Prague, Czech Republic - (PRG);Reykjavík, Iceland - (KEF);Riga, Latvia - (RIX);Rome, Italy - (FCO);Saint Petersburg, Russia - (LED);Sofia, Bulgaria - (SOF);Stockholm, Sweden - (ARN);Tallinn, Estonia - (TLL);Thessaloniki, Greece - (SKG);Vienna, Austria - (VIE);Vilnius, Lithuania - (VNO);Warsaw, Poland - (WAW);Zagreb, Croatia - (ZAG);Zürich, Switzerland - (ZRH);Arica, Chile - (ARI);Asunción, Paraguay - (ASU);Bogotá, Colombia - (BOG);Buenos Aires, Argentina - (EZE);Curitiba, Brazil - (CWB);Fortaleza, Brazil - (FOR);Guatemala City, Guatemala - (GUA);Lima, Peru - (LIM);Medellín, Colombia - (MDE);Panama City, Panama - (PTY);Porto Alegre, Brazil - (POA);Quito, Ecuador - (UIO);Rio de Janeiro, Brazil - (GIG);São Paulo, Brazil - (GRU);Santiago, Chile - (SCL);Willemstad, Curaçao - (CUR);St. George's, Grenada - (GND);Amman, Jordan - (AMM);Baghdad, Iraq - (BGW);Baku, Azerbaijan - (GYD);Beirut, Lebanon - (BEY);Doha, Qatar - (DOH);Dubai, United Arab Emirates - (DXB);Kuwait City, Kuwait - (KWI);Manama, Bahrain - (BAH);Muscat, Oman - (MCT);Ramallah - (ZDM);Riyadh, Saudi Arabia - (RUH);Tel Aviv, Israel - (TLV);Ashburn, VA, United States - (IAD);Atlanta, GA, United States - (ATL);Boston, MA, United States - (BOS);Buffalo, NY, United States - (BUF);Calgary, AB, Canada - (YYC);Charlotte, NC, United States - (CLT);Chicago, IL, United States - (ORD);Columbus, OH, United States - (CMH);Dallas, TX, United States - (DFW);Denver, CO, United States - (DEN);Detroit, MI, United States - (DTW);Honolulu, HI, United States - (HNL);Houston, TX, United States - (IAH);Indianapolis, IN, United States - (IND);Jacksonville, FL, United States - (JAX);Kansas City, MO, United States - (MCI);Las Vegas, NV, United States - (LAS);Los Angeles, CA, United States - (LAX);McAllen, TX, United States - (MFE);Memphis, TN, United States - (MEM);Mexico City, Mexico - (MEX);Miami, FL, United States - (MIA);Minneapolis, MN, United States - (MSP);Montgomery, AL, United States - (MGM);Montréal, QC, Canada - (YUL);Nashville, TN, United States - (BNA);Newark, NJ, United States - (EWR);Norfolk, VA, United States - (ORF);Omaha, NE, United States - (OMA);Philadelphia, United States - (PHL);Phoenix, AZ, United States - (PHX);Pittsburgh, PA, United States - (PIT);Port-Au-Prince, Haiti - (PAP);Portland, OR, United States - (PDX);Queretaro, MX, Mexico - (QRO);Richmond, Virginia - (RIC);Sacramento, CA, United States - (SMF);Salt Lake City, UT, United States - (SLC);San Diego, CA, United States - (SAN);San Jose, CA, United States - (SJC);Saskatoon, SK, Canada - (YXE);Seattle, WA, United States - (SEA);St. Louis, MO, United States - (STL);Tampa, FL, United States - (TPA);Toronto, ON, Canada - (YYZ);Vancouver, BC, Canada - (YVR);Tallahassee, FL, United States - (TLH);Winnipeg, MB, Canada - (YWG);Adelaide, SA, Australia - (ADL);Auckland, New Zealand - (AKL);Brisbane, QLD, Australia - (BNE);Melbourne, VIC, Australia - (MEL);Noumea, New caledonia - (NOU);Perth, WA, Australia - (PER);Sydney, NSW, Australia - (SYD)".split(";");
			let area = data.split("colo=")[1].split("\n")[0];
			for (var i = 0; i < areas.length; i++) {
				if (areas[i].indexOf(area) != -1) {
					document.getElementById("cdn").innerHTML = areas[i];
					document.getElementById("ip").innerHTML = data.split("ip=")[1].split("\n")[0];
					document.getElementById("httpos").innerHTML = data.split("visit_scheme=")[1].split("\n")[0];
					document.getElementById("uag").innerHTML = data.split("uag=")[1].split("\n")[0];
					document.getElementById("http").innerHTML = data.split("http=")[1].split("\n")[0];
					document.getElementById("loc").innerHTML = data.split("loc=")[1].split("\n")[0];
					document.getElementById("tls").innerHTML = data.split("tls=")[1].split("\n")[0];
					document.getElementById("warp").innerHTML = data.split("warp=")[1].split("\n")[0];
					break;
				}
			}
		}
	})
}
$(document).ready(function() {
	getCDNinfo();
    //页面加载完毕就获取CDN信息
});


