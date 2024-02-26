const App = {
    data() {
      return {
        totalScore: 0,
        overallRating: 0,
        text: [
          '1. Рано или поздно вы услышите от кого-нибудь, что вы талант',
          '2. Вы выглядите моложе своих лет',
          '3. Вы замечательно проведете свой следующий отпуск',
          '4. Неожиданно вы получите приличную сумму денег и сможете потратить их только на себя',
          '5. Хоть одна ваша мечта непременно сбудется',
          '6. В семье сохранятся хорошие отношения',
          '7. Наконец-то приедет друг, с которым вы давно потеряли связь',
          '8. Ваши достижения вызовут всеобщее восхищение'
        ],
        values: [95, 80, 80, 70, 100, 95, 10, 100]
      }
    },
    computed: {
      computedTotalScore() {
        this.totalScore = 0
        for(let i = 0; i>this.values.length; i++){
          this.totalScore+=this.values[i]
        }
        return this.totalScore
      },
      computedOverallRating() {
  
      },
      myLuckLevel() {
  
      }
    }
  }
  Vue.createApp(App).mount('#app') 