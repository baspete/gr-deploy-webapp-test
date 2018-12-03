# Azure DevOps/GR-Limited Testing

## Instructions

### Prerequisites

#### Install Git Credential Manager

Microsoft highly recommends you use a credential manager when connecting to Azure DevOps (or for that matter, github.com). From their documentation:

> Git Credential Managers simplify authentication with your Azure DevOps Services/TFS Git repos. Credential Managers let you use the same credentials that you use for the Azure DevOps Services/TFS web portal and support multi-factor authentication through Microsoft Account (MSA) or Azure Active Directory (Azure AD). In addition to supporting multi-factor authentication with Azure DevOps Services, the credential managers also provide support two-factor authentication with GitHub repositories.

Instructions at https://docs.microsoft.com/en-us/azure/devops/repos/git/set-up-credential-managers?view=vsts

```
brew update
brew install git-credential-manager
git-credential-manager install
```

Because of [this bug](https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux/issues/90) you can't use the dev.azure.com endpoint as the remote for your repo, you need to use the visualstudio.com endpoint. So instead of:

```
https://<account>@dev.azure.com/<account>/<project>/_git/<repo>
```

use

```
https://<account>.visualstudio.com/<project>/_git/<repo>
```

Note that in most (all?) cases there's only one repo per project, so `<project>` and `<repo>` are probably the same string. Example:

```
git clone https://geaviationdigital.visualstudio.com/mydevopsproject/_git/mydevopsproject
```

#### Proxies

For Git Credential Manager to work from inside GE's network, you'll probably have to configure its proxies. Instructions are [here](https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux/blob/master/Install.md) under the "How to configure the proxy server
" section. Here's an example:

```
git config --global --replace-all credential.helper '!/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home/jre/bin/java -Ddebug=false -Dhttp.proxyHost=sjc1intproxy01.crd.ge.com -Dhttp.proxyPort=8080 -Dhttps.proxyHost=sjc1intproxy01.crd.ge.com -Dhttps.proxyPort=8080 -jar /usr/local/Cellar/git-credential-manager/2.0.4/libexec/git-credential-manager-2.0.4.jar'
```
