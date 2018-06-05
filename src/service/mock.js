import md1 from '@/service/docs/1.md'
import md2 from '@/service/docs/2.md'
console.log(md1)

export default {
  "mapList": [
    {
      "title": "one",
      "desc": "this is the one article",
      "poster": "",
      "date": "2018-1-1",
      "id": "1",
      "content": md1.data
    }, {
      "title": "two",
      "desc": "this is the two article",
      "poster": "https://blog.benjavan.top/static/images/avatar.jpg",
      "date": "2018-1-2",
      "id": "2",
      "content": md2.data
    }, {
      "title": "第三篇",
      "desc": "这是第三篇文章",
      "poster": "https://blog.benjavan.top/static/images/avatar.jpg",
      "date": "2018-1-3",
      "id": "3"
    }
  ]
}