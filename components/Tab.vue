<template>
  <div>
    <h2>Schedule</h2>
    <b-tabs content-class="mt-3" fill>
      <b-tab title="3월 16일" active>
        <div>
          <b-form-group
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              style='text-align:left; margin-left:20px'
              v-model="selected"
              :options="options"
              :aria-describedby="ariaDescribedby"
              name="flavour-1a"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
      </b-tab>
      <b-tab title="3월 17일">
        <div>
          <b-form-group
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              style='text-align:left; margin-left:20px'
              v-model="selected2"
              :options="options2"
              :aria-describedby="ariaDescribedby"
              name="flavour-1a"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
      </b-tab>
      <b-tab title="3월 18일">
        <div>
          <b-form-group
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              style='text-align:left; margin-left:20px'
              v-model="selected3"
              :options="options3"
              :aria-describedby="ariaDescribedby"
              name="flavour-1a"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
      </b-tab>
      <b-tab title="3월 19일">
        <div>
          <b-form-group
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              style='text-align:left; margin-left:20px'
              v-model="selected4"
              :options="options4"
              :aria-describedby="ariaDescribedby"
              name="flavour-1a"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: '학원수업', value: '학원수업' },
          { text: 'vue과제물 제출', value: 'vue과제물 제출' },
          { text: '어머니 생신', value: '어머니 생신' },
          { text: '어머니 생신 선물 사기', value: '어머니 생신 선물 사기' }
        ],
        selected2: [], // Must be an array reference!
        options2: [
          { text: '학원수업', value: '학원수업' },
          { text: '포트폴리오 작성', value: '포트폴리오 작성' },
          { text: '준희와 맥주 한잔', value: '준희와 맥주 한잔' }
        ],
        selected3: [], // Must be an array reference!
        options3: [
          { text: '학원수업', value: '학원수업' },
          { text: '포트폴리오 작성', value: '포트폴리오 작성' },
          { text: '지훈이형과 나머지 공부', value: '지훈이형과 나머지 공부' },
          { text: '줄넘기 1000개', value: '줄넘기 1000개' }
        ],
        selected4: [], // Must be an array reference!
        options4: [
          { text: '학원수업', value: '학원수업' },
          { text: '포트폴리오 작성', value: '포트폴리오 작성' },
          { text: '지훈이형과 나머지 공부', value: '지훈이형과 나머지 공부' },
          { text: '지훈이형과 저녁식사', value: '지훈이형과 저녁식사' },
        ],
      }
    }
  }
</script>