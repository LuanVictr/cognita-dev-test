# Teste tecnico Cognita Desenvolvedor

## Informações

- **Nome completo:** Luan Victor de Araujo Silva
- **Linkedin:** https://www.linkedin.com/in/luanvictor-/
- **Github:** https://github.com/LuanVictr
- **Telefone:** [(88)998605296](https://wa.me/+5599998605296)
- **Email:** [luanvictordev@gmail.com](mailto:luanvictordev@gmail.com)

## Executando

Para executar o projeto execute o comando:

```bash
docker compose up -d
```

Esse comando irá executar o docker-compose que irá criar o app Remix e a instância neo4j.

*Aguarde 10 a 15 segundos para o neo4j iniciar sua instância*

Para criar as labels com seus respectivos relacionamentos execute o seguinte comando no seu editor neo4j preferido

Utilize as credenciais:


Usuário: neo4j

Senha: R7XHz0r8WDO6EoUF1xBn (senha exposta por motivo de ser um teste)

Rode o comando:

```cypher
CREATE (a:Academy {
	id: 'academy-1',
	title: 'A primeira academia'
})-[:HAS_THEME]->(tm:Theme {
	id: 'theme-1',
	title: 'O primeiro tema'
})-[:HAS_TRAIL]->(t:Trail {
	id: 'trail-1',
	title: 'A primeira trilha'
})-[:HAS_STEP]->(s:Step { 
	id: 'step-1', 
	title: 'O primeiro passo', 
	content: 'O conteúdo do primeiro passo' 
})
```

Acesse [http://localhost:3000/explore](http://localhost:3000/explore) para visualizar o projeto.

## O que foi desenvolvido

### Pagina inicial
![Página inicial no Desktop](https://cognitron.s3.sa-east-1.amazonaws.com/initial_page.png)
![Página inicial no Mobile](https://cognitron.s3.sa-east-1.amazonaws.com/initial_page_mobile.png)

### Modal de criação com error display
![Modal de criação no Desktop](https://cognitron.s3.sa-east-1.amazonaws.com/creation_modal.png)
![Modal de criação no Mobile](https://cognitron.s3.sa-east-1.amazonaws.com/creation_modal_mobile.png)

### Página errada
![Pagina errada no Desktop](https://cognitron.s3.sa-east-1.amazonaws.com/wrong_page.png)
![Pagina errada no Mobile](https://cognitron.s3.sa-east-1.amazonaws.com/wrong_page_mobile.png)

### Mensagem do desenvolvedor

Obrigado por considerar meu teste tecnico.

Eu poderia ter implementado mais coisas mas iria fugir muito do escopo do teste, como por exemplo adicionar o celebrate para validação ou o AntDesign, chakaraUi para dar uma componentizada em alguns itens da parte de frontend para deixar o mais responsivel possivel.

Espero que tenham gostado do projeto tanto quanto eu gostei de fazer, e espero que nos conversemos denovo em breve.




