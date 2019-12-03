---
title: "Github Repository 인증 설정"
date: "2018-02-05"
category:
  - DEVOPS
tags:
  - git
---
> GIT 사용에 있어 github Repository 인증에 대해 알아본다.

#### Repository 종류

---

Gihhub의 Repository는 public과 private로 나누어져 있다.

* public Repository

> public Repository의 경우 모든 사용자에게 READ-ONLY 권한이 부여된다.
> 다른 사람의 public Repository의 WRITE권한을 원할 경우 PULL-REQUEST를 이용한다.

* private Repository

> private Repository의 경우 Setting -> Collaborators를 추가.
> Collaborator의 경우 READ-ONLY권한과 WRITE권한을 부여 받는다.

#### HTTPS 프로토콜 기준 Repository 의 clone, pull, push

---

gitbash에서 private repository의 clone을 하거나 public repository의 push의 경우 github 인증정보가 필요하다.

* 기본적인 방법으로는 remote url에 아이디 패스워드 정보를 적재하는 것이다.

```shell
git clone https://myid:mypassword@bitbucket.org/myid/myapp.git
```

하지만 url 자체에 아이디 패스워드가 노출될 위험이 존재한다.

##### git credential.helper

---

git 자격증명을 관리해준다.

* windows 환경
제어판 -> "자격 증명 관리자" 에서 관리되어진다.

```shell
git credential
git config --global credential.helper manager
```

* mac 환경

osxkeychain을 활용 [spotlight -> Keychain Access]

```shell
git credential
git credential-osxkeychain
git config --global credential.helper osxkeychain
```

* linux 환경

```shell
git config --global credential.helper /usr/share/doc/git/contrib/credentiallibsecret/git-credential-libsecret
```

* git 자체 store

```shell
git config credential.helper store
```

##### 자격 증명 매니저 설정

---

```shell
# 전역설정, --global 생략이 해당 저장소만 해당
git config --global credential.helper

# 자격증명 캐시화(default 900s)
git config --global credential.helper 'cache'

# 자격증명 캐시타임설정
git config --global credential.helper 'cache --timeout=1800'
```

#### Reference By

---

[Permission levels for a user account repository](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository#collaborator-access-on-a-repository-owned-by-a-user-account)

[git credential](https://github.com/git/git/tree/master/contrib/credential)

[Updating credentials from the OSX Keychain](https://help.github.com/en/github/using-git/updating-credentials-from-the-osx-keychain)

[What's the best encrypted git credential helper for Linux?](https://stackoverflow.com/questions/53305965/whats-the-best-encrypted-git-credential-helper-for-linux)
