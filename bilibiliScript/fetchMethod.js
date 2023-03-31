//先登录，打开消息，点赞列表
import { get } from 'http';
import fetch from 'node-fetch';

let likeItemList = []
const publicCookie = "buvid3=7B0A5FF6-DF05-B3CD-15F7-5F8F5B39FEC116235infoc; _uuid=C39FAFAC-E1023-E5AA-7972-E2B5AB110DCAF16710infoc; buvid4=2BA527C1-8DA5-5013-71C0-8F702CB613E556686-022061409-WxVxTJD8UqAWPV98RDevVg==; blackside_state=0; i-wanna-go-back=-1; CURRENT_BLACKGAP=0; LIVE_BUVID=AUTO3916605347387736; b_nut=100; nostalgia_conf=-1; buvid_fp_plain=undefined; CURRENT_FNVAL=4048; rpdid=|(m)mkJ|)m|0J'uY~|Ju~ulm; hit-new-style-dyn=0; hit-dyn-v2=1; CURRENT_QUALITY=80; header_theme_version=CLOSE; home_feed_column=5; bp_video_offset_23300464=779124762967277600; bsource=search_bing; CURRENT_PID=50f41d20-cf8c-11ed-9598-7d260913de3c; innersign=0; fingerprint=290cdfbae8a8415dcf1aab268264ef47; b_ut=7; buvid_fp=290cdfbae8a8415dcf1aab268264ef47; is-2022-channel=1; SESSDATA=7ba0fe6a,1695811014,6f162*32; bili_jct=d9e2150c2b6f9755c4e80c5b7961663c; DedeUserID=23300464; DedeUserID__ckMd5=2226c7449050ee19; sid=p66uoeib; b_lsid=A76667DC_187373FE529; PVID=4"
const params = {
    is_end: false,
    id: '',
    time: '',
}

var request = {
    url: `https://api.bilibili.com/x/msgfeed/like?id=${params.id}&like_time=${params.time}&platform=web&build=0&mobi_app=web`, 
    props: {
        method: 'GET',
        credentials: 'include',
        headers:{
            cookie: publicCookie
        }
    }
};

const deleteParams = {
    tp: 0,
    id: '',
    build: 0,
    mobi_app: 'web',
    csrf_token: 'd9e2150c2b6f9755c4e80c5b7961663c',
    csrf: 'd9e2150c2b6f9755c4e80c5b7961663c',
}
const revertParams = (params) => {
    const urlEncodedData = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      urlEncodedData.append(key, value);
    }
    return urlEncodedData
}

var deletRequest = {
    url: 'https://api.bilibili.com/x/msgfeed/del', 
    props: {
        method: 'POST',
        credentials: 'include',
        body: null,
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            cookie: publicCookie
        }
    }
}
let requestCount = 1
const getLsit = async () => {

    let url = `https://api.bilibili.com/x/msgfeed/like?id=${params.id}&like_time=${params.time}&platform=web&build=0&mobi_app=web`;
 await fetch(url,request.props)
    .then(function(response) {
      if (response.ok) {
        return response.text();
      } else {
        console.log('请求失败。状态码：' + response.status);
      }
    })
    .then(function(data) {  
      const res = JSON.parse(data).data.total
      Object.assign(params,res.cursor)
      likeItemList.push(...res.items)
    })
    .catch(function(error) {
      console.log('请求错误：' + error);
    });
    console.log('第'+ requestCount + '页数据', 'is_end'+ ':' + params.is_end, "获取到点赞列表数:" + likeItemList.length)
    requestCount++
}
while(!params.is_end) {
    await getLsit()
}

const deletItem = async(id) => {
    deleteParams.id = id
    deletRequest.props.body = revertParams(deleteParams).toString()
    await fetch(deletRequest.url,deletRequest.props)
    .then(function(response) {
      if (response.ok) {
        return response.text();
      } else {
        console.log('请求失败。状态码：' + response.status);
      }
    })
    .then(function(data) {  
      console.log(data);
    })
    .catch(function(error) {
      console.log('请求错误：' + error);
    });
}
console.log("=======================开始删除=========================")
likeItemList.forEach((item,index) => {
    console.log("已删除数量:" + index, "剩余个数:"+likeItemList.length-index)
    deletItem(item.id)
})

