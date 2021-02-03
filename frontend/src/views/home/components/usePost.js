export const postCategory = [
  {
    name: '默认',
    value: 'default',
  },
  {
    name: '讨论',
    value: 'discuss',
  },
  {
    name: '提问',
    value: 'question',
  },
  {
    name: '分享',
    value: 'share',
  },
  {
    name: '公告',
    value: 'notice',
  },
]
// 等待后端写完接口
export function getPostList(category) {
  let postList = {
    records: [
      {
        id: 36,
        uid: 4,
        title: 'wly-test4',
        content:
          '![describeType.jpg](http://fanyibar.top:8086/archive/jpg/1608557417153describeType.jpg)\n\n![2.jpg](http://fanyibar.top:8086/archive/jpg/16085574208232.jpg)',
        tags: null,
        category: 'discuss',
        hot: 0,
        status: null,
        pv: 16,
        likes: 0,
        comments: 2,
        collections: 0,
        attachment: 'http://fanyibar.top:8086/archive/jpg/16085574208232.jpg',
        lastReply: null,
        gmtCreate: '2020-12-21T21:32:21',
        gmtModified: '2021-02-01T17:31:28',
        avatar: 'http://res7.fanyibar.top/1601199163958-cat.jpg',
        nickname: 'wlyStar',
      },
      {
        id: 29,
        uid: 9,
        title: '我去',
        content: '我',
        tags: null,
        category: 'discuss',
        hot: 0,
        status: null,
        pv: 15,
        likes: 0,
        comments: 1,
        collections: 0,
        attachment: null,
        lastReply: null,
        gmtCreate: '2020-10-15T16:27:01',
        gmtModified: '2020-11-16T19:06:56',
        avatar: '1',
        nickname: '123456',
      },
      {
        id: 18,
        uid: 4,
        title: '关于口音和发音的一些看法',
        content:
          '口音应该是发音的一部分。\n\n口音就是带有地域特征的发音习惯。\n当你听到一个人的口音，你就能明白他是哪里人。\n对于母语人士来讲，口音是天生存在的。小孩子从零学语言的时候听到的就是这种口音，学会了肯定也是这种口音。\n\n对于非母语的学习者来讲，自己已经具备了母语口音，会习惯性的无意识的用自己母语的口音来讲外语，关于这个问题的讨论，仁者见仁，智者见智。\n\n但是我的观点是要尽量减少其他语言口音对英语发音的影响。\n\n![image.png](http://res7.fanyibar.top/1601219070987-image.png)',
        tags: null,
        category: 'discuss',
        hot: 0,
        status: null,
        pv: 9,
        likes: 0,
        comments: 0,
        collections: 0,
        attachment: null,
        lastReply: null,
        gmtCreate: '2020-09-27T23:05:33',
        gmtModified: '2020-12-15T15:19:04',
        avatar: 'http://res7.fanyibar.top/1601199163958-cat.jpg',
        nickname: 'wlyStar',
      },
      {
        id: 17,
        uid: 4,
        title: '关于英语考级有没有什么软件推荐',
        content: '关于英语考级有没有什么软件推荐，本人英语不好​:cry:​',
        tags: null,
        category: 'discuss',
        hot: 0,
        status: null,
        pv: 12,
        likes: 0,
        comments: 1,
        collections: 0,
        attachment: null,
        lastReply: null,
        gmtCreate: '2020-09-27T21:25:51',
        gmtModified: '2020-12-15T15:56:43',
        avatar: 'http://res7.fanyibar.top/1601199163958-cat.jpg',
        nickname: 'wlyStar',
      },
    ],
    total: 4,
    size: 7,
    current: 1,
    pages: 1,
  }
  return postList
}
