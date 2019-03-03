const MarkdownIt = require('markdown-it');
const path = require('path');
const fs = require('fs');
const glob = require("glob");
const cheerio = require('cheerio');
const request = require('request');
const fetchFavicon = require('@meltwater/fetch-favicon').fetchFavicon


const cwd = path.join(__dirname, '..');
const markdownIt = new MarkdownIt();

const mdFiles = glob.sync('**/README.md', {
  cwd,
  dot: true,
  ignore: ['node_modules/**']
});

mdFiles.forEach((file) => {
  const md = path.join(cwd, file);
  const mdContent = fs.readFileSync(md, { encoding: 'utf-8' });
  const htmlContent = markdownIt.render(mdContent);
  const $ = cheerio.load(htmlContent);
  const linkElements = $('a');
  // console.log(htmlContent);
  linkElements.each((i, el) => {
    // console.log($(el).attr('href'));
    const url = $(el).attr('href');
    if (url.indexOf('http') === 0) {    
      const urlParse = new URL(url);
      fetchFavicon(url).then((res) => {
        const saveIconPath = path.join(__dirname, '../assets/icons', urlParse.hostname + path.extname(new URL(res).pathname));
        if (!fs.existsSync(saveIconPath)) {
          try {
            request({
              url: res,
              encoding: null,
            }, (err, response, body) => {
              if (err) {
                console.log(res, '不存在');
                return;
              }
              if (response.statusCode == 200) {
                // [Node.js的那些坑（一）——多进程中图片下载有时为0字节 - 杜子兮@莲兮奈若何 - CSDN博客](https://blog.csdn.net/duzixi/article/details/53841162)
                fs.writeFileSync(saveIconPath,  body, { encoding:'binary' });
              } else {
                console.log(res, '不存在');
              }
              // console.log(response.statusCode);
            });
            // .pipe(fs.createWriteStream(saveIconPath))
          } catch (error) {
            console.log(res);
            console.log(saveIconPath + '出错');
            // console.log(error);
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  });
  

  
  // console.log(linkElements);
  // Object.entries(linkElements).forEach((element) => {
  //   // const href = element.attr('href');
  //   console.log(typeof element);
  // });
});

// console.log(mdFiles);  