## 引入
```go
import "webmis/library"
```

## 单文件
```go
(&library.Upload{}).File(
  c *gin.Context,
  file *multipart.FileHeader,
  map[string]interface{}{
    "path":     "upload/",      //上传目录
    "filename": "",             //文件名
    "bind":     []string{},     //后缀
  },
)
```
- bind: "svg", "jpg", "jpeg", "png", "gif", "mov", "mp4", "wav", "mp3"

## Base64
```go
(&library.Upload{}).Base64(map[string]interface{}{
  "param":    "upload/", //上传目录
  "base64":   "",        //文件内容
  "filename": "",        //文件名
  "ext":      "png",     //后缀
})
```

## 图片回收
```go
(&library.Upload{}).HtmlImgClear(html string, dir string)
```

## 文件名-生成
```go
(&library.Upload{}).GetFileName()
```

## 图片地址-获取HTML
```go
(&library.Upload{}).GetHtmlFile(html string)
```
