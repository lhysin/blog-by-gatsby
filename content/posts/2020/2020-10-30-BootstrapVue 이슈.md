---
title: "BootstrapVue 이슈"
date: "2020-10-30"
category:
  - frontend
tags:
  - vuejs
---

#### BModal Flatpickr 이슈
---
BModal의 open된 modal 내부에 Flatpickr input 영역이 존재하는데
time을 선택하는 input의 text input 영역에 포커스가 전달되지 않는 이슈 존재.

b-modal의 props로 ignore-enforce-focus-selector 정의 필요.

[https://bootstrap-vue.org/docs/components/modal#keyboard-navigation](https://bootstrap-vue.org/docs/components/modal#keyboard-navigation)

#### Custom Component 생성시 Vee-Validate
---
vee-validate의 경우 정의된 event config에 의해 v-validate props이 적용된 component의
유효성을 검증하게된다.

해당 이벤트를 청취하려면 custom component에서 v-model 혹은 value에 대응 할 수 있는 내부 value가
변경될시 'change'의 emit이 필요.

```js
watch: {
  value() {
    this.$emit('change', this.value);
	this.$emit('input', this.value);
  }
}
```