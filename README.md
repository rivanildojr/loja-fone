# HTML5

É uma linguagem de marcação que tem as seguintes responsibilidades:

- Conteúdo;
- Semântico (tags);
- Estrutura

- `!DOCTYPE` - Identificador da mais nova versão do html. Recebe o atributo _html_.

```
<!DOCTYPE html>
```

- `html` - Tag principal para guardar todo contéudo.

- `head` - Tag para compor toda a parte de configuração do sistema

- `meta` - Tag de configuração do sistema. Pode receber alguns atributos com: `charset`(serve para identificar o codigo de configuração das palavras, como por exemplo o _utf-8_).

- `title` - Tag para colocar o titulo do site, na barra de titulo na janela.

- `body` - Tag para agrupar todo o contéudo que será mostrado no navegador

- `header` - Tag para agrupar o cabeçalho do site

- `h1` - Heading 1 - 6
  Usamos ele quando queremos definir títulos

- `nav` - Tag para agrupar a navegação principal do site

- `a` - Link (a - anchor)
  Usamos ela para definir a navegação do usuário. Se você tem um texto que você quer que o usuário clique e ele vá para outro lugar, você pode usar essa tag junto com o atributo `href`. Exemplo de um `a` que o usuário é direcionado para o site da collabcode.training:

```
<a href="http://collabcode.training">CollabCode.Training</a>
```

- `div` - Tag para agrupar um ou varios elementos, mas ela não contem semântica e é por padrão `dispaly: block`

- `button` - Tag para criar um botão

- `dt` (description list) - Cria uma lista de descrição, pode conter o `dt` (description title) - para colocar o título da descrição e a `dd` (define description) - para colocar os dados.

```
<dl>
   <dt></dt>
   <dd></dd>
   ...
</dl>
```

- `input` - Tag para atribuir dados ao sistema

```
<input class="name" type="name" placeholder="Name">
```

# CSS

É uma linguagem de estilo, isso que dizer que ela tem as seguintes responsibilidade:

- Visual

## Propriedades

* `background-color`:
  - Define a cor de fundo do elemento

 * `font-size`:
   - Define o tamanho do elemento(Texto)

  * `font-family`:
    - Define a fonte do elemento(Texto)

* `Color`:
   - Define a cor do elemento(Texto)

* `text-decoration:`
  - Define a decoração do elemento(como o underline no link, por exemplo)

* `float`:
   - Cria um novo contexto
  - Nunca esconde um contéudo
  - O contéudo define a largura e altura do elemeno
  - O pai ignora o elemento

* `overflow:hidden`:
   - Esconde os elementos
   - Em caso de elementos com a propriedade `float`, ela recalcula o elemento, considerando os elementos em outro contexto(flutuando), caso o elemento com a propriedade `overflow` não tenha definido altura e largura.

* `margin`:
  - Define o respiro externos dos elementos (a distância de um elemento para o outro).
  - Pode ter formatos de valores como:
      - `top`, `right`, `bottom` e `left`. Ou
      - `top`, `right/left`, `bottom`. Ou
      - `top`/`bottom`, `right/left` . Ou
      - `top`-`bottom`-`right-left`.

* `padding`:
  - Define o respiro interno dos elementos (a distância de elementos dentro de outro elemento)
  - Pode ter formatos de valores como:
      - `top`, `right`, `bottom` e `left`. Ou
      - `top`, `right/left`, `bottom`. Ou
      - `top`/`bottom`, `right/left` . Ou
      - `top`-`bottom`-`right-left`.

* `inherit`:
  - Esse atributo faz com que o elemento herde a propriedade do seu pai

* `width`:
   - Define a Largura do elemento
   - Quando o valor é dado em %, referência o Pai do elemento

* `height`:
   - Define a Altura do elemento
   - Quando o valor é dado em %, referência o Pai do elemento

* `line-height`:
   - Define o tamanho da linha do elemento
   - Caso o elemento só tenha uma linha, em caso de button, por exemplo, é uma boa pratica colocar o tamanho da linha como o tamanho do altura, para pode centralizar o texto nesse elemento.

