const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "wlog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"61a78d6ea2329c458c4cfc0e16e87035","url":"./404.html"},{"revision":"25c2252c43b7ac7efa677ca10b2c2045","url":"./about/index.html"},{"revision":"7569f6c73c4cc3c80aaa073e9b072e90","url":"./archives/2020/08/index.html"},{"revision":"a0c8d084b5e9c2fef1f285b132076b00","url":"./archives/2020/08/page/2/index.html"},{"revision":"38bf85a68a293f7d47409cb7a9e96a6a","url":"./archives/2020/08/page/3/index.html"},{"revision":"aa0bc7c71bfddbdfb9084e8fc6386829","url":"./archives/2020/09/index.html"},{"revision":"91d6f71f92b43c9c7b282662b7f80fda","url":"./archives/2020/09/page/2/index.html"},{"revision":"1858f8aafb8636cd741b43ddc665f775","url":"./archives/2020/10/index.html"},{"revision":"35d1bc32b4dfef637caa98913980f3a6","url":"./archives/2020/11/index.html"},{"revision":"e38fecd68adf27f1d94f609944fc7c74","url":"./archives/2020/index.html"},{"revision":"b90912d3f5f397dd50c6edd6e51fa86d","url":"./archives/2020/page/2/index.html"},{"revision":"1724ea5953c1f1895cd4593fe40b23f9","url":"./archives/2020/page/3/index.html"},{"revision":"a1d3ecfb8246bfc339f83519084ff165","url":"./archives/2020/page/4/index.html"},{"revision":"59d223d05a8e1d8c8b909d4fb9e4fe0a","url":"./archives/2021/02/index.html"},{"revision":"6ff5e624f8fdaa53f46503dc1f8bc040","url":"./archives/2021/04/index.html"},{"revision":"36241b9893dbe8d0de86b18b8eacf4ae","url":"./archives/2021/05/index.html"},{"revision":"72a519a0a0a0ecee88e5e91cada0ec6f","url":"./archives/2021/06/index.html"},{"revision":"5808920ed7b640a16a3cf9e6abe79ed2","url":"./archives/2021/07/index.html"},{"revision":"d4f08c6a246cc8805992b3bd79b03976","url":"./archives/2021/08/index.html"},{"revision":"6585238945ed25d81b1caa61c30615be","url":"./archives/2021/09/index.html"},{"revision":"bd7dcba27299dbc9a8f77848c9aa718b","url":"./archives/2021/10/index.html"},{"revision":"4a5789e2d24eefa4941e81e22a4adfc7","url":"./archives/2021/11/index.html"},{"revision":"601e3eedd7fd9b84c6f71681cef3d010","url":"./archives/2021/12/index.html"},{"revision":"3da1ffa90af5f200f18be2758917c477","url":"./archives/2021/index.html"},{"revision":"d0f17f6f115e3996069cd5e9b5d84a64","url":"./archives/2021/page/2/index.html"},{"revision":"019af563a7a6ba53b96dd492b7dd1519","url":"./archives/2021/page/3/index.html"},{"revision":"96caa2cfaa68601c8829e7e723ea02ba","url":"./archives/2022/02/index.html"},{"revision":"ad3d41cf5fb6b693dba76c76ae4ecbeb","url":"./archives/2022/03/index.html"},{"revision":"ded56d63304723815c522c7ca0b97a05","url":"./archives/2022/index.html"},{"revision":"34a690f741e76db92a7281b03575f5b6","url":"./archives/index.html"},{"revision":"7f0e31a3378b06a64a4466bc1c71814b","url":"./archives/page/2/index.html"},{"revision":"aa0101124f1002446a0b458d5f4d33e5","url":"./archives/page/3/index.html"},{"revision":"c529ae58657a0bf068580e4e70c0df84","url":"./archives/page/4/index.html"},{"revision":"b91af8ff44526e35e7d6b30a5dfbdf1d","url":"./archives/page/5/index.html"},{"revision":"3a19acef7e9e115cfbf725b78d48de99","url":"./archives/page/6/index.html"},{"revision":"922f053df98ce18666671b35c07565fa","url":"./archives/page/7/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"d8f004edcf53d3c68be2cdf5e5fd30ee","url":"./bangumis/index.html"},{"revision":"f9825df26698e07397aca81203a9b699","url":"./c-re.html"},{"revision":"cec75a89eefe313569e9be918a34c057","url":"./calendar.json"},{"revision":"c022cfa96780bbc34a4836854114b17d","url":"./categories/index.html"},{"revision":"ecf91e27417beeb2761f1660413a77de","url":"./categories/教程-html/index.html"},{"revision":"98b30c22bf1682f0bd7cbc33ac13b646","url":"./categories/文章/index.html"},{"revision":"a51ce6a9c8e0f95b4070f84dc8b39c95","url":"./categories/文章/page/2/index.html"},{"revision":"44d4d826ce9d9a7568053d9b8d5a5389","url":"./categories/文章/page/3/index.html"},{"revision":"cb871531e8986d2dd2191f5980505fe9","url":"./categories/文章/page/4/index.html"},{"revision":"c28e3cacefcaf1545c79068a3469f2a6","url":"./categories/文章/page/5/index.html"},{"revision":"63b18bce2057138e074f81ac00dfdc1d","url":"./categories/文章/博客周年/index.html"},{"revision":"e985420d945b4e5360ad3ed05ec38c57","url":"./categories/文章/后端/index.html"},{"revision":"c3c40402194551f8aad5fe706c1aa4fc","url":"./categories/文章/感受/index.html"},{"revision":"ec903f31f94cb8bb0dbc2b8e0c4606fe","url":"./categories/文章/短文章/index.html"},{"revision":"1bf7f05bb453ed5ed3e9e43f3d489643","url":"./categories/文章/笔记/index.html"},{"revision":"f2a32fe3ba38e53f533f05e02673fc75","url":"./categories/文章/续集/index.html"},{"revision":"224f119167b4b6f561364d93b907e6c7","url":"./categories/日记/index.html"},{"revision":"472c682c6e80e4b9479a59ae2ef68259","url":"./categories/通知/index.html"},{"revision":"b4917feb2756ddc2e192568841cf416e","url":"./categories/通知/page/2/index.html"},{"revision":"23e224e304f80ba0cd79ad038327a474","url":"./codemao/join.html"},{"revision":"c91617866b5b3624bbbb30e1826c654f","url":"./comments/index.html"},{"revision":"a9a3712ca10c5d65b7af395d9dc53289","url":"./css/bilibiliBanner.css"},{"revision":"fb15fb1adb17841704902aa9c227f729","url":"./css/bilicard.css"},{"revision":"aa687b8441c1dea2f0710f788723542f","url":"./css/card_botui.css"},{"revision":"808bbddc4f4c56aee97a7af07f1f364f","url":"./css/coin.css"},{"revision":"f090ad6255c94d4fc1f0c5f34ba0d5c5","url":"./css/custom.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/customw.css"},{"revision":"8aae3872dd735df63ac60710f46e97be","url":"./css/gggwmlgxfc.css"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"e8ceed38d5306a217f43aac4a154f9d2","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"cc494e6c22b45d83430fe8650f2d6297","url":"./fc/index.html"},{"revision":"38934eac0567b33d3171ace7237366de","url":"./from.html"},{"revision":"dcd07ef80c9becc9c571988dd5d0ff3b","url":"./hpp-shuoshuo/index.html"},{"revision":"6ba761daa35c50bf92dec2c218450685","url":"./index.html"},{"revision":"3977461395620c67690202f14bbc6058","url":"./js/bilibili-banner.js"},{"revision":"546b558e9e8b3c6952b530d467406ad7","url":"./js/botui_init.js"},{"revision":"6aea941743f41c0649d742bdc80df352","url":"./js/botui.js"},{"revision":"75425367741585f45e04ed36707429e9","url":"./js/calendar.js"},{"revision":"db0ef6fc56befa79cef5e478f9138324","url":"./js/coin.js"},{"revision":"13f02f1612f2a9c6bf4932ece42bbfe0","url":"./js/languages.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"c56713403fe9375a51d3a0e660e80676","url":"./js/runtime.js"},{"revision":"fb9eaf607df5ea9ddfebfc57238add1d","url":"./js/SAO_Menu.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"91b7e2a555e0c80cac63cc0c490e69e8","url":"./js/weather.js"},{"revision":"2d3e4205fb0aab1c7e64101a9b6583b0","url":"./jump.html"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"e94eaa9ec667b4581773eda0773dfde0","url":"./link/index.html"},{"revision":"42e4950a21f49b6397207818bdc2dc56","url":"./manifest.json"},{"revision":"d7ff0c091811288bee78f124e0fe3afd","url":"./other-page/dead-links/index.html"},{"revision":"d77b54546ba39af2532f333dce19127e","url":"./other-page/video/index.html"},{"revision":"a86f1b77936419aa159d039f34da2fe7","url":"./other-page/ziyuan/index.html"},{"revision":"95abf0f8c4950c490e339ba93d4b6f75","url":"./other/index.html"},{"revision":"2b9110e8b014722f76093b6083d7b52f","url":"./other/manifest.json"},{"revision":"c2462a64f4ffe2be6faa66451ccef53a","url":"./other/s/NTRss88/index.html"},{"revision":"4b72333823b8e3a181e0ddc0cf38fe97","url":"./p/2020/11f1a2fc.html"},{"revision":"7d9461c127ef6c1a529068bb769580bb","url":"./p/2020/1f7e3876.html"},{"revision":"c6ef14e07c53ea21cb04ec1ec356bef4","url":"./p/2020/2c7854e6.html"},{"revision":"4aa683ae933c3930cf02f6de092069d7","url":"./p/2020/30422b3f.html"},{"revision":"e7ffba57be8e464529ede3c349fa3cc4","url":"./p/2020/3494bf09.html"},{"revision":"69a4badc3952c7ba96d1d84a1493f8a7","url":"./p/2020/4283e7c2.html"},{"revision":"ff42267410fe58436b3774ec2e81eeb1","url":"./p/2020/47008bfe.html"},{"revision":"e6db0047b7d8337a06794e67f16b68a6","url":"./p/2020/496761e5.html"},{"revision":"d92c377d8175f913ecda27f487a249e9","url":"./p/2020/51f11683.html"},{"revision":"ce70f353396b7294a573ecd9f44a87d5","url":"./p/2020/6057642a.html"},{"revision":"4810cd9eed05d84120ba5e94f9f0182f","url":"./p/2020/60816787.html"},{"revision":"175ff75454060e5df5cd02ed9b52fbde","url":"./p/2020/68083ed.html"},{"revision":"6f02796a3391133e7d64a33cab7261f6","url":"./p/2020/748a29a4.html"},{"revision":"b9630705a5c02c07844461c465f2d83a","url":"./p/2020/7bc26341.html"},{"revision":"7e55ac33c294371a515e38e524a62fec","url":"./p/2020/7cee40bf.html"},{"revision":"9528634eea809ba1e89762564efb21aa","url":"./p/2020/836982c.html"},{"revision":"7552ffff1e15b7bf3b418cf58d3c579b","url":"./p/2020/83d82948.html"},{"revision":"07c88f6f1024eeb3554d2e75c0f52047","url":"./p/2020/8856403.html"},{"revision":"ef7d7123154b51ccbb19aab97c13760c","url":"./p/2020/8bc291e6.html"},{"revision":"bb3ac3d68f5c83aa2f694de841758a42","url":"./p/2020/8d39085b.html"},{"revision":"185006aee833ab2155fb918208c97808","url":"./p/2020/9341b494.html"},{"revision":"72311d404e1985b3768e1a46abedb464","url":"./p/2020/96ccccce.html"},{"revision":"5862ee6570c64f5b431cebb178409c6f","url":"./p/2020/98d114e8.html"},{"revision":"dfa8a3e6e019a02fc40e97dc8a45b8cc","url":"./p/2020/a1be303c.html"},{"revision":"22bbea4a52d9746494459b4b4805f270","url":"./p/2020/aa96c821.html"},{"revision":"1af5f78ecfcd9d30ed585477ed8e2e86","url":"./p/2020/b28868d6.html"},{"revision":"552075b5e18b48b9e1c878e729522415","url":"./p/2020/bf3a65a4.html"},{"revision":"ddd93ef0c966ca3f19de11e30fa59b00","url":"./p/2020/c1ee638c.html"},{"revision":"64cfc69d8c52f8804bc821a02cc87dbe","url":"./p/2020/c3119b08.html"},{"revision":"7efbc375c426b1f632b29476e726fe19","url":"./p/2020/cd843bca.html"},{"revision":"7185bcd7dea78b1bab215d58212a7f17","url":"./p/2020/d28a09fd.html"},{"revision":"12870da6f169a6e0a9dae3ff4ec50459","url":"./p/2020/d2bd8f46.html"},{"revision":"2a04b06a286d8423060b316e67d4442e","url":"./p/2020/da033cd3.html"},{"revision":"9a747eb4f25072d544dfdc9945ef4c3c","url":"./p/2020/e4d07d47.html"},{"revision":"2dc1d1acebb7531c6d289665190c0c73","url":"./p/2020/f6485125.html"},{"revision":"c755f416acc0b524ff9f1d1641595fd1","url":"./p/2020/fa1bfef3.html"},{"revision":"ee0256930eaba74daa167a6160e69032","url":"./p/2020/fe275fd0.html"},{"revision":"7a40099f6a9c6165cad8891ac54e1fd4","url":"./p/2021/2b244555.html"},{"revision":"9ead0e082e040e352a71a8589f526b30","url":"./p/2021/2ee2518d.html"},{"revision":"5ef06517f467d11c1565b8a6ef41a3ab","url":"./p/2021/2f3c3637.html"},{"revision":"5bed6d3a340326c59b8bc38a685502b6","url":"./p/2021/37e49068.html"},{"revision":"fa19a1e42f8ab59a79598f811487fb31","url":"./p/2021/3e4cf0e1.html"},{"revision":"14dbe83e8acd888357c003250440eee9","url":"./p/2021/49ab854f.html"},{"revision":"35080ba9cb48541120fccbc5a42cc652","url":"./p/2021/5092e2b.html"},{"revision":"1be2dad6fd2c6988ab78f738ae7d617f","url":"./p/2021/5b2b3473.html"},{"revision":"80ecae7dc7a4e9c130f1af1ae0d1d7d0","url":"./p/2021/71e2d2d3.html"},{"revision":"27385afcc1db12482ae00005c8b359ab","url":"./p/2021/87e1c0bc.html"},{"revision":"e8a8a9b9d7f1368dfbf832b8994f780c","url":"./p/2021/956e4b88.html"},{"revision":"d54ca5251af5021d6ff08bd90c82408e","url":"./p/2021/a2bad115.html"},{"revision":"3b54b1613c2d3d550dd111ab7d9be983","url":"./p/2021/a65bc6b8.html"},{"revision":"972f4476e71bb4ac9a28f0b95ff50858","url":"./p/2021/a81556f1.html"},{"revision":"e9b230408e046742a6530ace5bd56d13","url":"./p/2021/a8acdd67.html"},{"revision":"8d28a49dc5efce60551976ecfbdd1ed4","url":"./p/2021/ab1d37b.html"},{"revision":"bf4841bc32573310503ee02afcd486c5","url":"./p/2021/aeb2d36.html"},{"revision":"10cb9268f4099a93c9c0b5688c51b1e9","url":"./p/2021/af886b34.html"},{"revision":"aed48b8394b04214219bd7977f2fd3ea","url":"./p/2021/c48ef0f6.html"},{"revision":"69b909c038c70cf9023558f0b299d097","url":"./p/2021/c53c84e7.html"},{"revision":"71e827c9062d51787c231ee48e6abe50","url":"./p/2021/c6c9c4db.html"},{"revision":"fc596b4c26b07ba9d2ceaee0ec3ed2b3","url":"./p/2021/cc64f226.html"},{"revision":"08291268159e05b786dd8f0c8f5880af","url":"./p/2021/d46f6783.html"},{"revision":"97d50341ac35012397b3d7e916d68cb0","url":"./p/2021/d4ab2366.html"},{"revision":"b615c42209148340a2aea1a6653fa2c5","url":"./p/2021/db5f4c9.html"},{"revision":"9f4cb8cf9f009d61e9e0871063b05179","url":"./p/2021/dfd2f59a.html"},{"revision":"0e9490d46a6bafeb35e61260d405268d","url":"./p/2021/ede49718.html"},{"revision":"964063acba2f7fe737c132c69b0c733e","url":"./p/2021/ee30bc12.html"},{"revision":"102b83a17451756beae72918d1d986c2","url":"./p/2021/f053c80.html"},{"revision":"c06d19af1699ea0342001115ed6e26ad","url":"./p/2022/5ec40e5d.html"},{"revision":"e4ae877587678e9ffd274c92bef906a6","url":"./p/2022/b75ed523.html"},{"revision":"5806592c3e03584308d41c9047c15b2b","url":"./page/2/index.html"},{"revision":"9314243139342d1e8bcef36164cb8b5c","url":"./page/3/index.html"},{"revision":"13d01394ff15de42f537dd24876fbc11","url":"./pcre.html"},{"revision":"8b5d57531b338f1e74545c048eb4d301","url":"./random.html"},{"revision":"10407d5a297146e0f7bc3e38e603d0a1","url":"./reward/index.html"},{"revision":"13b9e1638d057c0bfee6aac42b4c3ffb","url":"./shuoshuo/index.html"},{"revision":"1abd8d7081103840ec994da1e33dd1c8","url":"./support.html"},{"revision":"b82da08c72a989c08d315eb7ca877b34","url":"./tags/2020/index.html"},{"revision":"dc6a55161e739b749a5eaf811a9cdd41","url":"./tags/404-网站/index.html"},{"revision":"9b5d39e23c343939d644b59bdaaf1e08","url":"./tags/android/index.html"},{"revision":"ce2c2feb00743f2c8d478ace23abc15c","url":"./tags/Android/index.html"},{"revision":"8c1b74bd6fd56ea3b424f6ab4e167d20","url":"./tags/aplayer/index.html"},{"revision":"3d7e765413bf9f0fee977e7d2bc0155a","url":"./tags/app/index.html"},{"revision":"08edac88e185889396052e175823ef0c","url":"./tags/bilibili/index.html"},{"revision":"5807fa88a4bd1c2e20ef996e26ef391d","url":"./tags/CF/index.html"},{"revision":"323bc59a7d060ebd0b8fb3bbc4282da6","url":"./tags/CFW/index.html"},{"revision":"ba44e7a5a954d986dd6ea60d36536e3b","url":"./tags/Cloud-flare/index.html"},{"revision":"22bad6014b1d2b0abe8cdadba342ae20","url":"./tags/dao-voice/index.html"},{"revision":"57095ded4371f867e26eb8c0bf18ea6a","url":"./tags/debian/index.html"},{"revision":"4fc25c4d402e417ac9adc6ec1bbd1b52","url":"./tags/download/index.html"},{"revision":"8b3fec3eb5957eb1a9f1d560d76a526b","url":"./tags/FA/index.html"},{"revision":"2133c6177c7f84f57b9858318ab62e2c","url":"./tags/fusionapp/index.html"},{"revision":"9c29286726500fc701c6a91ca61504ea","url":"./tags/gh-page/index.html"},{"revision":"526590d1de3338bf5902f10754e59f4c","url":"./tags/git/index.html"},{"revision":"5232608b369c6eae950ec2db0eab59a6","url":"./tags/gitee-page/index.html"},{"revision":"b3d8caad22a5e94443c13d13b5aa2842","url":"./tags/gitee/index.html"},{"revision":"19b744ee3e05982ba1819863346941c6","url":"./tags/github-action/index.html"},{"revision":"31ced5cc7918def248565358042a2486","url":"./tags/github-page/index.html"},{"revision":"12d0d66af9d13388c7f59bd9c6646a7b","url":"./tags/github/index.html"},{"revision":"92ddae91a1d107e53584e943d28f1dd0","url":"./tags/github/page/2/index.html"},{"revision":"4d37d763a4a85852985f4f961f5c77be","url":"./tags/githubpage/index.html"},{"revision":"ee636c1bc4aa0a7b1cfcaa27a822dc72","url":"./tags/hello-world/index.html"},{"revision":"cac34cfc0d8170152a2dfcc239a045af","url":"./tags/hexo/index.html"},{"revision":"4df4eb009fb3b48b490d2fecb3e13c5a","url":"./tags/html/index.html"},{"revision":"07c43aa75eabfda5328a94db4f98e99b","url":"./tags/iframe/index.html"},{"revision":"8f1c7b1031cf444e8a5943e27cf622b1","url":"./tags/index.html"},{"revision":"4962620b7313ea20fff73349aaff1495","url":"./tags/java/index.html"},{"revision":"07ff51e0d66b4bbe9d55a86702de73de","url":"./tags/linux/index.html"},{"revision":"45ad58be33d823d5e511262842e7f3e5","url":"./tags/liunx/index.html"},{"revision":"107e78f6cde18d87c11d40cc2502d706","url":"./tags/markdown/index.html"},{"revision":"42029915172dd0fa6571bffa7a220748","url":"./tags/md/index.html"},{"revision":"c0fce54d31aba97daf30a3256a089dd8","url":"./tags/md编辑器/index.html"},{"revision":"ea47c334b37494fec1c1e8370b14ef98","url":"./tags/minecraft-JE/index.html"},{"revision":"d205869a552c2ae5806b6c148f944e18","url":"./tags/minecraft/index.html"},{"revision":"a91a26dd43ddc3259dfb8f44fb62a42c","url":"./tags/minecraftJE/index.html"},{"revision":"072652ee5d7d98b72aae32c2c279bd3a","url":"./tags/node-js/index.html"},{"revision":"36f3ba8f868edc62ad36569bbcc2e5b8","url":"./tags/node/index.html"},{"revision":"65967a6a9b8739e118061d5ed0dd2529","url":"./tags/PE/index.html"},{"revision":"083b43355640f7220a85751a32d5150e","url":"./tags/php/index.html"},{"revision":"106421dbd221c54a763778d28e7adf3c","url":"./tags/picgo/index.html"},{"revision":"4367d28e7e8b50e8cd0a0a63c65330c6","url":"./tags/python/index.html"},{"revision":"04cb61bbe55ad718a6ddd81cb0ed0ce4","url":"./tags/ssh/index.html"},{"revision":"2b3032e46949d80905423ccbae2b35fe","url":"./tags/termux/index.html"},{"revision":"a592047e1d8637cdf4559d564353f82a","url":"./tags/Termux/index.html"},{"revision":"a0e6f9c396c5fb92228aaf495647ed2f","url":"./tags/tkinter/index.html"},{"revision":"9b19a185e8059e8506b1c2b837d239ac","url":"./tags/typora/index.html"},{"revision":"3c7f82a5c7779f6f6510f3176781bec4","url":"./tags/undertale/index.html"},{"revision":"bd3f87a2cc719ace1935fbae6f3971f6","url":"./tags/ut/index.html"},{"revision":"74d3a514156e4610829002f76e4fdf1e","url":"./tags/vercel/index.html"},{"revision":"334ca366f4bf109157c65b8b0a717c1b","url":"./tags/website/index.html"},{"revision":"de8c8e7201fee2182d7ee30d98487f7b","url":"./tags/win10安装/index.html"},{"revision":"315c091b2f0516439f29940d341cf8ce","url":"./tags/windows/index.html"},{"revision":"f00644d4e97df28ff4dec5dd7a7c4b55","url":"./tags/Windows/index.html"},{"revision":"3656df14b237d41543546c0bfced75bf","url":"./tags/Windows10/index.html"},{"revision":"974c5cffd786b9ffa8a06dc4e16771cf","url":"./tags/Windows11/index.html"},{"revision":"ffe92cb2356a2b3944707b51b5710f80","url":"./tags/wmz-blog/index.html"},{"revision":"69c4bce57c12cc51cc9a5f603e1b0e76","url":"./tags/一周年/index.html"},{"revision":"68e9d8dfa542e6217e1b3e48a7f16868","url":"./tags/传说之下/index.html"},{"revision":"c47a7cbc1428e6f1e197c2903129e564","url":"./tags/免翻墙/index.html"},{"revision":"d691818e5eb9c1b15fa6e7a50eb3d451","url":"./tags/动态网页/index.html"},{"revision":"db097f69cc8522f8463a41921c20e5de","url":"./tags/博客/index.html"},{"revision":"80932ae667ceb0b03c49ddc2a412ea4c","url":"./tags/回顾/index.html"},{"revision":"b8463d77e5fc63595799019e0a3e3cda","url":"./tags/图床/index.html"},{"revision":"15ec54e409613a542a503da527cf886a","url":"./tags/在线聊天/index.html"},{"revision":"41401fc10f8062c3e47e1956e057a2d6","url":"./tags/妙用/index.html"},{"revision":"3a338c7ff33e6411fed4abde9f0ea1df","url":"./tags/安装/index.html"},{"revision":"774547389cbc273c9ec741d427e1bd0b","url":"./tags/工具/index.html"},{"revision":"912f548b0ba59d3aea6294d8d15cfd9b","url":"./tags/我的世界/index.html"},{"revision":"4e97815fb87ea8b38948636a9dedff11","url":"./tags/折腾/index.html"},{"revision":"e40c3ceeb62969266b140e1828e49f52","url":"./tags/搭建/index.html"},{"revision":"d62e2cf0d52aa6894e7cd317b5e7e184","url":"./tags/教程/index.html"},{"revision":"df3f72aa15808a0af28d3ff9e284fd18","url":"./tags/日记/index.html"},{"revision":"d9f6b952fea90b40545169c3c0afe8b2","url":"./tags/更换/index.html"},{"revision":"edda5feff3e7e1ab940b394473f5a9b4","url":"./tags/更新/index.html"},{"revision":"4c9d0ef8ff398c7e08539cd67d062e84","url":"./tags/更新了/index.html"},{"revision":"a8bef26f5d98c6db6470317df44ca85c","url":"./tags/服务器/index.html"},{"revision":"776eaace3ca1bcf9da7a1952d0fd8b7b","url":"./tags/测试/index.html"},{"revision":"20d71054abc98b6993647ca4ad259b9b","url":"./tags/百度统计/index.html"},{"revision":"b43b5fbba00ea00932af324b1450ea22","url":"./tags/看法/index.html"},{"revision":"835ae32c38d4d2bfd7521ef0b94d1039","url":"./tags/笔记/index.html"},{"revision":"b55a3fa456132ffcace7059c95c0b391","url":"./tags/系统/index.html"},{"revision":"c4c17b8dcdeae6454325bdcbb9c2b2ee","url":"./tags/系统安装/index.html"},{"revision":"cdeac1855a3b93c7a80ed53318362a8d","url":"./tags/网站/index.html"},{"revision":"12cb7238ff9e9f052268a1b3493dbb94","url":"./tags/虚拟机/index.html"},{"revision":"d1017b529c9d02119ba4c3bed6fddcc1","url":"./tags/袁隆平/index.html"},{"revision":"e5cf99657d4169a7012fcfe4dba1a7f1","url":"./tags/规则类怪谈/index.html"},{"revision":"acefa7cbe33540fe65965b6bed4f6a94","url":"./tags/迷你世界/index.html"},{"revision":"d751ddc86f2d7c445772695fd057b3f7","url":"./tags/通知/index.html"},{"revision":"18b59ade8542221b74f31e1b629b4632","url":"./tags/邮箱/index.html"},{"revision":"c768a23c96a81eca9fc96b1009395701","url":"./tags/随笔/index.html"},{"revision":"ca0b729da79f62f0df4ba80c90883334","url":"./twikoo.json"},{"revision":"e53a29bb410d282284276356972e99cf","url":"./update/index.html"},{"revision":"b91229de5e387087580f5801787abbbf","url":"./wsimg/1.css"},{"revision":"3896fa8ddd007e4683fd3db8cf07cfcf","url":"./wsimg/funnytitle.js"},{"revision":"151ad43939a0d1a895c56531a7db62c0","url":"./wsimg/index-1.js"},{"revision":"0002c2fe2a451f9a6e14aad293713967","url":"./wsimg/index1.css"},{"revision":"8c458854e9470cd7f6e3a86627dd18cf","url":"./wsimg/README.html"},{"revision":"4d0a33ed83c3e3f2e4fd5e8031f9c39b","url":"./y-re.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();
// 以下资源需要再开，不然可能缓存过多

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);



workbox.googleAnalytics.initialize();