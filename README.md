# Recibo rápido

Gerador de recibos de serviço. Roda no navegador, pode ser instalado no celular como app e gera PDF.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app em si |
| `config.json` | Razão social, CNPJ e nome do arquivo da logo |
| `logo.png` | A logo que aparece no topo do recibo |
| `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png` | Fazem o app poder ser instalado e funcionar sem internet |

## Como publicar no GitHub Pages

1. Crie um repositório público no github.com (por exemplo `recibo`).
2. Clique em **Add file > Upload files** e envie todos os arquivos desta pasta.
3. Vá em **Settings > Pages**, escolha a branch `main` e salve.
4. Em um ou dois minutos o link aparece, no formato `https://seunome.github.io/recibo/`.

## Como instalar no celular

- **Android (Chrome):** menu de três pontinhos > **Instalar app**.
- **iPhone (Safari):** botão Compartilhar > **Adicionar à Tela de Início**.

## Como alterar os dados da empresa

Abra o `config.json` no GitHub, clique no lápis, edite e salve:

```json
{
  "nome": "Sua Empresa de Reparos Ltda",
  "cnpj": "00.000.000/0000-00",
  "logo": "logo.png"
}
```

Para trocar a logo, envie uma nova imagem com o nome exato `logo.png`, substituindo a antiga. Se a mudança não aparecer, feche e abra o app de novo.

## Como usar

1. Abra o app.
2. Preencha o que quiser. Nenhum campo é obrigatório: CNPJ e razão social do cliente, descrição, quantidade, valor e data.
3. Toque em **Gerar recibo**.
4. Toque em **Baixar PDF** (no celular abre o compartilhamento, bom para o WhatsApp) ou em **Imprimir**.

## Observações

- O repositório precisa ser público, então razão social e CNPJ ficam visíveis a quem tiver o link.
- O PDF usa as bibliotecas html2canvas e jsPDF, carregadas da internet na primeira vez.
- O valor por extenso é calculado automaticamente. Sem quantidade, vale 1.
