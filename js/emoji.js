//generate emoji data
/*
 这里写了每一页emoji的文字以及对应的图片，用于后面生成数据
 */
function wechat_emoji(element,text_element,handler,imgurlbase){
    this.element = element;
    this.text_element = text_element;
    this.handler = handler;
    this.imgurlbase = imgurlbase||"./img/";
    this.generate();
}
wechat_emoji.prototype.emoji = {
    "1":{
        page:1,
        content:[
            {name:'/微笑',src:'1.png'},{name:'/撇嘴',src:'2.png'},
            {name:'/色',src:'3.png'},{name:'/发呆',src:'4.png'},
            {name:'/得意',src:'5.png'},{name:'/流泪',src:'6.png'},
            {name:'/害羞',src:'7.png'},{name:'/闭嘴',src:'8.png'},
            {name:'/睡',src:'9.png'},{name:'/大哭',src:'10.png'},
            {name:'/尴尬',src:'11.png'},{name:'/发怒',src:'12.png'},
            {name:'/调皮',src:'13.png'},{name:'/呲牙',src:'14.png'},
            {name:'/惊讶',src:'15.png'},{name:'/难过',src:'16.png'},
            {name:'/酷',src:'17.png'},{name:'/冷汗',src:'18.png'},
            {name:'/抓狂',src:'19.png'},{name:'/吐',src:'20.png'},
            {name:'/偷笑',src:'21.png'},{name:'/可爱',src:'22.png'},
            {name:'/白眼',src:'23.png'},{name:'/傲慢',src:'24.png'},
            {name:'/饥饿',src:'25.png'},{name:'/困',src:'26.png'},
            {name:'/惊恐',src:'27.png'},{name:'/流汗',src:'28.png'},
            {name:'/憨笑',src:'29.png'},{name:'/大兵',src:'30.png'},
            {name:'/奋斗',src:'31.png'},{name:'/咒骂',src:'32.png'},
            {name:'/删除',src:'del.png'}
        ]
    },
    "2":{
        page:2,
        content:[
            {name:'/疑问',src:'33.png'},{name:'/嘘',src:'34.png'},
            {name:'/晕',src:'35.png'},{name:'/折磨',src:'36.png'},
            {name:'/衰',src:'37.png'},{name:'/骷髅',src:'38.png'},
            {name:'/敲打',src:'39.png'},{name:'/再见',src:'40.png'},
            {name:'/擦汗',src:'41.png'},{name:'/抠鼻',src:'42.png'},
            {name:'/鼓掌',src:'43.png'},{name:'/糗大了',src:'44.png'},
            {name:'/坏笑',src:'45.png'},{name:'/左哼哼',src:'46.png'},
            {name:'/右哼哼',src:'47.png'},{name:'/哈欠',src:'48.png'},
            {name:'/鄙视',src:'49.png'},{name:'/委屈',src:'50.png'},
            {name:'/快哭了',src:'51.png'},{name:'/阴险',src:'52.png'},
            {name:'/亲亲',src:'53.png'},{name:'/吓',src:'54.png'},
            {name:'/可怜',src:'55.png'},{name:'/菜刀',src:'56.png'},
            {name:'/西瓜',src:'57.png'},{name:'/啤酒',src:'58.png'},
            {name:'/篮球',src:'59.png'},{name:'/乒乓',src:'60.png'},
            {name:'/咖啡',src:'61.png'},{name:'/饭',src:'62.png'},
            {name:'/猪头',src:'63.png'},{name:'/玫瑰',src:'64.png'},
            {name:'/删除',src:'del.png'}
        ]
    },
    "3":{
        page:3,
        content:[
            {name:'/凋谢',src:'65.png'},{name:'/示爱',src:'66.png'},
            {name:'/爱心',src:'67.png'},{name:'/心碎',src:'68.png'},
            {name:'/蛋糕',src:'69.png'},{name:'/闪电',src:'70.png'},
            {name:'/炸弹',src:'71.png'},{name:'/刀',src:'72.png'},
            {name:'/足球',src:'73.png'},{name:'/瓢虫',src:'74.png'},
            {name:'/便便',src:'75.png'},{name:'/月亮',src:'76.png'},
            {name:'/太阳',src:'77.png'},{name:'/礼物',src:'78.png'},
            {name:'/拥抱',src:'79.png'},{name:'/强',src:'80.png'},
            {name:'/弱',src:'81.png'},{name:'/握手',src:'82.png'},
            {name:'/胜利',src:'83.png'},{name:'/抱拳',src:'84.png'},
            {name:'/勾引',src:'85.png'},{name:'/拳头',src:'86.png'},
            {name:'/差劲',src:'87.png'},{name:'/爱你',src:'88.png'},
            {name:'/NO',src:'89.png'},{name:'/OK',src:'90.png'},
            {name:'/爱情',src:'91.png'},{name:'/飞吻',src:'92.png'},
            {name:'/跳跳',src:'93.png'},{name:'/发抖',src:'94.png'},
            {name:'/怄火',src:'95.png'},{name:'/转圈',src:'96.png'},
            {name:'/删除',src:'del.png'}
        ]
    },
    "4":{
        page:4,
        content:[
            {name:'/磕头',src:'97.png'},{name:'/回头',src:'98.png'},
            {name:'/跳绳',src:'99.png'},{name:'/挥手',src:'100.png'},
            {name:'/激动',src:'101.png'},{name:'/街舞',src:'102.png'},
            {name:'/献吻',src:'103.png'},{name:'/左太极',src:'104.png'},
            {name:'/右太极',src:'105.png'},{name:'/删除',src:'del.png'}
        ]
    }
};

