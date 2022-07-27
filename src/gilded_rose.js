class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

//Se a qualidade do item é maior que 0, o item perde 1 de qualidade
qualityDrop(i) {
  if (this.items[i].quality > 0) {
      this.items[i].quality -= 1
  }
}

//Se a qualidade do item é menor que 50, o item ganha 1 de qualidade
qualityAdd(i){
  if(this.items[i].quality < 50){
    this.items[i].quality += 1
  }
}

//Verifica se o item tem uma qualidade menor que 50, caso sim(true) retorna verdadeiro, caso contrário, retorna falso.
qualityCheckUnder50(i){
  if(this.items[i].quality < 50){
   return true
  }
  return false
}

//Verifica se o item é conjurado, caso seja, retorna verdadeiro(true)
verifyConjured(i){
  if(this.items[i].name === 'Conjured Mana Cake'){
    return true;
  }
}

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && 
          this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && 
          this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            if(this.verifyConjured(i)){
              this.qualityDrop(i)
            }
              this.qualityDrop(i)
      } else {
        if (this.qualityCheckUnder50(i)) {
          this.qualityAdd(i)
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.qualityCheckUnder50(i)) {
                this.qualityAdd(i)
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.qualityCheckUnder50(i)) {
                this.qualityAdd(i)
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                if(this.verifyConjured(i)){
                  this.qualityDrop(i)
                }
                  this.qualityDrop(i)
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.qualityCheckUnder50(i)) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
       

    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
