import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 10, duration: '5m' }

export default function main() {
  let response

  group('page_1 - https://sharechat.com/', function () {
    response = http.post(
      'https://apis.sharechat.com/bucketFeed',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"b":2181}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options('https://apis.sharechat.com/bucketFeed', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers':
          'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
        origin: 'https://sharechat.com',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.post(
      'https://apis.sharechat.com/requestType66',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"key":"2181","bucketId":2181,"t":3}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options('https://apis.sharechat.com/requestType66', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers':
          'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
        origin: 'https://sharechat.com',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })
    sleep(1.4)

    response = http.post(
      'https://apis.sharechat.com/requestType27',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"requestArray":[{"p":"3579646144","t":1645564495586,"pi":1645564495586,"postType":"image","viewCount":"613","lang":"Telugu","r":"web","client":"PWA"}],"batchRequest":1}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.post(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":[{"eventName":"ADD_TO_HOME_SCREEN","time":1645564495018,"client":"PWA","os_name":"linux","browser":"Chrome 96","browser_name":"Chrome","ip":"110.235.236.4","url":"/","app_version":"2.5.2","incognito":false,"installed":false,"action":"trigger","uuid":"9a19044f-01c9-4bcd-ba1a-8f7019034b41","user_id":null,"temp_user_id":"1232826088"},{"eventName":"FEED_OPEN","time":1645564495233,"client":"PWA","os_name":"linux","browser":"Chrome 96","browser_name":"Chrome","ip":"110.235.236.4","url":"/topic/sharechat%20sports%20championship-telugu-2181","app_version":"2.5.2","incognito":false,"installed":false,"type":"homePageTabsharechat%20sports%20championship","language":"Telugu","uuid":"9a19044f-01c9-4bcd-ba1a-8f7019034b41","user_id":null,"temp_user_id":"1232826088"}]}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
          origin: 'https://sharechat.com',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(5.6)

    response = http.post(
      'https://apis.sharechat.com/bucketFeed',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"b":2618}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.post(
      'https://apis.sharechat.com/requestType66',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"key":"2618","bucketId":2618,"t":3}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )
    sleep(2.4)

    response = http.post(
      'https://apis.sharechat.com/requestType27',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"requestArray":[{"p":"7353533144","t":1645564497217,"pi":1645564497217,"postType":"video","viewCount":"743","lang":"Telugu","r":"web","client":"PWA"},{"p":"1687132144","t":1645564498484,"pi":1645564498484,"postType":"video","viewCount":"1248","lang":"Telugu","r":"web","client":"PWA"}],"batchRequest":1}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.post(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":[{"eventName":"FEED_OPEN","time":1645564502253,"client":"PWA","os_name":"linux","browser":"Chrome 96","browser_name":"Chrome","ip":"110.235.236.4","url":"/topic/sc%20commerce%20carnival-telugu-2618","app_version":"2.5.2","incognito":false,"installed":false,"type":"homePageTabsc%20commerce%20carnival","language":"Telugu","uuid":"9a19044f-01c9-4bcd-ba1a-8f7019034b41","user_id":null,"temp_user_id":"1232826088"}]}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
          origin: 'https://sharechat.com',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(2.2)

    response = http.post(
      'https://apis.sharechat.com/requestType66',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"key":"1778","bucketId":1778,"t":3}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )
    sleep(5.8)

    response = http.post(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":[{"eventName":"FEED_OPEN","time":1645564506858,"client":"PWA","os_name":"linux","browser":"Chrome 96","browser_name":"Chrome","ip":"110.235.236.4","url":"/topic/cricket-telugu-1778","app_version":"2.5.2","incognito":false,"installed":false,"type":"homePageTabcricket","language":"Telugu","uuid":"9a19044f-01c9-4bcd-ba1a-8f7019034b41","user_id":null,"temp_user_id":"1232826088"},{"eventName":"FEED_OPEN","time":1645564510870,"client":"PWA","os_name":"linux","browser":"Chrome 96","browser_name":"Chrome","ip":"110.235.236.4","url":"/topic/cricket-telugu-1778","app_version":"2.5.2","incognito":false,"installed":false,"type":"tagTrendingFeed","language":"Telugu","uuid":"9a19044f-01c9-4bcd-ba1a-8f7019034b41","user_id":null,"temp_user_id":"1232826088"}]}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
          origin: 'https://sharechat.com',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(8)

    response = http.post(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":[{"eventName":"SIDEBAR_OPEN","time":1645564514699,"client":"PWA","os_name":"linux","browser":"Chrome 96","browser_name":"Chrome","ip":"110.235.236.4","url":"/topic/cricket-telugu-1778","app_version":"2.5.2","incognito":false,"installed":false,"uuid":"9a19044f-01c9-4bcd-ba1a-8f7019034b41","user_id":null,"temp_user_id":"1232826088"}]}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
          origin: 'https://sharechat.com',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(3.6)

    response = http.post(
      'https://apis.sharechat.com/tags/v1.0.0/trendingTags',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"lang":"Telugu","count":10,"liveStatus":1}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.get(
      'https://apis.sharechat.com/tag-service/v2.0.0/tagSuggestions?lang=Telugu&referrer=pwa',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options(
      'https://apis.sharechat.com/tag-service/v2.0.0/tagSuggestions?lang=Telugu&referrer=pwa',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers':
            'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
          origin: 'https://sharechat.com',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.post(
      'https://sharechat.com/rss',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"lang":"Telugu","limit":5}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.post(
      'https://apis.sharechat.com/tags/v1.0.0/trendingTags',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"lang":"Telugu","count":10,"liveStatus":1}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.get(
      'https://apis.sharechat.com/tag-service/v2.0.0/tagSuggestions?lang=Telugu&referrer=pwa',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options(
      'https://apis.sharechat.com/tag-service/v2.0.0/tagSuggestions?lang=Telugu&referrer=pwa',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers':
            'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
          origin: 'https://sharechat.com',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(2.6)

    response = http.post(
      'https://apis.sharechat.com/getViralPostsSeo',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"th":"3Dqk1Z"}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options('https://apis.sharechat.com/getViralPostsSeo', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers':
          'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
        origin: 'https://sharechat.com',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.get(
      'https://apis.sharechat.com/explore-service/v1.0.0/tag?tagHash=3Dqk1Z&groupTag=true',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options(
      'https://apis.sharechat.com/explore-service/v1.0.0/tag?tagHash=3Dqk1Z&groupTag=true',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers':
            'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
          origin: 'https://sharechat.com',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.post(
      'https://sharechat.com/getTagStatus',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"tagHash":"3Dqk1Z"}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )
    sleep(1.8)

    response = http.post(
      'https://apis.sharechat.com/requestType27',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"requestArray":[{"p":"5352658144","t":1645564527277,"pi":1645564527277,"postType":"image","viewCount":"766","lang":"Telugu","r":"web","client":"PWA"},{"p":"5824349144","t":1645564527279,"pi":1645564527279,"postType":"link","viewCount":"638","lang":"Telugu","r":"web","client":"PWA"}],"batchRequest":1}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.post(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":[{"eventName":"TRENDS_PAGE_OPEN","time":1645564524306,"client":"PWA","os_name":"linux","browser":"Chrome 96","browser_name":"Chrome","ip":"110.235.236.4","url":"/trends","app_version":"2.5.2","incognito":false,"installed":false,"referrer":"sidebar","uuid":"9a19044f-01c9-4bcd-ba1a-8f7019034b41","user_id":null,"temp_user_id":"1232826088"},{"eventName":"FEED_OPEN","time":1645564526891,"client":"PWA","os_name":"linux","browser":"Chrome 96","browser_name":"Chrome","ip":"110.235.236.4","url":"/tag/3Dqk1Z","app_version":"2.5.2","incognito":false,"installed":false,"type":"tagTrendingFeed","language":"Telugu","uuid":"9a19044f-01c9-4bcd-ba1a-8f7019034b41","user_id":null,"temp_user_id":"1232826088"},{"eventName":"TAG_OPEN","time":1645564526965,"client":"PWA","os_name":"linux","browser":"Chrome 96","browser_name":"Chrome","ip":"110.235.236.4","url":"/tag/3Dqk1Z","app_version":"2.5.2","incognito":false,"installed":false,"tag_id":"14603250","tag_name":"🗞Feb 23rd ఒమిక్రాన్-కరోనా అప్‌డేట్స్🦠","referrer":"trendsPage","uuid":"9a19044f-01c9-4bcd-ba1a-8f7019034b41","user_id":null,"temp_user_id":"1232826088"}]}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
          origin: 'https://sharechat.com',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(4.3)

    response = http.post(
      'https://apis.sharechat.com/getViralPostsSeo',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"th":"3Dqk1Z","nextOffsetHash":"kdn0"}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options('https://apis.sharechat.com/getViralPostsSeo', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers':
          'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
        origin: 'https://sharechat.com',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })
    sleep(3.7)

    response = http.post(
      'https://apis.sharechat.com/requestType27',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"requestArray":[{"p":"3600678144","t":1645564529203,"pi":1645564529203,"postType":"image","viewCount":"8565","lang":"Telugu","r":"web","client":"PWA"},{"p":"5161898144","t":1645564530540,"pi":1645564530540,"postType":"image","viewCount":"848","lang":"Telugu","r":"web","client":"PWA"},{"p":"9467778144","t":1645564531304,"pi":1645564531304,"postType":"image","viewCount":"1285","lang":"Telugu","r":"web","client":"PWA"},{"p":"9085778144","t":1645564533309,"pi":1645564533309,"postType":"image","viewCount":"829","lang":"Telugu","r":"web","client":"PWA"},{"p":"3702678144","t":1645564533454,"pi":1645564533454,"postType":"image","viewCount":"1492","lang":"Telugu","r":"web","client":"PWA"},{"p":"3610628144","t":1645564534188,"pi":1645564534188,"postType":"image","viewCount":"983","lang":"Telugu","r":"web","client":"PWA"}],"batchRequest":1}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )
    sleep(2.9)

    response = http.post(
      'https://apis.sharechat.com/requestType25',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"th":"3Dqk1Z","s":9999999999}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options('https://apis.sharechat.com/requestType25', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers':
          'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
        origin: 'https://sharechat.com',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })
    sleep(5.1)

    response = http.post(
      'https://apis.sharechat.com/requestType27',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":{"requestArray":[{"p":"7713359144","t":1645564539793,"pi":1645564539793,"postType":"image","lang":"Telugu","r":"web","client":"PWA"},{"p":"1810849144","t":1645564541221,"pi":1645564541221,"postType":"image","viewCount":"190","lang":"Telugu","r":"web","client":"PWA"}],"batchRequest":1}}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.post(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      '{"bn":"broker3","userId":1232826088,"passCode":"76db9a55e499c92cc6f5","client":"web","message":[{"eventName":"FEED_OPEN","time":1645564539574,"client":"PWA","os_name":"linux","browser":"Chrome 96","browser_name":"Chrome","ip":"110.235.236.4","url":"/tag/3Dqk1Z/fresh","app_version":"2.5.2","incognito":false,"installed":false,"type":"tagFreshFeed","language":"Telugu","uuid":"9a19044f-01c9-4bcd-ba1a-8f7019034b41","user_id":null,"temp_user_id":"1232826088"}]}',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
          'accept-language': 'en',
          'sec-ch-ua-mobile': '?0',
          'app-version': '4911',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-sharechat-userid': '1232826088',
          'x-sharechat-authorized-userid': '1232826088',
          'x-sharechat-secret': '76db9a55e499c92cc6f5',
          'sec-ch-ua-platform': '"Linux"',
          origin: 'https://sharechat.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
        },
      }
    )

    response = http.options(
      'https://apis.sharechat.com/event-tracking-service/v1.0.0/sendPWAEvents',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'app-version,content-type,x-sharechat-authorized-userid,x-sharechat-secret,x-sharechat-userid',
          origin: 'https://sharechat.com',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
  })
}
