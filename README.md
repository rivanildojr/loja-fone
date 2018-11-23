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
