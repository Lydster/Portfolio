class tabLink {
    constructor(element) {
      this.element = element;
      console.log(this.element)
      this.tabData = this.element.dataset.tab;
      if (this.tabData === 'all') {
        this.cards = document.querySelectorAll('.card');
      } else {
        this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`)
      }
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
      this.element.addEventListener('click', (event) => this.selectTab(event))
    }
    
    selectTab() {
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => tab.classList.remove('active-tab'));
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => card.style.display = 'none');
      this.element.classList.add('active-tab');
      this.cards.forEach(card => card.selectCard(this.TabCard));
      
    }
  }
  
  class TabCard {
    constructor(cardElement) {
      this.cardElement = cardElement;
    }
    selectCard() {
      this.cardElement.style.display = "flex"
    }
  }
  
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => new tabLink(tab));