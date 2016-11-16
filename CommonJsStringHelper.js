/**
*
* @descrition:常用字符串处理助类
* @author: blc整理
* @data: 2016-02-04
* 
*/

var StringHelper = {


    /**
    * 单词首字母大写
    * 将单个字符串的首字母大写
    */
    fistLetterUpper: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
    *
    * @descrition: 对字符串进行截取，包括普通字符和中文字符
    * @param : str ->待截取的字符串
    * @param : len ->要截取的长度
    * 
    * 比如cutstr('hello',2)->he...  cutstr("您好呀",4)->您好...
    * 优先选择后台进行字符串截取，后css截取，最后js截取
    */
    cutstr: function(str, len) {
        var temp,
            icount = 0,
            patrn = /[^\x00-\xff]/g, //中文字符匹配
            strre = "";

        for (var k = 0; k < str.length; k++) {
            if (icount < len) {
                temp = str.substr(k, 1);
                if (temp.match(patrn) == null) {
                    icount = icount + 1;
                } else {
                    icount = icount + 2;
                }
                strre += temp;
            } else {
                break;
            }
        }
        return strre + "...";
    },

    /**
    * @function:generateRandomAlphaNum->生成随机的字符串
    * @param:len->生存随机字符串的长度
    * @tdd->IE6-9 chrome Firefox通过测试
    * 
    */
    generateRandomAlphaNum: function(len) {
        var rdmString = "";
        //toSting接受的参数表示进制，默认为10进制。36进制为0-9 a-z
        for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
        return rdmString.substr(0, len);
    },

    /*
    * @function: 通过a标签解析url标签
    * @param:url  url参数是字符串，解析的目标
      通过IE6-9 chrome  Firefox测试
    *
    */
    parseURL: function(url) {
        //创建一个a标签
        var a = document.createElement('a');
        //将url赋值给标签的href属性。
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(':', ''), //协议
            host: a.hostname, //主机名称
            port: a.port, //端口
            query: a.search, //查询字符串
            params: (function() { //查询参数
                var ret = {},
                    seg = a.search.replace(/^\?/, '').split('&'),
                    len = seg.length,
                    i = 0,
                    s;
                for (; i < len; i++) {
                    if (!seg[i]) {
                        continue;
                    }
                    s = seg[i].split('=');
                    ret[s[0]] = s[1];
                }
                return ret;
            })(),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1], //文件名
            hash: a.hash.replace('#', ''), //哈希参数
            path: a.pathname.replace(/^([^\/])/, '/$1'), //路径
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1], //相对路径
            segments: a.pathname.replace(/^\//, '').split('/') //路径片段
        };
    }


};


/**
*
* @desccrition: 对String类型去除空格的拓展
* @dir : 被去除空格所在的位置
* @test: ie6-9 chrome firefox
*/
String.prototype.trim = function(dir) {
    switch (dir) {
    case 0: //去左边的空格
        return this.replace(/(^\s*)/g, '');
    case 1: //去右边的空格
        return this.replace(/(\s*$)/g, '');
    case 2: //去掉所有的空格
        return this.replace(/(\s*)/g, '');
    default: //去掉两边的空格
        return this.replace(/(^\s*)|(\s*$)/g, '');
    }
};