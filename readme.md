### Exemplo raspagem de dados


Ainda está no começo, a intenção é fazer a raspagem de dados de um site do governo para ser mais expecifico,

url: "https://www.al.sp.gov.br/deputado/lista/"

```javascript
function raspagem(req, res, next) {
  url = 'https://www.al.sp.gov.br/deputado/lista/'
  request(url, function(error, response, html) {
    res.send(html)
  })
}
```

depois iremos mudar para buscar somente o nome do Deputado , a área de atuação , a base eleitoral e o partido e fazer um grafico com cada partido