//生成emoji
wechat_emoji.prototype.generate = function(){
    var self = this;
    //生产emoji容器
    var container = '<div class="swiper-container"><div class="swiper-wrapper"></div><div class="swiper-pagination"></div></div>';
    $(this.element).html(container);
    var emoji = this.emoji;
    //按照每一页数据生成emoji
    for (var page_index in emoji) {
        var current_page = page_index;	//当前行数
        var line_size = 11;	//一行最多11个表情
        var page_content = emoji[current_page]['content'];	//当前表情页需要输出的表情
        var html = "";
        var temp_html = "";
        var flag = false;	//是否此次循环满了 line_size 个

        // 一行满了line_size之后,需要在生成的html两边加上<div></div>
        for(var i in page_content){
            if((parseInt(i)+1)%line_size != 0){
                temp_html += '<img data-name="'+page_content[i]['name']+'" src="' + this.imgurlbase + page_content[i]['src']+'">';
                flag = false;
            }else{
                temp_html += '<img data-name="'+page_content[i]['name']+'" src="' + this.imgurlbase + page_content[i]['src']+'">';
                html += '<div>'+temp_html+'</div>';
                temp_html = "";
                flag = true;
            }
        }
        //循环完最后，如果还有在两边没有加<div></div>，也就是最后一行不足 line_size， 则加上<div></div>
        if(flag == false){
            html += '<div>'+temp_html+'</div>';
            temp_html = "";
        }

        //将每页生成的emoji html加到总的emoji中
        var page = '<div class="swiper-slide">'+ html +'</div>';
        var pages = $(this.element + " .swiper-wrapper").html();
        $(this.element + " .swiper-wrapper").html(pages + page);
    }

    $(this.element + " .swiper-wrapper img").on('click',function() {
        //替换text标签中内容的逻辑
        var emoji_name = $(this).attr("data-name");
        var $text_element = $(self.text_element);
        var emoji = self.emoji;
        var content = $text_element.val();

        if(emoji_name == "/删除"){
            var replace_flag = false;   //时候删除一次
            for (var page_index in emoji) {
                if(replace_flag == true){
                    break;
                }
                var current_page = page_index;	//当前行数
                var page_content = emoji[current_page]['content'];	//当前表情页需要输出的表情
                for (var i in page_content) {
                    var name = page_content[i]['name'];
                    if(content.search(new RegExp(name+'$'))!=-1){
                        //找到了最后一个是表情则删除一个表情
                        content = content.replace(new RegExp(name+'$'),"");
                        $text_element.val(content);
                        replace_flag = true;    //整个循环中只替换一次
                        break;
                    }
                }
            }

            //如果一次都没有替换 则删除一个字符
            if(replace_flag == false){
                content = content.substr(0,content.length-1);
                $text_element.val(content);
            }
        }else{
            $text_element.val($text_element.val() + emoji_name);
        }
        //如果写了回调则调用回调;
        self.handler&&self.handler(emoji_name);
    });

    /*
     设置swiper js
     */
    var mySwiper = new Swiper(this.element + ' .swiper-container',{
        loop: false,
        pagination : '.swiper-pagination',
    });
}

/**
 * 将输入的内容替换成图片再显示出来
 */
wechat_emoji.prototype.interpreter = function(content) {
    var emoji = this.emoji;
    for (var page_index in emoji) {
        var current_page = page_index;	//当前行数
        var page_content = emoji[current_page]['content'];	//当前表情页需要输出的表情
        for (var i in page_content) {
            content = content.replace(new RegExp(page_content[i]['name'], "gm"), '<img src="' + this.imgurlbase + page_content[i]['src'] + '">');
            if (content.search('/') == -1) return content;   //在没有需要替换的则退出
        }
    }
    return content;
}