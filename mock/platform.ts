import Mock from 'mockjs';

export const PLATFORM = {
  'auth/login': () => {
    return Mock.mock({
      'token': Math.floor(Math.random() * 1000),
      'userName': 'admin',
      'roles': ['role1', 'role2', 'role3']
    });
  },
  'auth/logout': () => {
  },
  'users': () => {
    Mock.mock({
      'x|1-50': [{
        'id|+1': 1,
        'userName|+1': 'aabc' + 1
      }]
    });
  },
};
