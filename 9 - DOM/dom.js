// Window =  Topo da Cadeia

// window.document - árvore do documento
// Possui o documento do HTML

// #document - parent de HTML
    // HTML - child de #document - parent de head e body
        // head - child de HTML
        // body - child de HTML - parent de section
            // section - child de body - parent de h1
                // h1 - child de section - parent de text node
                    // text node - child de h1

// -- Criando um elemento:
// document.createElement('div'); - Cria um elemento que não é child e nem parent de ninguém (ainda)

// -- Criando um nó de texto:
// document.createTextNode; - Cria um texto (nó de texto)

// !! Após criar um elemento (ou uma tag, por exemplo a DIV acima)
// precisamos adicionar a um parent, ou seja?

// div.appendChild(tagCriada);

