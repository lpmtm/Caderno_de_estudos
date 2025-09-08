# CONCEITOS HTML
**Olá!  
Este artigo tem o propósito de auxiliar no aprendizado e fixação de atributos da linguagem de marcação HTML!**  

### TAGS HEAD
```html
<title>Título aqui</title>
    Define o título da página.
<meta name = "description" content= "texto aqui">
    Define a descrição da página, é utilizada para buscadores web.   
<meta charset = "UTF - 8">
    Usada para a especificação para o uso de caracteres.  
<meta name = "robots" content= "noindex">
    Impede a página de aparecer em resultados de busca.    
<meta name = "robots" content= "nofollow">
    Impede a associação de links à página.    
<content = "noindex, nofollow">
    Quando usada juntas, a página não aparece e não é associada a links externos.   
<meta name = "viewport" content = "widht-device-widht, initial-scale=1.0">
    Garante que o conteúdo se ajuste a largura da telam independente do aparelho.  
 ```
### TAGS BÁSICAS BODY  
```html
<h1></h1> ... <h6></h6>
    Usada para criar títulos, sendo o h1 o principal e os demais subtítulos.    
<p>Texto aqui</p>
    Usada para criar parágrafos.    
<a href ="link_aqui"></a>
    Criação de link.     
<img src ="Imagem_aqui">
    Usada para exibir uma imagem.    
<div></div>
    Usada para agrupar elementos.    
<span>texto </span>
    Usada para estilizar palavras com CSS.  
<iframe src="link_aqui"></iframe>
    Usada para exibir conteúdo externo de uma página web dentro de outra página web.  
```

### LISTAS
```html
<ol> <li>Conteudo</li> <li>Conteudo 2</li>...</ol>  
    Criação de lista ordenada, a ordem é necessária.  
<ol reversed> ... <ol>  
    Lista ordenada de forma invertida.  
<ul> <li>Conteudo</li> <li>Conteudo 2</li>...</ul>  
    Criação de lista não ordenada, onde a ordem dos itens não possui relevância.
<dl> <dt>Titulo</dt> <dd>Conteudo</dd>...</dl>  
    Criação de lista de definição, onde tem um ou mais termos e sua respectiva definição.  
```

### TABELAS
```html
<table><tr>...</th></table>  
    Cria a tabela.  
<tr>Conteudo linha</tr> 
    Cria uma linha na tabela.
<th>Conteudo coluna cabeçalho</th>  
    Cria uma coluna do cabeçalho.            
<thead>...</thead>  
    Delimita o conteudo do cabeçalho.
<td>Conteudo coluna</td>  
    Cria uma coluna de conteudo.  
<tbody>...</tbody>  
    Delimita o corpo da tabela.
<tfoot>...</tfoot>
    Delimita o conteudo de rodapé da tabela.
<caption>Titulo tabela</caption>
    Define o titulo da tabela.
```
