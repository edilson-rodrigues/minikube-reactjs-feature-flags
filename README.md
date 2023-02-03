# sobre

POC feature-toggle com kubernets/minikube

# tecnologias utilizadas

- react-feature-toggles -> https://github.com/paralleldrive/react-feature-toggles
- go-feature-flag -> https://github.com/thomaspoignant/go-feature-flag

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

1. build do serviços
  - execute o seguinte comando
```cmd
  yarn build-all
```
</br>


 2. rodar o servidor
  - em um terminal execute
  ```cmd
  yarn start-server
  ```
</br>

log

```cmd
yarn run v1.22.19
$ kubectl port-forward svc/ft 31001:10000
Forwarding from 127.0.0.1:31001 -> 10000
Forwarding from [::1]:31001 -> 10000
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
$ kubectl port-forward svc/ftweb 31000:80
Forwarding from 127.0.0.1:31000 -> 80
Forwarding from [::1]:31000 -> 80
```
### Abrir a seguinte url no navegador 👉  http://127.0.0.1:31000

</br>

5. ativando e desativando uma feature.

no arquivo deployments/configMaps.yaml localize a key-3000

```yml
key-3000:
      percentage: 100
      true: "key-3000"
      false: ""
      default: ""
      # rule: "key eq \"user-C\""
      disable: true
      trackEvents: true
      version: 1
      rollout:
        scheduled:
          steps:
            - date: 2022-12-28T12:00:00.00-03:00
              disable: false
```
para desativar a feature, informe **true** na chave **disable** ou **false** para ativar.

salve o arquivo e execute o comando abaixo

```cmd
yarn apply-config-maps
```
as mudanças devem ser aplicadas

log

```cmd
yarn run v1.22.19
$ kubectl apply -f deployments/configMaps.yaml
configmap/ft-data unchanged
Done in 0.24s.
```
as mudanças podem levar até 30 segundos para serem aplicadas.

<br/>

## extra aux. containers
 - vscode extensions id
   * ms-vscode-remote.remote-wsl
   * ms-kubernetes-tools.vscode-kubernetes-tools
   * ms-azuretools.vscode-docker