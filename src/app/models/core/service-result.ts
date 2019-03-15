export class ServiceResult {
    /**
     * 错误代码
     */
    errorCode = 0;

    /**
     * 错误信息
     */
    errorMsg: string;

    /**
     * 状态
     */
    status = 200;

    /**
     * 对象
     */
    data: {};

    /**
     * 总数
     */
    total: number;

    constructor() { }
}
