# apifirebase
A api está implementada ao sistema mas não funcional ao banco de dados criado pois falta transferilo do Realtime database para o firestore onde a api está criada
Criei a conexao para a api do firebase utilizando as extensoes no vscode firebase, express, firebase-tools, loguei no firebase utilizando $ firebase login, depois iniciei com firebase init, e subi usando firebase deploy.
Utilizei o insomnia para fazer as requisicoes, temos GET e POST e utilizei o Base environment com o seguinte body
{
	"baseUrl": "https://us-central1-petperdido-25483.cloudfunctions.net/api"
}
passando a api que foi criada na function do firebase ![image](https://github.com/iomes2/apifirebase/assets/73625686/4066176d-fae3-436b-8d4b-9f5a90523252) 
No cloud firebase criei a colecao todos que são coisas a fazer TO DO's, que recebem as requisicoes da api do insomnia
A requisicao GET do insomnia é passada pela url https://us-central1-petperdido-25483.cloudfunctions.net/api/todos sem nenhum body e retorna o body do banco de dados 
![image](https://github.com/iomes2/apifirebase/assets/73625686/6851bcf8-6ff1-4ed9-b285-d9634254dd4f)


A requisicao POST do insomnia é passada pela url https://us-central1-petperdido-25483.cloudfunctions.net/api/todos com o body 
{
	"description": "fazer pipoca"
}
![image](https://github.com/iomes2/apifirebase/assets/73625686/ba23fb6a-cb9b-44e9-9c5c-9f03087c28b2)


Este eh o banco de dados em real time
![image](https://github.com/iomes2/apifirebase/assets/73625686/e7e361ed-314b-4279-bb36-89bc853c47b0)
