#Nome do Aplicativo
Podcast Manager

###Descricao 
Um app aop estilo Netflix  , aonde possa centralizar diferentes eposodios do  podcast separados por virgula

###Dominio

Podcast feitos em video

###Features
- Listar os podcasts em sessões de categoria
    -[saude , fitness , mentalidade , humor]

-Filtrar eposiodios por nome de podcasts

#Como 
###Feature:
- Listar os podcasts em sessões de categoria

#Como vou implementar:
    Vou retornar em uma Api rest(json) o nome do Podast, nome do espisodio,imagem de capa,link
```js
[
{
    
    podcasName:"Flow",
    episode : "CBUM - Flow - #319",
    videoId:"",
    cover :"",
    link:"",
    category:["saude","bodybuilder"],
}
],
[
{
    
    podcasName:"Flow",
    episode : "Rubens Barrichello - #339",
    videoId:"",
    cover :"",
    link:"",
    category:["esporte","corrida"],
}
]
    
```


GET:retorna lista de episodios baseado em um parametro baseado na busca enviada pelo client do nome do podecast