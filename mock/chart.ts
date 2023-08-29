import Mock from 'mockjs';

export const CHARTS = {
    'charts/version': () => '1.0.0',
};

export const CHARTS_VISIDATA = {
    'charts/visitdata': () => {
        let month = 0;
        return Mock.mock({
            'data|25': [{
                'x|+1': function () {
                    month++;
                    return '2019-1-' + month;
                },
                'y': '@natural(10, 10000)'
            }],
            'errorCode': 0,
            'errorMsg': ''
        });
    },
    'charts/totalSalePrecent': () => Mock.Random.natural(10, 100),
    'charts/saleTrend': () => {
        let month = 0;
        return Mock.mock({
            'data|12': [{
                'x|+1': function () {
                    month++;
                    return month + '月';
                },
                'y': '@natural(10, 10000)'
            }],
            'errorCode': 0,
            'errorMsg': ''
        });
    }
};
