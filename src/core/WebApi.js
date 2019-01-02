import HttpHelper from "./HttpHelper";

/**
 * @description 网络接口类
 * @author shawn.li
 * @date 2019-01-02
 * @export
 * @class WebApi
 */
export default class WebApi {

    /**
     * @description 电影列表
     * @author shawn.li
     * @date 2019-01-02
     * @static
     * @param {*} offset
     * @param {*} pageCount
     * @returns 
     * @memberof WebApi
     */
    static getMList(offset, pageCount) {
        return HttpHelper.get(`http://api.douban.com/v2/movie/top250?start=${offset}&count=${pageCount}`);
    }
}