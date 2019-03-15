import * as Mock from 'mockjs';

export const PLATFORM = {
  'auth/login': () => {
    return Mock.mock({
      'token': Math.floor(Math.random() * 1000),
      'userName': 'admin',
      'roles': ['role1', 'role2', 'role3']
    });
  },
  'users': () => {
    Mock.mock('users', {
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'userName|+1': 'aabc' + 1
      }]
    });
  },
};
