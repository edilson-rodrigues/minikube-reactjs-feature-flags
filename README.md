# sobre

POC reactjs-feature-toggle com kubernets/minikube

# requisitos

## download e doc
* node v18.13.0 -> https://nodejs.org/en/download/
* yarn 1.22.19 -> https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable
* docker 20.10.23 -> https://docs.docker.com/engine/install/
* kubectl 1.26.1 -> https://kubernetes.io/docs/tasks/tools/
* minikube v1.29.0 -> https://minikube.sigs.k8s.io/docs/start/

### certifique se às versões estão instaladas corretamente

</br> 

# executar

1. build do servidor
  - execute o seguinte comando
```cmd
  yarn build-server
```
</br>

2. build react web
 - execute o seguinte comando
 ```cmd
  yarn build-web
 ```
</br>

 3. rodar o servidor
  - em um terminal execute
  ```cmd
  yarn start-server
  ```
</br>

log

```cmd
$ docker run --rm -it --name web -p 8000:8000 server-feature-flags:1.0.0
yarn run v1.22.17
$ nodemon --watch src/** --ext ts,json --ignore src/**/*.spec.ts --exec ts-node src/server.ts
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/database.ts
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/server.ts src/server.ts`
Server running on port 8000
Connected to the SQLite database.
```
</br>


4. rodar o servidor web
- Obs.: abra outra janela do terminal e execute
```cmd
  yarn start-web
```
</br>

log

```cmd
yarn run v1.22.19
$ minikube service minikube-reactjs-feature-flags
|-----------|--------------------------------|-------------|---------------------------|
| NAMESPACE |              NAME              | TARGET PORT |            URL            |
|-----------|--------------------------------|-------------|---------------------------|
| default   | minikube-reactjs-feature-flags |          80 | http://192.168.49.2:31000 |
|-----------|--------------------------------|-------------|---------------------------|
🏃  Starting tunnel for service minikube-reactjs-feature-flags.
|-----------|--------------------------------|-------------|------------------------|
| NAMESPACE |              NAME              | TARGET PORT |          URL           |
|-----------|--------------------------------|-------------|------------------------|
| default   | minikube-reactjs-feature-flags |             | http://127.0.0.1:45151 |
|-----------|--------------------------------|-------------|------------------------|
🎉  Opening service default/minikube-reactjs-feature-flags in default browser...
👉  http://127.0.0.1:45151
❗  Because you are using a Docker driver on linux, the terminal needs to be open to run it.
```
### Abrir a seguinte url no navegador 👉  http://127.0.0.1:port.
**port**: no log do minikube

</br>

## extra aux. containers
 - vscode extensions id
   * ms-vscode-remote.remote-wsl
   * ms-kubernetes-tools.vscode-kubernetes-tools
   * ms-azuretools.vscode-docker

## ajuda
  -  Se falhar a instalação das dependências, execute novamente o script do build **build-web** ou **build-server**, de acordo com o script em execução.