* `text-align`:
   - Define a posição do texto em um elemento

* `text-transform`:
   - Modifica o texto, podendo alterar por exemplo e Maiusculo e minusculo

* `transform`:
   - Referência o proprio elemento
   - Define o deslocamento do elemento no eixo "X" e no "Y"
   - atributos: 
      - `translateX`: move no eixo "X"
      - `translateY`: move no eixo "Y"
      - `translate`: move nos dois eixos.

* `vertical-align`:
   - Só é atribuito para elementos que estão com o `display: inline-block`.
   - Alinha o texto do elemento com o outro elemento ao lado.

* `border`: 
   - Define a borda do elemento
   - pode ter o seguinte formato:
      - `espessuraDoElemeto` `tipoDaBorda` `corDaBorda` 

* `box-sizing`:
   - Define o comportamento da borda no elemento
   - Dois tipos:
      - `content-box`:  padrão. onde a borda é somada ao valor da largura e altura do elemento (width e height)
      - `border-box`: atribui a borda ao tamanho do elemento, deixando assim a largura e altura menor que a definida, pois teremos: (width - espessuraDaBorda) (height - espessuraDaBorda)
         - Nesse caso, verificar o line-height, pois ele tem esse tamanho agora = (height - espessuraDaBorda)

* `cursor`: Define o tipo de cursor em um elemento, como por exemplo o `cursor:pointer` e `cursor:grab`.

* `transition`: Aplica a transformação nos elementos, que serão mudados. Recebe a propriedade que será mudada, o tempo para o efeito, e a proporção desse efeito.

```
transition: all 300ms linear; 
```

### Tipos de Display

* `inline`: 
   - Deixa os elementos na mesma linha
   - Não define width e height
   - Tem o comportamento de um contéudo

* `block`:
   - Não deixa os elementos na mesma linha
   - Define width e height

* `inline-block`: 
   - Deixa os elementos na mesma linha
   - Define width e height
   - Tem o comportamento de um contéudo

### Tipos de Position

* `absolute`:
   - Cria um no contexto para o elemento
   - Quem define a largura e altura é o conteúdo
   - Pode definir (`top`, `bottom`, `left` e `right`)
   - A referência é o Pai do elemento
   - É uma boa prática  usar apenas dois desses atributos, um para o eixo "X" e outro par o "Y"
   - `top` e `bottom` eixo "X"
   - `left` e `right` eixo "Y"

## Seletores

* `nomeTag`:
   - O seletor de Tag fica preso a tag, não é tão interressante de ser usado, pois não facilita na manutenção, apenas em casos especifico.

* `#nomeId`:
   - O seletor de Id é unico na pagina
   - Deve ser usado em caso muito especifico, como no avatar, por exemplo.

* `.nomeClass`:
   - O seletor de class é bastante usado e facilita a manutenção do codigo
   - Pode ser usado n vezes no codigo

* `nomeTag, nomeTag, ...`:
   - Aplica o estilo aos elementos que contem essas tags.

* `.nomeClass.nomeClass`:
   - Aplica o estilo, somente ao elemento que tiver as duas classes.

* `.nomeClassPai` `.nomeClassFilhos`:
   - Aplica a todos os filhos da classe `.nomeClassPai` quem contém a classe `.nomeClassFilhos`

* `.nomeClassPai` > `.nomeClassFilhos`:
   - Aplica a todos os filhos diretos da classe `.nomeClassPai` quem contém a classe `.nomeClassFilhos`

* `nomeClass + nomeClassIrmao`:
   - Aplica ao irmão direto(logo abaixo) da classe `nomeClass`..

* `[type="search"]`:
   - Aplica a todos os elementos com o tipo search.

* `:hover`: Aplica o estilo aos elementos quando o mouse passa sobre.

* `:focus`: Aplica aos elementos que estão focados, como por exemplo uma navegação por "tab".

* `:active`: Aplica aos elementos que estão ativos, um exemplo é no clique do mouse.


