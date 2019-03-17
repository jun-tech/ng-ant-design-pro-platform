import * as Mock from 'mockjs';

export const CHARTS = {
    'charts/version': () => '1.0.0',
};

export const CHARTS_VISIDATA = {
    count: 0,
    'charts/visitdata': () => {
        return Mock.mock({
            'data|25': [{
                'x|+1': function () {
                    CHARTS_VISIDATA.count++;
                    return '2019-01-0' + CHARTS_VISIDATA.count;
                },
                'y': '@natural(10, 10000)'
            }],
            'errorCode': 0,
            'errorMsg': ''
        });
    },
    'charts/totalSalePrecent': () => Mock.Random.natural(10, 100)
};
