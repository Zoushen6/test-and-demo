//先登录，打开消息，点赞列表
import fetch from 'node-fetch';

let likeItemList = []
const params = {
    is_end: false,
    id: '',
    like_time: '',
}

var request = {
    url: `https://api.bilibili.com/x/msgfeed/like?id=${params.id}&like_time=${params.like_time}&platform=web&build=0&mobi_app=web`, 
    props: {
        method: 'GET',
        credentials: 'include',
        headers:{
            cookie: "buvid3=7B0A5FF6-DF05-B3CD-15F7-5F8F5B39FEC116235infoc; _uuid=C39FAFAC-E1023-E5AA-7972-E2B5AB110DCAF16710infoc; buvid4=2BA527C1-8DA5-5013-71C0-8F702CB613E556686-022061409-WxVxTJD8UqAWPV98RDevVg%3D%3D; blackside_state=0; i-wanna-go-back=-1; CURRENT_BLACKGAP=0; LIVE_BUVID=AUTO3916605347387736; b_nut=100; nostalgia_conf=-1; buvid_fp_plain=undefined; SESSDATA=3c90120a%2C1681282295%2Ca2233%2Aa2; bili_jct=3bde2c27f37d10e6f59ad89a1cee4fb8; DedeUserID=23300464; DedeUserID__ckMd5=2226c7449050ee19; sid=5s983pix; CURRENT_FNVAL=4048; b_ut=5; rpdid=|(m)mkJ|)m|0J'uY~|Ju~ulm; hit-new-style-dyn=0; hit-dyn-v2=1; CURRENT_QUALITY=80; fingerprint=e760adc03fac660222afdbffe8b8126c; header_theme_version=CLOSE; buvid_fp=7134ca3a0111232cae78e021a2a0ff13; home_feed_column=5; bp_video_offset_23300464=779124762967277600; bsource=search_bing; innersign=1; CURRENT_PID=50f41d20-cf8c-11ed-9598-7d260913de3c; b_lsid=BA934E45_187369B0236; PVID=3"
        }
    }
};

const deleteParams = {
    tp: 0,
    id: '',
    build: 0,
    mobi_app: 'web',
    csrf_token: '3bde2c27f37d10e6f59ad89a1cee4fb8',
    csrf: '3bde2c27f37d10e6f59ad89a1cee4fb8',
}
var deletRequest = {
    url: 'https://api.bilibili.com/x/msgfeed/del', 
    props: {
        method: 'POST',
        credentials: 'include',
        body: deleteParams,
        headers:{
            cookie: "buvid3=7B0A5FF6-DF05-B3CD-15F7-5F8F5B39FEC116235infoc; _uuid=C39FAFAC-E1023-E5AA-7972-E2B5AB110DCAF16710infoc; buvid4=2BA527C1-8DA5-5013-71C0-8F702CB613E556686-022061409-WxVxTJD8UqAWPV98RDevVg%3D%3D; blackside_state=0; i-wanna-go-back=-1; CURRENT_BLACKGAP=0; LIVE_BUVID=AUTO3916605347387736; b_nut=100; nostalgia_conf=-1; buvid_fp_plain=undefined; SESSDATA=3c90120a%2C1681282295%2Ca2233%2Aa2; bili_jct=3bde2c27f37d10e6f59ad89a1cee4fb8; DedeUserID=23300464; DedeUserID__ckMd5=2226c7449050ee19; sid=5s983pix; CURRENT_FNVAL=4048; b_ut=5; rpdid=|(m)mkJ|)m|0J'uY~|Ju~ulm; hit-new-style-dyn=0; hit-dyn-v2=1; CURRENT_QUALITY=80; fingerprint=e760adc03fac660222afdbffe8b8126c; header_theme_version=CLOSE; buvid_fp=7134ca3a0111232cae78e021a2a0ff13; home_feed_column=5; bp_video_offset_23300464=779124762967277600; bsource=search_bing; innersign=1; CURRENT_PID=50f41d20-cf8c-11ed-9598-7d260913de3c; b_lsid=BA934E45_187369B0236; PVID=3"
        }
    }
}
let requestCount = 1
const getList = async () => {
    console.log('第'+ requestCount + '页数据', 'is_end'+ ':' + params.is_end )
 await fetch(request.url,request.props)
    .then(function(response) {
      if (response.ok) {
        return response.text();
      } else {
        console.log('请求失败。状态码：' + response.status);
      }
    })
    .then(function(data) {  
      const res = JSON.parse(data).data.total
      console.log(res);
      Object.assign(params,res.cursor)
      likeItemList.push(...res.items)
      if(!params.is_end) {
        getList()
      }
    })
    .catch(function(error) {
      console.log('请求错误：' + error);
    });
    console.log(likeItemList);
}
// await getList()

const deletItem = () => {

}
// likeItemList.forEach(item => {

// })

